// ===== DỮ LIỆU BÀI VIẾT =====
// Để thêm bài viết mới, chỉ cần copy một object và thay đổi nội dung
const blogPosts = [
    {
        id: 1,
        title: "Bí quyết chạy bộ hiệu quả cho người mới bắt đầu",
        excerpt: "Bạn mới bắt đầu chạy bộ? Hãy tìm hiểu những bí quyết cơ bản giúp bạn xây dựng thói quen chạy bền vững và tránh chấn thương.",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
        date: "5 Tháng 2, 2026",
        author: "Chánh Quay",
        content: `
            <h2>Tại sao nên chạy bộ?</h2>
            <p>Chạy bộ không chỉ là một môn thể thao đơn giản mà còn là cách tuyệt vời để cải thiện sức khỏe tim mạch, giảm căng thẳng và tăng cường thể lực tổng thể. Đối với người mới bắt đầu, việc xây dựng một thói quen chạy bộ đúng đắn là rất quan trọng.</p>
            
            <h2>1. Bắt đầu từ từ</h2>
            <p>Đừng vội vàng. Hãy bắt đầu với các buổi chạy ngắn 15-20 phút, kết hợp đi bộ và chạy nhẹ. Điều này giúp cơ thể bạn thích nghi dần với cường độ tập luyện mới.</p>
            
            <h2>2. Đầu tư giày chạy phù hợp</h2>
            <p>Một đôi giày chạy tốt là yếu tố quan trọng nhất. Hãy đến cửa hàng chuyên dụng để được tư vấn và chọn giày phù hợp với dáng chân và phong cách chạy của bạn.</p>
            
            <h2>3. Khởi động và kéo giãn</h2>
            <p>Luôn khởi động 5-10 phút trước khi chạy và kéo giãn sau khi hoàn thành. Điều này giúp phòng ngừa chấn thương và tăng độ linh hoạt.</p>
            
            <h2>4. Lắng nghe cơ thể</h2>
            <p>Nếu cảm thấy đau hoặc khó chịu bất thường, hãy nghỉ ngơi. Đừng ép bản thân quá sức, đặc biệt trong những tuần đầu tiên.</p>
            
            <h2>Kết luận</h2>
            <p>Chạy bộ là một hành trình, không phải cuộc đua. Hãy kiên nhẫn, duy trì đều đặn và tận hưởng từng bước chạy. Bạn sẽ thấy sự tiến bộ rõ rệt sau vài tuần!</p>
        `
    },
    {
        id: 2,
        title: "Top 5 cung đường chạy đẹp nhất Việt Nam",
        excerpt: "Khám phá những cung đường chạy bộ tuyệt đẹp từ núi đến biển, mang đến trải nghiệm độc đáo cho những người đam mê chạy bộ.",
        image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=800&q=80",
        date: "1 Tháng 2, 2026",
        author: "Chánh Quay",
        content: `
            <h2>Giới thiệu</h2>
            <p>Việt Nam có nhiều địa điểm tuyệt đẹp để chạy bộ, từ những con đường ven biển đến những cung đường núi non hùng vĩ. Dưới đây là 5 cung đường chạy được yêu thích nhất.</p>
            
            <h2>1. Đường ven biển Nha Trang</h2>
            <p>Con đường dài 7km chạy dọc bãi biển Trần Phú là lựa chọn hoàn hảo cho buổi chạy sáng sớm. Không khí trong lành, cảnh biển đẹp và đường chạy thoáng đãng.</p>
            
            <h2>2. Công viên Thống Nhất - Hà Nội</h2>
            <p>Với hệ thống đường chạy trong công viên rợp bóng cây xanh, đây là điểm đến lý tưởng cho người yêu chạy bộ ở thủ đô.</p>
            
            <h2>3. Phố đi bộ Nguyễn Huệ - Sài Gòn</h2>
            <p>Buổi sáng sớm trước 6h, phố đi bộ Nguyễn Huệ trở thành cung đường chạy tuyệt vời giữa lòng thành phố.</p>
            
            <h2>4. Đường lên Bà Nà Hills - Đà Nẵng</h2>
            <p>Dành cho những runner thích thử thách! Cung đường núi với độ dốc cao, cảnh quan thiên nhiên hùng vĩ.</p>
            
            <h2>5. Hồ Hoàn Kiếm - Hà Nội</h2>
            <p>Biểu tượng của Hà Nội, con đường quanh hồ luôn thu hút đông đảo người chạy bộ vào mỗi buổi sáng cuối tuần.</p>
        `
    },
    {
        id: 3,
        title: "Dinh dưỡng cho runner: Ăn gì trước và sau khi chạy?",
        excerpt: "Chế độ dinh dưỡng đúng đắn giúp bạn tối đa hóa hiệu suất chạy và phục hồi nhanh chóng. Cùng tìm hiểu những thực phẩm tốt nhất cho runner.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
        date: "28 Tháng 1, 2026",
        author: "Chánh Quay",
        content: `
            <h2>Tầm quan trọng của dinh dưỡng</h2>
            <p>Dinh dưỡng đóng vai trò then chốt trong việc cải thiện thành tích chạy và giúp cơ thể phục hồi. Việc ăn uống đúng cách trước và sau khi chạy sẽ tạo nên sự khác biệt lớn.</p>
            
            <h2>Trước khi chạy (1-2 giờ trước)</h2>
            <ul>
                <li><strong>Chuối:</strong> Giàu carbohydrate và kali, dễ tiêu hóa</li>
                <li><strong>Yến mạch:</strong> Cung cấp năng lượng bền vững</li>
                <li><strong>Bánh mì nguyên cám + bơ đậu phộng:</strong> Kết hợp carb và protein lành mạnh</li>
            </ul>
            
            <h2>Sau khi chạy (trong vòng 30-60 phút)</h2>
            <ul>
                <li><strong>Sữa chocolate:</strong> Tỷ lệ carb-protein lý tưởng 3:1</li>
                <li><strong>Trứng + rau xanh:</strong> Protein chất lượng cao giúp phục hồi cơ</li>
                <li><strong>Sữa chua Hy Lạp + hoa quả:</strong> Protein, carb và men vi sinh</li>
            </ul>
            
            <h2>Nước uống</h2>
            <p>Hydrat hóa rất quan trọng! Uống 500ml nước 2 giờ trước khi chạy, và bổ sung đủ nước sau mỗi buổi tập. Với các buổi chạy dài hơn 1 giờ, cân nhắc sử dụng đồ uống điện giải.</p>
            
            <h2>Lời khuyên</h2>
            <p>Mỗi cơ thể phản ứng khác nhau. Hãy thử nghiệm để tìm ra chế độ ăn uống phù hợp nhất với bạn!</p>
        `
    }
];

// ===== DỮ LIỆU SẢN PHẨM =====
// Để thêm sản phẩm mới, chỉ cần copy một object và thay đổi nội dung
const products = [
    {
        id: 1,
        name: "Giày chạy Nike Air Zoom Pegasus 40",
        price: "3.500.000đ",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
        category: "Giày chạy",
        description: `
            <h2>Mô tả sản phẩm</h2>
            <p>Nike Air Zoom Pegasus 40 là đôi giày chạy đa năng được yêu thích nhất của Nike. Với công nghệ đệm React foam và đơn vị Zoom Air ở phần forefoot, giày mang lại cảm giác êm ái và phản hồi tuyệt vời.</p>
            
            <h2>Tính năng nổi bật</h2>
            <ul>
                <li>Công nghệ đệm React foam nhẹ và bền bỉ</li>
                <li>Đơn vị Zoom Air tăng khả năng đẩy bật</li>
                <li>Upper Engineered Mesh thoáng khí</li>
                <li>Phù hợp cả chạy đường dài và tập tốc độ</li>
                <li>Trọng lượng: 280g (size US 9)</li>
            </ul>
            
            <h2>Phù hợp với</h2>
            <p>Runner ở mọi trình độ, đặc biệt phù hợp cho người chạy trung bình 10-50km/tuần.</p>
        `
    },
    {
        id: 2,
        name: "Đồng hồ Garmin Forerunner 255",
        price: "8.500.000đ",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
        category: "Thiết bị đeo",
        description: `
            <h2>Mô tả sản phẩm</h2>
            <p>Garmin Forerunner 255 là đồng hồ chạy bộ GPS toàn diện với khả năng theo dõi training metrics chuyên sâu, giúp bạn tối ưu hóa kế hoạch tập luyện.</p>
            
            <h2>Tính năng nổi bật</h2>
            <ul>
                <li>GPS đa vệ tinh siêu chính xác (GPS, GLONASS, Galileo)</li>
                <li>Theo dõi VO2 Max, Training Status, Recovery Time</li>
                <li>Pin: lên đến 14 ngày (chế độ smartwatch)</li>
                <li>Màn hình luôn bật, đọc rõ dưới ánh nắng</li>
                <li>Theo dõi nhịp tim 24/7 và Sleep Score</li>
                <li>Hỗ trợ nhiều môn thể thao (chạy, đạp xe, bơi lội...)</li>
            </ul>
            
            <h2>Phù hợp với</h2>
            <p>Runner nghiêm túc muốn theo dõi và phân tích hiệu suất chạy chi tiết.</p>
        `
    },
    {
        id: 3,
        name: "Áo chạy Adidas Own The Run",
        price: "850.000đ",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
        category: "Quần áo",
        description: `
            <h2>Mô tả sản phẩm</h2>
            <p>Áo chạy Adidas Own The Run được thiết kế với công nghệ Aeroready giúp hút ẩm tối ưu, giữ bạn luôn khô ráo và thoải mái trong suốt buổi chạy.</p>
            
            <h2>Tính năng nổi bật</h2>
            <ul>
                <li>Công nghệ Aeroready thấm hút mồ hôi nhanh</li>
                <li>Vải nhẹ, thoáng khí</li>
                <li>Thiết kế form fitted vừa vặn, không gò bó</li>
                <li>Chi tiết phản quang tăng độ an toàn khi chạy tối</li>
                <li>Chất liệu tái chế thân thiện môi trường</li>
            </ul>
            
            <h2>Phù hợp với</h2>
            <p>Mọi runner, đặc biệt phù hợp cho thời tiết nóng ẩm.</p>
        `
    },
    {
        id: 4,
        name: "Bình nước chạy bộ Salomon Soft Flask 500ml",
        price: "450.000đ",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
        category: "Phụ kiện",
        description: `
            <h2>Mô tả sản phẩm</h2>
            <p>Bình nước mềm Salomon Soft Flask được thiết kế chuyên dụng cho trail running và marathon, gọn nhẹ và tiện lợi khi mang theo.</p>
            
            <h2>Tính năng nổi bật</h2>
            <ul>
                <li>Chất liệu TPU mềm mại, co giãn theo lượng nước</li>
                <li>Van uống không tràn, dễ sử dụng khi chạy</li>
                <li>Dung tích 500ml, vừa vặn với hầu hết running vest</li>
                <li>Không chứa BPA, an toàn cho sức khỏe</li>
                <li>Trọng lượng chỉ 40g khi rỗng</li>
            </ul>
            
            <h2>Phù hợp với</h2>
            <p>Runner chạy đường dài, trail runner và người tham gia marathon.</p>
        `
    },
    {
        id: 5,
        name: "Túi chạy bộ FlipBelt Running Belt",
        price: "750.000đ",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
        category: "Phụ kiện",
        description: `
            <h2>Mô tả sản phẩm</h2>
            <p>FlipBelt là chiếc túi chạy thế hệ mới, ôm sát eo không gây khó chịu, giúp bạn mang theo điện thoại, chìa khóa và các vật dụng thiết yếu mà không lo rơi rớt.</p>
            
            <h2>Tính năng nổi bật</h2>
            <ul>
                <li>Thiết kế ống không đường khóa, ôm khít không nảy</li>
                <li>4 khe cắm vật dụng tiện lợi</li>
                <li>Vải co giãn 4 chiều, thoáng khí</li>
                <li>Phù hợp điện thoại màn hình lớn nhất</li>
                <li>Có thể giặt máy</li>
                <li>Nhiều size và màu sắc lựa chọn</li>
            </ul>
            
            <h2>Phù hợp với</h2>
            <p>Mọi runner cần mang theo đồ dùng cá nhân khi chạy.</p>
        `
    }
];
