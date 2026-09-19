/**
 * h1-slide-anim.js
 * 各ページの h1 に "SLIDE OUT" スタイルのアニメーションを適用
 * 参考: codepen.io/ste-vg/pen/mdjOaNa
 * 依存: GSAP 3 (gsap.min.js を先に読み込むこと)
 */
(function () {
  // すでにアニメーション済み or 動的コンテンツの h1 はスキップ
  const h1 = document.querySelector(
    'h1:not(.anim-fade-up):not(.stamp-station-title)'
  );
  if (!h1 || typeof gsap === 'undefined') return;

  // ── 既存の text-shadow カラーを取得 ───────────────────────────
  // 例: "rgb(255, 212, 0) 0px 6px 0px"
  const cs = window.getComputedStyle(h1);
  const shadowStr = cs.textShadow;
  const colorMatch = shadowStr.match(/(rgba?\([^)]+\))/);
  const shadowColor = colorMatch ? colorMatch[1] : 'rgba(255,255,255,0.5)';

  // ── h1 を overflow:hidden のマスクで包む ──────────────────────
  const marginTop = cs.marginTop;
  const mask = document.createElement('div');
  mask.style.cssText =
    'overflow:hidden; display:block; margin-top:' + marginTop + '; padding-bottom:0.15em;';
  h1.style.marginTop = '0';
  h1.parentNode.insertBefore(mask, h1);
  mask.appendChild(h1);

  // perspective を h1 に設定 (子要素の 3D 回転に使用)
  h1.style.perspective = '700px';
  h1.style.perspectiveOrigin = '50% 100%';

  // ── テキストを 1 文字ずつ <span> に分割 ──────────────────────
  // h1 自身の textShadow は無効化し、各 span に適用する
  h1.style.textShadow = 'none';

  const childNodes = [...h1.childNodes];
  h1.innerHTML = '';

  childNodes.forEach(function (node) {
    const text = node.textContent;
    // スペースは &nbsp; に変換して幅を維持
    [...text].forEach(function (ch) {
      const span = document.createElement('span');
      span.className = 'h1-letter';
      span.textContent = ch === ' ' ? ' ' : ch;
      span.style.cssText =
        'display:inline-block;' +
        'text-shadow:0px 6px 0px ' + shadowColor + ';' +
        'transform-origin:50% 100%;' +
        'will-change:transform,opacity;';
      h1.appendChild(span);
    });
  });

  // ── GSAP アニメーション ────────────────────────────────────────
  const letters = h1.querySelectorAll('.h1-letter');

  // 初期状態をセット (DOMContentLoaded 前に FOUC を防ぐ)
  gsap.set(letters, { opacity: 0, y: '115%', rotateX: 80 });

  // ページロード後にアニメーション開始
  function runAnim() {
    gsap.to(letters, {
      opacity: 1,
      y: '0%',
      rotateX: 0,
      duration: 0.85,
      stagger: 0.055,
      ease: 'power4.out',
      delay: 0.1,
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAnim);
  } else {
    runAnim();
  }
})();
