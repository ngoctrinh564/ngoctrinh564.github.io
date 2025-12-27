---
title: "Bài 2: Client–Server trong Real-Time: Từ “Hỏi–Đáp” đến “Hội thoại”"
date: 2025-12-22T09:00:00+07:00
weight: 2
draft: false
author: "Ngọc Trinh"
tags: ["Java", "Networking", "Client-Server"]
categories: ["Lập trình mạng"]
summary: "Web truyền thống giống như người mất trí nhớ (Stateless), còn Real-Time là một cuộc hội thoại dài lâu (Stateful). Cùng soi Java Socket để hiểu sự khác biệt."
---

Ở **Bài 1**, chúng ta đã biết Real-Time sử dụng cơ chế **PUSH (Đẩy)** thay vì **PULL (Kéo)**.  
Vấn đề còn lại là: làm sao hai máy tính có thể giữ kết nối liên tục để “trò chuyện” với nhau?

Câu trả lời nằm ở sự chuyển dịch từ **Stateless (Không trạng thái)** sang **Stateful (Có trạng thái)**.

---

## 1. Stateless vs. Stateful – Câu chuyện về “trí nhớ”

### HTTP – “Kẻ mất trí nhớ” (Stateless)

Khi bạn truy cập một trang web thông thường:

- Trình duyệt gửi HTTP Request
- Server trả về nội dung
- Sau đó **đóng kết nối ngay lập tức**

Nếu 1 giây sau bạn bấm F5, với Server:
- bạn là một client “mới”
- server **không nhớ** bạn vừa ghé thăm

**Ưu điểm:** Server nhẹ, dễ scale.  
**Nhược điểm:** Không thể push tin nhắn real-time vì server không biết ai đang online.

---

### Real-Time – “Cuộc hội thoại dài lâu” (Stateful)

Trong Chat/Game:

- Server phải **nhớ** client nào đang kết nối
- Kết nối được giữ sống (keep-alive) cho đến khi client ngắt

---

## 2. WebSocket Handshake – “Cú bắt tay” chuyển từ HTTP sang Real-Time

![WebSocket Handshake Diagram](/images/2/websocket-handshake.jpg)
*Hình 1: Quá trình nâng cấp từ HTTP sang WebSocket*

~~~text
Quá trình diễn ra như sau:

1) Client mở lời
Gửi một HTTP Request bình thường nhưng kèm header:

Upgrade: websocket

→ “Đừng cắt kết nối, ta đổi sang WebSocket nhé!”

2) Server chấp nhận
Trả về:

101 Switching Protocols

→ “OK, từ giờ ta dùng WebSocket.”

3) Kết nối được giữ nguyên
- TCP connection không bị đóng
- HTTP hoàn thành vai trò
- Từ đây dữ liệu chạy hai chiều qua WebSocket
~~~

---

## 3. Soi code – Server Real-Time bằng Java Socket

![Java Socket Server](/images/2/java-socket-demo.jpg)
*Hình 2: Demo cấu trúc Server lắng nghe liên tục trong Java*

Khác với Web Controller chỉ chạy khi có request, Socket Server phải dùng vòng lặp vô tận để luôn “lắng nghe”.

~~~java
import java.io.*;
import java.net.*;

public class RealTimeServer {
    public static void main(String[] args) {
        int port = 8080;

        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server khởi động tại cổng " + port);

            // Vòng lặp vô tận: Server không bao giờ ngủ
            while (true) {
                // 1) Chờ Client kết nối (block)
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client mới: " + clientSocket.getInetAddress());

                // 2) Tạo thread riêng để phục vụ Client này
                new ClientHandler(clientSocket).start();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
~~~

Phân tích kỹ thuật:

~~~text
- while(true)  -> Server chạy liên tục
- accept()     -> chờ Client (blocking)
- clientSocket -> đại diện cho một kết nối sống (stateful)
~~~

---

## 4. Thách thức của mô hình Stateful

~~~text
Giữ kết nối thì mượt, nhưng Server phải trả giá:

- Mỗi Client = 1 socket
- 10.000 user online = 10.000 kết nối đang mở
- Server sập = toàn bộ client rớt cùng lúc (cần reconnect)

Giải pháp thực tế thường dùng:
- Thread Pool / Event Loop
- Non-blocking IO (NIO)
- Reconnect logic
- Load Balancer + Message Broker
~~~

---

## Tạm kết

~~~text
Từ HTTP “Hỏi–Đáp” (stateless), ta chuyển sang Real-Time “Hội thoại” (stateful).

Bài tiếp theo: Khi dữ liệu chạy liên tục, nên chọn TCP hay UDP?
~~~