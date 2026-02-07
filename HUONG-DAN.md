# 📖 Hướng Dẫn Thay Đổi Nội Dung Website Running Blog

Chào mừng bạn! Tài liệu này sẽ hướng dẫn bạn cách thay đổi nội dung bài viết, sản phẩm và hình ảnh một cách dễ dàng mà **KHÔNG CẦN** phải sửa các file HTML phức tạp.

---

## 🎯 Cấu Trúc Thư Mục

```
running-blog/
├── index.html          # Trang chủ
├── blog.html           # Danh sách bài viết
├── post.html           # Chi tiết bài viết
├── products.html       # Danh sách sản phẩm
├── product.html        # Chi tiết sản phẩm
├── about.html          # Trang giới thiệu
├── contact.html        # Trang liên hệ
├── style.css           # File CSS (không cần sửa thường xuyên)
├── app.js              # Logic JavaScript (không cần sửa)
└── data.js             # ⭐ FILE QUAN TRỌNG - Chứa tất cả nội dung
```

---

## 📝 PHẦN 1: Thay Đổi Nội Dung Bài Viết

### Bước 1: Mở file `data.js`
Tất cả nội dung bài viết được lưu trong mảng `blogPosts` ở file `data.js`.

### Bước 2: Thêm bài viết mới
Copy đoạn code này và dán vào cuối mảng `blogPosts`:

```javascript
{
    id: 4,  // Tăng số ID lên 1
    title: "Tiêu đề bài viết mới của bạn",
    excerpt: "Đoạn trích ngắn giới thiệu về bài viết, khoảng 1-2 câu",
    image: "https://images.unsplash.com/photo-XXXXX?w=800&q=80",
    date: "7 Tháng 2, 2026",
    author: "Quốc Cường",
    content: `
        <h2>Tiêu đề chính 1</h2>
        <p>Đoạn văn bản của bạn ở đây...</p>
        
        <h2>Tiêu đề chính 2</h2>
        <p>Thêm nội dung nữa...</p>
        
        <ul>
            <li>Danh sách 1</li>
            <li>Danh sách 2</li>
        </ul>
    `
}
```

### Bước 3: Sửa bài viết có sẵn
- Tìm bài viết theo `id`
- Thay đổi `title`, `excerpt`, `content` theo ý muốn
- **Lưu ý:** Giữ nguyên cấu trúc `{ }` và dấu phẩy giữa các bài viết

### Bước 4: Xóa bài viết
- Tìm bài viết cần xóa theo `id`
- Xóa toàn bộ block từ `{` đến `}` kể cả dấu phẩy phía sau

---

## 🛍️ PHẦN 2: Thay Đổi Sản Phẩm

### Bước 1: Mở file `data.js`
Tất cả sản phẩm được lưu trong mảng `products`.

### Bước 2: Thêm sản phẩm mới
Copy đoạn code này và dán vào cuối mảng `products`:

```javascript
{
    id: 6,  // Tăng số ID lên 1
    name: "Tên sản phẩm mới",
    price: "1.500.000đ",
    image: "https://images.unsplash.com/photo-XXXXX?w=600&q=80",
    category: "Phụ kiện",
    description: `
        <h2>Mô tả sản phẩm</h2>
        <p>Giới thiệu về sản phẩm...</p>
        
        <h2>Tính năng nổi bật</h2>
        <ul>
            <li>Tính năng 1</li>
            <li>Tính năng 2</li>
        </ul>
    `
}
```

### Bước 3: Sửa giá sản phẩm
Tìm sản phẩm theo `id` và thay đổi giá trị trong `price`:
```javascript
price: "2.000.000đ",  // Đổi giá ở đây
```

---

## 🖼️ PHẦN 3: Thay Đổi Hình Ảnh

### Cách 1: Sử dụng hình ảnh từ Unsplash (Khuyên dùng)
1. Truy cập [https://unsplash.com](https://unsplash.com)
2. Tìm kiếm hình ảnh (ví dụ: "running", "shoes", "runner")
3. Click vào hình ảnh và copy URL
4. Thay thế vào phần `image` trong `data.js`:

```javascript
image: "https://images.unsplash.com/photo-XXXXX?w=800&q=80",
```

### Cách 2: Sử dụng hình ảnh từ máy tính
1. Tạo thư mục `images` trong folder `running-blog`
2. Copy hình ảnh vào thư mục `images`
3. Đổi đường dẫn trong `data.js`:

```javascript
image: "images/ten-hinh-anh.jpg",
```

### Thay đổi hình nền Hero Section (Trang chủ)
Mở file `index.html`, tìm dòng này:
```html
<img src="https://images.unsplash.com/photo-XXXXX?w=1600&q=80" alt="Running Hero" class="hero-bg">
```
Thay đổi URL trong `src="..."`.

---

## 🎨 PHẦN 4: Thay Đổi Màu Sắc

Nếu bạn muốn thay đổi màu chủ đạo của website:

1. Mở file `style.css`
2. Tìm đoạn `:root` ở đầu file
3. Thay đổi mã màu:

```css
:root {
    --primary-green: #27ae60;     /* Màu xanh lá chính */
    --primary-green-dark: #1e8449; /* Màu xanh đậm */
    --primary-red: #e74c3c;        /* Màu đỏ chính */
    --primary-red-dark: #c0392b;   /* Màu đỏ đậm */
}
```

**Gợi ý mã màu:**
- Xanh lá sáng: `#2ecc71`
- Xanh lá đậm: `#27ae60`
- Đỏ tươi: `#e74c3c`
- Đỏ đậm: `#c0392b`

---

## 📄 PHẦN 5: Thay Đổi Thông Tin Liên Hệ

### Thay đổi email, số điện thoại, địa chỉ:
1. Mở file `contact.html`
2. Tìm các dòng chứa email, số điện thoại, địa chỉ
3. Thay đổi nội dung giữa thẻ `<p>`:

```html
<p>your-email@example.com</p>
<p>+84 987 654 321</p>
<p>Thành phố Hồ Chí Minh, Việt Nam</p>
```

---

## 🚀 PHẦN 6: Xem Website

### Cách 1: Mở trực tiếp
- Double-click vào file `index.html`
- Trình duyệt sẽ tự động mở website

### Cách 2: Sử dụng Live Server (Khuyên dùng cho developer)
Nếu bạn sử dụng VS Code:
1. Cài extension "Live Server"
2. Right-click vào `index.html` → chọn "Open with Live Server"
3. Website sẽ tự động reload mỗi khi bạn lưu file

---

## ⚠️ LƯU Ý QUAN TRỌNG

### ✅ NÊN:
- Lưu file sau mỗi lần sửa (Ctrl + S)
- Refresh trình duyệt (F5) để xem thay đổi
- Backup file `data.js` trước khi sửa lớn
- Giữ nguyên cấu trúc `{ }`, `[ ]`, dấu phẩy

### ❌ KHÔNG NÊN:
- Xóa dấu phẩy, ngoặc nhọn, ngoặc vuông
- Sửa file `app.js` nếu không rành JavaScript
- Xóa file `style.css` hoặc `app.js`

---

## 🆘 Khắc Phục Sự Cố

### Website không hiển thị bài viết/sản phẩm
- Kiểm tra lại dấu phẩy trong `data.js`
- Kiểm tra console của trình duyệt (F12) xem có lỗi không

### Hình ảnh không hiển thị
- Kiểm tra lại URL hình ảnh
- Đảm bảo đường dẫn đúng (tương đối hoặc tuyệt đối)

### Màu sắc không thay đổi
- Làm mới trình duyệt với Ctrl + Shift + R (clear cache)
- Kiểm tra lại mã màu hợp lệ (ví dụ: `#27ae60`)

---

## 🎓 Mẹo Hữu Ích

1. **Thêm emoji:** Bạn có thể thêm emoji vào tiêu đề và nội dung như: 🏃‍♂️ 🎯 ⭐
2. **Định dạng văn bản:** Sử dụng `<strong>` cho chữ đậm, `<em>` cho chữ nghiêng
3. **Thêm link:** `<a href="https://example.com">Tên link</a>`
4. **Thêm hình ảnh trong nội dung:** `<img src="url-hinh-anh" alt="mô tả">`

---

## 📞 Cần Trợ Giúp?

Nếu bạn gặp khó khăn, đừng ngại liên hệ hoặc tìm hiểu thêm về HTML/CSS/JavaScript cơ bản!

**Chúc bạn thành công! 🎉**
