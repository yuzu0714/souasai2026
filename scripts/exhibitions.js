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
    { name: "化学専門展示", course: "化学コース", place: "化学実験室", floor: "1F", number: "A03", category: "course", location: "校内", image: "../images/exhibitions/z.webp", mapX: 54, mapY: 42 },
    { name: "機械専門展示", course: "機械コース", place: "4M教室", floor: "1F", number: "A04", category: "course", location: "校内", image: "", mapX: 27.5, mapY: 55 },
    { name: "電気専門展示", course: "電気コース", place: "電気機器Lab", floor: "1F", number: "E01", category: "course", location: "校内", image: "../images/exhibitions/e.webp", mapX: 69, mapY: 20 },
    { name: "プログラミング研究部試遊会", course: "プログラミング研究部", place: "メカトロ電子回路実験室", floor: "1F", number: "i01", category: "course", location: "校内", image: "../images/club/puroguraming.webp", mapX: 84, mapY: 82 },
    //2F
    { name: "軽音学部ライブ", course: "軽音学部", place: "1-1教室", floor: "2F", number: "B01", category: "course", location: "校内", image: "../images/club/keion.webp", mapX: 39, mapY: 25 },
    { name: "電気専門展示", course: "電気コース", place: "3E教室", floor: "2F", number: "E02", category: "course", location: "校内", image: "../images/exhibitions/e.webp", mapX: 71.5, mapY: 14 },
    { name: "工作・オーディオ同好会DJライブ", course: "工作・オーディオ同好会", place: "物理実験室", floor: "2F", number: "B02", category: "course", location: "校内", image: "../images/club/kousaku.webp", mapX: 54, mapY: 38 },
    { name: "美術部展示", course: "美術部", place: "2I教室", floor: "2F", number: "C01", category: "course", location: "校内", image: "../images/club/bijutu.webp", mapX: 27.5, mapY: 49 },
    { name: "写真部展示", course: "写真部 書道部", place: "2M教室", floor: "2F", number: "C02", category: "course", location: "校内", image: "../images/club/syashin.webp", mapX: 17.5, mapY: 50.5 },
    { name: "ショートムービー展示", course: "演劇部", place: "3Z教室", floor: "2F", number: "D01", category: "course", location: "校内", image: "../images/club/engeki.webp", mapX: 34, mapY: 70 },
    { name: "天文愛好会展示", course: "天文愛好会", place: "5Z教室", floor: "2F", number: "D02", category: "course", location: "校内", image: "../images/club/tenmon.webp", mapX: 34, mapY: 76 },
    { name: "落語研究部寄席", course: "落語研究部", place: "4Z教室", floor: "2F", number: "D03", category: "course", location: "校内", image: "../images/club/rakugo.webp", mapX: 25, mapY: 76 },
    { name: "プログラミング研究部試遊会", course: "プログラミング研究部", place: "第3演習室", floor: "2F", number: "i02", category: "course", location: "校内", image: "../images/club/puroguraming.webp", mapX: 84, mapY: 76 },
    //3F
    { name: "ロボット研究部操縦体験", course: "ロボット研究部", place: "1-3教室", floor: "3F", number: "F01", category: "course", location: "校内", image: "", mapX: 38.5, mapY: 25 },
    { name: "情報専門展示", course: "情報コース", place: "5I教室", floor: "3F", number: "G01", category: "course", location: "校内", image: "../images/exhibitions/i.webp", mapX: 27.5, mapY: 48.5 },
    { name: "コスプレクローク", course: "", place: "建設製図室", floor: "3F", number: "H02", category: "course", location: "校内", image: "", description: "コスプレクローク", mapX: 34, mapY: 76 },
    { name: "更衣室", course: "", place: "2C", floor: "3F", number: "H04", category: "course", location: "校内", image: "", description: "更衣室", mapX: 25, mapY: 76 },
    { name: "更衣室", course: "", place: "4C", floor: "3F", number: "H03", category: "course", location: "校内", image: "", description: "更衣室", mapX: 25, mapY: 68 },
    { name: "建設専門展示", course: "建設コース", place: "3C教室", floor: "3F", number: "H01", category: "course", location: "校内", image: "../images/exhibitions/kenchiku.webp", mapX: 34, mapY: 68 },
    { name: "カラオケ大会", course: "イベント班", place: "大講義室", floor: "3F", number: "H05", category: "course", location: "校内", image: "", mapX: 65, mapY: 78 }
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
let activeLocation = "校内";

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
    renderPins();
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

    //全階から検索する（ロケーションでも絞り込む）
    const matchedItems = exhibitionItems
        .filter((item) => item.location === activeLocation)
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

                ${item.image ? `<img
                    src="${resolveImage(item.image)}"
                    class="exhibition-image"
                    alt="${item.name}"
                    onerror="${IMG_ONERROR}"
                >` : ''}
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

let currentPosterItem = null;

function openPoster(item) {
    currentPosterItem = item;

    const descEl = document.getElementById("exhibitionPosterDesc");

    if (item.description) {
        // テキストのみ表示モード
        posterImage.style.display = "none";
        if (descEl) { descEl.textContent = item.description; descEl.style.display = ""; }
    } else {
        posterImage.style.display = "";
        posterImage.src = resolveImage(item.image);
        posterImage.alt = item.name + "のポスター";
        if (descEl) { descEl.textContent = ""; descEl.style.display = "none"; }
    }

    document.getElementById("exhibitionPosterName").textContent = item.name;
    document.getElementById("exhibitionPosterMeta").textContent =
        [item.course, item.place].filter(Boolean).join("  ·  ");
    posterModal.hidden = false;

    // 地図ボタン：校内のみ有効化
    const mapLinkBtn = document.getElementById("exhibitionMapLinkBtn");
    if (mapLinkBtn) {
        const hasMap = item.location === "校内" && item.floor && item.mapX != null;
        mapLinkBtn.style.display = hasMap ? "" : "none";
    }
}

function closePoster() {
    posterModal.hidden = true;
    posterImage.src = "";
    posterImage.style.display = "";
    const descEl = document.getElementById("exhibitionPosterDesc");
    if (descEl) { descEl.textContent = ""; descEl.style.display = "none"; }
    // dimを解除
    document.querySelectorAll(".exhibition-card").forEach((c) => c.classList.remove("is-dimmed"));
}

posterClose.addEventListener("click", closePoster);
posterOverlay.addEventListener("click", closePoster);

// 地図で確認するボタン
document.getElementById("exhibitionMapLinkBtn").addEventListener("click", () => {
    if (!currentPosterItem) return;

    const item = currentPosterItem;
    closePoster();

    // ─── ロケーション切り替え ───
    if (item.location && item.location !== activeLocation) {
        activeLocation = item.location;
        document.querySelectorAll(".location-tab").forEach(t =>
            t.classList.toggle("is-active", t.dataset.location === activeLocation)
        );
        updateLocationView();
    }

    // ─── フロア切り替え（校内のみ） ───
    if (item.location === "校内" && item.floor && item.floor !== activeFloor) {
        activeFloor = item.floor;
        exhibitionMapImage.src = floorMapImages[activeFloor];
        exhibitionMapImage.alt = activeFloor + "の専門展示マップ";
        document.querySelectorAll(".floor-tab").forEach(t =>
            t.classList.toggle("is-active", t.dataset.floor === activeFloor)
        );
    }

    // ピンとカードを再描画してから光らせる
    renderItems();
    renderPins();

    // ─── 対応ピンを光らせる ───
    const targetPin = document.querySelector(
        `.exhibition-pin[data-number="${item.number}"]`
    );
    if (targetPin) {
        targetPin.classList.add("is-blinking");
    }

    // ─── マップセクションまでスクロール ───
    const mapWrapper = document.querySelector(".exhibition-location-wrapper");
    if (mapWrapper) {
        const OFFSET = 100; // 固定ヘッダー＋余白
        const top = mapWrapper.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
    }
});

function renderPins() {
    const pins = document.getElementById("exhibitionPins");

    if (!pins) return;

    const keyword = search.value.trim().toLowerCase();

    const selected = [...filters.querySelectorAll("input:checked")]
        .map((input) => input.value);

    const filterKey =
        activeTab === "exhibition" ? "name" : "course";

    // 検索・フィルターに一致する展示（ロケーションでも絞り込む）
    const matchedItems = exhibitionItems
        .filter((item) => item.location === activeLocation)
        .filter((item) =>
            !selected.length || selected.includes(item[filterKey])
        )
        .filter((item) =>
            `${item.name}${item.course}${item.place}`
                .toLowerCase()
                .includes(keyword)
        );

    // 現在の階のピン（ロケーションでも絞り込む）
    const visibleItems = exhibitionItems.filter(
        (item) => item.floor === activeFloor && item.location === activeLocation
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
                    ${(()=>{const m=item.number.match(/^([A-Za-z]+)(\d+)$/);return m?`<span class="pin-letter">${m[1]}</span><span class="pin-digits">${m[2]}</span>`:`<span class="pin-number">${item.number}</span>`;})()}
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

            // クリックしたピンの点滅を止める
            pin.classList.remove("is-blinking");

            // 詳細モーダルを開く
            openPoster(item);

            // 対応カードへスクロール
            const targetCard = document.querySelector(`.exhibition-card[data-number="${item.number}"]`);
            if (targetCard) {
                targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
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

// Enterキーで検索確定（パネルを閉じてピンのエフェクトを再起動）
search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        tabs.classList.remove("is-open");
        filters.classList.remove("is-open");
        search.blur();
        renderPins();
    }
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

// ロケーションタブの切り替え
const locationTabs = document.querySelectorAll(".location-tab");
const floorTabsWrapper = document.getElementById("exhibitionFloorTabsWrapper");
const mapEl = document.querySelector(".exhibition-map");

// ロケーションごとの地図画像（校内は floorMapImages を使用）
const locationSingleMap = {
    "校外": "images/maps/map_4.svg",
};

// 図書館用フロアマップ
const libraryFloorMaps = {
    "1F": "images/maps/map_5.svg",
    "2F": "images/maps/map_6.svg",
};
let activeLibraryFloor = "1F";

function updateLocationView() {
    const isKonai = activeLocation === "校内";
    const singleMap = locationSingleMap[activeLocation];

    // 階数タブの表示/非表示（校内のみ表示）
    if (floorTabsWrapper) {
        floorTabsWrapper.classList.toggle("is-hidden", !isKonai);
    }

    const pins = document.getElementById("exhibitionPins");
    let placeholder = mapEl ? mapEl.querySelector(".exhibition-map-placeholder") : null;

    // 図書館タブを一度リセット（校内/校外に戻ったとき用）
    if (floorTabsWrapper) {
        floorTabsWrapper.querySelectorAll(".library-floor-tab").forEach(t => t.style.display = "none");
        floorTabsWrapper.querySelectorAll(".floor-tab:not(.library-floor-tab)").forEach(t => t.style.display = "");
    }

    if (isKonai) {
        // 校内：通常の階数マップを表示
        if (placeholder) placeholder.remove();
        if (exhibitionMapImage) {
            exhibitionMapImage.style.display = "";
            exhibitionMapImage.src = floorMapImages[activeFloor];
            exhibitionMapImage.alt = activeFloor + "の専門展示マップ";
        }
        if (pins) pins.style.display = "";
    } else if (singleMap) {
        // 地図画像がある場合（校外など）
        if (placeholder) placeholder.remove();
        if (exhibitionMapImage) {
            exhibitionMapImage.style.display = "";
            exhibitionMapImage.src = singleMap;
            exhibitionMapImage.alt = activeLocation + "のマップ";
        }
        if (pins) pins.style.display = "none";
    } else if (activeLocation === "図書館") {
        // 図書館：専用フロアタブを表示して切り替え
        if (placeholder) placeholder.remove();
        if (exhibitionMapImage) {
            exhibitionMapImage.style.display = "";
            exhibitionMapImage.src = libraryFloorMaps[activeLibraryFloor];
            exhibitionMapImage.alt = "図書館" + activeLibraryFloor + "のマップ";
        }
        if (pins) pins.style.display = "none";

        // 図書館用フロアタブを生成（なければ）
        if (floorTabsWrapper && !floorTabsWrapper.querySelector(".library-floor-tab")) {
            floorTabsWrapper.classList.remove("is-hidden");
            // 既存のフロアタブを一時的に非表示にして図書館用を追加
            floorTabsWrapper.querySelectorAll(".floor-tab").forEach(t => t.style.display = "none");
            Object.keys(libraryFloorMaps).forEach((floor) => {
                if (!floorTabsWrapper.querySelector(`.library-floor-tab[data-floor="${floor}"]`)) {
                    const btn = document.createElement("button");
                    btn.type = "button";
                    btn.className = "floor-tab library-floor-tab" + (floor === activeLibraryFloor ? " is-active" : "");
                    btn.dataset.floor = floor;
                    btn.textContent = floor;
                    btn.addEventListener("click", () => {
                        activeLibraryFloor = floor;
                        floorTabsWrapper.querySelectorAll(".library-floor-tab").forEach(t =>
                            t.classList.toggle("is-active", t.dataset.floor === floor)
                        );
                        exhibitionMapImage.src = libraryFloorMaps[floor];
                        exhibitionMapImage.alt = "図書館" + floor + "のマップ";
                    });
                    floorTabsWrapper.appendChild(btn);
                }
            });
        } else if (floorTabsWrapper) {
            floorTabsWrapper.classList.remove("is-hidden");
            floorTabsWrapper.querySelectorAll(".floor-tab:not(.library-floor-tab)").forEach(t => t.style.display = "none");
            floorTabsWrapper.querySelectorAll(".library-floor-tab").forEach(t => t.style.display = "");
        }
    } else {
        // 地図画像がない場合：準備中を表示
        if (exhibitionMapImage) exhibitionMapImage.style.display = "none";
        if (pins) pins.style.display = "none";
        if (mapEl && !placeholder) {
            placeholder = document.createElement("div");
            placeholder.className = "exhibition-map-placeholder";
            placeholder.textContent = activeLocation + "のマップは準備中です";
            mapEl.querySelector(".exhibition-map-content").appendChild(placeholder);
        }
    }
}

locationTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        activeLocation = tab.dataset.location;
        locationTabs.forEach((t) => t.classList.toggle("is-active", t === tab));
        updateLocationView();
        renderFilters();
        renderItems();
        renderPins();
    });
});


// ============================================================
//  ポスターカルーセル（Swiper / Nifrel スタイル）
// ============================================================
(function () {
    var seen = new Set();
    var carouselItems = exhibitionItems.filter(function(item) {
        var img = item.image || '';
        if (!img || seen.has(img)) return false;
        if (!img.includes('images/club/') && !img.includes('images/club\\')) return false;
        seen.add(img);
        return true;
    });

    var track  = document.getElementById('carouselTrack');
    var dotsEl = document.getElementById('carouselDots');
    if (!track || carouselItems.length === 0) return;

    // スライドを描画
    track.innerHTML = carouselItems.map(function(item, i) {
        return '<div class="swiper-slide carousel-slide" data-index="' + i + '">' +
            '<div class="carousel-card">' +
            '<img class="carousel-card-img" src="' + resolveImage(item.image) + '" alt="' + item.name + '" onerror="' + IMG_ONERROR + '">' +
            '<div class="carousel-card-info">' +
            '<p class="carousel-card-name">' + item.name + '</p>' +
            '<p class="carousel-card-meta">' + item.course + '</p>' +
            '</div></div></div>';
    }).join('');

    // ドット描画
    dotsEl.innerHTML = carouselItems.map(function(_, i) {
        return '<button class="carousel-dot' + (i === 0 ? ' is-active' : '') +
               '" data-index="' + i + '" aria-label="' + (i + 1) + '枚目"></button>';
    }).join('');

    // Swiper 初期化
    var swiper = new Swiper('.exhibition-swiper', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 12,
        speed: 520,
        navigation: {
            nextEl: '#carouselNext',
            prevEl: '#carouselPrev',
            disabledClass: 'swiper-button-disabled',
        },
    });

    // スライド変更時にドット更新
    swiper.on('slideChange', function() {
        dotsEl.querySelectorAll('.carousel-dot').forEach(function(d, i) {
            d.classList.toggle('is-active', i === swiper.activeIndex);
        });
    });

    // ドットクリック
    dotsEl.querySelectorAll('.carousel-dot').forEach(function(dot) {
        dot.addEventListener('click', function() {
            swiper.slideTo(Number(dot.dataset.index));
        });
    });

    // カードクリックでポスターモーダルを開く
    track.addEventListener('click', function(e) {
        var slide = e.target.closest('.swiper-slide');
        if (!slide) return;
        if (slide.classList.contains('swiper-slide-active')) {
            var i = Number(slide.dataset.index);
            openPoster(carouselItems[i]);
        } else {
            var i = Number(slide.dataset.index);
            swiper.slideToLoop(i);
        }
    });
})();

// 初回レンダリング
renderFilters();
renderItems();
renderPins();

syncCardsPanelHeight();
window.addEventListener('resize', syncCardsPanelHeight);
if (window.ResizeObserver && _mapSection) {
    new ResizeObserver(syncCardsPanelHeight).observe(_mapSection);
}

// ──────────────────────────────────────────────
//  マップ ズーム＆パン（ホイール・ドラッグ・ピンチ）
// ──────────────────────────────────────────────
(function () {
    const mapEl     = document.querySelector('.exhibition-map');
    const mapContent= document.getElementById('exhibitionMapContent');
    const btnIn     = document.getElementById('mapZoomIn');
    const btnOut    = document.getElementById('mapZoomOut');
    const btnReset  = document.getElementById('mapZoomReset');

    if (!mapEl || !mapContent) return;

    const MIN = 1, MAX = 5, STEP = 0.35;

    let scale = 1, ox = 0, oy = 0;

    function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

    function applyTransform(animate) {
        // 移動量の上限：マップがはみ出しすぎないよう制限
        const maxX = (scale - 1) * mapEl.clientWidth  / 2;
        const maxY = (scale - 1) * mapEl.clientHeight / 2;
        ox = clamp(ox, -maxX, maxX);
        oy = clamp(oy, -maxY, maxY);
        mapContent.style.transition = animate ? 'transform 0.22s cubic-bezier(0.25,0.8,0.25,1)' : 'none';
        mapContent.style.transform  = `translate(${ox}px,${oy}px) scale(${scale})`;
        mapEl.style.cursor          = scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'default';
        syncButtons();
    }

    function zoomAt(newScale, cx, cy) {
        // cx,cy: mapEl 左上基準のオフセット
        const px = cx - mapEl.clientWidth  / 2;
        const py = cy - mapEl.clientHeight / 2;
        const ratio = newScale / scale;
        ox = px + (ox - px) * ratio;
        oy = py + (oy - py) * ratio;
        scale = newScale;
        applyTransform(false);
    }

    function syncButtons() {
        if (btnIn)    btnIn.disabled    = scale >= MAX;
        if (btnOut)   btnOut.disabled   = scale <= MIN;
        if (btnReset) btnReset.disabled = (scale === 1 && ox === 0 && oy === 0);
    }

    // ── マウスホイール ──────────────────────────
    mapEl.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rect = mapEl.getBoundingClientRect();
        const cx   = e.clientX - rect.left;
        const cy   = e.clientY - rect.top;
        const factor = e.deltaY < 0 ? 1.06 : 1 / 1.06;
        zoomAt(clamp(scale * factor, MIN, MAX), cx, cy);
    }, { passive: false });

    // ── マウスドラッグ ──────────────────────────
    let dragging = false, dsx = 0, dsy = 0, dox = 0, doy = 0;

    mapEl.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        dragging = true;
        dsx = e.clientX; dsy = e.clientY;
        dox = ox;        doy = oy;
        mapEl.style.cursor = 'grabbing';
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        ox = dox + (e.clientX - dsx);
        oy = doy + (e.clientY - dsy);
        applyTransform(false);
    });

    window.addEventListener('mouseup', () => {
        if (!dragging) return;
        dragging = false;
        applyTransform(false);
    });

    // ── タッチ（ピンチ＋パン） ─────────────────
    let lastDist = 0, lastMidX = 0, lastMidY = 0;

    function getTouches(e) { return Array.from(e.touches).slice(0, 2); }

    function touchInfo(t, rect) {
        const mid = t.length >= 2
            ? { x: (t[0].clientX + t[1].clientX) / 2, y: (t[0].clientY + t[1].clientY) / 2 }
            : { x: t[0].clientX, y: t[0].clientY };
        const dist = t.length >= 2
            ? Math.hypot(t[1].clientX - t[0].clientX, t[1].clientY - t[0].clientY)
            : 0;
        return { cx: mid.x - rect.left, cy: mid.y - rect.top, dist };
    }

    mapEl.addEventListener('touchstart', (e) => {
        // ピンのタップはクリックイベントで処理するため preventDefault をスキップ
        if (e.target.closest('.exhibition-pin')) return;
        const t = getTouches(e);
        const rect = mapEl.getBoundingClientRect();
        const info = touchInfo(t, rect);
        lastDist = info.dist; lastMidX = info.cx; lastMidY = info.cy;
        e.preventDefault();
    }, { passive: false });

    mapEl.addEventListener('touchmove', (e) => {
        // ピン上のタッチはパン処理をスキップ
        if (e.target.closest('.exhibition-pin')) return;
        const t = getTouches(e);
        const rect = mapEl.getBoundingClientRect();
        const info = touchInfo(t, rect);

        // パン
        ox += info.cx - lastMidX;
        oy += info.cy - lastMidY;

        // ピンチ
        if (t.length >= 2 && lastDist > 0) {
            const ratio    = info.dist / lastDist;
            const newScale = clamp(scale * ratio, MIN, MAX);
            const px = info.cx - mapEl.clientWidth  / 2;
            const py = info.cy - mapEl.clientHeight / 2;
            ox = px + (ox - px) * (newScale / scale);
            oy = py + (oy - py) * (newScale / scale);
            scale = newScale;
        }

        lastDist = info.dist; lastMidX = info.cx; lastMidY = info.cy;
        applyTransform(false);
        e.preventDefault();
    }, { passive: false });

    mapEl.addEventListener('touchend', (e) => {
        const t = getTouches(e);
        if (t.length > 0) {
            const rect = mapEl.getBoundingClientRect();
            const info = touchInfo(t, rect);
            lastDist = info.dist; lastMidX = info.cx; lastMidY = info.cy;
        }
    });

    // ── ズームボタン ────────────────────────────
    function zoomCenter(factor) {
        const cx = mapEl.clientWidth  / 2;
        const cy = mapEl.clientHeight / 2;
        zoomAt(clamp(scale * factor, MIN, MAX), cx, cy);
        applyTransform(true);
    }

    if (btnIn)    btnIn.addEventListener('click',    () => zoomCenter(1 + STEP));
    if (btnOut)   btnOut.addEventListener('click',   () => zoomCenter(1 / (1 + STEP)));
    if (btnReset) btnReset.addEventListener('click', () => {
        scale = 1; ox = 0; oy = 0; applyTransform(true);
    });

    // 階数切り替え時にリセット
    document.querySelectorAll('.floor-tab').forEach(tab =>
        tab.addEventListener('click', () => { scale = 1; ox = 0; oy = 0; applyTransform(true); })
    );

    syncButtons();
})();

// ============================================================
// 黄色枠内ポスターカルーセル（第2カルーセル）
// ============================================================
(function () {
    var allowedImages = ['i.webp', 'e.webp', 'z.webp'];
    var seen2 = new Set();
    var carouselItems = exhibitionItems.filter(function(item) {
        var img = item.image || '';
        if (!allowedImages.some(function(name) { return img.endsWith(name); })) return false;
        if (seen2.has(img)) return false;
        seen2.add(img);
        return true;
    });

    var track  = document.getElementById('carouselTrack2');
    var dotsEl = document.getElementById('carouselDots2');
    if (!track || carouselItems.length === 0) return;

    // スライドを描画
    track.innerHTML = carouselItems.map(function(item, i) {
        return '<div class="swiper-slide carousel-slide" data-index="' + i + '">' +
            '<div class="carousel-card">' +
            '<img class="carousel-card-img" src="' + resolveImage(item.image) + '" alt="' + item.name + '" onerror="' + IMG_ONERROR + '">' +
            '<div class="carousel-card-info">' +
            '<p class="carousel-card-name">' + item.name + '</p>' +
            '<p class="carousel-card-meta">' + item.course + '</p>' +
            '</div></div></div>';
    }).join('');

    // ドット描画
    dotsEl.innerHTML = carouselItems.map(function(_, i) {
        return '<button class="carousel-dot' + (i === 0 ? ' is-active' : '') +
               '" data-index="' + i + '" aria-label="' + (i + 1) + '枚目"></button>';
    }).join('');

    // Swiper 初期化
    var swiper2 = new Swiper('.exhibition-swiper2', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 12,
        speed: 520,
        navigation: {
            nextEl: '#carouselNext2',
            prevEl: '#carouselPrev2',
            disabledClass: 'swiper-button-disabled',
        },
    });

    // スライド変更時にドット更新
    swiper2.on('slideChange', function() {
        dotsEl.querySelectorAll('.carousel-dot').forEach(function(d, i) {
            d.classList.toggle('is-active', i === swiper2.activeIndex);
        });
    });

    // ドットクリック
    dotsEl.querySelectorAll('.carousel-dot').forEach(function(dot) {
        dot.addEventListener('click', function() {
            swiper2.slideTo(Number(dot.dataset.index));
        });
    });

    // カードクリックでポスターモーダルを開く
    track.addEventListener('click', function(e) {
        var slide = e.target.closest('.swiper-slide');
        if (!slide) return;
        if (slide.classList.contains('swiper-slide-active')) {
            var i = Number(slide.dataset.index);
            openPoster(carouselItems[i]);
        } else {
            var i = Number(slide.dataset.index);
            swiper2.slideToLoop(i);
        }
    });
})();

// Clubs 見出しフェードイン
(function () {
    var heading = document.querySelector('.section-heading');
    if (!heading) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                heading.classList.add('is-visible');
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    observer.observe(heading);
})();

// Technical Exhibitions 見出しフェードイン
(function () {
    var heading = document.querySelector('.carousel-subtitle');
    if (!heading) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                heading.classList.add('is-visible');
                observer.disconnect();
            }
        });
    }, { threshold: 0.6 });
    observer.observe(heading);
})();

// ============================================================
// Eventsカルーセル（青色帯）
// ============================================================
(function () {
    var eventImages = [
        'images/events/figiku.webp',
        'images/events/yukyu.webp',
        'images/events/biburio.webp',
    ];

    var track  = document.getElementById('carouselTrack3');
    var dotsEl = document.getElementById('carouselDots3');
    if (!track) return;

    // スライドを描画
    track.innerHTML = eventImages.map(function(img, i) {
        var name = img.replace(/.*\//, '').replace(/\.\w+$/, '');
        return '<div class="swiper-slide carousel-slide" data-index="' + i + '">' +
            '<div class="carousel-card">' +
            '<img class="carousel-card-img" src="' + img + '" alt="イベントポスター ' + (i+1) + '" onerror="' + IMG_ONERROR + '">' +
            '</div></div>';
    }).join('');

    if (dotsEl) {
        dotsEl.innerHTML = eventImages.map(function(_, i) {
            return '<button class="carousel-dot' + (i === 0 ? ' is-active' : '') +
                   '" data-index="' + i + '" aria-label="' + (i + 1) + '枚目"></button>';
        }).join('');
    }

    var swiper3 = new Swiper('.exhibition-swiper3', {
        loop: eventImages.length > 1,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 12,
        speed: 520,
        navigation: {
            nextEl: '#carouselNext3',
            prevEl: '#carouselPrev3',
            disabledClass: 'swiper-button-disabled',
        },
    });

    swiper3.on('slideChange', function() {
        if (!dotsEl) return;
        dotsEl.querySelectorAll('.carousel-dot').forEach(function(d, i) {
            d.classList.toggle('is-active', i === swiper3.realIndex);
        });
    });

    if (dotsEl) {
        dotsEl.querySelectorAll('.carousel-dot').forEach(function(dot) {
            dot.addEventListener('click', function() {
                swiper3.slideTo(Number(dot.dataset.index));
            });
        });
    }

    // カードクリックでポスターモーダルを開く
    track.addEventListener('click', function(e) {
        var slide = e.target.closest('.swiper-slide');
        if (!slide) return;
        if (slide.classList.contains('swiper-slide-active')) {
            var i = Number(slide.dataset.index);
            openPoster({ name: 'イベント', course: '', place: '', image: eventImages[i], location: '' });
        } else {
            swiper3.slideToLoop(Number(slide.dataset.index));
        }
    });
})();

// Events 見出しフェードイン
(function () {
    var heading = document.querySelector('.carousel-subtitle--events');
    if (!heading) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                heading.classList.add('is-visible');
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    observer.observe(heading);
})();

// カルーセルポスターフェードイン
(function () {
    var wraps = document.querySelectorAll('.carousel-swiper-wrap');
    if (!wraps.length) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    wraps.forEach(function(wrap) { observer.observe(wrap); });
})();
