/* =========================
   PRODUCT DATA
========================= */

const products = [
    {
        id: 1,
        name: "Anime Figure – Hero Edition",
        category: "anime",
        price: 2590,
        desc: "ฟิกเกอร์อนิเมะ PVC งานละเอียด รุ่น Hero Edition เหมาะสำหรับนักสะสม",
        images: [
            "images/anime1_1.jpg",
            "images/anime1_2.jpg",
            "images/anime1_3.jpg"
        ],
        rating: 4.8,
        reviews: [
            { user: "ลูกค้า A", score: 5, comment: "งานสวยมาก รายละเอียดโคตรดี" },
            { user: "ลูกค้า B", score: 4, comment: "ตรงปก วัสดุดี" }
        ]
    },

    {
        id: 2,
        name: "Anime Figure – Limited Color",
        category: "anime",
        price: 4200,
        desc: "ฟิกเกอร์อนิเมะสีพิเศษ Limited ผลิตจำนวนจำกัด",
        images: [
            "images/anime2_1.jpg",
            "images/anime2_2.jpg",
            "images/anime2_3.jpg"
        ],
        rating: 4.9,
        reviews: [
            { user: "ลูกค้า C", score: 5, comment: "สีสวยมาก หายากจริง" }
        ]
    },

    {
        id: 3,
        name: "Game Character Figure – Warrior",
        category: "game",
        price: 3200,
        desc: "ฟิกเกอร์ตัวละครจากเกมแนว Action วัสดุแข็งแรง",
        images: [
            "images/game1_1.jpg",
            "images/game1_2.jpg",
            "images/game1_3.jpg"
        ],
        rating: 4.5,
        reviews: [
            { user: "ลูกค้า D", score: 5, comment: "เหมือนในเกมมาก" },
            { user: "ลูกค้า E", score: 4, comment: "ฐานตั้งแข็งแรงดี" }
        ]
    },

    {
        id: 4,
        name: "Game Character Figure – Mage",
        category: "game",
        price: 3500,
        desc: "ฟิกเกอร์ตัวละครสายเวท รายละเอียดเครื่องแต่งกายคมชัด",
        images: [
            "images/game2_1.jpg",
            "images/game2_2.jpg",
            "images/game2_3.jpg"
        ],
        rating: 4.6,
        reviews: [
            { user: "ลูกค้า F", score: 5, comment: "งานพ่นสีดีมาก" }
        ]
    },

    {
        id: 5,
        name: "Movie Figure – Action Hero",
        category: "movie",
        price: 3800,
        desc: "ฟิกเกอร์จากภาพยนตร์ชื่อดัง ท่าทางสมจริง",
        images: [
            "images/movie1_1.jpg",
            "images/movie1_2.jpg",
            "images/movie1_3.jpg"
        ],
        rating: 4.4,
        reviews: [
            { user: "ลูกค้า G", score: 4, comment: "หน้าคล้ายตัวละครจริง" }
        ]
    },

    {
        id: 6,
        name: "Movie Figure – Villain",
        category: "movie",
        price: 4100,
        desc: "ฟิกเกอร์ตัวร้ายจากภาพยนตร์ รุ่นพิเศษ",
        images: [
            "images/movie2_1.jpg",
            "images/movie2_2.jpg",
            "images/movie2_3.jpg"
        ],
        rating: 4.7,
        reviews: [
            { user: "ลูกค้า H", score: 5, comment: "งานโหดมาก รายละเอียดจัดเต็ม" }
        ]
    },

    {
        id: 7,
        name: "Poster Anime Limited A2",
        category: "poster",
        price: 299,
        desc: "โปสเตอร์อนิเมะลิขสิทธิ์แท้ ขนาด A2",
        images: [
            "images/poster1_1.jpg",
            "images/poster1_2.jpg"
        ],
        rating: 4.3,
        reviews: [
            { user: "ลูกค้า I", score: 4, comment: "กระดาษดี สีชัด" }
        ]
    },

    {
        id: 8,
        name: "Poster Movie Collector Edition",
        category: "poster",
        price: 499,
        desc: "โปสเตอร์ภาพยนตร์ Collector Edition เหมาะสำหรับสะสม",
        images: [
            "images/poster2_1.jpg",
            "images/poster2_2.jpg"
        ],
        rating: 4.6,
        reviews: [
            { user: "ลูกค้า J", score: 5, comment: "แพ็คมาดี ไม่มีรอยยับ" }
        ]
    }
];

/* =========================
   RENDER PRODUCT
========================= */

function renderProducts(list){
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    list.forEach(p => {
        grid.innerHTML += `
            <div class="product-card box ${p.category}">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="desc">${p.desc}</p>
                <p class="price">฿${p.price.toLocaleString()}</p>
                <a href="product_detail.html?id=${p.id}" class="btn">ดูรายละเอียด</a>
            </div>
        `;
    });
}

/* =========================
   FILTER & SEARCH
========================= */

function filterCategory(category){
    if(category === "all"){
        renderProducts(products);
    }else{
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

function searchProduct(){
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(keyword)
    );

    renderProducts(filtered);
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
});


/* =========================
   PRODUCT DETAIL LOGIC
========================= */

function getProductId(){
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

function loadProductDetail(){
    const id = getProductId();
    if(!id) return;

    const product = products.find(p => p.id === id);
    if(!product) return;

    // basic info
    document.getElementById("productName").innerText = product.name;
    document.getElementById("productTitle").innerText = product.name;
    document.getElementById("productDesc").innerText = product.desc;
    document.getElementById("productPrice").innerText =
        "฿" + product.price.toLocaleString();

    // images
    const mainImage = document.getElementById("mainImage");
    const thumbs = document.getElementById("thumbs");
    mainImage.src = product.images[0];
    thumbs.innerHTML = "";

    product.images.forEach(img => {
        const thumb = document.createElement("img");
        thumb.src = img;
        thumb.onclick = () => mainImage.src = img;
        thumbs.appendChild(thumb);
    });

    // rating
    renderRating(product.rating);

    // reviews
    renderReviews(product.reviews);
}

function renderRating(score){
    const starBox = document.getElementById("ratingStars");
    const text = document.getElementById("ratingValue");

    starBox.innerHTML = "";
    const full = Math.floor(score);

    for(let i = 1; i <= 5; i++){
        starBox.innerHTML += i <= full ? "⭐" : "☆";
    }

    text.innerText = score + " / 5";
}

function renderReviews(reviews){
    const list = document.getElementById("reviewList");
    list.innerHTML = "";

    if(reviews.length === 0){
        list.innerHTML = "<p>ยังไม่มีรีวิว</p>";
        return;
    }

    reviews.forEach(r => {
        list.innerHTML += `
            <div class="review">
                ${"⭐".repeat(r.score)}${"☆".repeat(5 - r.score)}
                <p>${r.comment}</p>
                <small>- ${r.user}</small>
            </div>
        `;
    });
}

/* dummy action */
function addToCart(){
    alert("เพิ่มสินค้าลงตะกร้าแล้ว");
}

function buyNow(){
    alert("ไปหน้าชำระเงิน");
}

document.addEventListener("DOMContentLoaded", loadProductDetail);

