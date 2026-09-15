/*
 * 売店データはこの配列だけを編集すれば差し替えできます。
 * image は images/ フォルダ内のファイル名を指定してください。
 */
const foodItems = [
    { club: "弓道", name: "唐揚げ", category: "club", image: "images/food-baby-castella.png", mapX: 12, mapY: 78 },
    { club: "5I", name: "フランクフルト", category: "club", image: "images/food-baby-castella.png", mapX: 22, mapY: 78 },
    { club: "5Z", name: "ベビーカステラ", category: "club", image: "images/food-baby-castella.png", mapX: 33, mapY: 78 },
    { club: "去年度執行委員", name: "かき氷", category: "club", image: "images/food-baby-castella.png", mapX: 43, mapY: 78 },
    { club: "書道", name: "たい焼き", category: "club", image: "images/food-baby-castella.png", mapX: 54, mapY: 78 },
    { club: "柔道", name: "パン", category: "club", image: "images/food-baby-castella.png", mapX: 65, mapY: 78 },
    { club: "棋道", name: "アメリカンドッグ", category: "club", image: "images/food-baby-castella.png", mapX: 75, mapY: 68 },
    { club: "野球", name: "餃子", category: "club", image: "images/food-baby-castella.png", mapX: 76, mapY: 59 },
    { club: "バドミントン", name: "わたあめ", category: "club", image: "images/food-baby-castella.png", mapX: 78, mapY: 48 },
    { club: "陸上", name: "アイス", category: "club", image: "images/food-baby-castella.png", mapX: 79, mapY: 38 },
    { club: "バレー", name: "ドーナツ", category: "club", image: "images/food-baby-castella.png", mapX: 80, mapY: 27 },
    { club: "ロボ研", name: "ジュース", category: "club", image: "images/food-baby-castella.png", mapX: 82, mapY:  16},
    { club: "サッカー", name: "駄菓子", category: "club", image: "images/food-baby-castella.png", mapX: 72, mapY: 8.5},
    { club: "バスケ", name: "たこ焼き", category: "club", image: "images/food-baby-castella.png", mapX: 61, mapY: 8.5 },
    { club: "3I", name: "焼き鳥", category: "club", image: "images/food-baby-castella.png", mapX: 51, mapY: 8.5 },
    { club: "卓球", name: "チュロス", category: "club", image: "images/food-baby-castella.png", mapX: 40, mapY: 8.5 },
    { club: "テニス", name: "クレープ", category: "club", image: "images/food-baby-castella.png", mapX: 29, mapY: 8.5 },
    { club: "ソフトテニス", name: "焼きそば", category: "club", image: "images/food-baby-castella.png", mapX: 19, mapY: 8.5 }
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
    filters.querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", () => {
            renderItems();
            renderPins();
        });
    });
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

function renderPins() {
    const pins = document.querySelector(".food-pins");

    if (!pins) return;

    const keyword = search.value.trim().toLowerCase();

    const selected = [...filters.querySelectorAll("input:checked")]
        .map((input) => input.value);

    const filterKey =
        activeTab === "food" ? "name" : "club";

    // 検索・フィルターに一致する売店
    const matchedItems = foodItems
        .filter((item) =>
            !selected.length || selected.includes(item[filterKey])
        )
        .filter((item) =>
            `${item.name}${item.club}`
                .toLowerCase()
                .includes(keyword)
        );

    // ピンを表示
    pins.innerHTML = foodItems.map((item, index) => {

        // 検索・フィルター中で、この売店が一致しているか
        const isMatched =
            (keyword || selected.length) &&
            matchedItems.includes(item);

        return `
            <button
                type="button"
                class="food-pin ${isMatched ? "is-blinking" : ""}"
                style="left: ${item.mapX}%; top: ${item.mapY}%;"
                aria-label="${item.name} ${item.club}"
                data-index="${index}"
            >
                <span class="pin-shape">
                    <span class="pin-inner">
                        <span class="pin-number">${index + 1}</span>
                    </span>
                </span>
            </button>
        `;
    }).join("");

    // ピンをクリックしたとき
    pins.querySelectorAll(".food-pin").forEach((pin) => {
        pin.addEventListener("click", () => {
            const index = Number(pin.dataset.index);
            const item = foodItems[index];

            document.getElementById("foodMapInfoImage").src = item.image;
            document.getElementById("foodMapInfoImage").alt = item.name;
            document.getElementById("foodMapInfoName").textContent = item.name;
            document.getElementById("foodMapInfoClub").textContent = item.club;

            document.getElementById("foodMapInfo").hidden = false;
        });
    });
}

//売店情報を閉じる
const foodMapInfoClose = document.getElementById("foodMapInfoClose");

if (foodMapInfoClose) {
    foodMapInfoClose.addEventListener("click", () => {
        document.getElementById("foodMapInfo").hidden = true;
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
    renderPins();
}));

search.addEventListener("input", () => {
    renderItems();
    renderPins();
});
renderFilters();
renderItems();
renderPins();

search.addEventListener("focus", () => {
    document.querySelector(".food-tabs").classList.add("is-open");
    filters.classList.add("is-open");
});

document.addEventListener("click", (event) => {
    const finder = document.querySelector(".food-finder");

    if (!finder.contains(event.target)) {
        document.querySelector(".food-tabs").classList.remove("is-open");
        filters.classList.remove("is-open");
    }
});

// 地図のズーム・パン
const mapContent = document.querySelector(".food-map-content");
const mapArea = document.querySelector(".food-map");

let mapScale = 1;
let mapX = 0;
let mapY = 0;

// 二本指ズーム開始時の情報
let startDistance = 0;
let startScale = 1;

// 一本指パン開始時の情報
let startPanX = 0;
let startPanY = 0;
let startMapX = 0;
let startMapY = 0;

function getTouchDistance(touch1, touch2) {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;

    return Math.sqrt(dx * dx + dy * dy);
}

// 地図を反映
function updateMapTransform() {
    mapContent.style.transform =
        `translate(${mapX}px, ${mapY}px) scale(${mapScale})`;
}

// タッチ開始
mapArea.addEventListener("touchstart", (event) => {

    // 二本指 → ズーム開始
    if (event.touches.length === 2) {

        startDistance = getTouchDistance(
            event.touches[0],
            event.touches[1]
        );

        startScale = mapScale;

        return;
    }

    // 一本指 → パン開始
    if (event.touches.length === 1 && mapScale > 1) {

        startPanX = event.touches[0].clientX;
        startPanY = event.touches[0].clientY;

        startMapX = mapX;
        startMapY = mapY;
    }

}, { passive: true });


// タッチ移動
mapArea.addEventListener("touchmove", (event) => {

    // 二本指 → 拡大・縮小
    if (event.touches.length === 2) {

        event.preventDefault();

        const currentDistance = getTouchDistance(
            event.touches[0],
            event.touches[1]
        );

        const scaleChange =
            currentDistance / startDistance;

        mapScale = startScale * scaleChange;

        // 最小100%、最大300%
        mapScale = Math.max(
            1,
            Math.min(mapScale, 3)
        );

        // 1倍まで縮小したら中央に戻す
        if (mapScale === 1) {
            mapX = 0;
            mapY = 0;
        }

        updateMapTransform();

        return;
    }


    // 一本指 → 地図を移動
    if (event.touches.length === 1 && mapScale > 1) {

        event.preventDefault();

        const currentX = event.touches[0].clientX;
        const currentY = event.touches[0].clientY;

        mapX =
            startMapX + (currentX - startPanX);

        mapY =
            startMapY + (currentY - startPanY);

        updateMapTransform();
    }

}, { passive: false });


// タッチ終了
mapArea.addEventListener("touchend", (event) => {

    if (event.touches.length < 2) {
        startDistance = 0;
    }

});