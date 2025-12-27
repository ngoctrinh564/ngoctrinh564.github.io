---
title: "Bài 6: Event-Driven Programming: Lắng nghe thay vì chờ đợi"
date: 2025-12-26T08:00:00+07:00
weight: 6
draft: false
author: "Ngọc Trinh"
tags: ["JavaScript", "Architecture", "Event-Driven"]
categories: ["Tư duy Lập trình"]
summary: "Tại sao CPU phải tốn công hỏi đi hỏi lại 'Có tin nhắn chưa'? Hãy để Sự kiện (Event) đánh thức nó. Khám phá kiến trúc cốt lõi của Node.js."
---

Ở **Bài 5**, chúng ta đã thấy JavaScript xử lý Real-Time hiệu quả nhờ **Non-blocking I/O**.  
Nhưng một câu hỏi quan trọng vẫn còn bỏ ngỏ:

> Nếu chương trình **không đứng chờ**, làm sao nó biết **khi nào công việc hoàn thành** để quay lại xử lý?

Câu trả lời nằm ở kiến trúc cốt lõi của Node.js và nhiều hệ thống hiện đại:  
**Event-Driven Programming (Lập trình hướng sự kiện).**

---

## 1. Polling vs. Event-Driven – Hai tư duy đối lập

![Polling vs Event-Driven Diagram](/images/6/polling-vs-event-driven-diagram.jpg)
*Hình 1: Polling lãng phí CPU, Event-Driven chỉ hoạt động khi có việc*

---

### Polling – Vòng lặp hỏi liên tục (Busy Waiting)

Trong lập trình truyền thống, để kiểm tra dữ liệu mới, ta thường thấy:

~~~text
while (true) {
    checkSomething();
}
~~~

Cách hoạt động:
- CPU liên tục hỏi: “Có dữ liệu chưa?”
- Dù **không có gì xảy ra**, CPU vẫn chạy

Hệ quả:
- CPU luôn ở trạng thái 100%
- Lãng phí tài nguyên
- Không phù hợp hệ thống Real-Time lớn

---

### Event-Driven – Đánh thức bằng sự kiện

Event-Driven đảo ngược hoàn toàn tư duy:

- Chương trình **đăng ký lắng nghe**
- CPU **ngủ (idle)** khi không có việc
- Khi có sự kiện → hệ thống **đánh thức** CPU xử lý

Nguyên lý nổi tiếng:

> **Don’t call us, we’ll call you.**  
> (Đừng gọi cho chúng tôi – khi cần, chúng tôi sẽ gọi bạn)

---

## 2. Giải phẫu một Sự kiện (Anatomy of an Event)

![Event Architecture](/images/6/event-architecture.jpg)
*Hình 2: Luồng xử lý của một sự kiện trong hệ thống Event-Driven*

Một sự kiện luôn gồm **3 thành phần rõ ràng**:

### 1. Event Emitter – Nguồn phát
- Đối tượng theo dõi trạng thái
- Ví dụ:
  - `Socket` (có dữ liệu đến)
  - `HTTP Server` (có request)

---

### 2. Event – Tên sự kiện
- Một định danh (string)
- Ví dụ:
  - `"message"`
  - `"connect"`
  - `"error"`

---

### 3. Event Handler – Hàm xử lý
- Callback function
- **Chỉ chạy khi sự kiện xảy ra**
- Không block luồng chính

---

## 3. Ví dụ thực tế – Socket.io trong Chat App

~~~javascript
// 1. EVENT EMITTER: socket
socket.on('chat-message', (msg) => {

    // 2. EVENT: 'chat-message'
    // 3. EVENT HANDLER: chỉ chạy khi có tin nhắn
    console.log("Đã nhận tin nhắn:", msg);
    saveToDatabase(msg);

});

// Dòng này chạy ngay lập tức
console.log("Server đang lắng nghe...");
~~~

Phân tích:
- Server **không đứng chờ** tin nhắn
- Khi có message → callback được kích hoạt
- CPU chỉ làm việc **khi cần thiết**

---

## 4. Vì sao Real-Time bắt buộc Event-Driven?

Đặc thù Real-Time:
- Sự kiện xảy ra **ngẫu nhiên**
- Có thể **dồn dập (burst traffic)**
- Không thể đoán trước thời điểm

So sánh:

~~~text
Polling:
- Hỏi mỗi 1 giây
- Trễ tối đa 1 giây

Event-Driven:
- Sự kiện xảy ra → xử lý ngay
- Độ trễ gần như 0
~~~

Ứng dụng bắt buộc Event-Driven:
- Chat
- Game Online
- Sàn chứng khoán
- Notification System

---

## Tạm kết

Event-Driven Programming là **trái tim của Node.js**:

- CPU không bị lãng phí
- Xử lý hàng triệu kết nối
- Phản hồi tức thì khi có sự kiện

~~~text
Polling  = hỏi liên tục
Event    = lắng nghe và phản hồi
~~~

Tuy nhiên, Event-Driven cũng sinh ra một vấn đề lớn:
- Sự kiện gọi sự kiện
- Callback lồng callback
- Code rối như mê cung

Đó là **Callback Hell**.