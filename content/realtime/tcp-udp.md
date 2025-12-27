---
title: "Bài 3: TCP và UDP: Tại sao Real-Time lại “khó tính” khi chọn giao thức?"
date: 2025-12-23T08:00:00+07:00
weight: 3
draft: false
author: "Ngọc Trinh"
tags: ["Java", "Networking", "TCP/UDP"]
categories: ["Lập trình mạng"]
summary: "Một bên là 'Mr. Hoàn Hảo' kỹ tính, một bên là 'Thánh Tốc Độ' bất cần. Trong ứng dụng Real-Time, ai mới là vua?"
---

Trong Lập trình mạng, câu hỏi kinh điển luôn là: *“Sự khác biệt giữa TCP và UDP là gì?”*.

Nếu trả lời theo giáo trình:
- TCP **đảm bảo tin cậy**
- UDP **không đảm bảo**

Nhưng với dân làm **Real-Time**, cách nhìn thực tế hơn là:

> **TCP giống một ông quản thư già kỹ tính.  
> UDP giống một shipper Grab phóng nhanh vượt ẩu.**

Và trong Real-Time, **tốc độ thường quan trọng hơn sự hoàn hảo**.

---

## 1. Cuộc chiến phong cách: Cẩn trọng vs. Tốc độ

![TCP vs UDP Metaphor](/images/3/tcp-vs-udp-meme.jpg)
*Hình 1: TCP ưu tiên trọn vẹn dữ liệu, UDP ưu tiên tốc độ*

### TCP – “Mr. Hoàn Hảo”

TCP ám ảnh bởi việc **không được sai**:

1. **Bắt tay**  
   Phải thiết lập kết nối trước khi gửi (3-way handshake).

2. **Điểm danh từng gói**  
   Gửi gói 1 → chờ ACK → mới gửi gói 2.

3. **Sửa sai bằng mọi giá**  
   Nếu gói 2 bị mất → **dừng toàn bộ**, gửi lại cho đủ rồi mới tiếp tục.

Hệ quả:
- Dữ liệu đến nơi **đầy đủ, đúng thứ tự**
- Nhưng chỉ cần 1 gói trễ → **toàn bộ luồng bị chậm**

Phù hợp với:
- Web
- Email
- Chat văn bản
- Giao dịch tài chính

---

### UDP – “Kẻ nổi loạn”

UDP theo triết lý **Fire and Forget**:

1. Không bắt tay  
2. Không điểm danh  
3. Không sửa sai  

Gửi là gửi. Mất là mất.

Hệ quả:
- Tốc độ **rất nhanh**
- Có thể mất gói, lộn thứ tự

Phù hợp với:
- Livestream
- Gọi video/voice
- Game Online

---

## 2. Vì sao Real-Time (Game, Video) “ghét” TCP?

Giả sử bạn đang chơi game bắn súng:

- **TCP**  
  Một gói tin vị trí bị mất → TCP bắt game **đứng hình** để gửi lại → bạn chết.

- **UDP**  
  Mất gói → game giật nhẹ → **chơi tiếp ngay**.

Quy tắc cốt lõi trong Real-Time:

> **Thà mất dữ liệu cũ còn hơn chờ dữ liệu đúng.**

Đó là lý do UDP thống trị:
- Video Call
- Voice Chat
- Game thời gian thực

---

## 3. Soi code Java: TCP vs UDP khác nhau thế nào?

![Java TCP vs UDP](/images/3/java-tcp-udp-code.png)
*Hình 2: TCP là luồng (Stream), UDP là gói (Packet)*

### TCP – Giao tiếp theo luồng (Stream)

~~~java
// TCP: Phải kết nối trước
Socket socket = new Socket("localhost", 8080);

// Dữ liệu là dòng chảy liên tục
OutputStream output = socket.getOutputStream();
output.write("Hello TCP".getBytes());
~~~

Đặc điểm:
- Có kết nối
- Gửi liên tục
- Hệ điều hành đảm bảo thứ tự và độ tin cậy

---

### UDP – Giao tiếp theo gói (Packet)

~~~java
// UDP: Không cần kết nối
DatagramSocket socket = new DatagramSocket();

byte[] data = "Hello UDP".getBytes();

// Mỗi gói phải ghi rõ địa chỉ người nhận
DatagramPacket packet =
    new DatagramPacket(data, data.length, address, 8080);

socket.send(packet);
~~~

Đặc điểm:
- Không kết nối
- Mỗi gói độc lập
- Ứng dụng tự chịu trách nhiệm xử lý mất gói

---

## 4. Vậy Web Real-Time (WebSocket) dùng TCP hay UDP?

Một điểm dễ gây nhầm lẫn:

> **WebSocket chạy trên TCP, không phải UDP.**

Lý do:
- Ứng dụng Web ưu tiên **độ chính xác**
- Chat mất chữ → không chấp nhận
- Giá chứng khoán sai → thảm họa

Cách WebSocket “vá” nhược điểm TCP:
- Chỉ bắt tay **1 lần**
- Giữ kết nối **luôn mở**
- Giảm chi phí thiết lập kết nối lặp lại

Do đó:
- WebSocket = TCP + **persistent connection**
- Phù hợp Chat, Notification, Dashboard

---

## Tạm kết

Tóm gọn bằng 2 dòng:

~~~text
Cần độ chính xác (Web, Chat, Email) → TCP
Cần tốc độ (Game, Video, Voice)     → UDP
~~~

Nhưng dù dùng TCP hay UDP, cả hai đều có một kẻ thù chung:
- Không phải mất gói
- Không phải sai dữ liệu

Mà là **Latency (Độ trễ)**.