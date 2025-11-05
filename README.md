# 🧮 Sum Calculator App

Ứng dụng React nhập hai số, tính tổng và hiển thị kết quả.

## Cấu trúc thư mục

Dự án được tổ chức như sau:

```
sum-app/
├── public/            # Tài nguyên tĩnh (logo, favicon, ...)
├── src/               # Mã nguồn chính
│   ├── assets/        # Hình ảnh, biểu tượng dùng trong app
│   ├── components/    # Các component React (SumCalculator, ...)
│   ├── lib/           # Thư viện, hàm tiện ích dùng chung
│   ├── App.tsx        # Component gốc của ứng dụng
│   ├── main.tsx       # Điểm khởi tạo ứng dụng React
│   ├── index.css      # CSS tổng cho app
│   ├── App.css        # CSS riêng cho App
├── index.html         # File HTML chính
├── package.json       # Thông tin, script, dependency dự án
├── tailwind.config.cjs# Cấu hình Tailwind CSS
├── postcss.config.cjs # Cấu hình PostCSS
├── vite.config.ts     # Cấu hình Vite
├── tsconfig*.json     # Cấu hình TypeScript
└── README.md          # Tài liệu hướng dẫn
```

> **Lưu ý:**
> - Mã nguồn React nằm trong `src/`.
> - Các component mở rộng thêm đặt trong `src/components/`.
> - Tài nguyên tĩnh (ảnh, svg) đặt ở `public/` hoặc `src/assets/`.

## Cài đặt & chạy
```bash
npm install
npm run dev
```
Truy cập [http://localhost:5173](http://localhost:5173)

## Sử dụng
Nhập hai số, nhấn **Calculate Sum**, xem kết quả hoặc lỗi bên dưới.

## Build
```bash
npm run build
npm run preview
```



