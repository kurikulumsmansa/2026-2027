/* =====================================================================
   ASAS-BK GANJIL 2026/2027
   Ubah jadwal di sini: [tanggal mulai, tanggal selesai, kegiatan, penting?]
   ===================================================================== */
const ASAS_JADWAL = [
  ["2026-11-14", "2026-11-14", "Batas akhir unggah soal serta pengumpulan kisi-kisi dan kartu soal", true],
  ["2026-11-16", "2026-11-20", "Telaah soal"],
  ["2026-11-26", "2026-11-26", "Simulasi ASAS-BK"],
  ["2026-11-30", "2026-12-09", "Pelaksanaan ASAS-BK", true],
  ["2026-12-10", "2026-12-11", "Ujian susulan"],
  ["2026-12-14", "2026-12-14", "Pengiriman nilai dan batas akhir input E-Rapor", true],
  ["2026-12-16", "2026-12-16", "Rapat semester ganjil"],
  ["2026-12-18", "2026-12-18", "Pembagian rapor"],
];

(() => {
  const tgl = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const now = new Date(); const hariIni = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const selisih = s => Math.round((tgl(s) - hariIni) / 864e5);
  const BLN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  /* hitung mundur */
  const teksSisa = n => n > 1 ? `${n} hari lagi` : n === 1 ? "Besok" : n === 0 ? "Hari ini" : "Sudah lewat";
  document.querySelectorAll("[data-hitung]").forEach(el => {
    const n = selisih(el.dataset.hitung); el.textContent = teksSisa(n); el.classList.toggle("lewat", n < 0); el.classList.toggle("dekat", n >= 0 && n <= 3);
  });
  document.querySelectorAll("[data-hitung-besar]").forEach(el => {
    const n = selisih(el.dataset.hitungBesar);
    el.innerHTML = n > 1 ? `${n}<em> hari lagi</em>` : n === 1 ? "Besok" : n === 0 ? "Hari ini" : "Sudah ditutup";
    el.closest(".ah-count").classList.toggle("dekat", n >= 0 && n <= 3);
  });

  /* jadwal */
  const ol = document.getElementById("asasJadwal"); if (!ol) return;
  let berikut = false;
  ol.innerHTML = ASAS_JADWAL.map(([a, b, keg, penting]) => {
    const A = tgl(a), B = tgl(b);
    let st = "nanti", label = "Akan datang";
    if (B < hariIni) { st = "selesai"; label = "Selesai"; }
    else if (A <= hariIni) { st = "kini"; label = "Sedang berlangsung"; }
    else if (!berikut) { st = "berikut"; berikut = true; const n = selisih(a); label = n === 1 ? "Besok" : `${n} hari lagi`; }
    if (st === "kini") berikut = true;
    const rentang = a === b ? `${HARI[A.getDay()]}, ${A.getDate()} ${BLN[A.getMonth()]}`
      : A.getMonth() === B.getMonth() ? `${A.getDate()}–${B.getDate()} ${BLN[B.getMonth()]}` : `${A.getDate()} ${BLN[A.getMonth()]} – ${B.getDate()} ${BLN[B.getMonth()]}`;
    return `<li class="${st}${penting ? " penting" : ""}">
      <span class="tl-dot"></span>
      <div class="tl-date"><b>${A.getDate()}</b><small>${BLN[A.getMonth()]}</small></div>
      <div class="tl-body"><span class="tl-when">${rentang} 2026</span><b>${keg}</b></div>
      <span class="tl-st">${label}</span>
    </li>`;
  }).join("");
})();
