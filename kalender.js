/* =====================================================================
   KALENDER PENDIDIKAN — versi web dari Google Sheets
   ===================================================================== */
(() => {
  const BULAN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const HARI = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  const JENIS = {
    "Efektif":        { warna: "#22b07d", label: "Hari efektif" },
    "Libur Nasional": { warna: "#ef4444", label: "Libur nasional" },
    "Cuti Bersama":   { warna: "#f97316", label: "Cuti bersama" },
    "Libur Sekolah":  { warna: "#3b82f6", label: "Libur sekolah" },
    "Non-KBM":        { warna: "#8b5cf6", label: "Non-KBM" },
    "Sabtu":          { warna: "#94a3b8", label: "Akhir pekan" },
    "Minggu":         { warna: "#94a3b8", label: "Akhir pekan" },
  };
  // warna kegiatan pada hari efektif
  const TOPIK = [
    [/MPLS/i, "#14b8a6"], [/ANBK|Observasi/i, "#6366f1"], [/TKA/i, "#f59e0b"],
    [/Sumatif|Asesmen/i, "#e11d48"], [/Ramadan|Pesantren/i, "#16a34a"],
  ];
  const pad = n => String(n).padStart(2, "0");
  const key = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parse = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const tglPanjang = d => `${HARI[d.getDay()]}, ${d.getDate()} ${BULAN[d.getMonth()]} ${d.getFullYear()}`;
  const singkat = ket => ket.replace(/\s*\((Kaldik Kepri|agenda sekolah|SKB|perkiraan)[^)]*\)/gi, "").replace(/^(Sabtu|Minggu), /, "").replace(/^Pelaksanaan /, "");
  const warnaTopik = ket => { for (const [re, w] of TOPIK) if (re.test(ket)) return w; return null; };

  /* ---------- 1. Bangun data harian dari salinan ---------- */
  function dariSalinan() {
    const map = new Map();
    for (let d = parse(KALDIK.mulai); d <= parse(KALDIK.akhir); d.setDate(d.getDate() + 1)) {
      const w = d.getDay();
      map.set(key(d), { tgl: new Date(d), jenis: w === 6 ? "Sabtu" : w === 0 ? "Minggu" : "Efektif", ket: w === 0 || w === 6 ? "Akhir pekan" : "Hari efektif" });
    }
    for (const [a, b, jenis, ket] of KALDIK.rentang) {
      const akhirPekan = jenis === "Sabtu" || jenis === "Minggu";
      for (let d = parse(a); d <= parse(b); d.setDate(d.getDate() + 1)) {
        const w = d.getDay();
        if (!akhirPekan && (w === 0 || w === 6)) continue;
        map.set(key(d), { tgl: new Date(d), jenis, ket });
      }
    }
    return [...map.values()];
  }

  /* ---------- 2. Coba ambil data terbaru dari Google Sheets ---------- */
  function dariSheets(timeout = 6000) {
    return new Promise(resolve => {
      const cb = "__kaldik" + Date.now();
      const s = document.createElement("script");
      const t = setTimeout(() => { done(null); }, timeout);
      function done(v) { clearTimeout(t); delete window[cb]; s.remove(); resolve(v); }
      window[cb] = res => {
        try {
          const rows = res.table.rows.map(r => r.c.map(c => c ? (c.f ?? c.v) : ""));
          const hasil = [];
          for (const r of rows) {
            const m = String(r[0]).match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
            if (!m) continue;
            const jenis = String(r[2]).trim();
            if (!JENIS[jenis]) continue;
            hasil.push({ tgl: new Date(+m[3], +m[2] - 1, +m[1]), jenis, ket: String(r[3] || "").trim() || jenis });
          }
          done(hasil.length >= 360 ? hasil : null);
        } catch (e) { done(null); }
      };
      s.onerror = () => done(null);
      s.src = `https://docs.google.com/spreadsheets/d/${KALDIK.sheetId}/gviz/tq?sheet=${encodeURIComponent("Data Harian")}&range=A4:D400&headers=0&tqx=responseHandler:${cb}`;
      document.head.appendChild(s);
    });
  }

  /* ---------- 3. Hitungan Rekap & Minggu (aturan sama dengan sheet) ---------- */
  function hitung(hari) {
    const byKey = new Map(hari.map(h => [key(h.tgl), h]));
    const bulan = [];
    for (let d = parse(KALDIK.mulai); d <= parse(KALDIK.akhir); d = new Date(d.getFullYear(), d.getMonth() + 1, 1)) {
      const isi = hari.filter(h => h.tgl.getFullYear() === d.getFullYear() && h.tgl.getMonth() === d.getMonth());
      const n = j => isi.filter(h => j.includes(h.jenis)).length;
      bulan.push({ y: d.getFullYear(), m: d.getMonth(), kalender: isi.length, pekan: n(["Sabtu", "Minggu"]),
        nasional: n(["Libur Nasional", "Cuti Bersama"]), sekolah: n(["Libur Sekolah"]), nonkbm: n(["Non-KBM"]),
        efektif: n(["Efektif"]), minggu: 0, mingguEf: 0 });
    }
    // minggu: Senin–Minggu, masuk ke bulan tempat Senin-nya berada
    const minggu = [];
    let senin = parse(KALDIK.mulai); while (senin.getDay() !== 1) senin.setDate(senin.getDate() + 1);
    for (; senin <= parse(KALDIK.akhir); senin.setDate(senin.getDate() + 7)) {
      const hariMinggu = [];
      for (let i = 0; i < 7; i++) { const d = new Date(senin); d.setDate(d.getDate() + i); const h = byKey.get(key(d)); if (h) hariMinggu.push(h); }
      const ef = hariMinggu.filter(h => h.jenis === "Efektif").length;
      const keg = [...new Set(hariMinggu.filter(h => !/^(Hari efektif|Akhir pekan)$/.test(h.ket) && !(h.jenis === "Sabtu" || h.jenis === "Minggu") ).map(h => singkat(h.ket)))];
      const b = bulan.find(x => x.y === senin.getFullYear() && x.m === senin.getMonth());
      const status = ef >= KALDIK.batasMingguEfektif;
      if (b) { b.minggu++; if (status) b.mingguEf++; }
      const akhir = new Date(senin); akhir.setDate(akhir.getDate() + 6);
      minggu.push({ no: minggu.length + 1, senin: new Date(senin), akhir, ef, status, keg: keg.length ? keg.join("; ") : "Pembelajaran reguler",
        semester: senin < new Date(2027, 0, 4) ? "Ganjil" : "Genap", bulan: `${BULAN[senin.getMonth()]} ${senin.getFullYear()}` });
    }
    return { bulan, minggu, byKey };
  }

  /* ---------- 4. Tampilan ---------- */
  const root = document.getElementById("kalenderBox");
  if (!root) return;
  const $ = s => root.querySelector(s);
  let DATA, HIT, cur, pilih = null, mode = "bulan";
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const awal = parse(KALDIK.mulai), akhir = parse(KALDIK.akhir);

  // tombol tab (segmented control)
  const seg = $(".seg");
  seg.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    seg.querySelectorAll("button").forEach(x => x.setAttribute("aria-selected", x === b));
    root.querySelectorAll(".kpanel").forEach(p => p.hidden = p.id !== b.dataset.tab);
    geserThumb();
  });
  function geserThumb() {
    const a = seg.querySelector('[aria-selected="true"]'), th = seg.querySelector(".thumb");
    th.style.width = a.offsetWidth + "px"; th.style.transform = `translateX(${a.offsetLeft - 4}px)`;
  }
  addEventListener("resize", geserThumb);

  // navigasi bulan
  $("#kPrev").onclick = () => geser(-1);
  $("#kNext").onclick = () => geser(1);
  $("#kToday").onclick = () => { cur = dalamRentang(today) ? new Date(today.getFullYear(), today.getMonth(), 1) : new Date(awal); pilih = dalamRentang(today) ? today : null; mode = "bulan"; render(); };
  $("#kMode").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; mode = b.dataset.mode; render(); });
  addEventListener("keydown", e => {
    if (root.querySelector("#tabKalender").hidden || document.activeElement.tagName === "INPUT") return;
    if (e.key === "ArrowLeft") geser(-1); if (e.key === "ArrowRight") geser(1);
  });
  // geser (swipe) di HP
  let sx = null;
  $(".kgrid-wrap").addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
  $(".kgrid-wrap").addEventListener("touchend", e => { if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 60) geser(dx < 0 ? 1 : -1); sx = null; });

  const dalamRentang = d => d >= awal && d <= akhir;
  function geser(n) {
    const baru = new Date(cur.getFullYear(), cur.getMonth() + n, 1);
    if (baru < new Date(awal.getFullYear(), awal.getMonth(), 1) || baru > akhir) return;
    const g = $(".kgrid"); g.classList.remove("slide-l", "slide-r"); void g.offsetWidth;
    g.classList.add(n > 0 ? "slide-l" : "slide-r");
    cur = baru; pilih = null; render();
  }

  function render() {
    // tombol mode
    $("#kMode").querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.mode === mode));
    root.classList.toggle("mode-tahun", mode === "tahun");
    $("#kJudul").textContent = mode === "tahun" ? "Tahun Pelajaran 2026/2027" : `${BULAN[cur.getMonth()]} ${cur.getFullYear()}`;
    const semester = cur < new Date(2027, 0, 1) ? "Semester Ganjil" : "Semester Genap";
    $("#kSub").textContent = mode === "tahun" ? "Juli 2026 – Juni 2027" : semester;
    $("#kPrev").disabled = mode === "tahun" || cur.getTime() <= new Date(awal.getFullYear(), awal.getMonth(), 1).getTime();
    $("#kNext").disabled = mode === "tahun" || cur.getMonth() === akhir.getMonth() && cur.getFullYear() === akhir.getFullYear();
    renderPil(); mode === "tahun" ? renderTahun() : renderBulan(); renderSamping();
  }

  function renderPil() {
    const box = $("#kPills"); const items = [];
    for (let d = new Date(awal); d <= akhir; d = new Date(d.getFullYear(), d.getMonth() + 1, 1)) items.push(new Date(d));
    box.innerHTML = items.map(d => `<button class="pill-m${mode === "bulan" && d.getMonth() === cur.getMonth() && d.getFullYear() === cur.getFullYear() ? " on" : ""}" data-y="${d.getFullYear()}" data-m="${d.getMonth()}">${BULAN[d.getMonth()].slice(0, 3)}<small>${String(d.getFullYear()).slice(2)}</small></button>`).join("");
    box.onclick = e => { const b = e.target.closest("button"); if (!b) return; const n = new Date(+b.dataset.y, +b.dataset.m, 1); const dir = n > cur ? 1 : -1; mode = "bulan"; const g = $(".kgrid"); g.classList.remove("slide-l","slide-r"); void g.offsetWidth; g.classList.add(dir > 0 ? "slide-l" : "slide-r"); cur = n; pilih = null; render(); };
    const on = box.querySelector(".on"); if (on) on.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }

  function sel(h, kecil) {
    const d = h.tgl, w = JENIS[h.jenis].warna, top = h.jenis === "Efektif" ? warnaTopik(h.ket) : null;
    const isToday = d.getTime() === today.getTime();
    const isSel = pilih && d.getTime() === pilih.getTime();
    const cls = ["kday", "j-" + h.jenis.toLowerCase().replace(/\s+/g, "-"), isToday ? "today" : "", isSel ? "sel" : "", top ? "has-ev" : ""].join(" ");
    const label = h.jenis === "Efektif" ? (top ? singkat(h.ket) : "") : (h.jenis === "Sabtu" || h.jenis === "Minggu") ? (h.ket === "Akhir pekan" ? "" : singkat(h.ket)) : singkat(h.ket);
    if (kecil) return `<button class="${cls}" style="--w:${top || w}" data-k="${key(d)}" title="${tglPanjang(d)} · ${h.ket}">${d.getDate()}</button>`;
    return `<button class="${cls}" style="--w:${w};--t:${top || w}" data-k="${key(d)}">
      <span class="dn">${d.getDate()}</span>
      ${label ? `<span class="ev">${label}</span>` : ""}
    </button>`;
  }

  function kotakBulan(y, m, kecil) {
    const first = new Date(y, m, 1), lead = (first.getDay() + 6) % 7, n = new Date(y, m + 1, 0).getDate();
    let html = "";
    for (let i = 0; i < lead; i++) html += `<span class="kday empty"></span>`;
    for (let i = 1; i <= n; i++) { const h = HIT.byKey.get(key(new Date(y, m, i))); html += h ? sel(h, kecil) : `<span class="kday empty"></span>`; }
    return html;
  }

  function renderBulan() {
    const g = $(".kgrid");
    g.innerHTML = ["Sen","Sel","Rab","Kam","Jum","Sab","Min"].map(h => `<span class="kdow">${h}</span>`).join("") + kotakBulan(cur.getFullYear(), cur.getMonth(), false);
    g.onclick = e => { const b = e.target.closest("[data-k]"); if (!b) return; pilih = parse(b.dataset.k); render(); };
  }

  function renderTahun() {
    const g = $(".kgrid"); let html = "";
    for (let d = new Date(awal); d <= akhir; d = new Date(d.getFullYear(), d.getMonth() + 1, 1)) {
      const b = HIT.bulan.find(x => x.y === d.getFullYear() && x.m === d.getMonth());
      html += `<div class="mini" data-y="${d.getFullYear()}" data-m="${d.getMonth()}">
        <div class="mini-h"><b>${BULAN[d.getMonth()]}</b><span>${b.efektif} hari efektif</span></div>
        <div class="mini-g">${["S","S","R","K","J","S","M"].map(x => `<i>${x}</i>`).join("")}${kotakBulan(d.getFullYear(), d.getMonth(), true)}</div>
      </div>`;
    }
    g.innerHTML = html;
    g.onclick = e => {
      const k = e.target.closest("[data-k]"); const mn = e.target.closest(".mini");
      if (!mn) return; cur = new Date(+mn.dataset.y, +mn.dataset.m, 1); pilih = k ? parse(k.dataset.k) : null; mode = "bulan"; render();
    };
  }

  function renderSamping() {
    const y = cur.getFullYear(), m = cur.getMonth();
    const b = HIT.bulan.find(x => x.y === y && x.m === m);
    // detail hari yang dipilih
    const det = $("#kDetail");
    if (pilih && mode === "bulan") {
      const h = HIT.byKey.get(key(pilih));
      det.innerHTML = `<p class="det-d">${tglPanjang(pilih)}</p>
        <span class="tag" style="--w:${JENIS[h.jenis].warna}">${JENIS[h.jenis].label}</span>
        <p class="det-k">${h.ket}</p>`;
      det.hidden = false;
    } else det.hidden = true;

    // statistik bulan
    $("#kStat").innerHTML = mode === "tahun" ? (() => {
      const t = HIT.bulan.reduce((a, x) => ({ ef: a.ef + x.efektif, me: a.me + x.mingguEf, mg: a.mg + x.minggu, lb: a.lb + x.nasional + x.sekolah }), { ef: 0, me: 0, mg: 0, lb: 0 });
      return stat(t.ef, "Hari efektif") + stat(t.me, "Minggu efektif") + stat(t.mg - t.me, "Minggu tidak efektif") + stat(t.lb, "Hari libur");
    })() : stat(b.efektif, "Hari efektif") + stat(b.mingguEf, "Minggu efektif") + stat(b.nasional, "Libur nasional & cuti") + stat(b.sekolah + b.nonkbm, "Libur sekolah & non-KBM");

    // agenda: gabungkan hari berurutan dengan keterangan sama
    const isi = (mode === "tahun" ? DATA : DATA.filter(h => h.tgl.getFullYear() === y && h.tgl.getMonth() === m))
      .filter(h => h.ket !== "Hari efektif" && h.ket !== "Akhir pekan");
    const grup = [];
    for (const h of isi) {
      const g = grup[grup.length - 1]; const ket = singkat(h.ket);
      const lanjut = g && g.ket === ket && (h.tgl - g.akhir) <= 3 * 864e5;
      if (lanjut) g.akhir = h.tgl; else grup.push({ ket, mulai: h.tgl, akhir: h.tgl, jenis: h.jenis, full: h.ket });
    }
    const fmt = (a, z) => a.getTime() === z.getTime() ? `${a.getDate()} ${BULAN[a.getMonth()].slice(0, 3)}` :
      a.getMonth() === z.getMonth() ? `${a.getDate()}–${z.getDate()} ${BULAN[a.getMonth()].slice(0, 3)}` : `${a.getDate()} ${BULAN[a.getMonth()].slice(0, 3)} – ${z.getDate()} ${BULAN[z.getMonth()].slice(0, 3)}`;
    $("#kAgendaJudul").textContent = mode === "tahun" ? "Semua agenda & libur" : `Agenda ${BULAN[m]}`;
    $("#kAgenda").innerHTML = grup.length ? grup.map(g => {
      const w = g.jenis === "Efektif" ? (warnaTopik(g.full) || JENIS.Efektif.warna) : JENIS[g.jenis].warna;
      return `<li style="--w:${w}"><time>${fmt(g.mulai, g.akhir)}</time><span>${g.ket}</span></li>`;
    }).join("") : `<li class="none-ag"><span>Pembelajaran reguler sepanjang bulan.</span></li>`;
  }
  const stat = (n, l) => `<div class="kstat"><b>${n}</b><span>${l}</span></div>`;

  /* ---------- Rekap ---------- */
  function renderRekap() {
    const b = HIT.bulan, maxEf = Math.max(...b.map(x => x.efektif));
    const sum = arr => arr.reduce((a, x) => { for (const k of ["kalender","pekan","nasional","sekolah","nonkbm","efektif","minggu","mingguEf"]) a[k] = (a[k] || 0) + x[k]; return a; }, {});
    const ganjil = sum(b.slice(0, 6)), genap = sum(b.slice(6)), total = sum(b);
    const row = (x, label, cls = "") => `<tr class="${cls}"><th>${label}</th><td>${x.kalender}</td><td>${x.pekan}</td><td>${x.nasional}</td><td>${x.sekolah}</td><td>${x.nonkbm}</td>
      <td class="ef"><span class="barwrap">${cls ? "" : `<i style="width:${x.efektif / maxEf * 100}%"></i>`}</span><b>${x.efektif}</b></td><td>${x.minggu}</td><td>${x.mingguEf}</td><td>${x.minggu - x.mingguEf}</td></tr>`;
    $("#rekapTiles").innerHTML = stat(total.efektif, "Hari efektif setahun") + stat(total.mingguEf, "Minggu efektif") + stat(ganjil.efektif, "Hari efektif ganjil") + stat(genap.efektif, "Hari efektif genap");
    $("#rekapBody").innerHTML =
      b.slice(0, 6).map(x => row(x, `${BULAN[x.m]} ${x.y}`)).join("") + row(ganjil, "Jumlah Semester Ganjil", "sum") +
      b.slice(6).map(x => row(x, `${BULAN[x.m]} ${x.y}`)).join("") + row(genap, "Jumlah Semester Genap", "sum") +
      row(total, "Jumlah Tahun Pelajaran", "sum total");
  }

  /* ---------- Minggu ---------- */
  let semFilter = "Semua";
  function renderMinggu() {
    const f = d => `${d.getDate()} ${BULAN[d.getMonth()].slice(0, 3)}`;
    const list = HIT.minggu.filter(w => semFilter === "Semua" || w.semester === semFilter);
    $("#mingguList").innerHTML = list.map(w => `<li class="${w.status ? "ok" : "no"}">
      <span class="wno">${w.no}</span>
      <div class="wtx"><b>${f(w.senin)} – ${f(w.akhir)} <small>${w.bulan}</small></b><span>${w.keg}</span></div>
      <span class="wdots">${[0,1,2,3,4].map(i => `<i class="${i < w.ef ? "on" : ""}"></i>`).join("")}</span>
      <span class="wst">${w.status ? "Efektif" : "Tidak efektif"}</span>
    </li>`).join("");
  }
  $("#mingguSeg").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; semFilter = b.dataset.s; $("#mingguSeg").querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b)); renderMinggu(); });

  /* ---------- Keterangan ---------- */
  function renderKet() {
    const libur = DATA.filter(h => h.jenis === "Libur Nasional" || h.jenis === "Cuti Bersama" || /libur nasional\)/.test(h.ket));
    $("#ketLibur").innerHTML = libur.map(h => `<li style="--w:${h.jenis === "Cuti Bersama" ? JENIS["Cuti Bersama"].warna : JENIS["Libur Nasional"].warna}"><time>${tglPanjang(h.tgl)}</time><span>${singkat(h.ket)}</span><em>${h.jenis === "Cuti Bersama" ? "Cuti bersama" : "Libur nasional"}</em></li>`).join("");
    $("#ketAgenda").innerHTML = KALDIK.agenda.map(a => `<li style="--w:#1e6bff"><time>${a[0]}</time><span>${a[1]}</span><em>${a[2]}</em></li>`).join("");
    $("#ketPeringatan").innerHTML = KALDIK.peringatan.map(a => `<li style="--w:#14b8a6"><time>${a[0]}</time><span>${a[1]}</span></li>`).join("");
    $("#ketCatatan").innerHTML = KALDIK.catatan.map(a => `<li style="--w:#f59e0b"><time>${a[0]}</time><span>${a[1]}</span></li>`).join("");
  }

  function siap(hari, live) {
    DATA = hari.sort((a, b) => a.tgl - b.tgl); HIT = hitung(DATA);
    if (!cur) cur = dalamRentang(today) ? new Date(today.getFullYear(), today.getMonth(), 1) : new Date(awal.getFullYear(), awal.getMonth(), 1);
    if (!pilih && dalamRentang(today)) pilih = today;
    render(); renderRekap(); renderMinggu(); renderKet(); geserThumb();
    const st = $("#kSync"); st.classList.toggle("live", live);
    st.innerHTML = live ? `<i></i>Tersambung langsung ke Google Sheets` : `<i></i>Data salinan kalender`;
  }

  siap(dariSalinan(), false);
  dariSheets().then(h => { if (h) siap(h, true); });
  window.__KALDIK_TEST = { dariSalinan, hitung };
})();
