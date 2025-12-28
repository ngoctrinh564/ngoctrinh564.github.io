---
title: "Project"
description: "Các project đã thực hiện và các web demo thú vị"
---

## A. Project
(Chưa có dữ liệu)

---

## B. Interesting Web

<style>
/* ===== Grid ===== */
.iw-grid{
  display:grid;
  grid-template-columns:repeat(2, minmax(0,1fr));
  gap:24px;
  margin-top:24px;
}
@media (max-width:900px){
  .iw-grid{ grid-template-columns:1fr; }
}

/* ===== Card ===== */
.iw-card{
  background:var(--entry);
  border-radius:16px;
  box-shadow:0 8px 24px rgba(0,0,0,.06);
  overflow:hidden;
  display:flex;
  flex-direction:column;
  height:100%;
}

/* ===== Main image (fixed ratio) ===== */
.iw-main{
  width:100%;
  aspect-ratio:16 / 9;
  overflow:hidden;
  background:#000;
}
.iw-main img{
  width:100%;
  height:100%;
  object-fit:cover;
  cursor:zoom-in;
  display:block;
}

/* ===== Slider thumbnails ===== */
.iw-slider{ padding:14px; }
.iw-track{
  display:flex;
  gap:12px;
  overflow-x:auto;
  scroll-snap-type:x mandatory;
}
.iw-track::-webkit-scrollbar{ height:6px; }
.iw-track::-webkit-scrollbar-thumb{
  background:rgba(0,0,0,.25);
  border-radius:6px;
}
.iw-thumb{
  flex:0 0 140px;
  aspect-ratio:16 / 9;
  scroll-snap-align:start;
  border-radius:10px;
  overflow:hidden;
  background:#000;
}
.iw-thumb img{
  width:100%;
  height:100%;
  object-fit:cover;
  cursor:zoom-in;
  display:block;
}

/* ===== Content ===== */
.iw-body{
  padding:16px;
  flex:1;
}
.iw-title{
  font-weight:700;
  margin:0 0 6px 0;
}
.iw-desc{
  margin:0;
  font-size:.95rem;
  color:var(--secondary);
  line-height:1.5;
}

/* ===== Action ===== */
.iw-action{
  padding:16px;
  border-top:1px solid rgba(0,0,0,.06);
  display:flex;
  justify-content:flex-end;
}
.iw-btn{
  padding:10px 18px;
  border-radius:12px;
  background:var(--primary);
  color:#fff;
  font-size:.9rem;
  text-decoration:none;
}
.iw-btn:hover{ opacity:.85; }

/* ===== Lightbox ===== */
.iw-lightbox{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.75);
  display:none;
  align-items:center;
  justify-content:center;
  z-index:9999;
}
.iw-lightbox.open{ display:flex; }
.iw-lightbox img{
  max-width:94vw;
  max-height:92vh;
  border-radius:12px;
  cursor:zoom-out;
}
.iw-close{
  position:absolute;
  top:16px;
  right:16px;
  width:40px;
  height:40px;
  border-radius:10px;
  border:0;
  background:rgba(255,255,255,.15);
  color:#fff;
  font-size:18px;
  cursor:pointer;
}
</style>

<!-- Lightbox -->
<div class="iw-lightbox" id="iw-lightbox">
  <button class="iw-close" id="iw-close">✕</button>
  <img id="iw-lightbox-img" alt="">
</div>

<script>
(function(){
  const lb = document.getElementById("iw-lightbox");
  const imgBox = document.getElementById("iw-lightbox-img");
  const closeBtn = document.getElementById("iw-close");

  document.addEventListener("click", e => {
    const img = e.target.closest(".iw-zoom");
    if(img){
      imgBox.src = img.src;
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    if(e.target === lb || e.target === closeBtn){
      lb.classList.remove("open");
      imgBox.src = "";
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", e => {
    if(e.key === "Escape"){
      lb.classList.remove("open");
      imgBox.src = "";
      document.body.style.overflow = "";
    }
  });
})();
</script>

<div class="iw-grid">

<!-- ===== Card 1 ===== -->
<div class="iw-card">
  <div class="iw-main">
    <img class="iw-zoom" src="/images/project/noel.png" alt="Hand Gesture Christmas Tree">
  </div>

  <div class="iw-slider">
    <div class="iw-track">
      <div class="iw-thumb"><img class="iw-zoom" src="/images/project/noel2.png"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/project/noel3.png"></div>
    </div>
  </div>

  <div class="iw-body">
    <div class="iw-title">Hand Gesture Christmas Tree</div>
    <p class="iw-desc">Tương tác cây thông 3D bằng cử chỉ tay thông qua webcam theo thời gian thực.</p>
  </div>

  <div class="iw-action">
    <a class="iw-btn" href="/camera/noel.html" target="_blank">Open Demo</a>
  </div>
</div>

<!-- ===== Card 2 ===== -->
<div class="iw-card">
  <div class="iw-main">
    <img class="iw-zoom" src="/images/project/3d.png" alt="Hand Tracking Particle Shapes">
  </div>

  <div class="iw-slider">
    <div class="iw-track">
      <div class="iw-thumb"><img class="iw-zoom" src="/images/project/3d2.png"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/project/3d3.png"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/project/3d4.png"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/project/3d5.png"></div>
    </div>
  </div>

  <div class="iw-body">
    <div class="iw-title">Hand Tracking Particle Shapes</div>
    <p class="iw-desc">Tạo và chuyển đổi hình khối particle 3D bằng cử chỉ tay qua webcam theo thời gian thực.</p>
  </div>

  <div class="iw-action">
    <a class="iw-btn" href="/camera/" target="_blank">Open Demo</a>
  </div>
</div>

<!-- ===== Card 3 ===== -->
<div class="iw-card">
  <div class="iw-main">
    <img class="iw-zoom" src="/images/Hfirework/main.png" alt="Interactive Fireworks Simulation">
  </div>

  <div class="iw-slider">
    <div class="iw-track">
      <div class="iw-thumb"><img class="iw-zoom" src="/images/Hfirework/1.png" alt="Preview 1"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/Hfirework/2.png" alt="Preview 2"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/Hfirework/3.png" alt="Preview 3"></div>
    </div>
  </div>

  <div class="iw-body">
    <div class="iw-title">Interactive Fireworks Simulation</div>
    <p class="iw-desc">Mô phỏng pháo hoa thời gian thực với hệ particle, cho phép tùy chỉnh và kích hoạt hiệu ứng trực tiếp trên trình duyệt.</p>
  </div>

  <div class="iw-action">
    <a class="iw-btn" href="/Hfirework/" target="_blank" rel="noopener">Open Demo</a>
  </div>
</div>

<!-- ===== Card 4 ===== -->
<div class="iw-card">
  <div class="iw-main">
    <img class="iw-zoom" src="/images/CountdownNY/main.png" alt="New Year Countdown Timer">
  </div>

  <div class="iw-slider">
    <div class="iw-track">
      <div class="iw-thumb">
        <img class="iw-zoom" src="/images/CountdownNY/1.png" alt="Preview 1">
      </div>
    </div>
  </div>

  <div class="iw-body">
    <div class="iw-title">New Year Countdown Timer</div>
    <p class="iw-desc">
      Đồng hồ đếm ngược thời gian đến năm mới với giao diện động và hiệu ứng nền lễ hội.
    </p>
  </div>

  <div class="iw-action">
    <a class="iw-btn" href="/CountdownNY/" target="_blank" rel="noopener">
      Open Demo
    </a>
  </div>
</div>

<!-- ===== Card 5 ===== -->
<div class="iw-card">
  <div class="iw-main">
    <img class="iw-zoom" src="/images/NewYear/main.png" alt="Animated Holiday Greeting Scene">
  </div>

  <div class="iw-slider">
    <div class="iw-track">
      <div class="iw-thumb"><img class="iw-zoom" src="/images/NewYear/1.png" alt="Preview 1"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/NewYear/2.png" alt="Preview 2"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/NewYear/3.png" alt="Preview 3"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/NewYear/4.png" alt="Preview 4"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/NewYear/5.png" alt="Preview 5"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/NewYear/6.png" alt="Preview 6"></div>
    </div>
  </div>

  <div class="iw-body">
    <div class="iw-title">Animated Holiday Greeting Scene</div>
    <p class="iw-desc">Cảnh chúc mừng năm mới dạng hoạt họa 2D với hiệu ứng tuyết rơi, nhân vật và tương tác đếm ngược.</p>
  </div>

  <div class="iw-action">
    <a class="iw-btn" href="/NewYear/" target="_blank" rel="noopener">Open Demo</a>
  </div>
</div>

</div>
