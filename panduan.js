/* PANDUAN & ATURAN: daftar file Drive, bisa dicari */
(() => {
  const root = document.getElementById("panduanBox");
  if (!root || typeof PANDUAN === "undefined") return;
  const url = id => `https://drive.google.com/file/d/${id}/view`;
  const mb = n => n < 1 ? "< 1 MB" : `${Math.round(n)} MB`;
  const ICON = `<svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6M10 16.5h4"/></svg>`;
  const kartu = ([j, k, id, s], cls = "") => `<a class="pd-item ${cls}" href="${url(id)}" target="_blank" rel="noopener" data-tip="Buka ${j} (PDF, tab baru)" data-cari="${(j + " " + k).toLowerCase()}">
      <span class="pd-ic">${ICON}</span><span class="pd-t"><b>${j}</b>${k ? `<small>${k}</small>` : ""}</span><span class="pd-s">PDF · ${mb(s)}</span></a>`;
  root.querySelector("#pdUtama").innerHTML = PANDUAN.utama.map(x => kartu(x, "big")).join("");
  root.querySelector("#pdMapel").innerHTML = PANDUAN.mapel.map(x => kartu(x)).join("");
  root.querySelector("#pdAturan").innerHTML = PANDUAN.aturan.map(([g, l]) =>
    `<div class="pd-grup"><h4>${g}</h4><div class="pd-list">${l.map(x => kartu(x)).join("")}</div></div>`).join("");
  root.querySelector("#pdFolder").href = `https://drive.google.com/drive/folders/${PANDUAN.folder}`;
  const cari = root.querySelector("#pdCari"), kosong = root.querySelector("#pdKosong");
  cari.addEventListener("input", () => {
    const q = cari.value.trim().toLowerCase(); let ada = 0;
    root.querySelectorAll(".pd-item").forEach(a => { const ok = !q || a.dataset.cari.includes(q); a.hidden = !ok; ada += ok; });
    root.querySelectorAll(".pd-sec, .pd-grup").forEach(s => s.hidden = q && !s.querySelector(".pd-item:not([hidden])"));
    kosong.hidden = ada > 0;
  });
})();
