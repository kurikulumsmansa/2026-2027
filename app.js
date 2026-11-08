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
    return `<a class="qcard spot glass lens" href="${l.url}" ${ext}>
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
    return `<section class="board glass reveal" id="${slug(k.judul)}" style="--c:${g.warna}">
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

  /* ---------- Satu halaman per menu (menu kiri) ---------- */
  const HALAMAN = { beranda: "Beranda", kalender: "Kalender Pendidikan", guru: "Daftar Guru", murid: "Data Murid", asas: "ASAS-BK Ganjil", dokumen: "Dokumen & Layanan" };
  const papan = new Set(KELOMPOK.map(k => slug(k.judul)));
  const judulHal = document.getElementById("judulHalaman");
  function bukaHalaman() {
    const h = decodeURIComponent(location.hash.slice(1)) || "beranda";
    const view = HALAMAN[h] ? h : papan.has(h) ? "dokumen" : "beranda";
    document.querySelectorAll("[data-view]").forEach(el => {
      const tampil = el.dataset.view === view;
      if (tampil && el.hidden) { el.classList.remove("view-in"); void el.offsetWidth; el.classList.add("view-in"); }
      el.hidden = !tampil;
    });
    document.querySelectorAll("[data-go]").forEach(a => a.classList.toggle("active", a.dataset.go === view));
    if (judulHal) judulHal.textContent = view === "beranda" ? "Papan Informasi Kurikulum" : HALAMAN[view];
    document.title = (view === "beranda" ? "" : HALAMAN[view] + " · ") + "Kurikulum SMAN 1 Batam 2026/2027";
    document.body.classList.remove("side-open");
    if (papan.has(h)) {
      const b = document.getElementById(h);
      requestAnimationFrame(() => {
        b.scrollIntoView({ behavior: "smooth", block: "start" });
        b.classList.remove("flash"); void b.offsetWidth; b.classList.add("flash");
      });
    } else scrollTo({ top: 0 });
  }
  addEventListener("hashchange", bukaHalaman);
  bukaHalaman();

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
  }), { threshold: 0, rootMargin: "0px 0px -40px 0px" });
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

  /* ---------- Liquid Glass: refraksi, kilau, tint adaptif, menyusut saat scroll ---------- */
  const root0 = document.documentElement;
  const ua = navigator.userAgent;
  if (/Chrome|Edg\//.test(ua) && !/Firefox/.test(ua)) root0.classList.add("refract");

  // kilau tepi kaca bergeser mengikuti kursor
  document.addEventListener("pointermove", e => {
    const g = e.target.closest(".glass"); if (!g) return;
    const b = g.getBoundingClientRect();
    g.style.setProperty("--lx", ((e.clientX - b.left) / b.width * 100).toFixed(1) + "%");
    g.style.setProperty("--ly", ((e.clientY - b.top) / b.height * 100).toFixed(1) + "%");
  }, { passive: true });

  const bar = document.querySelector(".topbar"), banner = document.querySelector(".banner");
  let lastY = scrollY, ticking = false;
  const onScroll = () => {
    const y = scrollY;
    // tint adaptif: bar atas jadi gelap saat melayang di atas banner biru
    const bb = banner.getBoundingClientRect(), tb = bar.getBoundingClientRect();
    const overBanner = bb.top < tb.bottom - 10 && bb.bottom > tb.top + tb.height / 2 && y > 4;
    document.body.classList.toggle("on-dark", overBanner);
    // menyusut saat scroll turun, melebar saat scroll naik
    if (y > 140 && y > lastY + 4) bar.classList.add("compact");
    else if (y < lastY - 4 || y < 140) bar.classList.remove("compact");
    lastY = y; ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ---------- Label penjelasan (seperti label di Dock Mac) ---------- */
  const tip = document.getElementById("tip"), tipTxt = tip.firstElementChild;
  const TARGET = "[data-tip], .side-link, .sub-link, .side-brand, .qcard, .row, .res, .mtile, .kpill, .kbtn, .icon-btn, .seg button, .kmode button, .kchip, .mini";
  const bersih = t => (t || "").replace(/\s+/g, " ").trim();
  function teksTip(el) {
    if (el.dataset.tip) return el.dataset.tip;
    if (el.classList.contains("side-brand")) return "Kembali ke halaman depan";
    if (el.classList.contains("main-link")) return "Buka halaman " + bersih(el.querySelector("b").textContent);
    if (el.classList.contains("side-toggle")) {
      const j = bersih(el.textContent);
      return (el.getAttribute("aria-expanded") === "true" ? "Tutup daftar " : "Lihat daftar dokumen ") + j;
    }
    if (el.classList.contains("sub-all")) return "Lihat semua dokumen di kelompok ini";
    if (el.classList.contains("mtile")) return "Buka halaman " + bersih(el.querySelector("b").textContent);
    if (el.classList.contains("kpill") && el.closest("#dataMurid")) return el.classList.contains("on") ? "Daftar murid " + el.dataset.k + " ditampilkan di bawah. Klik lagi untuk menutup." : "Lihat daftar murid kelas " + el.dataset.k;
    if (el.classList.contains("kpill")) return el.classList.contains("on") ? "Guru kelas " + el.dataset.k + " ditampilkan di bawah. Klik lagi untuk menutup." : "Lihat guru yang mengajar di kelas " + el.dataset.k;
    if (el.classList.contains("mini")) return "Buka bulan ini";
    if (el.matches(".sub-link, .qcard, .row, .res")) {
      const n = bersih((el.querySelector("h3, b") || el).textContent);
      return "Buka “" + n + "” (terbuka di tab baru)";
    }
    return bersih(el.getAttribute("aria-label")) || "";
  }
  let tipEl = null, tipTimer = 0, hideTimer = 0;
  function tampilTip(el) {
    const t = teksTip(el); if (!t) return;
    tipEl = el; tipTxt.textContent = t;
    tip.classList.remove("show", "bawah");
    tip.style.left = "0px"; tip.style.top = "0px";
    const b = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    let top = b.top - h - 12, bawah = false;
    if (top < 8) { top = b.bottom + 12; bawah = true; }
    const cx = b.left + b.width / 2;
    const left = Math.max(8, Math.min(innerWidth - w - 8, cx - w / 2));
    tip.style.left = left + "px"; tip.style.top = top + "px";
    tip.style.setProperty("--ax", (cx - left) + "px");
    tip.classList.toggle("bawah", bawah);
    void tip.offsetWidth; tip.classList.add("show");
  }
  function sembunyiTip() { clearTimeout(tipTimer); tip.classList.remove("show"); tipEl = null; }
  const mouse = matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (mouse) {
    document.addEventListener("pointerover", e => {
      const el = e.target.closest(TARGET);
      if (el === tipEl) return;
      clearTimeout(tipTimer);
      if (!el) { sembunyiTip(); return; }
      // langsung muncul jika label sudah tampil (pindah antar tombol), jika belum tunggu sebentar
      tipTimer = setTimeout(() => tampilTip(el), tip.classList.contains("show") ? 0 : 350);
    });
    document.addEventListener("pointerleave", sembunyiTip);
  }
  // saat diklik/disentuh: label muncul (atau diperbarui) sebentar
  document.addEventListener("click", e => {
    const el = e.target.closest(TARGET); if (!el) return;
    clearTimeout(tipTimer); clearTimeout(hideTimer);
    setTimeout(() => {
      if (!el.isConnected || el.offsetParent === null) return sembunyiTip();
      tampilTip(el);
      if (!mouse) hideTimer = setTimeout(sembunyiTip, 2200);
    }, 30);
  });
  addEventListener("scroll", () => { if (tipEl) sembunyiTip(); }, { passive: true });
})();
