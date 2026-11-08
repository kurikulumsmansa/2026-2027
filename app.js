(() => {
  /* ---------- Ikon & warna ---------- */
  const SVG = {
    file:   '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    sheet:  '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M4 15h16M10 4v16"/>',
    form:   '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
    web:    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  };
  const WARNA_JENIS = { file: "#ef5a3c", folder: "#1e6bff", sheet: "#22b07d", form: "#8b5cf6", web: "#f7a01d" };
  const NAMA_JENIS = { file: "File PDF", folder: "Folder Drive", sheet: "Google Sheets", form: "Google Form", web: "Situs web" };
  // ikon & warna per kelompok (urutan sama dengan links.js)
  const GAYA = [
    { warna: "#f7a01d", svg: '<path d="M12 3 2 8l10 5 10-5z"/><path d="M6 10.5V16c3 2.5 9 2.5 12 0v-5.5"/>' },
    { warna: "#1e6bff", svg: '<path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4z"/><path d="M20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z"/>' },
    { warna: "#22b07d", svg: '<rect x="4" y="4" width="16" height="17" rx="2"/><path d="M8 2v4M16 2v4M4 10h16"/>' },
    { warna: "#ef5a3c", svg: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16.5 14.6c2.6.2 4.4 1.9 5 5.4"/>' },
    { warna: "#14b8e6", svg: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M9 13l2 2 4-4"/>' },
    { warna: "#8b5cf6", svg: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>' },
  ];
  const ic = (svg) => `<svg viewBox="0 0 24 24">${svg}</svg>`;
  const chev = '<svg class="chev" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>';
  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const ext = 'target="_blank" rel="noopener"';

  /* ---------- Tanggal hari ini ---------- */
  document.getElementById("tanggal").textContent =
    new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  /* ---------- Menu kiri (bisa dibuka-tutup) ---------- */
  document.getElementById("sideGroups").innerHTML = KELOMPOK.map((k, i) => {
    const g = GAYA[i % GAYA.length];
    return `<div class="side-group">
      <button class="side-link side-toggle" aria-expanded="false">
        ${ic(g.svg)}<span>${k.judul}</span>
        <svg class="caret" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>
      </button>
      <div class="side-sub"><div>
        <a href="#${slug(k.judul)}" class="sub-link sub-all" data-nav>Lihat semua</a>
        ${k.link.map(l => `<a href="${l.url}" ${ext} class="sub-link">${l.nama}</a>`).join("")}
      </div></div>
    </div>`;
  }).join("");
  document.querySelectorAll(".side-toggle").forEach(b => b.addEventListener("click", () => {
    const open = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", String(!open));
    b.parentElement.classList.toggle("open", !open);
  }));
  document.querySelectorAll("[data-nav]").forEach(a => a.addEventListener("click", () => {
    document.body.classList.remove("side-open");
  }));

  /* ---------- Kartu Akses Cepat ---------- */
  const utama = KELOMPOK.flatMap(k => k.link.filter(l => l.utama).map(l => ({ ...l, kel: k.judul })));
  document.getElementById("quick").innerHTML = utama.map(l => {
    const w = WARNA_JENIS[l.jenis] || "#1e6bff";
    return `<a class="qcard spot" href="${l.url}" ${ext}>
      <span class="chip" style="background:${w}">${l.kel}</span>
      <h3>${l.nama}</h3>
      <div class="qfoot">
        <span class="qtype"><span class="dot" style="background:${w}"></span>${NAMA_JENIS[l.jenis] || "Link"}</span>
        <span class="qgo">Buka ${chev}</span>
      </div>
    </a>`;
  }).join("");

  /* ---------- Papan per kelompok ---------- */
  document.getElementById("boards").innerHTML = KELOMPOK.map((k, i) => {
    const g = GAYA[i % GAYA.length];
    return `<section class="board reveal" id="${slug(k.judul)}" style="--c:${g.warna}">
      <div class="board-head">
        <span class="bicon">${ic(g.svg)}</span>
        <h2>${k.judul}</h2>
        <span class="count">${k.link.length}</span>
      </div>
      <div class="rows">
        ${k.link.map(l => `<a class="row spot" href="${l.url}" ${ext}>
          <span class="ricon" style="background:${WARNA_JENIS[l.jenis] || "#1e6bff"}">${ic(SVG[l.jenis] || SVG.web)}</span>
          <span class="rtext"><b>${l.nama}</b><small>${NAMA_JENIS[l.jenis] || "Link"}</small></span>
          ${chev}
        </a>`).join("")}
      </div>
    </section>`;
  }).join("");

  /* ---------- Pencarian ---------- */
  const semua = KELOMPOK.flatMap(k => k.link.map(l => ({ ...l, kel: k.judul })));
  const cari = document.getElementById("cari"), hasil = document.getElementById("hasil");
  const render = () => {
    const q = cari.value.trim().toLowerCase();
    if (!q) { hasil.hidden = true; return; }
    const r = semua.filter(l => (l.nama + " " + l.kel).toLowerCase().includes(q));
    hasil.innerHTML = r.length ? r.map(l => `<a href="${l.url}" ${ext} class="res">
      <span class="ricon" style="background:${WARNA_JENIS[l.jenis]}">${ic(SVG[l.jenis] || SVG.web)}</span>
      <span class="rtext"><b>${l.nama}</b><small>${l.kel}</small></span></a>`).join("")
      : `<p class="none">Tidak ada dokumen yang cocok.</p>`;
    hasil.hidden = false;
  };
  cari.addEventListener("input", render);
  cari.addEventListener("focus", render);
  document.addEventListener("click", e => { if (!e.target.closest(".search-wrap")) hasil.hidden = true; });
  addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== cari) { e.preventDefault(); cari.focus(); }
    if (e.key === "Escape") { cari.value = ""; hasil.hidden = true; cari.blur(); }
  });

  /* ---------- Muncul halus saat di-scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.06 });
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = Math.min(i * 60, 360) + "ms"; io.observe(el);
  });

  /* ---------- Sorotan cahaya mengikuti kursor ---------- */
  document.addEventListener("pointermove", e => {
    const t = e.target.closest(".spot"); if (!t) return;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--x", e.clientX - r.left + "px");
    t.style.setProperty("--y", e.clientY - r.top + "px");
  });

  /* ---------- Kursor gaya iPad (mouse/trackpad saja) ---------- */
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const root = document.documentElement;
  const cur = document.querySelector(".cursor");
  root.classList.add("has-cursor");

  const BLOK = ".spot, .side-link, .sub-link, .res, .icon-btn, .side-brand";
  const SIZE = 18;
  let px = innerWidth / 2, py = innerHeight / 2;           // posisi mouse
  let x = px, y = py, w = SIZE, h = SIZE, r = SIZE / 2;    // posisi kursor sekarang
  let hoverEl = null, textEl = null, down = false, visible = false, last = performance.now();

  addEventListener("pointermove", e => {
    px = e.clientX; py = e.clientY;
    if (!visible) { x = px; y = py; visible = true; root.classList.add("cursor-on"); }
  }, { passive: true });
  document.addEventListener("pointerleave", () => { visible = false; root.classList.remove("cursor-on"); });
  document.addEventListener("pointerover", e => {
    hoverEl = e.target.closest(BLOK);
    textEl = hoverEl ? null : e.target.closest("input");
    root.classList.toggle("cursor-block", !!hoverEl);
    root.classList.toggle("cursor-text", !!textEl);
    root.classList.toggle("cursor-dark", !!e.target.closest(".sidebar, .banner"));
  });
  addEventListener("pointerdown", () => { down = true; root.classList.add("cursor-down"); });
  addEventListener("pointerup", () => { down = false; root.classList.remove("cursor-down"); });

  const ease = (k, dt) => 1 - Math.exp(-k * dt);   // halus & tidak tergantung FPS
  (function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    let tx = px, ty = py, tw = SIZE, th = SIZE, tr = SIZE / 2, kPos = 38, kSize = 22;

    if (hoverEl && hoverEl.isConnected) {
      // kursor "menempel" membentuk kotak di sekeliling tombol, sedikit tertarik ke arah mouse
      const b = hoverEl.getBoundingClientRect();
      const cx = b.left + b.width / 2, cy = b.top + b.height / 2;
      const pad = 6;
      tw = b.width + pad * 2; th = b.height + pad * 2;
      tr = (parseFloat(getComputedStyle(hoverEl).borderRadius) || 12) + pad;
      tx = cx + (px - cx) * 0.06; ty = cy + (py - cy) * 0.12;
      kPos = 20; kSize = 20;
    } else if (textEl) {
      tw = 2.5; th = 24; tr = 2; kSize = 30;
    }
    if (down) { tw *= 0.94; th *= 0.94; }

    x += (tx - x) * ease(kPos, dt);  y += (ty - y) * ease(kPos, dt);
    w += (tw - w) * ease(kSize, dt); h += (th - h) * ease(kSize, dt);
    r += (tr - r) * ease(kSize, dt);
    cur.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0)`;
    cur.style.width = w + "px"; cur.style.height = h + "px"; cur.style.borderRadius = r + "px";
    requestAnimationFrame(frame);
  })(last);
})();
