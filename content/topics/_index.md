---
title: "Topics"
description: "Danh mục nội dung"
---

{{< rawhtml >}}
<style>
  .topics-grid{
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:14px;
    margin-top:14px;
  }
  .topics-card{
    display:block;
    background:var(--entry);
    border:1px solid var(--border);
    border-radius:16px;
    padding:16px 16px;
    text-decoration:none;
    box-shadow:0 12px 30px rgba(0,0,0,0.08);
    transition:transform .14s ease, box-shadow .14s ease, border-color .14s ease;
  }
  .topics-card:hover{
    transform:translateY(-2px);
    box-shadow:0 18px 44px rgba(0,0,0,0.10);
    border-color:rgba(0,0,0,0.12);
  }
  .topics-head{
    display:flex;
    align-items:center;
    gap:12px;
    margin-bottom:8px;
  }
  .topics-icon{
    width:40px;
    height:40px;
    border-radius:12px;
    background:rgba(0,0,0,0.04);
    display:flex;
    align-items:center;
    justify-content:center;
    flex:0 0 auto;
  }
  .topics-title{
    font-weight:700;
    font-size:1rem;
    color:var(--primary);
    line-height:1.2;
  }
  .topics-desc{
    color:var(--secondary);
    font-size:.92rem;
    line-height:1.55;
  }
  .topics-subtitle{
    margin-top:22px;
    margin-bottom:10px;
    font-weight:700;
    font-size:1.05rem;
  }

  .topics-chips{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    margin-top:10px;
  }
  .topics-chip{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:9px 12px;
    border-radius:999px;
    background:var(--entry);
    border:1px solid var(--border);
    text-decoration:none;
    color:var(--secondary);
    font-size:.92rem;
    box-shadow:0 10px 26px rgba(0,0,0,0.06);
    transition:transform .14s ease, box-shadow .14s ease, border-color .14s ease, color .14s ease;
  }
  .topics-chip:hover{
    transform:translateY(-1px);
    box-shadow:0 16px 36px rgba(0,0,0,0.09);
    border-color:rgba(0,0,0,0.12);
    color:var(--primary);
  }
  .topics-chip img{
    width:18px;
    height:18px;
    display:block;
  }

  @media (max-width: 900px){
    .topics-grid{ grid-template-columns:1fr; }
  }
</style>
{{< /rawhtml >}}

## Nội dung

{{< rawhtml >}}
<div class="topics-grid">

  <a class="topics-card" href='{{< ref "realtime/_index.md" >}}'>
    <div class="topics-head">
      <div class="topics-icon" aria-hidden="true">
        <img src="https://cdn.simpleicons.org/webrtc" alt="WebRTC" width="22" height="22" loading="lazy" decoding="async">
      </div>
      <div class="topics-title">Real-Time Communications</div>
    </div>
    <div class="topics-desc">Kiến trúc, tư duy và cơ chế vận hành hệ thống thời gian thực.</div>
  </a>

  <a class="topics-card" href='{{< ref "languages/_index.md" >}}'>
    <div class="topics-head">
      <div class="topics-icon" aria-hidden="true">
        <img src="https://cdn.simpleicons.org/codeforces" alt="Languages" width="22" height="22" loading="lazy" decoding="async">
      </div>
      <div class="topics-title">Languages</div>
    </div>
    <div class="topics-desc">Danh sách và phân tích ngôn ngữ theo góc nhìn kỹ sư.</div>
  </a>

  <a class="topics-card" href='{{< ref "frameworks/_index.md" >}}'>
    <div class="topics-head">
      <div class="topics-icon" aria-hidden="true">
        <img src="https://cdn.simpleicons.org/stackblitz" alt="Frameworks" width="22" height="22" loading="lazy" decoding="async">
      </div>
      <div class="topics-title">Frameworks</div>
    </div>
    <div class="topics-desc">Core concepts, trade-offs, khi nào nên dùng và không nên dùng.</div>
  </a>

  <a class="topics-card" href='{{< ref "architecture/_index.md" >}}'>
    <div class="topics-head">
      <div class="topics-icon" aria-hidden="true">
        <img src="https://cdn.simpleicons.org/diagramsdotnet" alt="Architecture" width="22" height="22" loading="lazy" decoding="async">
      </div>
      <div class="topics-title">Architecture</div>
    </div>
    <div class="topics-desc">Tư duy kiến trúc hệ thống, pattern và so sánh giải pháp.</div>
  </a>

  <a class="topics-card" href='{{< ref "practice/_index.md" >}}'>
    <div class="topics-head">
      <div class="topics-icon" aria-hidden="true">
        <img src="https://cdn.simpleicons.org/githubactions" alt="Practice" width="22" height="22" loading="lazy" decoding="async">
      </div>
      <div class="topics-title">Practice</div>
    </div>
    <div class="topics-desc">Bài thực hành có mục tiêu, rõ cấu trúc, ưu tiên bản chất vấn đề.</div>
  </a>

</div>
{{< /rawhtml >}}

## Phân loại

{{< rawhtml >}}
<style>
  .simple-tags{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    margin-top:8px;
  }
  .simple-tag{
    display:inline-block;
    padding:6px 12px;
    font-size:0.9rem;
    color:var(--secondary);
    background:var(--entry);
    border:1px solid var(--border);
    border-radius:999px;
    text-decoration:none;
    transition:color .15s ease, border-color .15s ease, background .15s ease;
  }
  .simple-tag:hover{
    color:var(--primary);
    border-color:rgba(0,0,0,0.15);
    background:rgba(0,0,0,0.03);
  }
</style>

<div class="simple-tags">
  <a class="simple-tag" href="/tags/">Tags</a>
  <a class="simple-tag" href="/categories/">Categories</a>
</div>
{{< /rawhtml >}}
