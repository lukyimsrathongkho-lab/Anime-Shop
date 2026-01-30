// js/product_detail.js

let currentProductImages = [];

document.addEventListener("DOMContentLoaded", () => {
    if (!document.getElementById("productTitle")) return;
    loadProductDetail();
});

function loadProductDetail() {
    const id = getProductId();
    if (!id) return;

    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById("productName").innerText = product.name;
    document.getElementById("productTitle").innerText = product.name;
    document.getElementById("productDesc").innerText = product.fullDesc;
    document.getElementById("productPrice").innerText =
        "฿" + product.price.toLocaleString();

    renderRating(product.rating);
    renderReviews(product.reviews);

    currentProductImages = product.images;
    renderAlbumPreview();
}

/* ===== ALBUM PREVIEW (3 รูป) ===== */
function renderAlbumPreview() {
    const preview = document.getElementById("albumPreview");
    if (!preview) return;

    preview.innerHTML = "";

    currentProductImages.slice(0, 3).forEach((img, index) => {
        const el = document.createElement("img");
        el.src = img;
        el.onclick = () => openViewer(index);
        preview.appendChild(el);
    });
}

/* ===== OPEN GALLERY ===== */
function openGallery(startIndex = 0) {
    const modal = document.getElementById("galleryModal");
    const zoom = document.getElementById("zoomImage");
    const thumbs = document.getElementById("galleryImages");

    if (!modal || !zoom || !thumbs) return;

    modal.style.display = "block";
    zoom.src = currentProductImages[startIndex];
    thumbs.innerHTML = "";

    currentProductImages.forEach(img => {
        const t = document.createElement("img");
        t.src = img;
        t.onclick = () => zoom.src = img;
        thumbs.appendChild(t);
    });
}

/* ===== CLOSE GALLERY ===== */
function closeGallery() {
    const modal = document.getElementById("galleryModal");
    if (modal) modal.style.display = "none";
}

let viewerIndex = 0;

/* เปิด viewer */
function openViewer(index){
    viewerIndex = index;
    const viewer = document.getElementById("imageViewer");
    const img = document.getElementById("viewerImg");

    img.src = currentProductImages[viewerIndex];
    img.classList.remove("zoom");

    viewer.style.display = "flex";
}

/* ปิด viewer (ต้องคลิกพื้นหลังเท่านั้น) */
function closeViewer(e){
    if(e.target.id === "imageViewer"){
        document.getElementById("imageViewer").style.display = "none";
    }
}

/* ซูม */
function toggleZoom(e){
    e.stopPropagation();
    e.target.classList.toggle("zoom");
}

/* รูปก่อนหน้า */
function prevImage(e){
    e.stopPropagation();
    viewerIndex =
        (viewerIndex - 1 + currentProductImages.length)
        % currentProductImages.length;
    document.getElementById("viewerImg").src =
        currentProductImages[viewerIndex];
}

/* รูปถัดไป */
function nextImage(e){
    e.stopPropagation();
    viewerIndex =
        (viewerIndex + 1)
        % currentProductImages.length;
    document.getElementById("viewerImg").src =
        currentProductImages[viewerIndex];
}

