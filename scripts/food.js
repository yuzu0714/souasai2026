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
 *  ▼ price: 値段（例: "200円"）、不明な場合は "" にする
 *  ▼ detail: 説明文、空でも可
 *  ▼ name・club・category は内容に合わせて変更してください
 * ============================================================
 */

// 画像が未設定 or 読み込み失敗時に表示するデフォルト画像
const DEFAULT_FOOD_IMAGE = "images/food-baby-castella.png";

const foodItems = [
    { club: "弓道",       name: "唐揚げ",         category: "club", image: "images/foods/karaage.webp", price: "", detail: "" },
    { club: "5I",         name: "フランクフルト",  category: "club", image: "images/foods/furankufuruto.webp", price: "", detail: "" },
    { club: "5Z",         name: "ベビーカステラ",  category: "club", image: "images/foods/bebikasutera.webp", price: "", detail: "" },
    { club: "去年度執行委員", name: "かき氷",      category: "club", image: "images/foods/kakigori.webp", price: "", detail: "" },
    { club: "書道",       name: "たい焼き",        category: "club", image: "images/foods/taiyaki.webp", price: "", detail: "" },
    { club: "柔道",       name: "パン",            category: "club", image: "images/foods/pan.webp", price: "", detail: "" },
    { club: "棋道",       name: "アメリカンドッグ",category: "club", image: "images/foods/amerikandog.webp", price: "", detail: "" },
    { club: "野球",       name: "餃子",            category: "club", image: "images/foods/gyoza.webp", price: "", detail: "" },
    { club: "バドミントン",name: "わたあめ",       category: "club", image: "images/foods/wataame.webp", price: "", detail: "" },
    { club: "陸上",       name: "アイス",          category: "club", image: "images/foods/aisukurimu.webp", price: "", detail: "" },
    { club: "バレー",     name: "ドーナツ",        category: "club", image: "images/foods/donattsu.webp", price: "", detail: "" },
    { club: "ロボ研",     name: "ジュース",        category: "club", image: "images/foods/jusu.webp", price: "", detail: "" },
    { club: "サッカー",   name: "駄菓子",          category: "club", image: "", price: "", detail: "" },
    { club: "バスケ",     name: "たこ焼き",        category: "club", image: "images/foods/takoyaki.webp", price: "", detail: "" },
    { club: "3I",         name: "焼き鳥",          category: "club", image: "images/foods/yakitori.webp", price: "", detail: "" },
    { club: "卓球",       name: "チュロス",        category: "club", image: "images/foods/churosu.webp", price: "", detail: "" },
    { club: "テニス",     name: "クレープ",        category: "club", image: "images/foods/kurepu.webp", price: "", detail: "" },
    { club: "ソフトテニス",name: "焼きそば",       category: "club", image: "images/foods/yakisoba.webp", price: "", detail: "" }
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

const list     = document.getElementById("foodList");
const count    = document.getElementById("foodCount");
const search   = document.getElementById("foodSearch");
const filters  = document.getElementById("foodFilters");
const tabs     = document.querySelector(".food-tabs");
let activeTab  = "club";

// ---- モーダル ----
const overlay      = document.getElementById("foodModalOverlay");
const modalClose   = document.getElementById("foodModalClose");
const modalImage   = document.getElementById("modalImage");
const modalClub    = document.getElementById("modalClub");
const modalName    = document.getElementById("modalFoodName");
const modalPrice   = document.getElementById("modalPrice");
const modalDetail  = document.getElementById("modalDetail");

function openModal(item) {
    modalImage.src = resolveImage(item.image);
    modalImage.alt = item.name;
    modalImage.onerror = () => { modalImage.onerror = null; modalImage.src = DEFAULT_FOOD_IMAGE; };
    modalClub.textContent  = item.club;
    modalName.textContent  = item.name;
    modalPrice.textContent = item.price  || "";
    modalDetail.textContent= item.detail || "";
    overlay.setAttribute("aria-hidden", "false");
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// ---- 検索 / フィルタ ----
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
    const keyword  = search.value.trim().toLowerCase();
    const selected = [...filters.querySelectorAll("input:checked")].map((input) => input.value);
    const filterKey = activeTab === "food" ? "name" : "club";
    const visible  = foodItems
        .filter((item) => !selected.length || selected.includes(item[filterKey]))
        .filter((item) => `${item.name}${item.club}`.toLowerCase().includes(keyword));

    count.textContent = '';
    if (!visible.length) {
        list.innerHTML = '<p class="food-empty">該当する売店がありません。</p>';
        return;
    }

    list.innerHTML = visible.map((item, idx) => `
        <article class="food-card" data-idx="${idx}" tabindex="0" role="button" aria-label="${item.name}の詳細を見る">
            <img
                class="food-image"
                src="${resolveImage(item.image)}"
                alt="${item.name}"
                onerror="${IMG_ONERROR}"
            >
            <div class="food-card-body">
                <p class="food-club">${item.club}${item.tag ? `<span class="food-badge">${item.tag}</span>` : ""}</p>
                <h2 class="food-name">${item.name}</h2>
                ${item.price ? `<p class="food-price">${item.price}</p>` : ""}
            </div>
        </article>
    `).join("");

    // カードクリック → モーダル
    list.querySelectorAll(".food-card").forEach((card, i) => {
        const item = visible[i];
        const activate = () => openModal(item);
        card.addEventListener("click", activate);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
        });
    });
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
