// js/products.js
document.addEventListener("DOMContentLoaded", () => {
    if(!document.getElementById("productGrid")) return;

    initSeries();
    renderProducts(products);
});

function initSeries(){
    const select = document.getElementById("seriesSelect");
    if(!select) return;

    const seriesList = [...new Set(products.map(p => p.series))];
    seriesList.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s;
        opt.textContent = s;
        select.appendChild(opt);
    });
}

function renderProducts(list){
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    list.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${p.images[0]}">
                <h3>${p.name}</h3>
                <p class="desc">${p.shortDesc}</p>
                <p class="price">฿${p.price.toLocaleString()}</p>
                <a href="product_detail.html?id=${p.id}" class="btn">ดูรายละเอียด</a>
            </div>
        `;
    });
}

function applyFilter(){
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const main = document.getElementById("mainCategory").value;
    const sub = document.getElementById("subCategory").value;
    const series = document.getElementById("seriesSelect").value;

    let filtered = products;

    if(main !== "all") filtered = filtered.filter(p => p.mainCategory === main);
    if(sub !== "all") filtered = filtered.filter(p => p.subCategory === sub);
    if(series !== "all") filtered = filtered.filter(p => p.series === series);
    if(keyword) filtered = filtered.filter(p => p.name.toLowerCase().includes(keyword));

    renderProducts(filtered);
}

function resetFilter(){
    renderProducts(products);
}
