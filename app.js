// ===== KHỞI TẠO KHI TRANG TẢI =====
document.addEventListener('DOMContentLoaded', function () {
    // Toggle mobile menu
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', function () {
            navbarMenu.classList.toggle('active');
        });
    }

    // Load featured posts on home page
    if (document.getElementById('featured-posts')) {
        loadFeaturedPosts();
    }

    // Load featured products on home page
    if (document.getElementById('featured-products')) {
        loadFeaturedProducts();
    }

    // Load all posts on blog page
    if (document.getElementById('all-posts')) {
        loadAllPosts();
    }

    // Load all products on products page
    if (document.getElementById('all-products')) {
        loadAllProducts();
    }

    // Load post detail
    if (document.getElementById('post-content')) {
        loadPostDetail();
    }

    // Load product detail
    if (document.getElementById('product-content')) {
        loadProductDetail();
    }

    // Search functionality
    const searchInput = document.getElementById('search-posts');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            filterPosts(e.target.value);
        });
    }
});

// ===== HIỂN THỊ BÀI VIẾT NỔI BẬT (3 bài mới nhất) =====
function loadFeaturedPosts() {
    const container = document.getElementById('featured-posts');
    const featuredPosts = blogPosts.slice(0, 3); // Lấy 3 bài đầu tiên

    container.innerHTML = featuredPosts.map(post => `
        <div class="card" onclick="window.location.href='post.html?id=${post.id}'">
            <img src="${post.image}" alt="${post.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${post.title}</h3>
                <p class="card-meta">📅 ${post.date} | ✍️ ${post.author}</p>
                <p class="card-excerpt">${post.excerpt}</p>
                <a href="post.html?id=${post.id}" class="btn btn-outline" onclick="event.stopPropagation()">Đọc tiếp</a>
            </div>
        </div>
    `).join('');
}

// ===== HIỂN THỊ SẢN PHẨM NỔI BẬT (5 sản phẩm đầu tiên) =====
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    const featuredProducts = products.slice(0, 5);

    container.innerHTML = featuredProducts.map(product => `
        <div class="card" onclick="window.location.href='product.html?id=${product.id}'">
            <img src="${product.image}" alt="${product.name}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-price">${product.price}</p>
                <a href="product.html?id=${product.id}" class="btn btn-primary" onclick="event.stopPropagation()">Xem chi tiết</a>
            </div>
        </div>
    `).join('');
}

// ===== HIỂN THỊ TẤT CẢ BÀI VIẾT =====
function loadAllPosts() {
    const container = document.getElementById('all-posts');

    container.innerHTML = blogPosts.map(post => `
        <div class="card" onclick="window.location.href='post.html?id=${post.id}'">
            <img src="${post.image}" alt="${post.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${post.title}</h3>
                <p class="card-meta">📅 ${post.date} | ✍️ ${post.author}</p>
                <p class="card-excerpt">${post.excerpt}</p>
                <a href="post.html?id=${post.id}" class="btn btn-outline" onclick="event.stopPropagation()">Đọc tiếp</a>
            </div>
        </div>
    `).join('');
}

// ===== HIỂN THỊ TẤT CẢ SẢN PHẨM =====
function loadAllProducts() {
    const container = document.getElementById('all-products');

    container.innerHTML = products.map(product => `
        <div class="card" onclick="window.location.href='product.html?id=${product.id}'">
            <img src="${product.image}" alt="${product.name}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-price">${product.price}</p>
                <a href="product.html?id=${product.id}" class="btn btn-secondary" onclick="event.stopPropagation()">Thêm vào giỏ</a>
            </div>
        </div>
    `).join('');
}

// ===== HIỂN THỊ CHI TIẾT BÀI VIẾT =====
function loadPostDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = blogPosts.find(p => p.id === postId);

    if (!post) {
        document.getElementById('post-content').innerHTML = '<p>Không tìm thấy bài viết.</p>';
        return;
    }

    document.getElementById('post-content').innerHTML = `
        <h1>${post.title}</h1>
        <div class="post-meta">
            📅 ${post.date} | ✍️ ${post.author}
        </div>
        <img src="${post.image}" alt="${post.title}">
        <div class="post-body">
            ${post.content}
        </div>
    `;
}

// ===== HIỂN THỊ CHI TIẾT SẢN PHẨM =====
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.getElementById('product-content').innerHTML = '<p>Không tìm thấy sản phẩm.</p>';
        return;
    }

    document.getElementById('product-content').innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h1>${product.name}</h1>
            <div class="product-price">${product.price}</div>
            <button class="btn btn-secondary" onclick="alert('Sản phẩm đã được thêm vào giỏ hàng!')">🛒 Thêm vào giỏ hàng</button>
            <div class="product-description">
                ${product.description}
            </div>
        </div>
    `;
}

// ===== TÌM KIẾM BÀI VIẾT =====
function filterPosts(searchTerm) {
    const container = document.getElementById('all-posts');
    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredPosts.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">Không tìm thấy bài viết nào.</p>';
        return;
    }

    container.innerHTML = filteredPosts.map(post => `
        <div class="card" onclick="window.location.href='post.html?id=${post.id}'">
            <img src="${post.image}" alt="${post.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${post.title}</h3>
                <p class="card-meta">📅 ${post.date} | ✍️ ${post.author}</p>
                <p class="card-excerpt">${post.excerpt}</p>
                <a href="post.html?id=${post.id}" class="btn btn-outline" onclick="event.stopPropagation()">Đọc tiếp</a>
            </div>
        </div>
    `).join('');
}

// ===== XỬ LÝ FORM LIÊN HỆ =====
function handleContactForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Cảm ơn ${name}! Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm qua email ${email}.`);

    // Reset form
    event.target.reset();
}
