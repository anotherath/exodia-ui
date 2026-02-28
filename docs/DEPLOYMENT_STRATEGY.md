# 🚀 Exodia UI - Chiến lược Triển khai & Render (Next.js App Router)

Tài liệu này tóm tắt cách thiết lập kỹ thuật tối ưu cho từng loại trang trong dự án Exodia UI để đảm bảo tốc độ load (Performance), SEO và trải nghiệm Web3 mượt mà nhất.

---

## 🛠️ Quy tắc chung (Core Principles)

- **Mặc định là Server Components:** Mọi file trong `app/` là Server Component để tối ưu SEO và Bundle Size.
- **Chỉ dùng Client Components (`"use client"`) khi:** Cần dùng React Hooks (State, Effect), lắng nghe Event (Click, Change), hoặc tương tác trực tiếp với Ví (Wagmi/RainbowKit).

---

## 📄 Danh sách Trang & Phương thức Render

| Trang                    | File Path                | Kiểu Render            | Ghi chú kỹ thuật                                                                                              |
| :----------------------- | :----------------------- | :--------------------- | :------------------------------------------------------------------------------------------------------------ |
| **Trang Chủ**            | `app/page.tsx`           | **SSG (Static)**       | Gen lúc Build. Nội dung tĩnh cực nhanh. Các thành phần tương tác (Hero Actions) tách ra Client Component nhỏ. |
| **Giao dịch (Trade)**    | `app/trade/page.tsx`     | **Hybrid (SSR + CSR)** | Khung trang (Shell) là SSR. Charts & Wallet parts là CSR.                                                     |
| **Danh mục (Portfolio)** | `app/portfolio/page.tsx` | **Hybrid (SSR + CSR)** | Giao diện khung là SSR. Data & Privacy bọc bởi `WalletGuard` (CSR).                                           |
| **Không tìm thấy (404)** | `app/not-found.tsx`      | **SSG (Static)**       | Luôn sẵn sàng ở CDN. Không cần hỏi Server.                                                                    |
| **Lỗi hệ thống (500)**   | `app/error.tsx`          | **CSR (Client)**       | Cung cấp nút `reset()` để phục hồi trang mà không cần F5.                                                     |

---

## 🔐 Chiến lược bảo vệ bằng Ví (Web3 Guard)

Hiện tại hệ thống đang áp dụng cơ chế **Client-side Auth**:

1. Server render bộ khung UI (Header, Headers, Titles) - **Hiển thị tức thì**.
2. Client bọc các phần nhạy cảm/dữ liệu bằng `WalletGuard`.
3. Kiểm tra trạng thái ví:
   - Nếu chưa kết nối: Hiển thị màn hình **Access Restricted** ngay tại vùng dữ liệu.
   - Nếu đã kết nối: Render dữ liệu thực.

---

## 🌐 Lưu ý khi Host lên Vercel

- **Environment Variables:** Bắt buộc khai báo `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` trong dashboard của Vercel.
- **Edge Runtime:** Có thể cân nhắc dùng Edge Runtime cho các API route (nếu có) để giảm độ trễ (latency) khi gọi dữ liệu từ sàn giao dịch toàn cầu.

---

_Cập nhật lần cuối: 28/02/2026 bởi Antigravity_
