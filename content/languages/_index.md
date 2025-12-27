+++
title = "Ngôn ngữ lập trình"
description = "Danh sách và phân tích các ngôn ngữ lập trình"
+++
{{< rawhtml >}}
<style>
/* ===== LANGUAGE CARDS ===== */
.lang-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));
  gap:18px;
  margin-top:16px;
}

.lang-card{
  display:block;
  background:linear-gradient(180deg, var(--entry), rgba(255,255,255,0.96));
  border:1px solid var(--border);
  border-radius:18px;
  padding:20px 22px;
  text-decoration:none;
  box-shadow:0 14px 40px rgba(0,0,0,0.08);
  transition:transform .15s ease, box-shadow .15s ease;
}

.lang-card:hover{
  transform:translateY(-3px);
  box-shadow:0 22px 55px rgba(0,0,0,0.12);
}

.lang-header{
  display:flex;
  align-items:center;
  gap:14px;
  margin-bottom:10px;
}

.lang-icon{
  width:42px;
  height:42px;
  border-radius:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:rgba(0,0,0,0.06);
  font-size:20px;
}

.lang-title{
  font-weight:700;
  font-size:1.05rem;
  color:var(--primary);
}

.lang-desc{
  color:var(--secondary);
  font-size:0.9rem;
  line-height:1.6;
  margin-bottom:12px;
}

/* ===== TAGS ===== */
.tag-group{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}

.tag{
  font-size:0.75rem;
  padding:4px 10px;
  border-radius:999px;
  background:rgba(0,0,0,0.05);
  color:var(--secondary);
}

/* ===== CATEGORY PILLS ===== */
.category-group{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:12px;
}

.category{
  background:var(--entry);
  border:1px solid var(--border);
  border-radius:999px;
  padding:7px 14px;
  font-size:0.85rem;
  color:var(--secondary);
  transition:background .15s ease;
}

.category:hover{
  background:rgba(0,0,0,0.04);
}
</style>
{{< /rawhtml >}}

## Ngôn ngữ

{{< rawhtml >}}
<div class="lang-grid">

<a class="lang-card" href='{{< ref "languages/python/_index.md" >}}'>
  <div class="lang-header">
    <div class="lang-icon" aria-hidden="true">
      <img
        src="https://cdn.simpleicons.org/python"
        alt="Python"
        width="26"
        height="26"
        loading="lazy"
        decoding="async"
        style="display:block;"
      />
    </div>
    <div class="lang-title">Python</div>
  </div>
  <div class="lang-desc">
    Ngôn ngữ đa dụng, mạnh về dữ liệu, tự động hóa và backend.
  </div>
  <div class="tag-group">
    <span class="tag">Data / AI</span>
    <span class="tag">Automation</span>
    <span class="tag">Backend</span>
  </div>
</a>

</div>
{{< /rawhtml >}}

## Phân loại

{{< rawhtml >}}
<div class="category-group">
  <span class="category">Web</span>
  <span class="category">Backend / Systems</span>
  <span class="category">Mobile</span>
  <span class="category">Data / AI</span>
  <span class="category">Functional</span>
  <span class="category">Game / Embedded</span>
</div>
{{< /rawhtml >}}
