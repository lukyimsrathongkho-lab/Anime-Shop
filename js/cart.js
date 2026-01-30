// js/cart.js
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("cartItems")){
        loadCart();
    }
});

function loadCart(){
    const body = document.getElementById("cartItems");
    const totalBox = document.getElementById("cartTotal");
    if(!body || !totalBox) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    body.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if(!product) return;

        const sum = product.price * item.qty;
        total += sum;

        body.innerHTML += `
            <tr>
                <td>
    <div class="cart-product">
        <img src="${product.images[0]}" alt="${product.name}">
        <div class="name">${product.name}</div>
    </div>
</td>

                <td>${product.price.toLocaleString()}</td>
                <td>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                        ${item.qty}
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </td>
                <td>${sum.toLocaleString()}</td>
                <td>
                    <span class="remove-btn" onclick="removeItem(${item.id})">🗑️</span>
                </td>
            </tr>
        `;
    });

    totalBox.innerText = total.toLocaleString();
}

function changeQty(id, diff){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(i => i.id === id);
    if(!item) return;

    item.qty += diff;
    if(item.qty <= 0){
        cart = cart.filter(i => i.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function removeItem(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);

    cart = cart.filter(i => i.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();

    showToast({
        message: `ลบ ${product.name} ออกจากตะกร้า`,
        type: "remove",
        image: product.images[0]
    });
}

function checkout(){
    window.location.href = "checkout.html";
}



