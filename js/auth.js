// js/auth.js

const DEFAULT_AVATAR = "images/profile.gif"

/* =====================
   REGISTER
===================== */
function register(){
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;

    if(!name || !email || !password){
        showToast({
            message: "กรุณากรอกข้อมูลให้ครบ",
            type: "remove"
        });
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if(users.find(u => u.email === email)){
        showToast({
            message: "อีเมลนี้ถูกใช้งานแล้ว",
            type: "remove"
        });
        return;
    }

    users.push({
        name,
        email,
        password,
        avatar: DEFAULT_AVATAR
    });

    localStorage.setItem("users", JSON.stringify(users));

    showToast({
        message: "สมัครสมาชิกสำเร็จ",
        type: "success"
    });

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1200);
}

/* =====================
   LOGIN  ← 🔥 ฟังก์ชันนี้แหละ
===================== */
function login(){
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
        u => u.email === email && u.password === password
    );

    if(!user){
        showToast({
            message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
            type: "remove"
        });
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    showToast({
        message: "เข้าสู่ระบบสำเร็จ",
        type: "success"
    });

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1200);
}

/* =====================
   LOGOUT
===================== */
function logout(){
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}
