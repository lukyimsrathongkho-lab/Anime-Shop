// js/contact.js

function sendMessage(){
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if(!name || !email || !subject || !message){
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    // จำลองการส่งข้อความสำเร็จ
    showToast({
        message: "ส่งข้อความสำเร็จ เราจะติดต่อกลับโดยเร็ว",
        type: "success"
    });

    // เคลียร์ฟอร์ม
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactSubject").value = "";
    document.getElementById("contactMessage").value = "";
}


function openSocialModal(){
    document.getElementById("socialModal").style.display = "block";
}

function closeSocialModal(){
    document.getElementById("socialModal").style.display = "none";
}
