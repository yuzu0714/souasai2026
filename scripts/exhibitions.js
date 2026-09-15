/*
 * 専門展示データはこの配列だけを編集すれば差し替えできます。
 * image は images/ フォルダ内のファイル名を指定してください。
 * nameは仮です。展示内容が決まったら変更してください。
 */
const exhibitionItems = [
    //1F
    {name: "化学専門展示", course: "化学コース", place: "化学実験室", floor: "1F", number: "11", category: "course", image: "images/food-baby-castella.png", mapX: 54, mapY: 42},
    {name: "機械専門展示", course: "機械コース", place: "3M", floor: "1F", number: "21", category: "course", image: "images/food-baby-castella.png", mapX: 36, mapY: 55},
    {name: "機械専門展示", course: "機械コース", place: "4M", floor: "1F", number: "31", category: "course", image: "images/food-baby-castella.png", mapX: 27.5, mapY: 55},
    {name: "機械専門展示", course: "機械コース", place: "5M", floor: "1F", number: "41", category: "course", image: "images/food-baby-castella.png", mapX: 19, mapY: 55},
    {name: "電気専門展示", course: "電気コース", place: "電気機器Lab", floor: "1F", number: "51", category: "course", image: "images/food-baby-castella.png", mapX: 69, mapY: 20},
    {name: "プログラミング研究部試遊会", course: "プログラミング研究部", place: "メカトロ電子回路実験室", floor: "1F", number: "61", category: "course", image: "images/food-baby-castella.png", mapX: 84, mapY: 82},
    //2F
    {name: "軽音学部ライブ", course: "軽音学部", place: "1-1", floor: "2F", number: "12", category: "course", image: "images/food-baby-castella.png", mapX: 39, mapY: 25},
    {name: "軽音学部ライブ", course: "軽音学部", place: "1-2", floor: "2F", number: "22", category: "course", image: "images/food-baby-castella.png", mapX: 29, mapY: 25},
    {name: "電気専門展示", course: "電気コース", place: "2E", floor: "2F", number: "32", category: "course", image: "images/food-baby-castella.png", mapX: 63, mapY: 14},
    {name: "電気専門展示", course: "電気コース", place: "3E", floor: "2F", number: "42", category: "course", image: "images/food-baby-castella.png", mapX: 71.5, mapY: 14},
    {name: "電気専門展示", course: "電気コース", place: "4E", floor: "2F", number: "52", category: "course", image: "images/food-baby-castella.png", mapX: 80, mapY: 14},
    {name: "工作・オーディオ同好会DJライブ", course: "工作・オーディオ同好会", place: "物理実験室", floor: "2F", number: "62", category: "course", image: "images/food-baby-castella.png", mapX: 54, mapY: 38},
    {name: "フォトスポット", course: "美術部", place: "5E", floor: "2F", number: "72", category: "course", image: "images/food-baby-castella.png", mapX: 36, mapY: 49},
    {name: "美術部展示", course: "美術部", place: "2I", floor: "2F", number: "82", category: "course", image: "images/food-baby-castella.png", mapX: 27.5, mapY: 49},
    {name: "書道部展示", course: "書道部", place: "2M", floor: "2F", number: "92", category: "course", image: "images/food-baby-castella.png", mapX: 21.5, mapY: 46.5},
    {name: "写真展示", course: "写真部", place: "2M", floor: "2F", number: "102", category: "course", image: "images/food-baby-castella.png", mapX: 17.5, mapY: 50.5},
    {name: "TRPGサークル試遊会", course: "TRPGサークル", place: "5Z", floor: "2F", number: "112", category: "course", image: "images/food-baby-castella.png", mapX: 34, mapY: 68},
    {name: "演劇部上映", course: "演劇部", place: "3Z", floor: "2F", number: "122", category: "course", image: "images/food-baby-castella.png", mapX: 34, mapY: 76},
    {name: "落語研究部寄席", course: "落語研究部", place: "4Z", floor: "2F", number: "132", category: "course", image: "images/food-baby-castella.png", mapX: 25, mapY: 76},
    {name: "プログラミング研究部試遊会", course: "プログラミング研究部", place: "第3演習室", floor: "2F", number: "142", category: "course", image: "images/food-baby-castella.png", mapX: 84, mapY: 76},
    //3F
    {name: "ロボット研究部操縦体験", course: "ロボット研究部", place: "1-3", floor: "3F", number: "13", category: "course", image: "images/food-baby-castella.png", mapX: 38.5, mapY: 25},
    {name: "ロボット研究部操縦体験", course: "ロボット研究部", place: "1-4", floor: "3F", number: "23", category: "course", image: "images/food-baby-castella.png", mapX: 29, mapY: 25},
    {name: "情報専門展示", course: "情報コース", place: "3I", floor: "3F", number: "33", category: "course", image: "images/food-baby-castella.png", mapX: 19, mapY: 48.5},
    {name: "情報専門展示", course: "情報コース", place: "5I", floor: "3F", number: "43", category: "course", image: "images/food-baby-castella.png", mapX: 27.5, mapY: 48.5},
    {name: "情報専門展示", course: "情報コース", place: "中講義室", floor: "3F", number: "53", category: "course", image: "images/food-baby-castella.png", mapX: 36, mapY: 48.5},
    {name: "建設専門展示", course: "建設コース", place: "3C", floor: "3F", number: "63", category: "course", image: "images/food-baby-castella.png", mapX: 34, mapY: 68},
    {name: "カラオケ大会", course: "イベント班", place: "大講義室", floor: "3F", number: "73", category: "course", image: "images/food-baby-castella.png", mapX: 65, mapY: 78}
];

const list = document.getElementById("exhibitionList");
const count = document.getElementById("exhibitionCount");
const search = document.getElementById("exhibitionSearch");
const filters = document.getElementById("exhibitionFilters");
const tabs = document.querySelector(".exhibition-tabs");
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


function renderFilters() {
    const filterKey = activeTab === "exhibition" ? "name" : "course";
    const values = [...new Set(exhibitionItems.map((item) => item[filterKey]))];
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
            <article class="exhibition-card">
                <div>
                    <p class="exhibition-name">${item.name}</p>
                    <p class="exhibition-club">
                        ${item.course}
                        <span class="exhibition-badge">${item.place}</span>
                    </p>
                </div>

                <img
                    src="${item.image}"
                    class="exhibition-image"
                    alt="${item.name}"
                >
            </article>
        `).join("")
        : '<p class="exhibition-empty">該当する展示がありません。</p>';
}

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
        >
            <span class="pin-shape">
                <span class="pin-inner">
                    <span class="pin-number">${item.number}</span>
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

            document.getElementById("exhibitionMapInfoImage").src = item.image;
            document.getElementById("exhibitionMapInfoImage").alt = item.name;
            document.getElementById("exhibitionMapInfoName").textContent = item.name;
            document.getElementById("exhibitionMapInfoCourse").textContent = item.course;
            document.getElementById("exhibitionMapInfoPlace").textContent = item.place;

            document.getElementById("exhibitionMapInfo").hidden = false;
        });
    });
}

// 情報表示を閉じる
const mapInfoClose = document.getElementById("exhibitionMapInfoClose");

if (mapInfoClose) {
    mapInfoClose.addEventListener("click", () => {
        document.getElementById("exhibitionMapInfo").hidden = true;
    });
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

// 階数マップの切り替え
const floorTabs = document.querySelectorAll(".floor-tab");
const exhibitionMapImage = document.getElementById("exhibitionMapImage");

const floorMapImages = {
    "1F": "images/maps/floor1-map.svg",
    "2F": "images/maps/floor2-map.svg",
    "3F": "images/maps/floor3-map.svg"
};

floorTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const floor = tab.dataset.floor;
        activeFloor = floor;
        mapScale = 1;
        mapX = 0;
        mapY = 0;
        exhibitionMapImage.src = floorMapImages[floor];
        exhibitionMapImage.alt = `${floor}の専門展示マップ`;
        floorTabs.forEach(t => {
            t.classList.remove("is-active");
        });

        tab.classList.add("is-active");
        renderItems();
        renderPins();
    });
});

search.addEventListener("input", () => {
    const keyword = search.value.trim().toLowerCase();

    const selected = [...filters.querySelectorAll("input:checked")]
        .map((input) => input.value);

    const filterKey = activeTab === "exhibition" ? "name" : "course";

    const matchedItems = exhibitionItems
        .filter((item) =>
            !selected.length || selected.includes(item[filterKey])
        )
        .filter((item) =>
            `${item.name}${item.course}${item.place}`
                .toLowerCase()
                .includes(keyword)
        );

    // 検索結果がある場合、最初の該当階へ移動
    if ((keyword || selected.length) && matchedItems.length > 0) {
        const firstFloor = matchedItems[0].floor;

        if (firstFloor !== activeFloor) {
            activeFloor = firstFloor;

            exhibitionMapImage.src = floorMapImages[firstFloor];
            exhibitionMapImage.alt = `${firstFloor}の専門展示マップ`;

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
renderFilters();
renderItems();
renderPins();

// 地図のズーム・パン
const mapContent = document.getElementById("exhibitionMapContent");
const mapArea = document.querySelector(".exhibition-map");

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