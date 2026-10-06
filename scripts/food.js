/*
 * ============================================================
 *  売店データ
 * ============================================================
 *  ▼ 画像の設定方法
 *    1. images/foods/ フォルダに画像ファイルを入れる
 *       例: images/foods/karaage.webp
 *    2. 対応する売店の image フィールドにパスを書く
 *       例: image: "images/foods/karaage.webp"
 *    3. image を "" (空文字) にすると、デフォルト画像が表示される
 *
 *  ▼ name・club・category は内容に合わせて変更してください
 * ============================================================
 */

// 画像が未設定 or 読み込み失敗時に表示するデフォルト画像
const DEFAULT_FOOD_IMAGE = "images/food-baby-castella.png";

const foodItems = [
    { club: "弓道", name: "唐揚げ", category: "club", image: "" },
    { club: "5I", name: "フランクフルト", category: "club", image: "" },
    { club: "5Z", name: "ベビーカステラ", category: "club", image: "" },
    { club: "去年度執行委員", name: "かき氷", category: "club", image: "" },
    { club: "書道", name: "たい焼き", category: "club", image: "" },
    { club: "柔道", name: "パン", category: "club", image: "" },
    { club: "棋道", name: "アメリカンドッグ", category: "club", image: "" },
    { club: "野球", name: "餃子", category: "club", image: "" },
    { club: "バドミントン", name: "わたあめ", category: "club", image: "" },
    { club: "陸上", name: "アイス", category: "club", image: "../images/foods/rikujo.webp" },
    { club: "バレー", name: "ドーナツ", category: "club", image: "" },
    { club: "ロボ研", name: "ジュース", category: "club", image: "" },
    { club: "サッカー", name: "駄菓子", category: "club", image: "" },
    { club: "バスケ", name: "たこ焼き", category: "club", image: "" },
    { club: "3I", name: "焼き鳥", category: "club", image: "" },
    { club: "卓球", name: "チュロス", category: "club", image: "" },
    { club: "テニス", name: "クレープ", category: "club", image: "" },
    { club: "ソフトテニス", name: "焼きそば", category: "club", image: "" }
];

// ============================================================
//  以下はロジック（通常は編集不要）
// ============================================================

/** 画像パスを解決：未設定・読み込み失敗時はデフォルト画像を返す */
function resolveImage(src) {
    return src || DEFAULT_FOOD_IMAGE;
}

/** img タグの onerror ハンドラ文字列 */
const IMG_ONERROR = `this.onerror=null;this.src='${DEFAULT_FOOD_IMAGE}'`;

const list = document.getElementById("foodList");
const count = document.getElementById("foodCount");
const search = document.getElementById("foodSearch");
const filters = document.getElementById("foodFilters");
const tabs = document.querySelector(".food-tabs");
let activeTab = "club";

search.addEventListener("focus", () => {
    tabs.classList.add("is-open");
    filters.classList.add("is-open");
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".food-finder")) {
        tabs.classList.remove("is-open");
        filters.classList.remove("is-open");
    }
});

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
            <img
                class="food-image"
                src="${resolveImage(item.image)}"
                alt="${item.name}"
                onerror="${IMG_ONERROR}"
            >
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
