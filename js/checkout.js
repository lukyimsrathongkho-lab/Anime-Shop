// js/checkout.js

document.addEventListener("DOMContentLoaded", () => {
    loadCheckout();
});

function loadCheckout(){
    const body = document.getElementById("checkoutItems");
    const totalBox = document.getElementById("checkoutTotal");
    if(!body || !totalBox) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    body.innerHTML = "";

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if(!product) return;

        const sum = product.price * item.qty;
        total += sum;

        body.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${item.qty}</td>
                <td>${sum.toLocaleString()}</td>
            </tr>
        `;
    });

    totalBox.innerText = total.toLocaleString();
}

/* ===== CONFIRM ORDER ===== */
function confirmOrder(){
    const payment = document.querySelector('input[name="payment"]:checked');
    if(!payment){
        alert("กรุณาเลือกวิธีชำระเงิน");
        return;
    }

    if(payment.value === "qr"){
        openQR();
    }else{
        finishOrder();
    }
}

/* ===== QR ===== */
function openQR(){
    const modal = document.getElementById("qrModal");
    if(modal) modal.style.display = "block";
}

function closeQR(){
    const modal = document.getElementById("qrModal");
    if(modal) modal.style.display = "none";
}

function verifyPayment(){
    const statusText = document.getElementById("qrStatus");
    if(!statusText) return;

    statusText.innerText = "⏳ กำลังตรวจสอบการโอนเงิน...";

    setTimeout(() => {
        statusText.innerText = "✔ ตรวจสอบสำเร็จ";
        setTimeout(() => {
            finishOrder();
        }, 800);
    }, 1500);
}

/* ===== FINISH ORDER ===== */
function finishOrder(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(cart.length === 0) return;

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if(product){
            total += product.price * item.qty;
        }
    });

    const order = {
        id: "ORD-" + Date.now(),
        date: new Date().toLocaleString("th-TH"),
        items: cart,
        total: total,
        status: "pending"   // ✅ ตรงนี้ปลอดภัย
    };

    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    if(typeof showToast === "function"){
        showToast({
            message: "ชำระเงินสำเร็จ",
            type: "success"
        });
    }

    setTimeout(() => {
        window.location.href = "order_history.html";
    }, 1200);
}
