---
title: "Bài 7: Callback → Promise → Async/Await: Tiến hóa để xử lý dòng dữ liệu Real-Time"
date: 2025-12-27T08:00:00+07:00
weight: 7
draft: false
author: "Ngọc Trinh"
tags: ["JavaScript", "ES6", "Async/Await", "Promise"]
categories: ["Lập trình JavaScript"]
summary: "Hành trình lột xác của JavaScript: Từ cơn ác mộng 'Callback Hell' đến sự thanh lịch của 'Async/Await'. Làm chủ luồng dữ liệu là chìa khóa của ứng dụng Real-Time."
---

Ở **Bài 6**, chúng ta đã thấy kiến trúc **Event-Driven** giúp JavaScript xử lý Real-Time hiệu quả bằng cơ chế **Non-blocking**.  
Tuy nhiên, khi hệ thống lớn dần lên, một vấn đề nghiêm trọng xuất hiện:

> **Làm sao kiểm soát thứ tự thực hiện khi mọi thứ đều bất đồng bộ?**

Trong ứng dụng Real-Time, dữ liệu không đến theo một luồng đơn giản.  
Ta thường phải xử lý chuỗi tác vụ **phụ thuộc**:

- Đăng nhập
- Lấy quyền người dùng
- Ghi log
- Phát thông báo

Nếu không có công cụ phù hợp, code sẽ nhanh chóng trở thành hỗn loạn.

---

## 1. Thời kỳ sơ khai – Callback và “Callback Hell”

Ngày xưa, cách phổ biến nhất để xử lý bất đồng bộ là dùng **Callback (Hàm gọi lại)**.

Nguyên lý cốt lõi:

~~~text
Hàm A chạy xong → gọi hàm B
~~~

Vấn đề xuất hiện khi các tác vụ **phụ thuộc chuỗi**.

Ví dụ quy trình đăng nhập:

1. Kiểm tra tài khoản  
2. Lấy quyền người dùng  
3. Ghi log truy cập  

Code thực tế rất nhanh biến thành cấu trúc lồng nhau:

![Callback Hell Code](/images/7/callback-hell.png)
*Hình 1: Callback Hell – code thụt vào trong, khó đọc, khó kiểm soát*

Nhược điểm:

- **Khó đọc**: mắt phải lần theo dấu `})` để tìm điểm kết thúc.
- **Khó bắt lỗi**: mỗi tầng callback phải tự xử lý lỗi, code lặp lại và dễ bỏ sót.

---

## 2. Thời kỳ quá độ – Promise (ES6 – 2015)

ES6 (2015) đưa vào **Promise** để “làm phẳng” luồng xử lý.

Thay vì **lồng**, ta **nối chuỗi** bằng `.then()` và gom lỗi về một chỗ bằng `.catch()`.

Ví dụ Promise chaining:

~~~javascript
verifyUser()
  .then((user) => getRoles(user))
  .then((roles) => logAccess(roles))
  .then(() => console.log("Thành công!"))
  .catch((error) => {
    console.error("Lỗi hệ thống:", error);
  });
~~~

Cải tiến:

- Code **thẳng hơn** so với callback lồng nhau
- Bắt lỗi tập trung tại `.catch()`

Hạn chế:

- Luồng suy nghĩ vẫn bị chia nhỏ bởi chuỗi `.then()`
- Debug không tự nhiên với người quen đọc code tuyến tính

---

## 3. Kỷ nguyên hiện đại – Async/Await (ES2017)

Async/Await ra đời (ES2017) để đưa bất đồng bộ về đúng “cách đọc” của lập trình viên:

> **Đọc code từ trên xuống dưới như code đồng bộ.**

Hãy xem hình so sánh cú pháp:

![Promise vs Async/Await](/images/7/promise-vs-async-code.png)
*Hình 2: Promise (trái) vs Async/Await (phải) – cùng bản chất, khác cách đọc*

Ví dụ code với Async/Await:

~~~javascript
// Kỷ nguyên Async/Await
async function login() {
  try {
    // await: tạm dừng hàm async cho đến khi Promise hoàn thành
    const user = await verifyUser();
    const roles = await getRoles(user);
    await logAccess(roles);

    console.log("Thành công!");
  } catch (error) {
    // Bắt lỗi tập trung bằng try/catch
    console.error("Lỗi:", error);
  }
}
~~~

---

## 4. Vì sao Async/Await là chuẩn mực cho Real-Time?

- **Tường minh**  
  Code chạy tuyến tính theo thứ tự, giống code đồng bộ.

- **Dễ debug**  
  Đặt breakpoint ngay tại dòng `await`, theo dõi biến trực tiếp.

- **Không hề block**  
  `await` không khóa Main Thread. Trong lúc chờ I/O (Database, Network), **Event Loop** vẫn xử lý các sự kiện khác.

~~~text
Non-blocking được giữ nguyên,
Async/Await chỉ thay đổi cú pháp để dễ đọc và dễ kiểm soát.
~~~

---

## Tạm kết

JavaScript đã tiến hóa theo 3 bước:

~~~text
Callback    → dễ viết ban đầu, nhưng nhanh thành “Callback Hell”
Promise     → làm phẳng luồng xử lý, bắt lỗi tập trung hơn
Async/Await → tuyến tính, dễ đọc, dễ debug, phù hợp Real-Time
~~~

Nhưng dù viết theo kiểu nào, vẫn có một “bộ máy” đứng sau điều phối:

- Khi nào callback được gọi?
- Khi nào Promise được resolve?
- Khi nào `await` xong để chạy tiếp?

Đó là **Event Loop**.