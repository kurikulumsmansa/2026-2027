(() => {
  /* ---------- Ikon per jenis (gaya ikon iOS) ---------- */
  const IKON = {
    file:   { warna: "linear-gradient(180deg,#ff6b5e,#e5392b)", svg: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>' },
    folder: { warna: "linear-gradient(180deg,#5ac8fa,#0a84ff)", svg: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>' },
    sheet:  { warna: "linear-gradient(180deg,#4cd964,#28a745)", svg: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M4 15h16M10 4v16"/>' },
    form:   { warna: "linear-gradient(180deg,#bf7dff,#8e44ec)", svg: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>' },
    web:    { warna: "linear-gradient(180deg,#ffb340,#ff8c00)", svg: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>' },
  };

  /* ---------- Render ---------- */
  const daftar = document.getElementById("daftar");
  daftar.innerHTML = KELOMPOK.map(k => `
    <section class="group reveal">
      <h2>${k.judul}</h2>
      <div class="list">
        ${k.link.map(l => {
          const ik = IKON[l.jenis] || IKON.web;
          return `<a class="item" href="${l.url}" target="_blank" rel="noopener">
            <span class="icon" style="background:${ik.warna}"><svg viewBox="0 0 24 24">${ik.svg}</svg></span>
            <span class="label">${l.nama}</span>
            <svg class="chev" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>
          </a>`;
        }).join("")}
      </div>
    </section>`).join("");

  /* ---------- Pencarian ---------- */
  const cari = document.getElementById("cari");
  cari.addEventListener("input", () => {
    const q = cari.value.trim().toLowerCase();
    let total = 0;
    document.querySelectorAll(".group").forEach(g => {
      let n = 0;
      g.querySelectorAll(".item").forEach(it => {
        const ok = !q || it.textContent.toLowerCase().includes(q) || g.querySelector("h2").textContent.toLowerCase().includes(q);
        it.hidden = !ok; if (ok) n++;
      });
      g.hidden = n === 0; total += n;
    });
    document.getElementById("kosong").hidden = total > 0;
  });
  addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== cari) { e.preventDefault(); cari.focus(); }
    if (e.key === "Escape") { cari.value = ""; cari.dispatchEvent(new Event("input")); cari.blur(); }
  });

  /* ---------- Muncul halus saat di-scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = Math.min(i * 70, 420) + "ms";
    io.observe(el);
  });

  /* ---------- Sorotan cahaya di tombol ---------- */
  document.querySelectorAll(".item").forEach(it => {
    it.addEventListener("pointermove", e => {
      const r = it.getBoundingClientRect();
      it.style.setProperty("--x", (e.clientX - r.left) + "px");
      it.style.setProperty("--y", (e.clientY - r.top) + "px");
    });
  });

  /* ---------- Kursor kustom (hanya mouse/trackpad) ---------- */
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine) return;
  document.documentElement.classList.add("has-cursor");
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener("pointermove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    document.documentElement.classList.add("cursor-on");
  });
  document.addEventListener("pointerleave", () => document.documentElement.classList.remove("cursor-on"));
  (function loop() {
    const k = reduce ? 1 : 0.18;
    rx += (mx - rx) * k; ry += (my - ry) * k;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("pointerover", e => {
    const t = e.target.closest("a, input, button, label");
    document.documentElement.classList.toggle("cursor-hover", !!t);
  });
  addEventListener("pointerdown", () => document.documentElement.classList.add("cursor-down"));
  addEventListener("pointerup", () => document.documentElement.classList.remove("cursor-down"));
})();
