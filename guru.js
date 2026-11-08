/* =====================================================================
   GURU & PEMBAGIAN MENGAJAR
   ===================================================================== */
(() => {
  const root = document.getElementById("guru");
  if (!root) return;
  const $ = s => root.querySelector(s);
  const TINGKAT = Object.keys(GURU.rombel);              // ["X HL","XI HJ","XII HT"]

  /* "XI HJ 1–2, 5–6; XII HT 1–3" -> ["XI HJ 1","XI HJ 2","XI HJ 5",...] */
  function urai(teks) {
    const out = []; let pre = null;
    for (let part of teks.split(/[;,]/)) {
      part = part.trim(); if (!part) continue;
      const m = part.match(/^(XII HT|XI HJ|X HL)\s+(.*)$/);
      if (m) { pre = m[1]; part = m[2]; }
      const r = part.match(/^(\d+)\s*[–-]\s*(\d+)$/);
      if (r) for (let i = +r[1]; i <= +r[2]; i++) out.push(`${pre} ${i}`);
      else if (/^\d+$/.test(part)) out.push(`${pre} ${part}`);
    }
    return out;
  }

  // gabungkan per guru
  const peta = new Map();
  const tambah = (nama, mapel, kelas, kel) => {
    if (!peta.has(nama)) peta.set(nama, { nama, kel, tugas: [] });
    peta.get(nama).tugas.push({ mapel, kelas, daftar: urai(kelas) });
  };
  GURU.kelompok.forEach((k, i) => k.guru.forEach(([n, m, c]) => tambah(n, m, c, i)));
  GURU.tambahan.forEach(([n, m, c]) => tambah(n, m, c, peta.has(n) ? peta.get(n).kel : 0));
  const SEMUA = [...peta.values()];
  SEMUA.forEach((g, i) => { g.no = i + 1; g.jumlahKelas = new Set(g.tugas.flatMap(t => t.daftar)).size; });

  // warna per mapel (stabil)
  const PAL = ["#1e6bff","#22b07d","#ef5a3c","#8b5cf6","#f59e0b","#14b8a6","#e11d48","#0ea5e9","#6366f1","#16a34a","#d946ef","#f97316"];
  const warnaMapel = {}; let wi = 0;
  const warna = m => warnaMapel[m] || (warnaMapel[m] = PAL[wi++ % PAL.length]);
  const inisial = n => n.replace(/^(Dra?\.|L\.M\.)\s*/, "").split(/[ ,]/).filter(w => w && /^[A-Z]/.test(w) && !/\./.test(w)).slice(0, 2).map(w => w[0]).join("");

  /* ---------- state ---------- */
  let q = "", grup = "semua", kelas = null;

  // segmented filter kelompok
  $("#gSeg").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    grup = b.dataset.g; $("#gSeg").querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b)); render();
  });
  $("#gCari").addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); render(); });

  // pemilih kelas
  $("#gKelas").innerHTML = TINGKAT.map(t => `<div class="krow"><span class="klabel">${t}</span>${
    Array.from({ length: GURU.rombel[t] }, (_, i) => `<button class="kpill" data-k="${t} ${i + 1}">${i + 1}</button>`).join("")
  }</div>`).join("");
  $("#gKelas").addEventListener("click", e => {
    const b = e.target.closest("[data-k]"); if (!b) return;
    kelas = kelas === b.dataset.k ? null : b.dataset.k; render();
  });
  $("#gReset").addEventListener("click", () => { kelas = null; render(); });

  function kartu(g) {
    const sorot = t => kelas && t.daftar.includes(kelas) ? " hit" : "";
    return `<article class="gcard" style="--c:${warna(g.tugas[0].mapel)}">
      <div class="gtop">
        <span class="gav">${inisial(g.nama)}</span>
        <div class="gname"><b>${g.nama}</b><small>${g.jumlahKelas} kelas</small></div>
      </div>
      <ul class="gtugas">${g.tugas.map(t => `<li class="${sorot(t)}" style="--c:${warna(t.mapel)}"><span class="gmapel">${t.mapel}</span><span class="gkls">${t.kelas}</span></li>`).join("")}</ul>
    </article>`;
  }

  function render() {
    // tombol kelas aktif
    root.querySelectorAll(".kpill").forEach(b => b.classList.toggle("on", b.dataset.k === kelas));
    $("#gReset").hidden = !kelas;

    let list = SEMUA.filter(g => grup === "semua" || String(g.kel) === grup);
    if (q) list = list.filter(g => (g.nama + " " + g.tugas.map(t => t.mapel + " " + t.kelas).join(" ")).toLowerCase().includes(q));

    if (kelas) {
      // tampilan per kelas: daftar mapel -> guru
      const baris = [];
      SEMUA.forEach(g => g.tugas.forEach(t => { if (t.daftar.includes(kelas)) baris.push({ mapel: t.mapel, nama: g.nama }); }));
      baris.sort((a, b) => a.mapel.localeCompare(b.mapel, "id"));
      $("#gKelasInfo").innerHTML = `<div class="kinfo">
        <div class="kinfo-h"><span class="kbig">${kelas}</span><span>${baris.length} mata pelajaran</span></div>
        <ul>${baris.map(r => `<li style="--c:${warna(r.mapel)}"><span class="gmapel">${r.mapel}</span><b>${r.nama}</b></li>`).join("")}</ul>
      </div>`;
      $("#gKelasInfo").hidden = false;
      list = list.filter(g => g.tugas.some(t => t.daftar.includes(kelas)));
    } else $("#gKelasInfo").hidden = true;

    $("#gJumlah").textContent = `${list.length} guru`;
    $("#gGrid").innerHTML = list.map(kartu).join("") || `<p class="gnone">Tidak ada guru yang cocok.</p>`;
  }

  $("#gTotal").textContent = SEMUA.length;
  $("#gMapel").textContent = new Set(SEMUA.flatMap(g => g.tugas.map(t => t.mapel))).size;
  $("#gRombel").textContent = Object.values(GURU.rombel).reduce((a, b) => a + b, 0);
  render();
  window.__GURU_TEST = { urai, SEMUA };
})();
