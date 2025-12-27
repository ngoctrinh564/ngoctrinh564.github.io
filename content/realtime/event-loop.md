---
title: "Bài 8: Event Loop – Trái tim vận hành của JavaScript"
date: 2025-12-28T08:00:00+07:00
weight: 8
draft: false
author: "Ngọc Trinh"
tags: ["JavaScript", "Event Loop", "Node.js"]
categories: ["Cơ chế hoạt động"]
summary: "JavaScript chỉ có một luồng xử lý, nhưng vẫn chạy Real-Time mượt mà. Bí mật nằm ở Event Loop – bộ điều phối trung tâm của toàn bộ hệ thống."
---

Ở **Bài 7**, chúng ta đã giải quyết được vấn đề **viết code bất đồng bộ cho dễ đọc** bằng Async/Await.  
Nhưng vẫn còn một câu hỏi nền tảng hơn:

> Nếu JavaScript chỉ có **1 luồng duy nhất**,  
> thì **ai** quyết định khi nào callback được chạy?  
> **ai** đánh thức đoạn code sau `await`?

Câu trả lời nằm ở **Event Loop** – cơ chế cốt lõi giữ cho JavaScript không bao giờ bị treo.

---

## 1. JavaScript không chỉ là ngôn ngữ

JavaScript **không tự chạy một mình**.  
Nó luôn chạy bên trong một **Runtime** (Browser hoặc Node.js).

![JavaScript Runtime Architecture](/images/8/js-runtime-architecture.jpg)
*Hình 1: Kiến trúc tổng thể của JavaScript Runtime*

Runtime này gồm **3 thành phần chính**:

---

### Call Stack – Nơi code thực sự chạy

- Chỉ có **1 Call Stack**
- Chạy theo nguyên tắc **LIFO (Vào sau – ra trước)**
- Mỗi hàm được gọi → đẩy vào Stack
- Chạy xong → bật ra

👉 Nếu Stack bị kẹt → **toàn bộ app đứng hình**

---

### Web APIs / Node APIs – Hậu phương xử lý

- Không thuộc JavaScript Engine
- Do Browser / Node.js cung cấp
- Xử lý:
  - Timer (`setTimeout`)
  - Network (`fetch`, socket)
  - I/O (File, DB)

👉 Chạy **đa luồng**, không block Stack

---

### Callback Queue – Phòng chờ

- Khi Web APIs xử lý xong
- Callback được đưa vào **hàng đợi**
- Chờ đến lượt được thực thi

---

## 2. Event Loop là ai?

**Event Loop không chạy code nghiệp vụ.**  
Nó chỉ làm một vòng lặp vô hạn:

~~~text
1. Call Stack có trống không?
2. Nếu trống → Queue có task không?
3. Nếu có → đưa task lên Stack
~~~

Event Loop giống như **người điều phối giao thông**:
- Không lái xe
- Không sửa xe
- Chỉ quyết định **ai được đi tiếp**

---

## 3. Vì sao setTimeout(0) vẫn chạy sau?

Ví dụ kinh điển:

~~~javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
~~~

Kết quả:

~~~text
A
C
B
~~~

![Event Loop Flow](/images/8/event-loop-flow.jpg)
*Hình 2: Luồng di chuyển của code qua Event Loop*

### Giải thích từng bước

1. `console.log("A")`  
   → chạy ngay trong Call Stack

2. `setTimeout(...)`  
   → chuyển sang Web APIs  
   → xong → callback vào Queue

3. `console.log("C")`  
   → tiếp tục chạy trong Stack

4. Stack rỗng  
   → Event Loop lấy callback từ Queue  
   → in ra `"B"`

👉 `setTimeout(0)` **không có nghĩa là chạy ngay**  
👉 Nó chỉ có nghĩa là **được xếp hàng sớm nhất**

---

## 4. Event Loop & Async/Await

Khi bạn viết:

~~~javascript
const data = await fetchData();
~~~

Thực tế xảy ra:

1. `fetchData()` được giao cho Web APIs
2. Call Stack **được giải phóng**
3. Event Loop tiếp tục xử lý việc khác
4. Khi Promise resolve:
   - Callback vào Queue
   - Event Loop đưa lại lên Stack
   - Code tiếp tục chạy

👉 `await` **không block**
👉 Nó chỉ **tạm dừng logic**, không dừng luồng

---

## 5. Bài học sống còn cho Real-Time

Hiểu Event Loop giúp tránh lỗi chí mạng:

### ❌ Block Event Loop
- Vòng lặp nặng
- Xử lý CPU lớn
- Logic chạy lâu trên Stack

### ✅ Luôn giữ Stack trống
- Dùng async I/O
- Đẩy việc nặng sang background
- Chia nhỏ tác vụ

~~~text
Event Loop khỏe → Chat mượt, Game mượt
Event Loop nghẽn → Lag toàn hệ thống
~~~

---

## Tạm kết

Event Loop là **trái tim của JavaScript**:

- Điều phối toàn bộ bất đồng bộ
- Giữ ứng dụng không bao giờ treo
- Giúp Real-Time hoạt động mượt mà

~~~text
Async/Await = cú pháp
Event-Driven = tư duy
Event Loop = bộ điều phối trung tâm
~~~

Đến đây, chúng ta đã có đủ kiến thức để trả lời câu hỏi cuối cùng:

> Khi nào dùng HTTP?  
> Khi nào bắt buộc dùng WebSocket?