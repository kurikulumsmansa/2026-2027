/* =====================================================================
   DATA MURID: rekap jumlah siswa per tingkat & daftar nama per kelas
   ===================================================================== */
(() => {
  const root = document.getElementById("dataMurid");
  if (!root || typeof MURID === "undefined") return;
  const $ = s => root.querySelector(s);
  const AGAMA = { I: "Islam", K: "Kristen", C: "Katolik", B: "Buddha", H: "Hindu" };
  /* data per kelas ditulis sebagai teks: satu murid per baris, "L Nama" / "P Nama" */
  for (const k in MURID.kelas) { const v = MURID.kelas[k];
    if (typeof v === "string") MURID.kelas[k] = v.split("\n").filter(l => l.trim()).map(l => {
      const [jk, nama, nis = "", nisn = "", ag = ""] = l.split("|");
      return [nama.trim(), jk === "L" || jk === "P" ? jk : "", nis, nisn, AGAMA[ag] || ""]; }); }
  const INFO = MURID.info || {};
  const BLN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const [y, m, d] = MURID.update.split("-").map(Number);
  $("#mUpdate").innerHTML = `<i></i>Update terbaru: <b>${d} ${BLN[m - 1]} ${y}</b>`;

  const TINGKAT = [["X", "X HL", "Kelas X"], ["XI", "XI HJ", "Kelas XI"], ["XII", "XII HT", "Kelas XII"]];
  const urutKelas = (a, b) => { const ta = a.split(" ")[0].length, tb = b.split(" ")[0].length;
    return ta - tb || a.localeCompare(b, "id", { numeric: true }); };
  const KELAS = Object.keys(MURID.kelas).sort(urutKelas);
  const tingkatDari = k => k.split(" ")[0];
  const hitung = list => ({ n: list.length, L: list.filter(x => x[1] === "L").length, P: list.filter(x => x[1] === "P").length });
  const adaLP = KELAS.some(k => MURID.kelas[k].some(x => x[1]));

  if (!KELAS.length) {
    $("#mRekap").innerHTML = `<p class="gnone mkosong">Data murid sedang disiapkan oleh Tim Kurikulum.</p>`;
    root.querySelector(".gpick").hidden = true; return;
  }

  /* rekap per tingkat */
  const perT = TINGKAT.map(([t, , label]) => {
    const kls = KELAS.filter(k => tingkatDari(k) === t);
    return { t, label, kls, ...hitung(kls.flatMap(k => MURID.kelas[k])) };
  });
  const total = hitung(KELAS.flatMap(k => MURID.kelas[k]));
  const lp = h => adaLP ? `<span class="mlp"><em class="l">L ${h.L}</em><em class="p">P ${h.P}</em></span>` : "";
  $("#mRekap").innerHTML = perT.map((r, i) => `<button class="mtile2" data-t="${r.t}" style="--c:${["#1e6bff", "#22b07d", "#8b5cf6"][i]}">
      <small>${r.label}</small><b>${r.n}</b><span>siswa · ${r.kls.length} rombel</span>${lp(r)}</button>`).join("")
    + `<div class="mtile2 total"><small>Total semua kelas</small><b>${total.n}</b><span>siswa · ${KELAS.length} rombel</span>${lp(total)}</div>`;

  /* pemilih kelas */
  $("#mKelas").innerHTML = TINGKAT.map(([t]) => {
    const kls = KELAS.filter(k => tingkatDari(k) === t); if (!kls.length) return "";
    return `<div class="krow"><span class="klabel">${kls[0].replace(/\s*\d+$/, "")}</span>${kls.map(k => `<button class="kpill" data-k="${k}">${k.match(/\d+$/)?.[0] || k}</button>`).join("")}</div>`;
  }).join("");

  let kelas = null, tingkat = null, q = "";
  /* tabel daftar murid: judul kolom bisa diklik untuk mengurutkan */
  let urut = { kol: "no", naik: true };
  const KOLOM = [["no", "No"], ["nama", "Nama Murid"], ["kelas", "Kelas"], ["nis", "NIS"], ["nisn", "NISN"], ["lp", "L/P"], ["agama", "Agama"]];
  const nilai = (r, kol) => ({ no: r.no, nama: r[0], kelas: r.k, nis: +r[2] || 0, nisn: r[3], lp: r[1], agama: r[4] })[kol];
  const tabel = (rows, denganKelas) => {
    rows = rows.map((r, i) => Object.assign([...r], { no: i + 1, k: r.k }));
    const { kol, naik } = urut;
    if (kol !== "no" || !naik) rows.sort((a, b) => { const x = nilai(a, kol), y = nilai(b, kol);
      const h = typeof x === "number" ? x - y : String(x).localeCompare(String(y), "id", { numeric: true });
      return (naik ? h : -h) || a.no - b.no; });
    const kolom = KOLOM.filter(([k]) => denganKelas || k !== "kelas");
    return `<p class="mthint">Klik judul kolom untuk mengurutkan.<span class="mtscroll">Geser tabel ke kiri untuk melihat kolom lain.</span></p><div class="mtwrap"><table class="mtab">
      <thead><tr>${kolom.map(([k, t]) => `<th><button class="msort${kol === k ? " on" : ""}" data-sort="${k}" data-tip="Urutkan menurut ${t}">${t}<i>${kol === k ? (naik ? "▲" : "▼") : "↕"}</i></button></th>`).join("")}</tr></thead>
      <tbody>${rows.map(r => `<tr>${kolom.map(([k]) => {
        if (k === "no") return `<td class="mt-no">${r.no}</td>`;
        if (k === "nama") return `<td class="mt-n">${r[0]}</td>`;
        if (k === "kelas") return `<td class="mt-k">${r.k}</td>`;
        if (k === "lp") return `<td><span class="mt-lp ${r[1]}">${r[1] || "–"}</span></td>`;
        const v = nilai(r, k); return `<td class="mt-${k}">${v || "–"}</td>`; }).join("")}</tr>`).join("")}</tbody>
    </table></div>`;
  };

  function render() {
    root.querySelectorAll(".kpill").forEach(b => b.classList.toggle("on", b.dataset.k === kelas));
    root.querySelectorAll(".mtile2[data-t]").forEach(b => b.classList.toggle("on", b.dataset.t === tingkat));
    const out = $("#mDaftar");
    if (q) {
      const hasil = KELAS.flatMap(k => MURID.kelas[k].map(r => Object.assign([...r], { k }))).filter(r => r[0].toLowerCase().includes(q) || (q.length > 3 && (r[2] + " " + r[3]).includes(q)));
      out.innerHTML = `<div class="mhead"><b>Hasil pencarian “${q}”</b><span>${hasil.length} murid</span></div>` + (hasil.length ? tabel(hasil, true) : `<p class="gnone">Nama tidak ditemukan.</p>`);
    } else if (kelas) {
      const h = hitung(MURID.kelas[kelas]);
      out.innerHTML = `<div class="mhead"><b>Kelas ${kelas}</b><span>${h.n} siswa${adaLP ? ` · L ${h.L} · P ${h.P}` : ""}</span></div>${INFO[kelas] ? `<p class="minfo">${INFO[kelas]}</p>` : ""}` + tabel(MURID.kelas[kelas], false);
    } else {
      // rekap per rombel
      const kls = tingkat ? KELAS.filter(k => tingkatDari(k) === tingkat) : KELAS;
      out.innerHTML = `<div class="mhead"><b>Rekap jumlah siswa per kelas${tingkat ? " · Kelas " + tingkat : ""}</b><span>Klik nama kelas untuk melihat daftar murid</span></div>
        <div class="mrek">${kls.map(k => { const h = hitung(MURID.kelas[k]);
          return `<button class="mrk" data-k="${k}"><b>${k}</b><span>${h.n} siswa</span>${adaLP ? `<small>L ${h.L} · P ${h.P}</small>` : ""}</button>`; }).join("")}</div>`;
    }
  }
  root.addEventListener("click", e => {
    const k = e.target.closest("[data-k]"), t = e.target.closest(".mtile2[data-t]"), so = e.target.closest("[data-sort]");
    if (so) { const c = so.dataset.sort; urut = { kol: c, naik: urut.kol === c ? !urut.naik : true }; render(); }
    else if (k) { kelas = kelas === k.dataset.k ? null : k.dataset.k; q = ""; urut = { kol: "no", naik: true }; $("#mCari").value = ""; render(); }
    else if (t) { tingkat = tingkat === t.dataset.t ? null : t.dataset.t; kelas = null; render(); }
  });
  $("#mCari").addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); render(); });
  render();
})();
