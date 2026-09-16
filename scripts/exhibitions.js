/*
 * 専門展示データはこの配列だけを編集すれば差し替えできます。
 * image は images/ フォルダ内のファイル名を指定してください。
 * nameは仮です。展示内容が決まったら変更してください。
 */
const exhibitionItems = [
    {name: "化学専門展示", course: "化学コース", place: "化学実験室", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "機械専門展示", course: "機械コース", place: "3M", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "機械専門展示", course: "機械コース", place: "4M", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "機械専門展示", course: "機械コース", place: "5M", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "電気専門展示", course: "電気コース", place: "電気機器Lab", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "プログラミング研究部試遊会", course: "プログラミング研究部", place: "メカトロ電子回路実験室", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "軽音学部ライブ", course: "軽音学部", place: "1-1", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "軽音学部ライブ", course: "軽音学部", place: "1-2", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "電気専門展示", course: "電気コース", place: "2E", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "電気専門展示", course: "電気コース", place: "3E", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "電気専門展示", course: "電気コース", place: "4E", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "工作・オーディオ同好会DJライブ", course: "工作・オーディオ同好会", place: "物理実験室", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "フォトスポット", course: "美術部", place: "5E", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "美術部展示", course: "美術部", place: "2I", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "書道部展示", course: "書道部", place: "2M", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "写真展示", course: "写真部", place: "2M", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "TRPGサークル試遊会", course: "TRPGサークル", place: "5Z", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "演劇部上映", course: "演劇部", place: "3Z", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "落語研究部寄席", course: "落語研究部", place: "4Z", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "プログラミング研究部試遊会", course: "プログラミング研究部", place: "第3演習室", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "ロボット研究部操縦体験", course: "ロボット研究部", place: "1-3", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "ロボット研究部操縦体験", course: "ロボット研究部", place: "1-4", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "情報専門展示", course: "情報コース", place: "3I", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "情報専門展示", course: "情報コース", place: "5I", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "情報専門展示", course: "情報コース", place: "中講義室", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "建設専門展示", course: "建設コース", place: "3C", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35},
    {name: "カラオケ大会", course: "イベント班", place: "大講義室", category: "course", image: "images/food-baby-castella.png", mapX: 30, mapY: 35}
];

const list = document.getElementById("exhibitionList");
const count = document.getElementById("exhibitionCount");
const search = document.getElementById("exhibitionSearch");
const filters = document.getElementById("exhibitionFilters");
const tabs = document.querySelector(".exhibition-tabs");
let activeTab = "exhibition";

search.addEventListener("focus", () => {
    tabs.classList.add("is-open");
    filters.classList.add("is-open");
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".exhibition-finder")) {
        tabs.classList.remove("is-open");
        filters.classList.remove("is-open");
    }
});


function renderFilters() {
    const filterKey = activeTab === "exhibition" ? "name" : "course";
    const values = [...new Set(exhibitionItems.map((item) => item[filterKey]))];
    filters.innerHTML = values.map((value) => `
        <label class="filter-option">
            <input type="checkbox" value="${value}">
            <span>${value}</span>
        </label>
    `).join("");
    filters.querySelectorAll("input").forEach((input) => input.addEventListener("change", renderItems));
}

function renderItems() {
    const keyword = search.value.trim().toLowerCase();
    const selected = [...filters.querySelectorAll("input:checked")].map((input) => input.value);
    const filterKey = activeTab === "exhibition" ? "name" : "course";
    const visible = exhibitionItems
        .filter((item) => !selected.length || selected.includes(item[filterKey]))
        .filter((item) => `${item.name}${item.course}${item.place}`.toLowerCase().includes(keyword));

    count.textContent = `${visible.length}件の展示`;
    list.innerHTML = visible.length ? visible.map((item) => `
        <article class="exhibition-card">
            <div>
                <h2 class="exhibition-name">${item.name}</h2>
                <p class="exhibition-club">
                    ${item.course}
                    <span class="exhibition-badge">${item.place}</span>
                </p>
            </div>
            <img class="exhibition-image" src="${item.image}" alt="${item.name}">
        </article>
    `).join("") : '<p class="exhibition-empty">該当する展示がありません。</p>';
}

document.querySelectorAll(".exhibition-tab").forEach((tab) => tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    document.querySelectorAll(".exhibition-tab").forEach((button) => {
        const selected = button === tab;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-selected", selected);
    });
    renderFilters();
    renderItems();
}));

search.addEventListener("input", renderItems);
renderFilters();
renderItems();

