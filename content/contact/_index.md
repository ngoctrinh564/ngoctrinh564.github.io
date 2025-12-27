---
title: "Contact"
description: "Liên hệ, góp ý hoặc trao đổi học thuật"
---

{{< rawhtml >}}
<style>
.contact-wrap{
  max-width:900px;
  margin-top:24px;
}

/* ==== LAYOUT ==== */
.contact-layout{
  display:grid;
  grid-template-columns:280px 1fr;
  gap:28px;
}

@media (max-width: 820px){
  .contact-layout{
    grid-template-columns:1fr;
  }
}

/* ==== LEFT PANEL ==== */
.contact-side{
  background:var(--entry);
  border:1px solid var(--border);
  border-radius:18px;
  padding:22px;
  box-shadow:0 10px 28px rgba(0,0,0,0.06);
}

.contact-side h3{
  margin-top:0;
  margin-bottom:14px;
  font-size:1.05rem;
}

.quick-contact{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.quick-btn{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px 16px;
  border-radius:12px;
  background:var(--theme);
  border:1px solid var(--border);
  text-decoration:none;
  font-weight:600;
  font-size:.9rem;
  color:var(--primary);
  transition:background .2s ease, transform .15s ease;
}

.quick-btn:hover{
  background:rgba(0,0,0,.04);
  transform:translateY(-1px);
}

/* ==== RIGHT PANEL (FORM) ==== */
.contact-form{
  background:var(--entry);
  border:1px solid var(--border);
  border-radius:18px;
  padding:28px;
  box-shadow:0 14px 36px rgba(0,0,0,0.08);
}

.contact-form h3{
  margin-top:0;
  margin-bottom:6px;
  font-size:1.1rem;
}

.contact-form p{
  margin-top:0;
  margin-bottom:18px;
  color:var(--secondary);
  font-size:.95rem;
}

.field{ margin-bottom:18px; }

.contact-form label{
  display:block;
  font-weight:600;
  margin-bottom:6px;
}

.contact-form input,
.contact-form textarea{
  width:100%;
  border:1px solid var(--border);
  border-radius:12px;
  padding:11px 14px;
  font-size:.95rem;
  background:var(--theme);
  color:var(--primary);
}

.contact-form textarea{
  min-height:150px;
  resize:vertical;
}

.form-actions{
  display:flex;
  align-items:center;
  gap:14px;
}

.contact-form button{
  border:none;
  border-radius:999px;
  padding:11px 28px;
  font-weight:700;
  font-size:.95rem;
  cursor:pointer;
  background:var(--primary);
  color:var(--theme);
}

.contact-form button:disabled{
  opacity:.6;
  cursor:not-allowed;
}

.form-status{
  font-size:.9rem;
  color:var(--secondary);
}
.form-status.success{ color:#2e7d32; }
.form-status.error{ color:#c62828; }
</style>

<div class="contact-wrap">
  <div class="contact-layout">

    <!-- LEFT: CONTACT INFO -->
    <aside class="contact-side">
      <h3>Thông tin liên hệ</h3>
      <div class="quick-contact">
        <a class="quick-btn" href="mailto:nn.trinh.insys@gmail.com">📧 nn.trinh.insys@gmail.com</a>
        <a class="quick-btn" href="tel:+84799120045">📞 +84 7xx xxx x45</a>
        <a class="quick-btn" href="https://github.com/ngoctrinh564" target="_blank" rel="noopener">💻 github.com/ngoctrinh564</a>
      </div>
    </aside>

    <!-- RIGHT: FORM -->
    <form id="contactForm" class="contact-form">
      <h3>Gửi tin nhắn</h3>
      <p>Dùng form nếu bạn muốn trao đổi học thuật hoặc góp ý nội dung.</p>

      <div class="field">
        <label for="name">Tên</label>
        <input id="name" name="name" type="text" required>
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" required>
      </div>

      <div class="field">
        <label for="message">Nội dung</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <div class="form-actions">
        <button type="submit">Gửi</button>
        <span id="formStatus" class="form-status"></span>
      </div>
    </form>

  </div>
</div>

<script>
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const button = form.querySelector('button');
let hideTimer = null;

function showStatus(text, type){
  if (hideTimer) clearTimeout(hideTimer);
  status.textContent = text;
  status.className = 'form-status ' + type;
  status.style.opacity = '1';
  status.style.transition = 'opacity .35s ease';

  hideTimer = setTimeout(() => {
    status.style.opacity = '0';
    setTimeout(() => {
      status.textContent = '';
      status.className = 'form-status';
    }, 400);
  }, 2000);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  button.disabled = true;
  const data = new FormData(form);

  try{
    const res = await fetch('https://formspree.io/f/maqyeqkp', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    });

    if(res.ok){
      form.reset();
      showStatus('✔️ Đã gửi thành công', 'success');
    }else{
      showStatus('❌ Gửi thất bại, thử lại sau', 'error');
    }
  }catch{
    showStatus('❌ Gửi thất bại, thử lại sau', 'error');
  }finally{
    button.disabled = false;
  }
});
</script>
{{< /rawhtml >}}
