---
title: "Realtime"
description: "Real-Time Communications – Kiến trúc, Tư duy và Cơ chế vận hành"
---

## Tổng quan

Real-Time Communications không đơn thuần là “chat nhanh”.

Đó là tập hợp các vấn đề liên ngành:
- Hạ tầng mạng (Latency, TCP/UDP, Push vs Pull)
- Kiến trúc Client–Server
- Cơ chế vận hành của JavaScript Runtime
- Quyết định công nghệ (HTTP, WebSocket, SSE)

Series này được xây dựng theo lộ trình tư duy nhằm giúp:
- Hiểu bản chất hệ thống, không học mẹo
- Hiểu vì sao công nghệ tồn tại, không chỉ biết dùng
- Ra quyết định kiến trúc đúng cho ứng dụng Real-Time

---

## Cụm 1 – Tư duy Mạng máy tính

Trước khi viết code Real-Time, cần hiểu giới hạn vật lý của mạng.

<details>
<summary><strong>📂 Mở danh sách bài viết</strong></summary>

- [Bài 1: Real-Time Communications là gì?]({{< relref "rtc-la-gi.md" >}})
- [Bài 2: Client–Server trong Real-Time]({{< relref "client-server.md" >}})
- [Bài 3: TCP và UDP trong Real-Time]({{< relref "tcp-udp.md" >}})
- [Bài 4: Latency – kẻ thù số 1 của Real-Time]({{< relref "latency.md" >}})

</details>

Mục tiêu:
- Hiểu Push vs Pull
- Hiểu vì sao Latency quan trọng hơn Bandwidth
- Chọn đúng giao thức truyền thông

---

## Cụm 2 – Tư duy JavaScript & xử lý thời gian thực

Real-Time trên Web không thể tách rời JavaScript Runtime.

<details>
<summary><strong>📂 Mở danh sách bài viết</strong></summary>

- [Bài 5: JavaScript đơn luồng & Real-Time]({{< relref "js-single-thread.md" >}})
- [Bài 6: Event-Driven Programming]({{< relref "event-driven.md" >}})
- [Bài 7: Callback → Promise → Async/Await]({{< relref "async-await.md" >}})
- [Bài 8: Event Loop – Trái tim vận hành JavaScript]({{< relref "event-loop.md" >}})

</details>

Mục tiêu:
- Hiểu vì sao JS đơn luồng vẫn xử lý hàng ngàn kết nối
- Nắm vững Non-blocking và Event Loop
- Viết code Real-Time không block hệ thống

---

## Cụm 3 – Tổng hợp & Quyết định kiến trúc

Biết công nghệ là chưa đủ – phải biết khi nào dùng cái gì.

<details>
<summary><strong>📂 Mở danh sách bài viết</strong></summary>

- [Bài 9: HTTP vs. WebSocket – Cuộc chiến cuối cùng & Lời kết]({{< relref "http-vs-realtime.md" >}})

</details>

Mục tiêu:
- Tránh lạm dụng WebSocket
- Ra quyết định kiến trúc đúng ngữ cảnh
- Tổng hợp toàn bộ tư duy Real-Time

---

## Dành cho ai?

Series này phù hợp nếu bạn:
- Học Lập trình mạng
- Làm Backend hoặc Fullstack
- Muốn hiểu bản chất Real-Time thay vì học framework

Không phù hợp nếu:
- Chỉ tìm tutorial copy–paste
- Không quan tâm kiến trúc hệ thống

---

## Lộ trình đề xuất

Network -> Runtime -> Architecture  
Hiểu mạng -> Hiểu máy -> Chọn giải pháp

---

## Ghi chú

Toàn bộ series được viết theo nguyên tắc:
- Không giấu độ phức tạp
- Không thần thánh hóa công nghệ
- Ưu tiên tư duy hệ thống hơn cú pháp

---

End of Realtime Series Index
