---
title: "Project"
description: "Các project đã thực hiện và các web demo thú vị"
---

## A. Project

<style>
/* ===== Featured Project (A) ===== */
.pa-wrap{ margin-top:24px; }

/* Card A: 1 cột (không dùng grid 2 cột) */
.pa-card{
  background:var(--entry);
  border-radius:18px;
  box-shadow:0 14px 40px rgba(0,0,0,.08);
  overflow:hidden;
  display:flex;
  flex-direction:column;
}

/* Ảnh chính */
.pa-main{
  width:100%;
  aspect-ratio:16 / 9;
  overflow:hidden;
  background:#000;
}
.pa-main img{
  width:100%;
  height:100%;
  object-fit:cover;
  cursor:zoom-in;
  display:block;
}

/* Slider ảnh phụ (15 ảnh) */
.pa-slider{ padding:14px; }
.pa-track{
  display:flex;
  gap:12px;
  overflow-x:auto;
  scroll-snap-type:x mandatory;
  -webkit-overflow-scrolling:touch;
}
.pa-track::-webkit-scrollbar{ height:6px; }
.pa-track::-webkit-scrollbar-thumb{
  background:rgba(0,0,0,.25);
  border-radius:6px;
}
.pa-thumb{
  flex:0 0 160px;
  aspect-ratio:16 / 9;
  scroll-snap-align:start;
  border-radius:10px;
  overflow:hidden;
  background:#000;
}
.pa-thumb img{
  width:100%;
  height:100%;
  object-fit:cover;
  cursor:zoom-in;
  display:block;
}

/* Nội dung */
.pa-body{ padding:18px; }
.pa-title{
  font-size:1.25rem;
  font-weight:800;
  margin:0 0 8px 0;
  cursor:pointer;
}
.pa-desc{
  margin:0;
  color:var(--secondary);
  line-height:1.6;
  cursor:pointer;
}
.pa-meta{
  margin-top:12px;
  font-size:.9rem;
  color:var(--secondary);
}

/* Action */
.pa-action{
  padding:16px 18px;
  border-top:1px solid rgba(0,0,0,.06);
  display:flex;
  justify-content:flex-end;
  gap:12px;
}
.pa-btn{
  padding:10px 18px;
  border-radius:12px;
  background:var(--primary);
  color:#fff;
  font-size:.9rem;
  text-decoration:none;
  border:0;
  cursor:pointer;
}
.pa-btn.secondary{
  background:transparent;
  border:1px solid rgba(0,0,0,.18);
  color:inherit;
}
.pa-btn:hover{ opacity:.88; }

/* ===== Modal ===== */
.pa-modal{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.65);
  display:none;
  align-items:center;
  justify-content:center;
  z-index:10000;
}
.pa-modal.open{ display:flex; }
.pa-modal-box{
  background:var(--entry);
  max-width:960px;
  width:94vw;
  max-height:90vh;
  overflow:auto;
  border-radius:18px;
  padding:28px;
}
.pa-close{
  position:sticky;
  top:0;
  float:right;
  border:0;
  background:none;
  font-size:22px;
  cursor:pointer;
}
.pa-section{ margin-top:22px; }
.pa-section h3{ margin-bottom:10px; }
.pa-badges{ display:flex; flex-wrap:wrap; gap:8px; }
.pa-badge{
  padding:6px 12px;
  border-radius:999px;
  background:rgba(0,0,0,.06);
  font-size:.8rem;
}
</style>

<!-- ===== Modal: Project Detail ===== -->
<div class="pa-modal" id="pa-modal">
  <div class="pa-modal-box">
    <button class="pa-close" onclick="closeProjectModal()">✕</button>

  <h2>🚗 Driving License Training System</h2>
  <p>
    Ứng dụng web quản lý đào tạo giấy phép lái xe (GPLX) xây dựng trên nền tảng
    <strong>ASP.NET Core MVC</strong>, hỗ trợ toàn bộ vòng đời học viên:
    đăng ký, học tập, thi cử, cấp chứng chỉ và theo dõi tài chính.
  </p>

  <div class="pa-section">
    <h3>✨ Chức năng chính</h3>
    <ul>
      <li>Quản lý học viên, khóa học, hạng GPLX</li>
      <li>Quản lý kỳ thi lý thuyết & thực hành</li>
      <li>Dashboard quản trị, xuất báo cáo PDF</li>
      <li>Gửi email thông báo qua SMTP</li>
      <li>Xác thực ảnh chân dung bằng OpenCV</li>
      <li>Cookie-based authentication & phân quyền</li>
    </ul>
  </div>

  <div class="pa-section">
    <h3>🧰 Công nghệ sử dụng</h3>
    <div class="pa-badges">
      <span class="pa-badge">ASP.NET Core MVC</span>
      <span class="pa-badge">Entity Framework Core</span>
      <span class="pa-badge">SQL Server</span>
      <span class="pa-badge">OpenCvSharp</span>
      <span class="pa-badge">QuestPDF</span>
      <span class="pa-badge">Bootstrap</span>
    </div>
  </div>

  <div class="pa-section">
    <a class="pa-btn"
        href="https://github.com/ngoctrinh564/driving-license-training-system"
        target="_blank" rel="noopener">
      View Repository
    </a>
  </div>
  </div>
</div>

<div class="pa-modal" id="pa-gym-modal">
  <div class="pa-modal-box">
    <button class="pa-close" onclick="closeGymModal()">✕</button>

  <h2>🎯 Gym Management Web Application</h2>
  <p>
    Hệ thống quản lý phòng gym xây dựng trên nền tảng <strong>ASP.NET Core MVC</strong>,
    hỗ trợ quản lý hội viên, gói tập, thanh toán, thông báo và chatbot tư vấn tự động.
  </p>

  <div class="pa-section">
    <h3>✨ Chức năng chính</h3>
    <ul>
      <li>Quản lý tài khoản người dùng (Admin, Member, Staff, Trainer)</li>
      <li>Quản lý hội viên và gói tập (CRUD, theo dõi hạn sử dụng)</li>
      <li>Tích hợp thanh toán PayPal & VNPay</li>
      <li>Gửi thông báo và lưu lịch sử thông báo</li>
      <li>Gửi phản hồi và quản lý feedback</li>
      <li>Chatbot tư vấn gói tập tích hợp OpenAI</li>
    </ul>
  </div>

  <div class="pa-section">
    <h3>🧰 Công nghệ sử dụng</h3>
    <div class="pa-badges">
      <span class="pa-badge">ASP.NET Core MVC</span>
      <span class="pa-badge">Entity Framework Core</span>
      <span class="pa-badge">SQL Server</span>
      <span class="pa-badge">PayPal</span>
      <span class="pa-badge">VNPay</span>
      <span class="pa-badge">OpenAI API</span>
    </div>
  </div>

  <div class="pa-section">
    <a class="pa-btn"
        href="https://github.com/ngoctrinh564/courseproject-ltweb-gym"
        target="_blank" rel="noopener">
      View Repository
    </a>
  </div>
  </div>
</div>

<script>
function openGymModal(){
  document.getElementById("pa-gym-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeGymModal(){
  document.getElementById("pa-gym-modal").classList.remove("open");
  document.body.style.overflow = "";
}
</script>


<script>
function openProjectModal(){
  document.getElementById("pa-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeProjectModal(){
  document.getElementById("pa-modal").classList.remove("open");
  document.body.style.overflow = "";
}
</script>

<div class="pa-wrap">
  <div class="pa-card">

  <!-- Ảnh chính -->
  <div class="pa-main">
    <img class="iw-zoom"
          src="/images/project/gplx/main.png"
          alt="Driving License Training System">
  </div>

  <!-- 15 ảnh phụ -->
  <div class="pa-slider">
    <div class="pa-track">
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/1.png"  alt="GPLX 1"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/2.png"  alt="GPLX 2"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/3.png"  alt="GPLX 3"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/4.png"  alt="GPLX 4"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/5.png"  alt="GPLX 5"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/6.png"  alt="GPLX 6"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/7.png"  alt="GPLX 7"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/8.png"  alt="GPLX 8"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/9.png"  alt="GPLX 9"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/10.png" alt="GPLX 10"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/11.png" alt="GPLX 11"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/12.png" alt="GPLX 12"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/13.png" alt="GPLX 13"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/14.png" alt="GPLX 14"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gplx/15.png" alt="GPLX 15"></div>
    </div>
  </div>

  <!-- Nội dung -->
  <div class="pa-body">
    <div class="pa-title" onclick="openProjectModal()">
      Driving License Training System
    </div>

  <p class="pa-desc" onclick="openProjectModal()">
    Hệ thống quản lý đào tạo giấy phép lái xe (GPLX) xây dựng bằng ASP.NET Core MVC,
    hỗ trợ quản lý học viên, khóa học, kỳ thi, thanh toán và báo cáo.
  </p>

  <div class="pa-meta">
    Đồ án chuyên ngành · ASP.NET Core MVC · SQL Server · EF Core
  </div>
  </div>

  <!-- Action -->
  <div class="pa-action">
    <a class="pa-btn"
        href="https://github.com/ngoctrinh564/driving-license-training-system"
        target="_blank" rel="noopener">
      GitHub
    </a>
    <button class="pa-btn secondary" onclick="openProjectModal()">
      Chi tiết
    </button>
  </div>

  </div>
</div>

<div class="pa-wrap">
  <div class="pa-card">

  <!-- Ảnh chính -->
  <div class="pa-main">
    <img class="iw-zoom"
          src="/images/project/gym/main.png"
          alt="Hệ thống quản lý phòng Gym">
  </div>

  <!-- Slider ảnh phụ -->
  <div class="pa-slider">
    <div class="pa-track">
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/1.png"  alt="Gym 1"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/2.png"  alt="Gym 2"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/3.png"  alt="Gym 3"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/4.png"  alt="Gym 4"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/5.png"  alt="Gym 5"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/6.png"  alt="Gym 6"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/7.png"  alt="Gym 7"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/8.png"  alt="Gym 8"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/9.png"  alt="Gym 9"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/10.png" alt="Gym 10"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/11.png" alt="Gym 11"></div>
      <div class="pa-thumb"><img class="iw-zoom" src="/images/project/gym/12.png" alt="Gym 12"></div>
    </div>
  </div>

  <!-- Nội dung -->
  <div class="pa-body">
    <div class="pa-title" onclick="openGymModal()">
      Hệ thống quản lý phòng Gym
    </div>

  <p class="pa-desc" onclick="openGymModal()">
    Ứng dụng web quản lý phòng gym xây dựng bằng ASP.NET Core MVC, hỗ trợ quản lý
    hội viên, gói tập, thanh toán, thông báo và chatbot tư vấn.
  </p>

  <div class="pa-meta">
    Đồ án môn học · ASP.NET Core MVC · SQL Server · Thanh toán online
  </div>
  </div>

  <!-- Action -->
  <div class="pa-action">
    <a class="pa-btn"
        href="https://github.com/ngoctrinh564/courseproject-ltweb-gym"
        target="_blank" rel="noopener">
      GitHub
    </a>
    <button class="pa-btn secondary" onclick="openGymModal()">
      Chi tiết
    </button>
  </div>

  </div>
</div>

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
    <img class="iw-zoom" src="/images/noel/noel.png" alt="Hand Gesture Christmas Tree">
  </div>

  <div class="iw-slider">
    <div class="iw-track">
      <div class="iw-thumb"><img class="iw-zoom" src="/images/noel/noel2.png"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/noel/noel3.png"></div>
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
    <img class="iw-zoom" src="/images/3d/3d.png" alt="Hand Tracking Particle Shapes">
  </div>

  <div class="iw-slider">
    <div class="iw-track">
      <div class="iw-thumb"><img class="iw-zoom" src="/images/3d/3d2.png"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/3d/3d3.png"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/3d/3d4.png"></div>
      <div class="iw-thumb"><img class="iw-zoom" src="/images/3d/3d5.png"></div>
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
