/*
 * 売店データはこの配列だけを編集すれば差し替えできます。
 * image は images/ フォルダ内のファイル名を指定してください。
 */
const foodItems = [
    { club: "弓道", name: "唐揚げ", category: "club", image: "images/food-baby-castella.png" },
    { club: "5I", name: "フランクフルト", category: "club", image: "images/food-baby-castella.png" },
    { club: "5Z", name: "ベビーカステラ", category: "club", image: "images/food-baby-castella.png" },
    { club: "去年度執行委員", name: "かき氷", category: "club", image: "images/food-baby-castella.png" },
    { club: "書道", name: "たい焼き", category: "club", image: "images/food-baby-castella.png" },
    { club: "柔道", name: "パン", category: "club", image: "images/food-baby-castella.png" },
    { club: "棋道", name: "アメリカンドッグ", category: "club", image: "images/food-baby-castella.png" },
    { club: "野球", name: "餃子", category: "club", image: "images/food-baby-castella.png" },
    { club: "バドミントン", name: "わたあめ", category: "club", image: "images/food-baby-castella.png" },
    { club: "陸上", name: "アイス", category: "club", image: "images/food-baby-castella.png" },
    { club: "バレー", name: "ドーナツ", category: "club", image: "images/food-baby-castella.png" },
    { club: "ロボ研", name: "ジュース", category: "club", image: "images/food-baby-castella.png" },
    { club: "サッカー", name: "駄菓子", category: "club", image: "images/food-baby-castella.png" },
    { club: "バスケ", name: "たこ焼き", category: "club", image: "images/food-baby-castella.png" },
    { club: "3I", name: "焼き鳥", category: "club", image: "images/food-baby-castella.png" },
    { club: "卓球", name: "チュロス", category: "club", image: "images/food-baby-castella.png" },
    { club: "テニス", name: "クレープ", category: "club", image: "images/food-baby-castella.png" },
    { club: "ソフトテニス", name: "焼きそば", category: "club", image: "images/food-baby-castella.png" }
];

const list = document.getElementById("foodList");
const count = document.getElementById("foodCount");
const search = document.getElementById("foodSearch");
const filters = document.getElementById("foodFilters");
let activeTab = "club";

function renderFilters() {
    const filterKey = activeTab === "food" ? "name" : "club";
    const values = [...new Set(foodItems.map((item) => item[filterKey]))];
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
    const filterKey = activeTab === "food" ? "name" : "club";
    const visible = foodItems
        .filter((item) => !selected.length || selected.includes(item[filterKey]))
        .filter((item) => `${item.name}${item.club}`.toLowerCase().includes(keyword));

    count.textContent = `${visible.length}件の売店`;
    list.innerHTML = visible.length ? visible.map((item) => `
        <article class="food-card">
            <div>
                <h2 class="food-name">${item.name}</h2>
                <p class="food-club">${item.club}${item.tag ? `<span class="food-badge">${item.tag}</span>` : ""}</p>
            </div>
            <img class="food-image" src="${item.image}" alt="${item.name}">
        </article>
    `).join("") : '<p class="food-empty">該当する売店がありません。</p>';
}

document.querySelectorAll(".food-tab").forEach((tab) => tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    document.querySelectorAll(".food-tab").forEach((button) => {
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
