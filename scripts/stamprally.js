const exhibitionItems = [ 
    { name: "機械コース", place: "4M教室", floor: "1F", number: "A04", mapX: 30.5, mapY: 59 }, //default 27.5 55
    { name: "電気コース", place: "電気機器Lab", floor: "1F", number: "E01", mapX: 67.5, mapY: 28 }, //default 69 20
    { name: "情報コース", place: "5I教室", floor: "3F", number: "G01", mapX: 30.5, mapY: 52.5 },//default 27.5 48.5
    { name: "建設コース", place: "3C教室", floor: "3F", number: "H01", mapX: 36, mapY: 69 }, //default 34 68
    { name: "化学専門展示", place: "化学実験室", floor: "1F", number: "A03", mapX: 53.5, mapY: 47 }, //default 54 42
    { name: "図書館",     place: "図書館棟",   floor: "全体", number: "J",   mapX: 58, mapY: 45 },
    { name: "体育館",     place: "第一体育館", floor: "全体", number: "L",   mapX: 71, mapY: 53 }
];

const floorMapImages = {
    "1F": "images/maps/floor1-map.svg",
    "2F": "images/maps/floor2-map.svg",
    "3F": "images/maps/floor3-map.svg",
    "全体": "images/maps/kougai.svg",
};

const slots = document.querySelectorAll('.stamp-slot');
const modal = document.getElementById('stamp-info-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const modalPins = document.getElementById('modal-pins');
const closeButton = document.getElementById('modal-close');

const stationInfo = exhibitionItems.reduce((obj, item, index) => {
    obj[index + 1] = {
        title: item.name,
        description: `${item.place} (${item.number})`,
        number: item.number
    };
    return obj;
}, {});

slots.forEach(slot => {
    slot.addEventListener('click', () => {
        const station = slot.dataset.station;
        const info = stationInfo[station];

        if (!info || !info.number) return;

        //exhibitionItems から、number が一致するデータを自動検索
        const exhibition = exhibitionItems.find(item => item.number === info.number);
        if (!exhibition) return;

        modalTitle.textContent = info.title;
        modalDescription.textContent = info.description;

        modalImage.src = floorMapImages[exhibition.floor] || "images/maps/floor1-map.svg";
        modalImage.alt = exhibition.floor + "のマップ";

        // モーダルを表示
        modal.classList.add('show');

        // ピンを自動生成
        setTimeout(() => {
            const m = exhibition.number.match(/^([A-Za-z]+)(\d+)$/);
            const numberHTML = m 
                ? `<span class="pin-letter">${m[1]}</span><span class="pin-digits">${m[2]}</span>` 
                : `<span class="pin-number">${exhibition.number}</span>`;

            modalPins.innerHTML = `
                <button
                    type="button"
                    class="exhibition-pin is-blinking"
                    data-type="${exhibition.floor === '全体' ? 'library-gym' : ''}"
                    style="position: absolute; left: ${exhibition.mapX}%; top: ${exhibition.mapY}%; transform: translate(-50%, -100%); pointer-events: auto;"
                    aria-label="${info.title}"
                >
                    <span class="pin-shape">
                        <span class="pin-inner">
                            ${numberHTML}
                        </span>
                    </span>
                </button>
            `;
        }, 50);
    });
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('show');
    modalPins.innerHTML = ''; 
});

modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.classList.remove('show');
        modalPins.innerHTML = ''; 
    }
});