// js/order_history.js

document.addEventListener("DOMContentLoaded", () => {
    loadOrders();
});

function loadOrders(){
    const box = document.getElementById("orderList");
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if(orders.length === 0){
        box.innerHTML = `
            <div class="box">
                <p>ยังไม่มีประวัติคำสั่งซื้อ</p>
            </div>
        `;
        return;
    }

    box.innerHTML = "";

    orders.slice().reverse().forEach(order => {
        let statusText = "";
        let statusClass = "";

        if(order.status === "pending"){
            statusText = "🟡 รอแพ็คสินค้า";
            statusClass = "status pending";
        }else if(order.status === "shipping"){
            statusText = "🔵 อยู่ระหว่างการจัดส่ง";
            statusClass = "status shipping";
        }else if(order.status === "completed"){
            statusText = "🟢 จัดส่งสำเร็จ";
            statusClass = "status completed";
        }

        box.innerHTML += `
            <div class="box">
                <h2>🧾 ${order.id}</h2>
                <p>📅 วันที่: ${order.date}</p>
                <p class="${statusClass}">${statusText}</p>
                <p class="total">ยอดรวม: ${order.total.toLocaleString()} บาท</p>

                <button class="btn-cart"
                    onclick="viewOrderDetail('${order.id}')">
                    ดูรายละเอียดคำสั่งซื้อ
                </button>
            </div>
        `;
    });
}

function viewOrderDetail(orderId){
    window.location.href = "order_detail.html?id=" + orderId;
}

