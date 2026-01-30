// js/common.js
function getProductId(){
    const params = new URLSearchParams(window.location.search);
    return params.get("id") ? parseInt(params.get("id")) : null;
}

function renderRating(score){
    const starBox = document.getElementById("ratingStars");
    const textBox = document.getElementById("ratingValue");
    if(!starBox || !textBox) return;

    starBox.innerHTML =
        "⭐".repeat(Math.floor(score)) +
        "☆".repeat(5 - Math.floor(score));

    textBox.innerText = score + " / 5";
}

function renderReviews(reviews){
    const list = document.getElementById("reviewList");
    if(!list) return;

    list.innerHTML = "";
    reviews.forEach(r => {
        list.innerHTML += `
            <div class="review">
                ${"⭐".repeat(r.score)}${"☆".repeat(5-r.score)}
                <p>${r.comment}</p>
                <small>- ${r.user}</small>
            </div>
        `;
    });
}

function addToCart(){
    const id = getProductId();
    if(!id) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(i => i.id === id);
    const product = products.find(p => p.id === id);

    if(item){
        item.qty += 1;
    }else{
        cart.push({ id, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    showToast({
        message: "เพิ่มสินค้าเข้าตะกร้าแล้ว",
        type: "success",
        image: product.images[0]
    });
}



function showToast({ message, type = "success", image = null }) {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    if (image) {
        const img = document.createElement("img");
        img.src = image;
        toast.appendChild(img);
    }

    const text = document.createElement("div");
    text.className = "text";
    text.innerText = message;

    toast.appendChild(text);
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "toastOut 0.4s forwards";
        setTimeout(() => toast.remove(), 400);
    }, 2200);
}

function buyNow(){
    const id = getProductId();
    if(!id) return;

    // สร้าง cart ชั่วคราว (ซื้อชิ้นเดียว)
    localStorage.setItem("cart", JSON.stringify([
        { id: id, qty: 1 }
    ]));

    window.location.href = "checkout.html";
}

document.addEventListener("DOMContentLoaded", () => {
    updateUserMenu();
});

function updateUserMenu(){
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const menu = document.getElementById("userMenu");
    if(!menu) return;

    if(user){
        menu.innerHTML = `
            <div class="user-profile">
                <img src="${user.avatar}">
                <span>${user.name}</span>
                <a href="#" onclick="logout()">ออกจากระบบ</a>
            </div>
        `;
    }else{
        menu.innerHTML = `
            <a href="login.html">เข้าสู่ระบบ</a>
        `;
    }
}

