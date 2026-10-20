// station 1〜5: 校内展示, station 6: 図書館, station 7: 体育館
const stationData = {
    1: { name: "機械コース",   place: "4M教室",          mapImage: "images/maps/floor1-map.svg", seq: "03", pinType: "exhibition", mapX: 30.5, mapY: 59 },
    2: { name: "電気コース",   place: "電気機器Lab",      mapImage: "images/maps/floor1-map.svg", seq: "01", pinType: "exhibition", mapX: 67.5, mapY: 28 },
    3: { name: "情報コース",   place: "5I教室",           mapImage: "images/maps/floor3-map.svg", seq: "05", pinType: "exhibition", mapX: 30.5, mapY: 52.5 },
    4: { name: "建設コース",   place: "3C教室",           mapImage: "images/maps/floor3-map.svg", seq: "06", pinType: "exhibition", mapX: 36,   mapY: 69 },
    5: { name: "化学専門展示", place: "化学実験室",        mapImage: "images/maps/floor1-map.svg", seq: "02", pinType: "exhibition", mapX: 53.5, mapY: 47 },
    6: { name: "図書館",       place: "図書館",            mapImage: "images/maps/kougai.svg",     seq: "07", pinType: "library-gym", mapX: 56,   mapY: 47 },
    7: { name: "体育館",       place: "第一体育館",        mapImage: "images/maps/kougai.svg",     seq: "08", pinType: "library-gym", mapX: 68,   mapY: 47 },
    snack: { name: "お菓子つかみ取り", place: "体育館付近",       mapImage: "images/maps/kougai.svg",     seq: "01",   pinType: "library-gym", mapX: 36,   mapY: 48 },
};

const slots = document.querySelectorAll('.stamp-slot');
const modal = document.getElementById('stamp-info-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const modalPins = document.getElementById('modal-pins');
const closeButton = document.getElementById('modal-close');

slots.forEach(slot => {
    slot.addEventListener('click', () => {
        const station = slot.dataset.station === "snack" ? "snack" : parseInt(slot.dataset.station);
        const data = stationData[station];

        if (!data) return;

        modalTitle.textContent = data.name;
        modalDescription.textContent = `${data.place} (${data.seq})`;

        modalImage.src = data.mapImage;
        modalImage.alt = data.name + "のマップ";

        // モーダルを表示
        modal.classList.add('show');

        // ピンを自動生成
        setTimeout(() => {
            modalPins.innerHTML = `
                <button
                    type="button"
                    class="exhibition-pin is-blinking"
                    style="position: absolute; left: ${data.mapX}%; top: ${data.mapY}%; transform: translate(-50%, -100%); pointer-events: auto;"
                    aria-label="${data.name}"
                    data-type="${data.pinType}"
                >
                    <span class="pin-shape">
                        <span class="pin-inner">
                            <span class="pin-digits">${data.seq}</span>
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