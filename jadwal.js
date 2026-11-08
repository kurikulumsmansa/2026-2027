/* =====================================================================
   JADWAL PELAJARAN PER KELAS: klik kelas -> tabel jadwal
   ===================================================================== */
(() => {
  const root = document.getElementById("jadwalBox");
  if (!root || typeof JADWAL === "undefined") return;
  const $ = s => root.querySelector(s);
  const HARI = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
  const NAMA = { PABP: "Pendidikan Agama dan Budi Pekerti", MTK: "Matematika", PP: "Pendidikan Pancasila", SEJ: "Sejarah",
    BIND: "Bahasa Indonesia", BING: "Bahasa Inggris", BIO: "Biologi", PJOK: "Pendidikan Jasmani, Olahraga, dan Kesehatan",
    EKO: "Ekonomi", SB: "Seni Budaya", SOS: "Sosiologi", GEO: "Geografi", FIS: "Fisika", KIM: "Kimia", INF: "Informatika",
    MTL: "Matematika Tingkat Lanjut", BINGTL: "Bahasa Inggris Tingkat Lanjut", SEJTL: "Sejarah Tingkat Lanjut",
    PKWU: "Prakarya dan Kewirausahaan", GW: "Guru Wali", UP: "Upacara", "P-WAJIB": "Pemantapan Mapel Wajib", KOMSIS: "Kombel Murid",
    "KOKU (IMTAQ)": "Kokurikuler: Imtaq", "KOKU (KES)": "Kokurikuler: Kesehatan", "KOKU (UP)": "Kokurikuler: Upacara",
    "KOKU (LITNUM)": "Kokurikuler: Literasi Numerasi", "KOKU (LIT)": "Kokurikuler: Literasi", "KOKU (KOLAB)": "Kokurikuler: Kolaborasi" };
  const nama = m => NAMA[m] || (NAMA[m.replace(/\s*\(P\)$/, "")] ? NAMA[m.replace(/\s*\(P\)$/, "")] + " (P)" : "");
  const WARNA = ["#1e6bff", "#22b07d", "#f7a01d", "#8b5cf6", "#e8590c", "#0ea5e9", "#db2777", "#65a30d", "#0f766e", "#b45309", "#7c3aed", "#dc2626"];
  const warna = m => { if (/^KOKU|^UP$|^KOMSIS|^GW$|^P-WAJIB/.test(m)) return "#64748b";
    let h = 0; for (const c of m.replace(/\s*\(P\)$/, "")) h = (h * 31 + c.charCodeAt(0)) >>> 0; return WARNA[h % WARNA.length]; };

  const KELAS = Object.keys(JADWAL.kelas);
  const TK = [["X", "Kelas X", "Hang Lekir"], ["XI", "Kelas XI", "Hang Jebat"], ["XII", "Kelas XII", "Hang Tuah"]];
  $("#jdKelas").innerHTML = TK.map(([t, lab, ged]) => {
    const kls = KELAS.filter(k => k.split(" ")[0] === t);
    return `<div class="krow"><span class="klabel">${lab}<small>${ged}</small></span>${kls.map(k =>
      `<button class="kpill" data-jk="${k}" data-tip="Lihat jadwal ${k}">${k.split(" ").slice(1).join(" ")}</button>`).join("")}</div>`;
  }).join("");

  const hariIni = HARI[new Date().getDay() - 1];
  /* di HP: tampilkan satu hari saja, pilih lewat tombol hari */
  const hp = matchMedia("(max-width: 640px)");
  let hariPilih = hariIni || "Senin", kelasNow = null;
  function tampil(k) {
    kelasNow = k;
    const HR = hp.matches ? [hariPilih] : HARI;
    root.querySelectorAll("[data-jk]").forEach(b => b.classList.toggle("on", b.dataset.jk === k));
    const J = JADWAL.kelas[k], tk = k.split(" ")[0];
    const isi = {}; // isi[hari][baris] = blok | "lewat"
    HR.forEach(h => { isi[h] = {}; (J.hari[h] || []).forEach(b => { isi[h][b[0]] = b; for (let i = b[0] + 1; i <= b[1]; i++) isi[h][i] = "lewat"; }); });
    const rows = J.jam.map(([n, t], i) => {
      if (n === "ISTIRAHAT") return `<tr class="jd-ist"><td class="jd-jam"><b>☕</b><small>${t}</small></td><td colspan="${HR.length}">Istirahat</td></tr>`;
      return `<tr><td class="jd-jam"><b>Jam ${n}</b><small>${t}</small></td>${HR.map(h => {
        const b = isi[h][i]; if (b === "lewat") return "";
        const cls = h === hariIni ? " jd-today" : "";
        if (!b) return `<td class="jd-kosong${cls}"></td>`;
        let span = 1; for (let j = b[0] + 1; j <= b[1]; j++) span++;
        return `<td rowspan="${span}" class="jd-isi${cls}">${b[2].map(([m, g]) =>
          `<div class="jd-m" style="--c:${warna(m)}" title="${nama(m)}"><b>${m}</b>${nama(m) ? `<small>${nama(m)}</small>` : ""}${g ? `<i>${g}</i>` : ""}</div>`).join("")}</td>`;
      }).join("")}</tr>`;
    }).join("");
    $("#jdTabel").innerHTML = `<div class="mhead"><b>Jadwal Kelas ${k}</b><span>Wali kelas: ${J.wali || "–"}</span></div>
      <p class="mthint">Huruf kecil di pojok (misal <i class="jd-kode">IR</i>) adalah kode guru.</p>${hp.matches ? `<div class="jd-hari">${HARI.map(h => `<button class="jd-hb${h === hariPilih ? " on" : ""}" data-jh="${h}">${h}</button>`).join("")}</div>` : ""}
      <div class="jd-wrap"><table class="jd-tab-j"><thead><tr><th>Jam</th>${HR.map(h => `<th class="${h === hariIni ? "jd-today" : ""}">${h}${h === hariIni ? "<small>hari ini</small>" : ""}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>
      <p class="jd-note">Sumber: PDF jadwal kelas ${tk}, revisi 15 Juli 2026. <a href="https://drive.google.com/file/d/${JADWAL.pdf[tk]}/view" target="_blank" rel="noopener">Lihat PDF asli</a></p>`;
  }
  hp.addEventListener("change", () => kelasNow && tampil(kelasNow));
  root.addEventListener("click", e => { const d = e.target.closest("[data-jh]"); if (d) { hariPilih = d.dataset.jh; tampil(kelasNow); return; } const b = e.target.closest("[data-jk]"); if (b) { tampil(b.dataset.jk); try { localStorage.setItem("jdKelas", b.dataset.jk); } catch (_) {} } });
  let awal = KELAS[0]; try { const s = localStorage.getItem("jdKelas"); if (s && JADWAL.kelas[s]) awal = s; } catch (_) {}
  tampil(awal);
})();
