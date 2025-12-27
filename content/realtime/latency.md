---
title: "Bài 4: Latency (Độ trễ) – Vì sao mạng mạnh mà Game vẫn Lag?"
date: 2025-12-24T08:00:00+07:00
weight: 4
draft: false
author: "Ngọc Trinh"
tags: ["Networking", "Latency", "Performance"]
categories: ["Mạng Máy Tính"]
summary: "Phân biệt Băng thông (Bandwidth) và Độ trễ (Latency). Vì sao trong Real-Time, phản hồi nhanh quan trọng hơn tốc độ tải?"
---

Bạn vừa nâng cấp gói Internet tốc độ cao.  
Tải phim 4K chỉ mất vài phút.  

Nhưng khi vào game hoặc gọi video:
- nhân vật phản hồi chậm  
- giật, lag, delay  

Tại sao?

Vì bạn đang **nhầm lẫn giữa hai khái niệm cốt lõi của mạng máy tính**:  
**Bandwidth (Băng thông)** và **Latency (Độ trễ)**.

Trong Real-Time:
> **Bandwidth là vua, nhưng Latency mới là hoàng hậu quyết định trải nghiệm.**

---

## 1. Bandwidth vs. Latency – Quy luật đường cao tốc

![Bandwidth vs Latency Diagram](/images/4/bandwidth-vs-latency.jpg)
*Hình 1: Đường rộng chưa chắc đi nhanh – Latency mới quyết định tốc độ đến nơi*

### Bandwidth – Độ rộng của đường

- **Định nghĩa:** Lượng dữ liệu tối đa truyền trong 1 giây (Mbps)
- **Ẩn dụ:** Độ rộng của con đường
- **Tác dụng:**  
  - Download file lớn  
  - Xem video 4K  
  - Streaming buffer dài

Bandwidth **không quyết định phản hồi nhanh hay chậm**.

---

### Latency – Thời gian di chuyển

- **Định nghĩa:**  
  Thời gian gói tin đi từ Client → Server → quay lại  
  (Round Trip Time – RTT, đơn vị ms)

- **Ẩn dụ:**  
  Giới hạn tốc độ trên đường

Dù đường 8 làn (Bandwidth cao) nhưng giới hạn 10 km/h → vẫn tới muộn.

👉 **Real-Time sống chết bởi Latency, không phải Bandwidth.**

---

## 2. Giải phẫu một gói tin – Vì sao lại có độ trễ?

Gõ lệnh:

~~~text
ping google.com
~~~

Kết quả `time=xx ms` chính là **Latency thực tế**.

![Ping Command Example](/images/4/ping-cmd-demo.png)
*Hình 2: Ping thể hiện độ trễ Round Trip*

Latency = tổng của 4 thành phần:

~~~text
Latency =
Propagation Delay
+ Transmission Delay
+ Processing Delay
+ Queuing Delay
~~~

### 1. Propagation Delay – Trễ lan truyền
- Giới hạn vật lý
- Tốc độ ánh sáng trong cáp quang là hữu hạn
- Việt Nam → Mỹ luôn chậm hơn Việt Nam → Singapore

---

### 2. Transmission Delay – Trễ truyền dẫn
- Thời gian đẩy bit dữ liệu vào đường truyền
- Gói càng lớn → trễ càng cao

---

### 3. Processing Delay – Trễ xử lý
- Router / Server cần thời gian đọc header, định tuyến
- Thường nhỏ, nhưng cộng dồn vẫn đáng kể

---

### 4. Queuing Delay – Trễ hàng đợi (nguy hiểm nhất)
- Router bị nghẽn
- Gói tin phải xếp hàng chờ
- Nguyên nhân chính gây **lag đột ngột**

👉 Đây là thứ khiến game “đang mượt tự nhiên đứng hình”.

---

## 3. Ngưỡng Latency trong Real-Time

Không tồn tại Latency = 0.  
Câu hỏi đúng là: **bao nhiêu là chấp nhận được?**

~~~text
< 30ms      : Tuyệt vời – gần như offline
30–100ms   : Tốt – Chat, Web ổn
100–200ms  : Bắt đầu khó chịu – Game, Voice delay
> 200ms    : Tệ – Real-Time gần như vỡ trận
~~~

---

## 4. Jitter – Kẻ thù giấu mặt

Bạn có thể có:
- Ping trung bình 30ms
- nhưng vẫn lag

Thủ phạm là **Jitter**.

**Jitter** = độ dao động của Latency.

~~~text
Ví dụ:
30ms → 150ms → 40ms → 200ms → 30ms
~~~

Hệ quả:
- Video call vỡ hình
- Voice méo tiếng
- Game giật thất thường

👉 **Ping cao nhưng ổn định** (100ms đều)  
đôi khi **dễ xử lý hơn ping thấp nhưng jitter cao**.

---

## Tạm kết – Kết thúc Cụm 1: Mạng Máy Tính

Qua 4 bài, chúng ta đã nắm trọn nền tảng Real-Time:

~~~text
1. Push vs Pull – tư duy vận chuyển
2. Stateful Server – giữ kết nối sống
3. TCP vs UDP – chọn đúng giao thức
4. Latency & Jitter – giới hạn vật lý
~~~

Nhưng để hiện thực Real-Time trên trình duyệt, ta cần:
- một ngôn ngữ **đơn luồng**
- nhưng xử lý **hàng nghìn sự kiện đồng thời**

Đó là **JavaScript**.