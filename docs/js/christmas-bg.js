(function () {
  function boot() {
    if (document.getElementById("christmas-snow")) return;

    /* ===== CREATE CANVAS ===== */
    const canvas = document.createElement("canvas");
    canvas.id = "christmas-snow";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "0";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;

    let w, h;
    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    window.addEventListener("resize", resize);
    resize();

    /* ===== LOAD SNOWFLAKE IMAGE ===== */
    const snowImg = new Image();
    snowImg.src = "/images/hoa-tuyet.png";

    /* ===== PARTICLES ===== */
    const DOT_COUNT = 110;
    const FLAKE_COUNT = 28;

    const dots = Array.from({ length: DOT_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.6,
      vx: Math.random() * 0.4 + 0.2,
      vy: Math.random() * 1.0 + 0.6
    }));

    const flakes = Array.from({ length: FLAKE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 26 + 18,
      vy: Math.random() * 0.6 + 0.4,
      vx: Math.random() * 0.3 + 0.1,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.01
    }));

    /* ===== ANIMATE ===== */
    function animate() {
      ctx.clearRect(0, 0, w, h);

      if (document.documentElement.classList.contains("christmas")) {
        /* --- snow dots --- */
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        for (const d of dots) {
          d.x += d.vx;
          d.y += d.vy;

          if (d.y > h + 10) {
            d.y = -10;
            d.x = Math.random() * w;
          }
          if (d.x > w + 10) d.x = -10;

          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fill();
        }

        /* --- snowflake images --- */
        if (snowImg.complete) {
          for (const f of flakes) {
            f.x += f.vx;
            f.y += f.vy;
            f.rot += f.vr;

            if (f.y > h + 40) {
              f.y = -40;
              f.x = Math.random() * w;
            }
            if (f.x > w + 40) f.x = -40;

            ctx.save();
            ctx.translate(f.x, f.y);
            ctx.rotate(f.rot);
            ctx.globalAlpha = 0.85;
            ctx.drawImage(
              snowImg,
              -f.size / 2,
              -f.size / 2,
              f.size,
              f.size
            );
            ctx.restore();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    console.log("[christmas-bg] snow + flakes ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
