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
    { club: "弓道部",       name: "唐揚げ",         category: "club", image: "images/foods/karaage.webp", price: "小 300円\n大 500円", detail: "" },
    { club: "5I",         name: "フランクフルト",  category: "club", image: "images/foods/furankufuruto.webp", price: "300円", detail: "" },
    { club: "5Z",         name: "ベビーカステラ",  category: "club", image: "images/foods/bebikasutera.webp", price: "5個 300円\n10個 600円\n20個 1100円\n追加トッピング +100円", detail: "" },
    { club: "昨年度執行委員", name: "かき氷",      category: "club", image: "images/foods/kakigori.webp", price: "200円", detail: "" },
    { club: "書道部",       name: "たい焼き",        category: "club", image: "images/foods/taiyaki.webp", price: "250円\nトッピングあり +50円", detail: "" },
    { club: "柔道部",       name: "パン",            category: "club", image: "images/foods/pan.webp", price: "2つ 300円", detail: "" },
    { club: "棋道部",       name: "アメリカンドッグ",category: "club", image: "images/foods/amerikandog.webp", price: "250円\nマスタード +50円", detail: "" },
    { club: "野球部",       name: "餃子",            category: "club", image: "images/foods/gyoza.webp", price: "5個 300円", detail: "" },
    { club: "バドミントン部",name: "わたあめ",       category: "club", image: "images/foods/wataame.webp", price: "150円", detail: "" },
    { club: "陸上部",       name: "アイス",          category: "club", image: "images/foods/aisukurimu.webp", price: "150円", detail: "" },
    { club: "バレー部",     name: "ドーナツ",        category: "club", image: "images/foods/donattsu.webp", price: "300円", detail: "" },
    { club: "ロボット研究部",     name: "ジュース",        category: "club", image: "images/foods/jusu.webp", price: "100円\n150円\n200円", detail: "" },
    { club: "サッカー部",   name: "駄菓子",          category: "club", image: "images/foods/dagashi.webp", price: "Aセット 150円\nBセット 300円\nCセット 350円\nDセット 250円", detail: "" },
    { club: "バスケ部",     name: "たこ焼き",        category: "club", image: "images/foods/takoyaki.webp", price: "300円", detail: "" },
    { club: "3I",         name: "焼き鳥",          category: "club", image: "images/foods/yakitori.webp", price: "100円", detail: "" },
    { club: "卓球部",       name: "チュロス",        category: "club", image: "images/foods/churosu.webp", price: "ロング 400円\nハーフ 200円\nトッピング +50円", detail: "" },
    { club: "テニス部",     name: "クレープ",        category: "club", image: "images/foods/kurepu.webp", price: "1つ 500円\n2つ 900円", detail: "" },
    { club: "ソフトテニス部",name: "焼きそば",       category: "club", image: "images/foods/yakisoba.webp", price: "400円", detail: "" }
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

/** カードに表示する値段：1行目の「○円」だけ（個数などの説明は出さない） */
function cardPrice(price) {
    const first = (price || "").split("\n")[0];
    const m = first.match(/\d+円/);
    return m ? m[0] : "";
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

    list.innerHTML = `<div class="food-container">` + visible.map((item, idx) => `
        <article class="food-card" data-idx="${idx}" tabindex="0" role="button" aria-label="${item.name}の詳細を見る">
            <img
                class="food-image"
                src="${resolveImage(item.image)}"
                alt="${item.name}"
                onerror="${IMG_ONERROR}"
            >
            <div class="food-card-body">
                <h2 class="food-name">${item.name}</h2>
                <div class="food-meta">
                    ${cardPrice(item.price) ? `<p class="food-price">${cardPrice(item.price)}</p>` : ""}
                    <p class="food-club food-club-pill">${item.club}${item.tag ? `<span class="food-badge">${item.tag}</span>` : ""}</p>
                </div>
            </div>
        </article>
    `).join("") + `</div>`;

    // カードクリック → モーダル
    list.querySelectorAll(".food-card").forEach((card, i) => {
        const item = visible[i];
        const activate = () => openModal(item);
        card.addEventListener("click", activate);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
        });
    });

    // スクロールフェードイン
    observeCards();
}

function observeCards() {
    const cards = list.querySelectorAll(".food-card");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("is-visible");
                }, i * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    cards.forEach((card) => observer.observe(card));
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
