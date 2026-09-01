/* ==========================================================
   スタンプラリー共通ロジック(localStorage方式)
   stamp.html(地点ページ)と stamp-card.html(カードページ)の
   どちらからも読み込んで使う。
   ========================================================== */

// スタンプの状態はこの1つのキーにまとめて保存する
// (2025年方式は地点ごとに別々のキーだったため、キー名の書き間違いバグが起きやすかった)
const STORAGE_KEY = 'souasai2026_stamps';
const TOTAL_STATIONS = 7;

// 地点情報(番号・コース名・テーマカラー・アイコン画像)
// アイコン画像は images/stamps/ に置いてある
const STATIONS = {
  1: { name: '機械コース', color: '#ddb62c', icon: 'm.svg' },
  2: { name: '電気コース', color: '#e63946', icon: 'e.svg' },
  3: { name: '情報コース', color: '#03b6b6', icon: 'i.svg' },
  4: { name: '建設コース', color: '#2ea043', icon: 'c.svg' },
  5: { name: '化学コース', color: '#8660d2', icon: 'kagaku.svg' }, // ⚠️ z.svgの可能性あり。images/stamps/内の見た目を確認して正しい方を使ってください
  6: { name: '図書館',     color: '#1ea34a', icon: 'yukyu.svg' },
  7: { name: '体育館',     color: '#e08a00', icon: 'gym.svg' },
};
const SNACK_ICON = 'sumi.svg';

// ----------------------------------------------------------------
// トークン → 地点ID のマッピング
//   QRコードのURLに ?token=<以下の文字列> を付けて使う
//   例: https://example.com/stamp.html?token=Kx7mP2nQrW
//
//   ⚠️ このファイルはブラウザから丸見えなので「完全な不正防止」は
//      できませんが、番号(1〜7)を直打ちされるよりは大幅に難しくなります。
//      値を変えたい場合は全地点分まとめて変更し、QRコードも作り直してください。
// ----------------------------------------------------------------
const STATION_TOKENS = {
  'Kx7mP2nQrW': 1,       // 機械コース
  'Tz9wBsNmYe': 2,       // 電気コース
  'Vf4kLpCjGd': 3,       // 情報コース
  'Hs6qXrDzMb': 4,       // 建設コース
  'Wn3yEtFoAu': 5,       // 化学コース
  'Rg8cJvPiTk': 6,       // 図書館
  'Db5hMwZqYs': 7,       // 体育館
  'Qp2xNeLfRc': 'snack', // お菓子つかみ取り(体育館受付)
};

/**
 * URLパラメータ ?token=xxx を読み取り、対応する地点IDを返す。
 * 知らないトークンなら null を返す。
 *
 * 使い方(stamp.html側):
 *   const stationId = resolveToken();
 *   if (stationId === null) { location.href = 'error.html'; return; }
 *   saveStamp(stationId);
 */
function resolveToken(paramName = 'token') {
  const params = new URLSearchParams(location.search);
  const token  = params.get(paramName);
  if (!token) return null;
  const id = STATION_TOKENS[token];
  return id !== undefined ? id : null;
}

// 現在のスタンプ状態を取得(壊れたデータが入っていても落ちないようにtry/catch)
function loadStamps() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

// 1つのスタンプを押す(idは1〜7の数字、またはボーナス分は 'snack')
// ※ stamp.html から直接呼ぶ場合は resolveToken() の結果を渡す
function saveStamp(id) {
  const stamps = loadStamps();
  stamps[id] = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stamps));
}

// 7地点のうち何個集まっているか数える
function countCollected(stamps) {
  let count = 0;
  for (let i = 1; i <= TOTAL_STATIONS; i++) {
    if (stamps[i]) count++;
  }
  return count;
}

// 開発・動作確認用:ブラウザのコンソールで resetStamps() と打つとリセットできる
function resetStamps() {
  localStorage.removeItem(STORAGE_KEY);
  console.log('スタンプ状態をリセットしました');
}
window.resetStamps = resetStamps;