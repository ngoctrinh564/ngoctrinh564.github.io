/* ================= Canvas setup ================= */
const canvas = document.createElement("canvas");
canvas.id = "particle-bg";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
const DPR = window.devicePixelRatio || 1;

canvas.style.position = "fixed";
canvas.style.inset = "0";
canvas.style.zIndex = "-1";
canvas.style.pointerEvents = "none";

/* ================= Theme detection ================= */
function getTheme() {
    return document.documentElement.classList.contains("dark")
        || document.body.classList.contains("dark")
        || window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

let THEME = getTheme();

/* ================= Resize ================= */
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

/* ================= CẤU HÌNH ================= */
function applyTheme(theme) {
    if (theme === "dark") {
        canvas.style.background = "#0f1115";
        SETTINGS.nodeColor = "rgba(160, 200, 255, 0.75)";
        SETTINGS.lineAlpha = 0.45;
    } else {
        // canvas.style.background = "#f8fbfd";
        SETTINGS.nodeColor = "rgba(70, 120, 200, 0.85)";
        SETTINGS.lineAlpha = 0.35;
    }
}

const SETTINGS = {
    count: window.innerWidth > 1600 ? 120 : 90,

    nodeColor: "",
    lineColor: "120, 160, 220",
    lineAlpha: 0.25,
    linkDist: 140,

    baseSpeed: 0.35,          // tốc độ trôi nền
    drift: 0.015,             // nhiễu rất nhỏ
    friction: 0.995,          // giữ chuyển động lâu, không dừng

    mouseRadius: 120,
    mouseForce: 0.03          // lực chuột rất nhẹ
};

applyTheme(THEME);

/* ================= Mouse ================= */
const mouse = { x: -9999, y: -9999, active: false };
let attractedParticles = [];

document.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
});
document.addEventListener("mouseleave", () => {
    mouse.active = false;
    attractedParticles.length = 0;
});

/* ================= Particle ================= */
class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;

        const a = Math.random() * Math.PI * 2;
        this.vx = Math.cos(a) * SETTINGS.baseSpeed;
        this.vy = Math.sin(a) * SETTINGS.baseSpeed;

        this.radius = Math.random() * 1.2 + 0.6;
    }

    update() {
        // Nhiễu nền liên tục (flow)
        this.vx += (Math.random() - 0.5) * SETTINGS.drift;
        this.vy += (Math.random() - 0.5) * SETTINGS.drift;

        // Tương tác chuột RẤT NHẸ
        if (mouse.active) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const d = Math.hypot(dx, dy);

            if (d < SETTINGS.mouseRadius && d > 0) {
                const f = (1 - d / SETTINGS.mouseRadius) * SETTINGS.mouseForce;
                this.vx += (dx / d) * f;
                this.vy += (dy / d) * f;
            }
        }

        // Giữ chuyển động mượt
        this.vx *= SETTINGS.friction;
        this.vy *= SETTINGS.friction;

        this.x += this.vx;
        this.y += this.vy;

        // Wrap screen → luôn phủ đều toàn trang
        if (this.x < -20) this.x = w + 20;
        if (this.x > w + 20) this.x = -20;
        if (this.y < -20) this.y = h + 20;
        if (this.y > h + 20) this.y = -20;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = SETTINGS.nodeColor;
        ctx.fill();
    }
}

const particles = Array.from({ length: SETTINGS.count }, () => new Particle());

/* ================= Animate ================= */
function animate() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const d = Math.hypot(p.x - q.x, p.y - q.y);

            if (d < SETTINGS.linkDist) {
                const a = (1 - d / SETTINGS.linkDist) * SETTINGS.lineAlpha;
                ctx.strokeStyle = `rgba(${SETTINGS.lineColor},${a})`;
                ctx.lineWidth = 0.6;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}

animate();

/* ================= Theme live update ================= */
const observer = new MutationObserver(() => {
    const t = getTheme();
    if (t !== THEME) {
        THEME = t;
        applyTheme(THEME);
    }
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
