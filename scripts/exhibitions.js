/*
 * ============================================================
 *  専門展示データ
 * ============================================================
 *  ▼ 画像の設定方法
 *    1. images/exhibitions/ フォルダに画像ファイルを入れる
 *       例: images/exhibitions/kagaku.webp
 *    2. 対応する展示の image フィールドにパスを書く
 *       例: image: "images/exhibitions/kagaku.webp"
 *    3. image を "" (空文字) にすると、デフォルト画像が表示される
 *
 *  ▼ name・course・place・floor・number は展示内容に合わせて変更してください
 * ============================================================
 */

// 画像が未設定 or 読み込み失敗時に表示するデフォルト画像
const DEFAULT_EXHIBITION_IMAGE = "images/food-baby-castella.png";

const exhibitionItems = [
    //1F
    { name: "化学専門展示", course: "化学コース", place: "化学実験室", floor: "1F", number: "A03", category: "course", image: "images/food-baby-castella.png", mapX: 54, mapY: 42 },
    { name: "機械専門展示", course: "機械コース", place: "3M教室", floor: "1F", number: "21", category: "course", image: "images/food-baby-castella.png", mapX: 36, mapY: 55 },
    { name: "機械専門展示", course: "機械コース", place: "4M教室", floor: "1F", number: "A04", category: "course", image: "images/food-baby-castella.png", mapX: 27.5, mapY: 55 },
    { name: "機械専門展示", course: "機械コース", place: "5M教室", floor: "1F", number: "41", category: "course", image: "images/food-baby-castella.png", mapX: 19, mapY: 55 },
    { name: "電気専門展示", course: "電気コース", place: "電気機器Lab", floor: "1F", number: "E01", category: "course", image: "images/food-baby-castella.png", mapX: 69, mapY: 20 },
    { name: "プログラミング研究部試遊会", course: "プログラミング研究部", place: "メカトロ電子回路実験室", floor: "1F", number: "I01", category: "course", image: "images/food-baby-castella.png", mapX: 84, mapY: 82 },
    //2F
    { name: "軽音学部ライブ", course: "軽音学部", place: "1-1教室", floor: "2F", number: "B01", category: "course", image: "images/food-baby-castella.png", mapX: 39, mapY: 25 },
    { name: "軽音学部ライブ", course: "軽音学部", place: "1-2教室", floor: "2F", number: "22", category: "course", image: "images/food-baby-castella.png", mapX: 29, mapY: 25 },
    { name: "電気専門展示", course: "電気コース", place: "2E教室", floor: "2F", number: "32", category: "course", image: "images/food-baby-castella.png", mapX: 63, mapY: 14 },
    { name: "電気専門展示", course: "電気コース", place: "3E教室", floor: "2F", number: "E02", category: "course", image: "images/food-baby-castella.png", mapX: 71.5, mapY: 14 },
    { name: "電気専門展示", course: "電気コース", place: "4E教室", floor: "2F", number: "52", category: "course", image: "images/food-baby-castella.png", mapX: 80, mapY: 14 },
    { name: "工作・オーディオ同好会DJライブ", course: "工作・オーディオ同好会", place: "物理実験室", floor: "2F", number: "B02", category: "course", image: "images/food-baby-castella.png", mapX: 54, mapY: 38 },
    { name: "フォトスポット", course: "美術部", place: "5E教室", floor: "2F", number: "C01", category: "course", image: "images/food-baby-castella.png", mapX: 36, mapY: 49 },
    { name: "美術部展示", course: "美術部", place: "2I教室", floor: "2F", number: "C02", category: "course", image: "images/food-baby-castella.png", mapX: 27.5, mapY: 49 },
    { name: "書道部展示", course: "書道部", place: "2M教室", floor: "2F", number: "92", category: "course", image: "images/food-baby-castella.png", mapX: 21.5, mapY: 46.5 },
    { name: "写真展示", course: "写真部", place: "2M教室", floor: "2F", number: "C03", category: "course", image: "images/food-baby-castella.png", mapX: 17.5, mapY: 50.5 },
    { name: "TRPGサークル試遊会", course: "TRPGサークル", place: "5Z教室", floor: "2F", number: "D01", category: "course", image: "images/food-baby-castella.png", mapX: 34, mapY: 68 },
    { name: "演劇部上映", course: "演劇部", place: "3Z教室", floor: "2F", number: "D02", category: "course", image: "images/food-baby-castella.png", mapX: 34, mapY: 76 },
    { name: "落語研究部寄席", course: "落語研究部", place: "4Z教室", floor: "2F", number: "D03", category: "course", image: "images/food-baby-castella.png", mapX: 25, mapY: 76 },
    { name: "プログラミング研究部試遊会", course: "プログラミング研究部", place: "第3演習室", floor: "2F", number: "I02", category: "course", image: "images/food-baby-castella.png", mapX: 84, mapY: 76 },
    //3F
    { name: "ロボット研究部操縦体験", course: "ロボット研究部", place: "1-3教室", floor: "3F", number: "F01", category: "course", image: "images/food-baby-castella.png", mapX: 38.5, mapY: 25 },
    { name: "ロボット研究部操縦体験", course: "ロボット研究部", place: "1-4教室", floor: "3F", number: "23", category: "course", image: "images/food-baby-castella.png", mapX: 29, mapY: 25 },
    { name: "情報専門展示", course: "情報コース", place: "3I教室", floor: "3F", number: "33", category: "course", image: "images/food-baby-castella.png", mapX: 19, mapY: 48.5 },
    { name: "情報専門展示", course: "情報コース", place: "5I教室", floor: "3F", number: "G01", category: "course", image: "images/food-baby-castella.png", mapX: 27.5, mapY: 48.5 },
    { name: "情報専門展示", course: "情報コース", place: "中講義室", floor: "3F", number: "53", category: "course", image: "images/food-baby-castella.png", mapX: 36, mapY: 48.5 },
    { name: "建設専門展示", course: "建設コース", place: "3C教室", floor: "3F", number: "H01", category: "course", image: "images/food-baby-castella.png", mapX: 34, mapY: 68 },
    { name: "カラオケ大会", course: "イベント班", place: "大講義室", floor: "3F", number: "H05", category: "course", image: "images/food-baby-castella.png", mapX: 65, mapY: 78 }
];

// ============================================================
//  以下はロジック（通常は編集不要）
// ============================================================

/** 画像パスを解決：未設定・読み込み失敗時はデフォルト画像を返す */
function resolveImage(src) {
    return src || DEFAULT_EXHIBITION_IMAGE;
}

/** img タグの onerror ハンドラ文字列 */
const IMG_ONERROR = `this.onerror=null;this.src='${DEFAULT_EXHIBITION_IMAGE}'`;

const list = document.getElementById("exhibitionList");
const count = document.getElementById("exhibitionCount");
const search = document.getElementById("exhibitionSearch");
const filters = document.getElementById("exhibitionFilters");
const tabs = document.querySelector(".exhibition-tabs");
const searchIcon = document.querySelector(".search-icon");
let activeTab = "exhibition";
let activeFloor = "1F";

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

searchIcon.addEventListener("mousedown", (event) => {
    event.preventDefault();
});

searchIcon.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    tabs.classList.remove("is-open");
    filters.classList.remove("is-open");
    search.blur();
});

function renderFilters() {
    const filterKey = activeTab === "exhibition" ? "name" : "course";
    const keyword = search.value.trim().toLowerCase();
    const values = [...new Set(
        exhibitionItems
            .map((item) => item[filterKey])
            .filter((value) =>
                value.toLowerCase().includes(keyword)
            )
    )];
    filters.innerHTML = values.map((value) => `
        <label class="filter-option">
            <input type="checkbox" value="${value}">
            <span>${value}</span>
        </label>
    `).join("");
    filters.querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", () => {

            const selected = [...filters.querySelectorAll("input:checked")]
                .map((input) => input.value);

            const filterKey =
                activeTab === "exhibition" ? "name" : "course";

            const matchedItems = exhibitionItems.filter((item) =>
                selected.includes(item[filterKey])
            );

            // 選択した展示・コース/部活がある階へ移動
            if (selected.length > 0 && matchedItems.length > 0) {

                const firstFloor = matchedItems[0].floor;

                if (firstFloor !== activeFloor) {
                    activeFloor = firstFloor;

                    exhibitionMapImage.src =
                        floorMapImages[firstFloor];

                    exhibitionMapImage.alt =
                        `${firstFloor}の専門展示マップ`;

                    floorTabs.forEach((tab) => {
                        tab.classList.toggle(
                            "is-active",
                            tab.dataset.floor === firstFloor
                        );
                    });
                }
            }

            renderItems();
            renderPins();
        });
    });
}

function renderItems() {
    const keyword = search.value.trim().toLowerCase();
    const selected = [...filters.querySelectorAll("input:checked")]
        .map((input) => input.value);

    const filterKey = activeTab === "exhibition" ? "name" : "course";

    //全階から検索する
    const matchedItems = exhibitionItems
        .filter((item) =>
            !selected.length || selected.includes(item[filterKey])
        )
        .filter((item) =>
            `${item.name}${item.course}${item.place}`
                .toLowerCase()
                .includes(keyword)
        );

    // 検索結果がある階を調べる
    const isSearching = keyword || selected.length > 0;

    const resultFloors = isSearching
        ? [...new Set(matchedItems.map((item) => item.floor))]
        : [];

    // 階数ボタンを更新
    floorTabs.forEach((tab) => {
        const floor = tab.dataset.floor;
        const hasResult = resultFloors.includes(floor);

        // 検索結果がある階を強調
        tab.classList.toggle("has-result", hasResult);

        // 複数階に結果がある場合だけ点滅
        tab.classList.toggle(
            "is-blinking",
            resultFloors.length > 1 && hasResult
        );
    });

    // 表示するのは現在の階の展示
    const visible = matchedItems.filter(
        (item) => item.floor === activeFloor
    );

    count.textContent = `${visible.length}件の展示`;

    list.innerHTML = visible.length
        ? visible.map((item) => `
            <article class="exhibition-card" data-number="${item.number}">
                <div>
                    <p class="exhibition-name"><span class="card-pin-number">${item.number}</span>${item.name}</p>
                    <p class="exhibition-club">
                        ${item.course}
                        <span class="exhibition-badge">${item.place}</span>
                    </p>
                </div>

                <img
                    src="${resolveImage(item.image)}"
                    class="exhibition-image"
                    alt="${item.name}"
                    onerror="${IMG_ONERROR}"
                >
            </article>
        `).join("")
        : '<p class="exhibition-empty">該当する展示がありません。</p>';

    document.querySelectorAll(".exhibition-card").forEach((card, index) => {
        card.addEventListener("click", () => {
            // 他のカードをdim、自分だけ明るく
            document.querySelectorAll(".exhibition-card").forEach((c, i) => {
                c.classList.toggle("is-dimmed", i !== index);
            });

            openPoster(visible[index]);

            // 対応ピンを点滅
            const number = card.dataset.number;
            const targetPin = document.querySelector(
                `.exhibition-pin[data-number="${number}"]`
            );
            if (targetPin) {
                targetPin.classList.add("is-blinking");
                setTimeout(() => {
                    targetPin.classList.remove("is-blinking");
                }, 2000);
            }
        });
    });
}

const posterModal = document.getElementById("exhibitionPosterModal");
const posterImage = document.getElementById("exhibitionPosterImage");
const posterClose = document.getElementById("exhibitionPosterClose");
const posterOverlay = document.getElementById("exhibitionPosterOverlay");

function openPoster(item) {
    posterImage.src = resolveImage(item.image);
    posterImage.alt = item.name + "のポスター";
    document.getElementById("exhibitionPosterName").textContent = item.name;
    document.getElementById("exhibitionPosterMeta").textContent = item.course + "  ·  " + item.place;
    posterModal.hidden = false;
}

function closePoster() {
    posterModal.hidden = true;
    posterImage.src = "";
    // dimを解除
    document.querySelectorAll(".exhibition-card").forEach((c) => c.classList.remove("is-dimmed"));
}

posterClose.addEventListener("click", closePoster);
posterOverlay.addEventListener("click", closePoster);

function renderPins() {
    const pins = document.getElementById("exhibitionPins");

    if (!pins) return;

    const keyword = search.value.trim().toLowerCase();

    const selected = [...filters.querySelectorAll("input:checked")]
        .map((input) => input.value);

    const filterKey =
        activeTab === "exhibition" ? "name" : "course";

    // 検索・フィルターに一致する展示
    const matchedItems = exhibitionItems
        .filter((item) =>
            !selected.length || selected.includes(item[filterKey])
        )
        .filter((item) =>
            `${item.name}${item.course}${item.place}`
                .toLowerCase()
                .includes(keyword)
        );

    // 現在の階のピン
    const visibleItems = exhibitionItems.filter(
        (item) => item.floor === activeFloor
    );

    pins.innerHTML = visibleItems.map((item, index) => {
        const isMatched =
            (keyword || selected.length) &&
            matchedItems.includes(item);
        return `
        <button
            type="button"
            class="exhibition-pin ${isMatched ? "is-blinking" : ""}"
            style="left: ${item.mapX}%; top: ${item.mapY}%;"
            aria-label="${item.name} ${item.place}"
            data-index="${index}"
            data-number="${item.number}"
        >
            <span class="pin-shape">
                <span class="pin-inner">
                    ${(function () {
                const m = item.number.match(/^([A-Z]+)(\d+)$/);
                return m
                    ? `<span class="pin-letter">${m[1]}</span><span class="pin-digits">${m[2]}</span>`
                    : `<span class="pin-number">${item.number}</span>`;
            })()}
                </span>
            </span>
        </button>
    `;
    }).join("");

    // ピンを押したとき
    pins.querySelectorAll(".exhibition-pin").forEach((pin) => {
        pin.addEventListener("click", () => {
            const index = Number(pin.dataset.index);
            const item = visibleItems[index];

            // 対応カードだけ明るく、他をdim
            const allCards = document.querySelectorAll(".exhibition-card");
            allCards.forEach((card) => {
                card.classList.toggle("is-dimmed", card.dataset.number !== item.number);
            });
        });
    });
}


// ──────────────────────────────────────────────
//  DOM 要素の参照・定数
// ──────────────────────────────────────────────
const exhibitionMapImage = document.getElementById("exhibitionMapImage");
const floorTabs = document.querySelectorAll(".floor-tab");

const floorMapImages = {
    "1F": "images/maps/floor1-map.svg",
    "2F": "images/maps/floor2-map.svg",
    "3F": "images/maps/floor3-map.svg",
};

// 階数タブの切り替え
floorTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        activeFloor = tab.dataset.floor;
        floorTabs.forEach((t) => t.classList.toggle("is-active", t === tab));
        exhibitionMapImage.src = floorMapImages[activeFloor];
        exhibitionMapImage.alt = tab.dataset.floor + "の専門展示マップ";
        renderItems();
        renderPins();
    });
});

// 展示タブ（展示 / コース/部活）の切り替え
document.querySelectorAll(".exhibition-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        activeTab = tab.dataset.tab;
        document.querySelectorAll(".exhibition-tab").forEach((t) =>
            t.classList.toggle("is-active", t === tab)
        );
        renderFilters();
        renderItems();
    });
});

// 検索入力
search.addEventListener("input", () => {
    renderFilters();
    renderItems();
    renderPins();
});



// ──────────────────────────────────────────────
//  PC：カードパネルの高さをマップに合わせる
// ──────────────────────────────────────────────
const _mapSection = document.querySelector('.exhibition-map-section');
const _cardsPanel = document.querySelector('.exhibition-cards-panel');

function syncCardsPanelHeight() {
    if (!_mapSection || !_cardsPanel) return;
    if (window.innerWidth >= 960) {
        _cardsPanel.style.maxHeight = _mapSection.offsetHeight + 'px';
    } else {
        _cardsPanel.style.maxHeight = '';
    }
}

// 初回レンダリング
renderFilters();
renderItems();
renderPins();

syncCardsPanelHeight();
window.addEventListener('resize', syncCardsPanelHeight);
if (window.ResizeObserver && _mapSection) {
    new ResizeObserver(syncCardsPanelHeight).observe(_mapSection);
}
