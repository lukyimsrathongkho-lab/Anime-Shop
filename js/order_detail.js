// js/order_detail.js

document.addEventListener("DOMContentLoaded", () => {
    loadOrderDetail();
});

function loadOrderDetail(){
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("id");

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const order = orders.find(o => o.id === orderId);

    const box = document.getElementById("orderDetailBox");
    if(!order){
        box.innerHTML = "<p>ไม่พบคำสั่งซื้อ</p>";
        return;
    }

    let statusText = "";
    if(order.status === "pending") statusText = "🟡 รอแพ็คสินค้า";
    if(order.status === "shipping") statusText = "🔵 อยู่ระหว่างการจัดส่ง";
    if(order.status === "completed") statusText = "🟢 จัดส่งสำเร็จ";

    let itemsHTML = "";
    order.items.forEach(i => {
        const product = products.find(p => p.id === i.id);
        if(!product) return;

        itemsHTML += `
            <li>
                ${product.name} × ${i.qty}
                <span style="float:right">
                    ${(product.price * i.qty).toLocaleString()} บาท
                </span>
            </li>
        `;
    });

    box.innerHTML = `
        <h2>${order.id}</h2>
        <p>📅 วันที่สั่งซื้อ: ${order.date}</p>
        <p><b>สถานะ:</b> ${statusText}</p>

        <ul>${itemsHTML}</ul>

        <p class="total">
            ยอดรวมทั้งหมด: ${order.total.toLocaleString()} บาท
        </p>
    `;
}
