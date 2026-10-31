// BleachDle : ton appli d'origine (HTML et code inchangés), livrée en plugin.
// Ses données sont dans le dossier du plugin, que NeoBase sauvegarde (synchro cloud et sauvegardes) ; à la première ouverture elle reprend ce que tu avais dans NeoBase.
// Elle demande l'accès complet pour utiliser les outils d'interface de NeoBase. NeoBase ne l'ouvre que si elle est signée.
const HTML = "";
/*CSS-MOVED*/ const CSS = `.mdRow{display:grid;grid-template-columns:repeat(var(--n),46px);gap:6px}
.mdCell{height:46px;display:grid;place-items:center;font:18px var(--title);color:#fff;background:#160d30;box-shadow:inset 0 0 0 2px #3a2a6e}
.mdCell.typed{box-shadow:inset 0 0 0 2px var(--lilac)}
.mdCell.ghost{color:#5e4d85}
.mdCell.flip{animation:mdFlip .45s both}
.gSel{width:auto;font-size:14px;padding:6px 10px;margin-right:8px}
.shGrid td.num{text-align:right}
.mdClue{display:flex;flex-direction:column;gap:8px}
.mdHint{--fill:var(--field);padding:10px 14px;color:var(--lilac);font-size:15px}
.mdEmoji{--fill:var(--field);padding:14px;font-size:34px;letter-spacing:6px;text-align:center}
.mdForm{position:relative}
.mdInput{width:100%;font-size:16px;padding:12px 14px}
.mdSug{position:absolute;left:0;right:0;top:calc(100% + 6px);z-index:5;--fill:#120922;display:flex;flex-direction:column;padding:4px;max-height:340px;overflow-y:auto}
.mdSugItem{all:unset;cursor:var(--cp,pointer);display:flex;justify-content:space-between;gap:12px;padding:8px 10px;color:#fff;font-size:15px}
.mdSugItem:hover,.mdSugItem.on{background:rgba(var(--mgr),.22)}
.mdSugItem .hint{font-size:12px}
.mdSugItem .n{display:flex;align-items:center;gap:10px}
.mdSugItem img{width:30px;height:30px;object-fit:cover;object-position:top;box-shadow:0 0 0 2px rgba(0,0,0,.45)}
.sysCard.mdWin{flex-direction:row;align-items:center;gap:18px}
.mdWin b{color:#ffd07a;font-size:17px}
.mdWinTxt{display:flex;flex-direction:column;gap:6px;min-width:0}
.mdWinImg{width:104px;height:104px;flex:none;object-fit:cover;object-position:top;box-shadow:0 0 0 3px #ffd07a,4px 4px 0 3px rgba(0,0,0,.45)}
.mdPix{width:240px;height:240px;align-self:center;image-rendering:pixelated;box-shadow:0 0 0 3px var(--field),6px 6px 0 3px rgba(0,0,0,.45)}
.mdGuesses{display:flex;flex-direction:column;gap:6px;overflow-x:auto}
.mdRow{display:grid;gap:6px}
.mdRow.head{position:sticky;top:0}
.mdH{font:7px var(--title);letter-spacing:1px;color:var(--muted);text-align:center;padding:4px 0}
.mdCell{display:flex;align-items:center;justify-content:center;gap:4px;min-height:54px;padding:6px;text-align:center;font-size:12px;overflow-wrap:break-word;hyphens:auto;min-width:0;color:#fff;background:#2a1d52;box-shadow:inset 0 -3px 0 rgba(0,0,0,.35);animation:mdFlip .35s steps(4) backwards}
.mdCell.who{background:#1c1238;font-weight:bold;justify-content:flex-start;gap:8px;text-align:left}
.mdCell.who img{width:40px;height:40px;flex:none;object-fit:cover;object-position:top;box-shadow:0 0 0 2px rgba(0,0,0,.45)}
.mdCell.wide img{width:32px;height:32px}
.mdCell.ok{background:#2f8f5a}
.mdCell.part{background:#c0862a}
.mdCell.no{background:#9a2a44}
.mdCell i{font-style:normal;font-size:18px;color:#ffd07a}
.mdCell.wide{justify-content:flex-start;padding:10px 14px;min-height:0;font-size:15px}
.mdRow .mdCell:nth-child(2){animation-delay:.05s}
.mdRow .mdCell:nth-child(3){animation-delay:.1s}
.mdRow .mdCell:nth-child(4){animation-delay:.15s}
.mdRow .mdCell:nth-child(5){animation-delay:.2s}
.mdRow .mdCell:nth-child(6){animation-delay:.25s}
.mdRow .mdCell:nth-child(7){animation-delay:.3s}
.mdRow .mdCell:nth-child(8){animation-delay:.35s}
.mdRow .mdCell:nth-child(9){animation-delay:.4s}

/* habillage v1.2 */
.dleWrap{--dle:#ff5ad9;gap:14px}
.dleWrap .agHead{padding:14px 18px;background:linear-gradient(90deg,color-mix(in srgb,var(--dle) 32%,#0d0820),transparent 85%);box-shadow:inset 5px 0 0 var(--dle)}
.dleWrap .agHead .label{font-size:16px;letter-spacing:2px;color:#fff;text-shadow:3px 3px 0 rgba(0,0,0,.55)}
.dleWrap .agHead .hint{color:color-mix(in srgb,var(--dle) 55%,#fff)}
.dleWrap .agNav button,.dleWrap .row button{letter-spacing:1px}
.dleWrap .mdInput{background:#0d0820;border:3px solid var(--dle);box-shadow:0 0 0 3px rgba(0,0,0,.45),0 0 16px color-mix(in srgb,var(--dle) 30%,transparent);transition:box-shadow .15s}
.dleWrap .mdInput:focus{outline:none;box-shadow:0 0 0 3px rgba(0,0,0,.45),0 0 26px color-mix(in srgb,var(--dle) 60%,transparent)}
.dleWrap .mdSug{border:3px solid var(--dle);box-shadow:6px 6px 0 rgba(0,0,0,.55)}
.dleWrap .mdSugItem{padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.07)}
.dleWrap .mdSugItem img{width:38px;height:38px}
.dleWrap .mdSugItem:hover,.dleWrap .mdSugItem.on{background:color-mix(in srgb,var(--dle) 28%,transparent)}
.dleWrap .mdHint,.dleWrap .mdEmoji{box-shadow:inset 4px 0 0 var(--dle),0 0 0 3px rgba(0,0,0,.35)}
.dleWrap .mdGuesses{gap:8px;padding:6px 0}
.dleWrap .mdH{background:#160d30;color:#fff;border-bottom:3px solid var(--dle);padding:7px 2px;font-size:7px}
.dleWrap .mdRow{gap:6px}
.dleWrap .mdRow:not(.head) .mdCell{font-weight:bold;text-shadow:1px 1px 0 rgba(0,0,0,.5);box-shadow:inset 0 3px 0 rgba(255,255,255,.2),inset 0 -4px 0 rgba(0,0,0,.4),0 0 0 2px rgba(0,0,0,.55)}
.dleWrap .mdCell.who{background:linear-gradient(#2a1d52,#1c1238);border-left:4px solid var(--dle)}
.dleWrap .mdCell.who img{width:46px;height:46px;box-shadow:0 0 0 2px var(--dle),3px 3px 0 2px rgba(0,0,0,.5)}
.dleWrap .mdCell.ok{background:linear-gradient(#45c27b,#2f8f5a)}
.dleWrap .mdCell.part{background:linear-gradient(#e8aa42,#c0862a)}
.dleWrap .mdCell.no{background:linear-gradient(#cc3f5e,#9a2a44)}
.dleWrap .mdCell.wide{font-size:16px}
.dleWrap .sysCard.mdWin{background:linear-gradient(135deg,#34265f,#160d30);border:3px solid #ffd07a;box-shadow:0 0 0 3px #000,0 0 30px rgba(255,208,122,.35);padding:16px}
.dleWrap .mdWinImg{width:124px;height:124px}
.dleWrap .mdWin b{font-size:19px;text-shadow:3px 3px 0 rgba(0,0,0,.5)}
.dleWrap .mdPix{box-shadow:0 0 0 3px var(--dle),6px 6px 0 3px rgba(0,0,0,.5)}
`;  // le style de ce plugin (il utilise les variables du thème de NeoBase)
export default async function (ctx) {
  const view = ctx.view;
  if (!ctx.host) { view.textContent = "Ce plugin doit être approuvé par NeoBase pour s'ouvrir."; return; }
  const host = ctx.host, { el, toast, sfx, ask, newTab, pixIcon, PIX, WX } = host;
  const folder = ctx.folder, legacy = ctx.legacy || {};
  ctx.host.addStyle(CSS);
  view.innerHTML = HTML;
  const $ = id => id === "dle_bleachdle" ? view : (view.querySelector('#' + id) || document.getElementById(id));  // les identifiants de ta vue d'abord, puis ceux de la page (fenêtres, menus)
  const doc = async n => { try { return await folder.read(n); } catch { return null; } };
  const __icon = () => ctx.icon;  // l'icône de ce plugin
  const __asset = async (rel, type) => URL.createObjectURL(new Blob([Uint8Array.from(atob(await neo.pluginFileRead(ctx.id, rel)), c => c.charCodeAt(0))], { type }));  // un fichier livré avec le plugin
  const __imgs = {};  // les portraits livrés avec le plugin
  await Promise.all(["aaroniero-arruruerie.webp","abirama-redder.webp","akon.webp","as-nodt.webp","asguiaro-ebern.webp","askin-nakk-le-vaar.webp","ayon.webp","bambietta-basterbine.webp","baraggan-louisenbairn.webp","bazz-b.webp","berenice-gabrielli.webp","bg9.webp","bonnie.webp","byakuya-kuchiki.webp","candice-catnipp.webp","cang-du.webp","charlotte-chuhlhourne.webp","chizuru-honsho.webp","choe-neng-poww.webp","chojiro-sasakibe.webp","cirucci-sanderwicci.webp","coyote-starrk.webp","cyan-sung-sun.webp","di-roy-rinker.webp","don-kanonji.webp","dondochakka-birstanne.webp","dordoni-alessandro-del-socaccio.webp","driscoll-berci.webp","edrad-liones.webp","emilou-apacci.webp","findorr-calius.webp","franceska-mila-rose.webp","ganju-shiba.webp","gantenbainne-mosqueda.webp","genryusai-shigekuni-yamamoto.webp","genshiro-okikiba.webp","gerard-valkyrie.webp","ggio-vega.webp","gin-ichimaru.webp","giriko-kutsuzawa.webp","giselle-gewelle.webp","grand-fisher.webp","gremmy-thoumeaux.webp","grimmjow-jaegerjaquez.webp","guenael-lee.webp","hachigen-ushoda.webp","hanataro-yamada.webp","hisana-kuchiki.webp","hiyori-sarugaki.webp","hiyosu.webp","ichibe-e-hyosube.webp","ichigo-kurosaki.webp","ichika-abarai.webp","ikkaku-madarame.webp","ikumi-unagiya.webp","isane-kotetsu.webp","isshin-kurosaki.webp","izuru-kira.webp","jackie-tristan.webp","jerome-guizbatt.webp","jidanbo-ikkanzaka.webp","jinta-hanakari.webp","jirobo-ikkanzaka.webp","jugram-haschwalth.webp","jushiro-ukitake.webp","kaien-shiba.webp","kanae-katagiri.webp","kaname-tosen.webp","kaoru-unagiya.webp","karin-kurosaki.webp","kazui-kurosaki.webp","keigo-asano.webp","kenpachi-kiganjo.webp","kenpachi-zaraki.webp","kensei-muguruma.webp","kirio-hikifune.webp","kisuke-urahara.webp","kiyone-kotetsu.webp","kon.webp","kugo-ginjo.webp","kukaku-shiba.webp","lille-barro.webp","liltotto-lamperd.webp","lilynette-gingerbuck.webp","lisa-yadomaru.webp","loly-aivirrne.webp","love-aikawa.webp","loyd-lloyd.webp","luppi-antenor.webp","marechiyo-omaeda.webp","masaki-kurosaki.webp","mashiro-kuna.webp","mask-de-masculine.webp","mayuri-kurotsuchi.webp","meninas-mcallon.webp","menoly-mallia.webp","metastacia.webp","michiru-ogawa.webp","mimihagi.webp","misato-ochi.webp","miyako-shiba.webp","mizuho-asano.webp","mizuiro-kojima.webp","moe-shishigawara.webp","momo-hinamori.webp","nakeem-grindina.webp","nanana-najahkoop.webp","nanao-ise.webp","nelliel-tu-odelschwanck.webp","nemu-kurotsuchi.webp","nianzol-weizol.webp","nirgge-parduoc.webp","nnoitra-gilga.webp","oetsu-nimaiya.webp","orihime-inoue.webp","pepe-waccabrada.webp","pernida-parnkgjas.webp","pesche-guatiche.webp","quilge-opie.webp","rangiku-matsumoto.webp","renji-abarai.webp","retsu-unohana.webp","riruka-dokugamine.webp","robert-accutrone.webp","rojuro-otoribashi.webp","royd-lloyd.webp","rudbornn-chelute.webp","rukia-kuchiki.webp","ryo-kunieda.webp","ryuken-ishida.webp","ryunosuke-yuki.webp","sajin-komamura.webp","senjumaru-shutara.webp","sentaro-kotsubaki.webp","shawlong-koufang.webp","shaz-domino.webp","shinji-hirako.webp","shino-madarame.webp","shrieker.webp","shuhei-hisagi.webp","shukuro-tsukishima.webp","shunsui-kyoraku.webp","soken-ishida.webp","sora-inoue.webp","soul-king.webp","sousuke-aizen.webp","sui-feng.webp","szayelaporro-granz.webp","tatsuki-arisawa.webp","tenjiro-kirinji.webp","tesra-lindocruz.webp","tessai-tsukabishi.webp","tetsuzaemon-iba.webp","tier-harribel.webp","toshiro-hitsugaya.webp","ulquiorra-cifer.webp","ururu-tsumugiya.webp","uryu-ishida.webp","wonderweiss-margela.webp","yachiru-kusajishi.webp","yammy-llargo.webp","yasochika-iemura.webp","yasutora-sado.webp","yhwach.webp","yoruichi-shihoin.webp","yukio-hans-vorarlberna.webp","yumichika-ayasegawa.webp","yushiro-shihoin.webp","yuzu-kurosaki.webp","yylfordt-granz.webp","zangetsu-quincy-powers.webp","zangetsu-zanpakuto-spirit.webp","zennosuke-kurumadani.webp","zommari-rureaux.webp"].map(async n => { __imgs[n] = await __asset('img/' + n, /.png$/.test(n) ? 'image/png' : /.webp$/.test(n) ? 'image/webp' : 'image/jpeg'); }));
  const LEGACY_GAMES = {"top":["bleachdle"],"best":"^$"};
  let games = await doc('games');
  if (games == null) {  // première ouverture : tu retrouves tes records et tes parties d'avant
    const old = legacy.api ? await legacy.api('games').catch(() => null) : null; games = { best: {} };
    if (old) { const re = new RegExp(LEGACY_GAMES.best); for (const [k, v] of Object.entries(old.best || {})) if (re.test(k)) games.best[k] = v; for (const k of LEGACY_GAMES.top) if (old[k] !== undefined) games[k] = old[k]; await folder.write('games', games); }
  }
  games = { best: {}, ...games };
  let gamesTimer = null;
  const saveGames = () => { clearTimeout(gamesTimer); gamesTimer = setTimeout(() => { gamesTimer = null; folder.write('games', games).catch(() => {}); }, 500); };
  const best = (k, v, higher = true) => { const b = games.best[k]; if (b == null || (higher ? v > b : v < b)) { games.best[k] = v; saveGames(); return true; } return false; };
  const gstore = (k, init) => (games[k] ??= init);  // la section d'un jeu
function gameLoop(st, appKey, update, draw) {
  cancelAnimationFrame(st.raf);
  const STEP = 1000 / 60; let acc = 0, last = performance.now();
  const frame = t => {
    if (!view.classList.contains('on')) { st.raf = 0; if (st.mode === 'play') st.mode = 'pause'; return; }  // leaving the tab pauses the game
    st.raf = requestAnimationFrame(frame);
    acc += Math.min(200, t - last); last = t;
    while (acc >= STEP) { if (st.mode === 'play') update(); st.tick++; acc -= STEP; }
    draw();
  };
  st.raf = requestAnimationFrame(frame);
}
function gameText(g, w, lines, y0) {  // centred pixel-font lines over a dark band
  g.fillStyle = 'rgba(11,3,28,.72)'; g.fillRect(0, y0 - 14, w, lines.length * 14 + 14);
  g.textAlign = 'center';
  lines.forEach(([text, color, size], i) => { g.fillStyle = color; g.font = (size || 8) + 'px "Press Start 2P", monospace'; g.fillText(text, w / 2, y0 + i * 14); });
  g.textAlign = 'left';
}
const px = (g, color, x, y, w = 1, h = 1) => { g.fillStyle = color; g.fillRect(Math.round(x), Math.round(y), w, h); };
function sprite(g, rows, x, y, pal) { rows.forEach((r, j) => { for (let i = 0; i < r.length; i++) { const c = pal[r[i]]; if (c) px(g, c, x + i, y + j); } }); }
  // ---- ton code d'origine ----
/* NeoDle: the "-dle" games (guess a character of a series). One engine, each series registers itself from web/dle/<series>.js with dleRegister():
   its columns (eq: same value, set: lists that can overlap, num / ord: numbers or ordered labels with ↑ ↓ arrows), its characters and its pools.
   Modes: Classique (columns compared), Indices (hints one after the other), Emoji (when the characters have emojis), Image (the portrait, less pixelated after each wrong guess).
   A daily challenge per mode (the same for everyone) and free games, saved in games.<key> (synced). Portraits: web/dle/img/<series>/ (from the series' Fandom wiki). */

const DLES = {};
const DLE_MODES = {classic: 'Classique', hints: 'Indices', emoji: 'Emoji', image: 'Image'};
const DLE_GENDER = {F: 'Femme', M: 'Homme', V: 'Variable', N: 'Aucun', '?': 'Inconnu'};
const dleDay = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const dleHash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const dleNorm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9぀-鿿]+/g, ' ').trim();
const dleImg = (g, c) => c.img ? (__imgs[c.img] || '') : '';

/* ---------- comparing a guess with the answer, column by column ---------- */
function dleCompare(g, guess, ans) {
  return g.cols.map(col => {
    const a = guess[col.id], b = ans[col.id], show = v => v == null || v === '' ? '?' : col.type === 'ord' ? col.labels[v] : col.map ? col.map[v] ?? v : (col.pre || '') + v + (col.unit || '');
    if (col.type === 'set') {
      const A = a || [], B = b || [], S = new Set(A), same = A.length === B.length && B.every(x => S.has(x));
      return {k: col.k, v: A.join(', ') || col.none || 'Aucun', r: same ? 'ok' : B.some(x => S.has(x)) ? 'part' : 'no'};
    }
    if (col.type === 'num' || col.type === 'ord') {
      if (a === b) return {k: col.k, v: show(a), r: 'ok'};
      if (a == null || b == null) return {k: col.k, v: show(a), r: 'no'};
      return {k: col.k, v: show(a), r: col.near && Math.abs(a - b) <= col.near ? 'part' : 'no', arrow: b > a ? '↑' : '↓'};
    }
    return {k: col.k, v: show(a), r: a === b ? 'ok' : 'no'};
  });
}

/* ---------- the save: games.<key> ---------- */
const dleSave = g => gstore(g.key, {days: {}, stats: {}, free: null, pool: 'main', mode: 'classic'});
const dlePool = (g, p) => g.chars.filter(c => c.t <= (g.pools[p] || g.pools.main).t);
const dleFits = (c, mode) => mode === 'emoji' ? !!c.em : mode === 'image' ? !!c.img : mode === 'hints' ? c.h.length > 0 : true;
function dleDaily(g, mode, day = dleDay()) {  // the same character for everyone on a given day, among the main pool
  const pool = dlePool(g, 'all').filter(c => dleFits(c, mode));
  return pool[dleHash(g.key + ':' + mode + ':' + day) % pool.length];
}
function dleState(g, mode, daily) {  // the game being played: today's challenge of this mode, or the free game
  const s = dleSave(g);
  if (!g.pools[s.pool]) s.pool = 'all';  // a pool that no longer exists (MonogatariDle's « extrême »)
  if (daily) { const day = dleDay(), d = (s.days[day] ||= {}); return d[mode] ||= {ans: dleDaily(g, mode, day).n, guesses: [], won: false}; }
  const pool = dlePool(g, s.pool).filter(c => dleFits(c, mode));
  if (!s.free || s.free.mode !== mode || s.free.pool !== s.pool || !pool.some(c => c.n === s.free.ans))
    s.free = {mode, pool: s.pool, ans: pool[Math.floor(Math.random() * pool.length)].n, guesses: [], won: false};
  return s.free;
}
function dleRecord(g, mode, daily, won, tries) {
  const st = (dleSave(g).stats[mode] ||= {played: 0, wins: 0, streak: 0, bestStreak: 0, tries: 0, lastDay: ''});
  st.played++; if (won) { st.wins++; st.tries += tries; }
  if (daily) {
    const y = new Date(); y.setDate(y.getDate() - 1);
    st.streak = won ? (st.lastDay === dleDay(y) ? st.streak + 1 : 1) : 0; st.bestStreak = Math.max(st.bestStreak, st.streak); st.lastDay = dleDay();
  }
}

/* ---------- the portrait of the Image mode: drawn on a few big pixels, more of them after each wrong guess ---------- */
const DLE_PIX = [6, 9, 13, 18, 26, 38, 56, 90];
function dlePixel(cv, src, cells) {
  const im = new Image();
  im.onload = () => {
    const S = cv.width, side = Math.min(im.width, im.height), sx = (im.width - side) / 2, sy = im.height > im.width ? 0 : (im.height - side) / 2;  // square crop, the top of tall portraits (the face)
    const ctx = cv.getContext('2d'); ctx.imageSmoothingEnabled = cells >= S;
    if (cells >= S) { ctx.drawImage(im, sx, sy, side, side, 0, 0, S, S); return; }
    const t = document.createElement('canvas'); t.width = t.height = cells;
    const tc = t.getContext('2d'); tc.drawImage(im, sx, sy, side, side, 0, 0, cells, cells);
    ctx.drawImage(t, 0, 0, cells, cells, 0, 0, S, S);
  };
  im.src = src;
}

/* ---------- the page of one game ---------- */
const dleChar = (g, n) => g.chars.find(c => c.n === n);
function dleRender(g) {
  if (!games) return;
  const u = g.ui, s = dleSave(g), st = dleState(g, u.mode, u.daily), ans = dleChar(g, st.ans) || g.chars[0], tries = st.guesses.length;
  for (const b of u.modes.children) b.classList.toggle('on', b.dataset.m === u.mode);
  u.dailyBtn.classList.toggle('main', u.daily); u.freeBtn.classList.toggle('main', !u.daily);
  u.pool.value = s.pool; u.pool.disabled = u.daily;
  const stats = s.stats[u.mode];
  u.info.textContent = (u.daily ? 'Défi du jour · ' : 'Partie libre · ' + g.pools[s.pool].l + ' · ') + dlePool(g, u.daily ? 'all' : s.pool).filter(c => dleFits(c, u.mode)).length + ' personnages'
    + (stats ? ' · série ' + stats.streak + ' (record ' + stats.bestStreak + ') · ' + stats.wins + ' / ' + stats.played + ' gagnées' : '');
  // what the mode shows before the guesses
  const top = u.clue; top.replaceChildren();
  if (u.mode === 'hints') {
    const shown = st.won ? ans.h.length : Math.min(ans.h.length, 1 + tries);
    top.append(el('span', 'label', 'Indices · ' + shown + ' / ' + ans.h.length), ...ans.h.slice(0, shown).map((h, i) => el('div', 'mdHint px', (i + 1) + '. ' + h)));
  } else if (u.mode === 'emoji') {
    const e = [...ans.em.matchAll(/\p{Extended_Pictographic}(‍\p{Extended_Pictographic}|️)*/gu)].map(m => m[0]), shown = st.won ? e.length : Math.min(e.length, 1 + tries);
    top.append(el('span', 'label', 'Emojis · ' + shown + ' / ' + e.length), el('div', 'mdEmoji px', e.slice(0, shown).join(' ') + ' ' + '❔'.repeat(e.length - shown)));
  } else if (u.mode === 'image') {
    const lv = st.won ? DLE_PIX.length : Math.min(tries, DLE_PIX.length), cv = el('canvas', 'mdPix');
    cv.width = cv.height = 240;
    top.append(el('span', 'label', st.won ? 'Portrait' : 'Portrait · netteté ' + (lv + 1) + ' / ' + (DLE_PIX.length + 1)), cv);
    dlePixel(cv, dleImg(g, ans), lv >= DLE_PIX.length ? 240 : DLE_PIX[lv]);
  } else {
    top.append(el('span', 'hint', 'Vert : pareil · orange : en partie' + (g.cols.some(c => c.near) ? ' ou proche' : '') + ' · rouge : différent · ' + g.arrows));
    if (!st.won && tries >= 6 && ans.va) top.append(el('div', 'mdHint px', 'Indice (6 essais) : voix japonaise ' + ans.va));
    if (!st.won && tries >= 10 && ans.h.length) top.append(el('div', 'mdHint px', 'Indice (10 essais) : ' + ans.h.at(-1)));
  }
  // the input, or the win banner
  u.form.style.display = st.won ? 'none' : '';
  u.win.style.display = st.won ? '' : 'none';
  if (st.won) {
    const next = new Date(), txt = el('div', 'mdWinTxt'); next.setHours(24, 0, 0, 0);
    txt.append(el('b', '', 'Bravo ! C\'était ' + ans.n), el('span', 'hint', [ans.jp, 'trouvé en ' + tries + ' essai' + (tries > 1 ? 's' : ''), g.tiers[ans.t], ans.va && 'voix : ' + ans.va].filter(Boolean).join(' · ')),
      el('span', 'hint', u.daily ? 'Prochain défi dans ' + Math.ceil((next - Date.now()) / 3600e3) + ' h. Une partie libre en attendant ?' : 'Clique sur « Nouvelle partie » pour recommencer.'));
    u.win.replaceChildren(...(ans.img ? [Object.assign(el('img', 'mdWinImg'), {src: dleImg(g, ans), alt: ''})] : []), txt);
  }
  u.newBtn.style.display = u.daily ? 'none' : '';
  // the guesses, the last one first
  const list = u.guesses, cols = g.cols.length, grid = {gridTemplateColumns: '1.5fr repeat(' + cols + ',1fr)', minWidth: 150 + cols * 104 + 'px'};
  list.replaceChildren();
  if (u.mode === 'classic' && tries) { const hr = el('div', 'mdRow head'); Object.assign(hr.style, grid); hr.append(el('span', 'mdH', 'Personnage'), ...g.cols.map(c => el('span', 'mdH', c.k))); list.append(hr); }
  for (const name of [...st.guesses].reverse()) {
    const c = dleChar(g, name); if (!c) continue;
    const who = el('span', 'mdCell who' + (c.n === ans.n ? ' ok' : '') + (u.mode === 'classic' ? '' : ' wide ' + (c.n === ans.n ? 'ok' : 'no')));
    if (c.img) who.append(Object.assign(el('img'), {src: dleImg(g, c), alt: '', loading: 'lazy'}));
    who.append(el('span', '', c.n + (u.mode === 'classic' ? '' : c.n === ans.n ? ' ✓' : ' ✗')));
    if (u.mode === 'classic') {
      const row = el('div', 'mdRow'); Object.assign(row.style, grid); row.append(who);
      for (const r of dleCompare(g, c, ans)) { const cell = el('span', 'mdCell ' + r.r, r.v); if (r.arrow) cell.append(el('i', '', r.arrow)); cell.title = r.k; row.append(cell); }
      list.append(row);
    } else list.append(who);
  }
}
function dleGuess(g, name) {
  const u = g.ui, st = dleState(g, u.mode, u.daily), c = dleChar(g, name);
  if (!c || st.won || st.guesses.includes(c.n)) return;
  st.guesses.push(c.n);
  if (c.n === st.ans) { st.won = true; dleRecord(g, u.mode, u.daily, true, st.guesses.length); sfx('launch'); } else sfx('click');
  saveGames(); u.input.value = ''; dleSuggest(g); dleRender(g);
}
function dleSuggest(g) {
  const u = g.ui, q = dleNorm(u.input.value), st = dleState(g, u.mode, u.daily);
  const pool = dlePool(g, u.daily ? 'all' : dleSave(g).pool).filter(c => !st.guesses.includes(c.n) && dleFits(c, u.mode));
  const hits = q ? pool.filter(c => (c.key ||= dleNorm([c.n, c.n.split(' ').reverse().join(' '), c.jp, ...(c.al || [])].join(' '))).includes(q)).slice(0, 8) : [];
  u.sug.replaceChildren(...hits.map((c, i) => {
    const b = el('button', 'mdSugItem' + (i === u.sel ? ' on' : '')), name = el('span', 'n');
    if (c.img) name.append(Object.assign(el('img'), {src: dleImg(g, c), alt: '', loading: 'lazy'}));
    name.append(c.n); b.append(name, el('span', 'hint', c.jp || ''));
    b.onmousedown = e => { e.preventDefault(); dleGuess(g, c.n); }; return b;
  }));
  u.sug.style.display = hits.length ? '' : 'none'; u.hits = hits;
}
function dleRegister(g) {
  console.assert(g.chars.every(c => c.n && Array.isArray(c.h) && g.tiers[c.t] && g.cols.every(col => col.type !== 'set' || Array.isArray(c[col.id] || []))) && new Set(g.chars.map(c => c.n)).size === g.chars.length, g.key + ': well-formed, unique names');
  DLES[g.key] = g;
  const modes = Object.keys(DLE_MODES).filter(m => g.chars.some(c => dleFits(c, m)));
  // the view is already in index.html (tabs reopened at launch can be created before this script runs), else it is added here
  const v = $('dle_' + g.key) || el('div', 'appView'), w = el('div', 'appWrap'), head = el('div', 'agHead'), nav = el('div', 'agNav');
  if (!v.id) { v.id = 'dle_' + g.key; $('musicApp').before(v); }
  v.append(w);
  w.classList.add('dleWrap'); w.style.setProperty('--dle', '#ffa24a');  // la couleur de la série
  const u = g.ui = {mode: 'classic', daily: true, info: el('span', 'hint'), dailyBtn: el('button', 'btn px', 'DÉFI DU JOUR'), freeBtn: el('button', 'btn px', 'PARTIE LIBRE'), pool: el('select', 'f gSel'), newBtn: el('button', 'btn px', 'NOUVELLE PARTIE'),
    modes: el('div', 'row'), clue: el('div', 'mdClue'), form: el('div', 'mdForm'), input: el('input', 'f mdInput'), sug: el('div', 'mdSug px'), win: el('div', 'sysCard px mdWin'), guesses: el('div', 'mdGuesses')};
  u.pool.title = 'Personnages possibles en partie libre';
  Object.assign(u.input, {placeholder: 'Nom d\'un personnage de ' + g.series + '…', spellcheck: false, autocomplete: 'off'});
  u.sug.style.display = 'none'; u.win.style.display = 'none';
  nav.append(u.dailyBtn, u.freeBtn, u.pool, u.newBtn); head.append(el('span', 'label', g.name), u.info, nav); u.form.append(u.input, u.sug);
  w.append(head, u.modes, u.clue, u.form, u.win, u.guesses, el('div', 'hint', g.about));
  u.input.oninput = () => { u.sel = 0; dleSuggest(g); };
  u.input.onkeydown = e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); u.sel = Math.max(0, Math.min((u.hits?.length || 1) - 1, (u.sel || 0) + (e.key === 'ArrowDown' ? 1 : -1))); dleSuggest(g); }
    if (e.key === 'Enter' && u.hits?.length) { e.preventDefault(); dleGuess(g, u.hits[u.sel || 0].n); }
    if (e.key === 'Escape') u.sug.style.display = 'none';
  };
  u.input.onblur = () => setTimeout(() => u.sug.style.display = 'none', 100);
  u.modes.append(...modes.map(k => { const b = el('button', 'tab px', DLE_MODES[k]); b.dataset.m = k; b.onclick = () => { u.mode = k; dleSave(g).mode = k; dleRender(g); }; return b; }));
  u.pool.append(...Object.entries(g.pools).map(([k, p]) => { const o = el('option', '', p.l + ' (' + dlePool(g, k).length + ')'); o.value = k; return o; }));
  u.pool.onchange = () => { dleSave(g).pool = u.pool.value; saveGames(); dleRender(g); };
  u.dailyBtn.onclick = () => { u.daily = true; dleRender(g); };
  u.freeBtn.onclick = () => { u.daily = false; dleRender(g); };
  u.newBtn.onclick = () => { const s = dleSave(g); if (s.free && !s.free.won && s.free.guesses.length) dleRecord(g, s.free.mode, false, false, 0); s.free = null; saveGames(); dleRender(g); u.input.focus(); };
}
function dleOpen(key) { const g = DLES[key], m = games?.[key]?.mode; if (m && g.ui.modes.querySelector('[data-m="' + m + '"]')) g.ui.mode = m; dleRender(g); setTimeout(() => g.ui.input.focus(), 50); }

/* BleachDle: the characters of Bleach (Tite Kubo), from the manga (anime-only arcs left out).
   Data from the series' wiki (bleach.fandom.com): race, affiliation, Gotei 13 division, rank, height and the arc of their first appearance; portraits from the wiki. */
dleRegister({key: 'bleachdle', name: 'BleachDle', series: 'Bleach', dir: 'bleach',
  tiers: {1: 'Principal', 2: 'Secondaire', 3: 'Mineur'},
  pools: {main: {l: 'Personnages principaux', t: 1}, more: {l: 'Principaux et secondaires', t: 2}, all: {l: 'Tous', t: 3}},
  cols: [
    {id: 'g', k: 'Genre', type: 'eq', map: DLE_GENDER}, {id: 'ra', k: 'Race', type: 'eq'}, {id: 'af', k: 'Affiliation', type: 'set'}, {id: 'di', k: 'Division', type: 'eq'},
    {id: 'rg', k: 'Rang', type: 'eq'}, {id: 'ta', k: 'Taille', type: 'num', unit: ' cm', near: 5},
    {id: 'arc', k: '1er arc', type: 'ord', labels: ['Agent des âmes', 'Soul Society', 'Arrancar', 'Hueco Mundo', 'Faux Karakura', 'Fullbringer', 'Guerre de mille ans']},
  ],
  arrows: '↑ : le personnage à trouver est plus grand ou apparaît dans un arc plus tardif, ↓ : l\'inverse.',
  about: 'Devine le personnage de Bleach. Classique : chaque essai compare genre, race, affiliation, division du Gotei 13 (la dernière connue), rang, taille (orange : à 5 cm près) et arc de sa première apparition dans le manga. Indices, Emoji et Image : un indice de plus à chaque essai raté (les indices finissent par le nom du zanpakutō ou de la résurrection).',
  chars: [
    {n: "Ichigo Kurosaki",t: 1,em: "🍓⚔️👹🌙🧡",h: ["Il a les cheveux orange et voit les fantômes depuis tout petit.","Son père tient une clinique.","Il reçoit ses pouvoirs d'une shinigami pour protéger sa famille.","Il est le shinigami remplaçant de Karakura.","Anniversaire : 15 juillet.","Zanpakutō : Zangetsu.","Bankai : Tensa Zangetsu.","Voix japonaise : Masakazu Morita."],va: "Masakazu Morita",g: "M",ra: "Hybride",af: ["Karakura"],di: "—",rg: "Shinigami remplaçant",ta: 174,arc: 0,img: "ichigo-kurosaki.webp"},
    {n: "Rukia Kuchiki",t: 1,em: "❄️🐰🎨🌙",h: ["Elle dessine très mal des lapins.","Elle a été adoptée par une grande famille noble.","Elle a transmis ses pouvoirs à un lycéen.","Elle finit capitaine de la 13e division.","Anniversaire : 14 janvier.","Zanpakutō : Sode no Shirayuki.","Bankai : Hakka no Togame.","Voix japonaise : Fumiko Orikasa."],va: "Fumiko Orikasa",g: "F",ra: "Shinigami",af: ["Gotei 13","Karakura"],di: "13e division",rg: "Capitaine",ta: 144,arc: 0,img: "rukia-kuchiki.webp"},
    {n: "Orihime Inoue",t: 1,em: "🌸🍞💫🧡",h: ["Elle a des goûts culinaires très bizarres.","Ses pouvoirs viennent de ses barrettes.","Elle peut « rejeter » les événements.","Elle a été enlevée et emmenée au Hueco Mundo.","Anniversaire : 3 septembre.","Voix japonaise : Yuki Matsuoka."],va: "Yuki Matsuoka",g: "F",ra: "Humain",af: ["Karakura"],di: "—",rg: "Aucun",ta: 157,arc: 0,img: "orihime-inoue.webp"},
    {n: "Uryū Ishida",t: 1,em: "🏹🪡👓⚪",h: ["Il est très doué en couture.","Il porte des lunettes et déteste les shinigami.","Il tire des flèches d'énergie spirituelle.","Il est le dernier Quincy de Karakura… pour un temps.","Anniversaire : 6 novembre.","Épithète de Sternritter : « A: Antithesis ».","Voix japonaise : Noriaki Sugiyama."],va: "Noriaki Sugiyama",g: "M",ra: "Quincy",af: ["Karakura","Wandenreich"],di: "—",rg: "Sternritter",ta: 171,arc: 0,img: "uryu-ishida.webp"},
    {n: "Yasutora Sado",t: 1,em: "💪🎸🐦🇲🇽",h: ["Il est immense et parle très peu.","Il a des origines mexicaines.","Son bras droit se transforme en armure.","On le surnomme « Chad ».","Anniversaire : 7 avril.","Fullbring : Brazo Derecha de Gigante.","Voix japonaise : Hiroki Yasumoto."],va: "Hiroki Yasumoto",g: "M",ra: "Fullbringer",af: ["Karakura","Xcution"],di: "—",rg: "Aucun",ta: 197,arc: 0,al: ["Chad"],img: "yasutora-sado.webp"},
    {n: "Renji Abarai",t: 1,em: "🐍🐒❤️‍🔥🦴",h: ["Il a des tatouages partout et des cheveux rouges.","Il a grandi dans le Rukongai avec Rukia.","Son sabre se déploie comme un fouet.","Il est lieutenant de la 6e division.","Anniversaire : 31 août.","Zanpakutō : Zabimaru.","Bankai : Sōō Zabimaru.","Voix japonaise : Kentarō Itō."],va: "Kentarō Itō",g: "M",ra: "Shinigami",af: ["Gotei 13","Karakura"],di: "6e division",rg: "Lieutenant",ta: 188,arc: 0,img: "renji-abarai.webp"},
    {n: "Byakuya Kuchiki",t: 1,em: "🌸⚔️👑❄️",h: ["Il est très froid et fier.","Il est le chef d'un des quatre grands clans nobles.","Son sabre se disperse en milliers de lames.","C'est le grand frère adoptif de Rukia.","Anniversaire : 31 janvier.","Zanpakutō : Senbonzakura.","Bankai : Senbonzakura Kageyoshi.","Voix japonaise : Ryōtarō Okiayu."],va: "Ryōtarō Okiayu",g: "M",ra: "Shinigami",af: ["Gotei 13","Clan noble"],di: "6e division",rg: "Capitaine",ta: 180,arc: 0,img: "byakuya-kuchiki.webp"},
    {n: "Kisuke Urahara",t: 1,em: "🎩🍬🧪🌂",h: ["Il porte un chapeau rayé et des sabots.","Il tient une petite boutique de bonbons.","C'est un génie qui invente de tout.","Il a été capitaine de la 12e division.","Anniversaire : 31 décembre.","Zanpakutō : Benihime.","Bankai : Kannonbiraki Benihime Aratame.","Voix japonaise : Shin'ichirō Miki."],va: "Shin'ichirō Miki",g: "M",ra: "Shinigami",af: ["Boutique Urahara","Gotei 13","Karakura"],di: "12e division",rg: "Capitaine",ta: 183,arc: 0,img: "kisuke-urahara.webp"},
    {n: "Yoruichi Shihōin",t: 1,em: "🐈‍⬛⚡💨🥛",h: ["Elle peut se transformer en chat.","On l'appelle la « déesse de la vitesse ».","Elle est l'héritière d'un grand clan noble.","Elle a été capitaine de la 2e division.","Anniversaire : 1 janvier.","Voix japonaise : Satsuki Yukino."],va: "Satsuki Yukino",g: "F",ra: "Shinigami",af: ["Gotei 13","Onmitsukidō","Clan noble"],di: "2e division",rg: "Capitaine",ta: 156,arc: 0,img: "yoruichi-shihoin.webp"},
    {n: "Sousuke Aizen",t: 1,em: "👓🦋🧠😈",h: ["Il paraissait gentil, avec ses lunettes.","Il manipule tout le monde par l'illusion.","Il a créé l'armée des Arrancar.","Il a été capitaine de la 5e division.","Anniversaire : 29 mai.","Zanpakutō : Kyōka Suigetsu.","Voix japonaise : Shō Hayami."],va: "Shō Hayami",g: "M",ra: "Shinigami",af: ["Gotei 13","Armée d'Aizen"],di: "5e division",rg: "Capitaine",ta: 186,arc: 1,img: "sousuke-aizen.webp"},
    {n: "Gin Ichimaru",t: 1,em: "🦊😁🐍",h: ["Il sourit en permanence, les yeux plissés.","Il parle avec l'accent de Kyoto.","Il a grandi avec la lieutenante de la 10e division.","Il a été capitaine de la 3e division.","Anniversaire : 10 septembre.","Zanpakutō : Shinsō.","Bankai : Kamishini no Yari.","Voix japonaise : Kōji Yusa."],va: "Kōji Yusa",g: "M",ra: "Shinigami",af: ["Gotei 13","Armée d'Aizen"],di: "3e division",rg: "Capitaine",ta: 185,arc: 0,img: "gin-ichimaru.webp"},
    {n: "Kaname Tōsen",t: 1,em: "🦗⚖️🕶️",h: ["Il est aveugle.","Il parle sans cesse de justice.","Il a trahi la Soul Society avec deux autres capitaines.","Il a été capitaine de la 9e division.","Anniversaire : 13 novembre.","Resurrección : Suzumushi Hyakushiki: Grillar Grillo.","Zanpakutō : Suzumushi.","Bankai : Suzumushi Tsuishiki: Enma Kōrogi.","Voix japonaise : Toshiyuki Morikawa."],jp: "東仙 要",va: "Toshiyuki Morikawa",g: "M",ra: "Shinigami",af: ["Gotei 13","Armée d'Aizen"],di: "9e division",rg: "Capitaine",ta: 176,arc: 1,img: "kaname-tosen.webp"},
    {n: "Kenpachi Zaraki",t: 1,em: "⚔️🔔👹🍬",h: ["Il porte des clochettes dans les cheveux.","Il ne vit que pour le combat.","Il a le pire sens de l'orientation.","Il est capitaine de la 11e division.","Anniversaire : 19 novembre.","Zanpakutō : Nozarashi.","Voix japonaise : Fumihiko Tachiki."],va: "Fumihiko Tachiki",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "11e division",rg: "Capitaine",ta: 202,arc: 0,img: "kenpachi-zaraki.webp"},
    {n: "Tōshirō Hitsugaya",t: 1,em: "🐉❄️🍉🧒",h: ["C'est un génie très jeune.","Il déteste qu'on oublie de l'appeler « capitaine ».","Il a un dragon de glace.","Il est capitaine de la 10e division.","Anniversaire : 20 décembre.","Zanpakutō : Hyōrinmaru.","Bankai : Daiguren Hyōrinmaru.","Voix japonaise : Romi Park."],va: "Romi Park",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "10e division",rg: "Capitaine",ta: 133,arc: 1,img: "toshiro-hitsugaya.webp"},
    {n: "Mayuri Kurotsuchi",t: 1,em: "🧪💀🎭🔬",h: ["Il change d'apparence et de maquillage tout le temps.","C'est un savant fou.","Il dirige l'institut de recherche.","Il est capitaine de la 12e division.","Anniversaire : 30 mars.","Zanpakutō : Ashisogi Jizō.","Bankai : Konjiki Ashisogi Jizō.","Voix japonaise : Ryūsei Nakao."],va: "Ryūsei Nakao",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "12e division",rg: "Capitaine",ta: 174,arc: 1,img: "mayuri-kurotsuchi.webp"},
    {n: "Shunsui Kyōraku",t: 1,em: "🌸👒🍶😴",h: ["Il porte un kimono rose à fleurs et un chapeau de paille.","Il est paresseux et adore le saké.","Il a deux sabres et joue à des jeux d'enfants.","Il devient capitaine-commandant.","Anniversaire : 11 juillet.","Zanpakutō : Katen Kyōkotsu.","Bankai : Katen Kyōkotsu: Karamatsu Shinjū.","Voix japonaise : Akio Ōtsuka."],va: "Akio Ōtsuka",g: "M",ra: "Shinigami",af: ["Gotei 13","Clan noble"],di: "1re division",rg: "Capitaine",ta: 192,arc: 1,img: "shunsui-kyoraku.webp"},
    {n: "Jūshirō Ukitake",t: 1,em: "🤧🐟🍬🤍",h: ["Il a les cheveux blancs et une santé fragile.","Il est très gentil avec tout le monde.","Son sabre a deux lames reliées par une corde.","Il était capitaine de la 13e division.","Anniversaire : 21 décembre.","Zanpakutō : Sōgyo no Kotowari.","Voix japonaise : Hideo Ishikawa."],va: "Hideo Ishikawa",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "13e division",rg: "Capitaine",ta: 187,arc: 0,img: "jushiro-ukitake.webp"},
    {n: "Genryūsai Shigekuni Yamamoto",t: 1,em: "🔥👴⚔️🔥",h: ["C'est un vieillard à longue barbe.","Il a fondé l'Académie des shinigami.","Son sabre est le plus puissant de type feu.","Il est capitaine-commandant du Gotei 13.","Anniversaire : 21 janvier.","Zanpakutō : Ryūjin Jakka.","Bankai : Zanka no Tachi.","Voix japonaise : Masaaki Tsukada."],va: "Masaaki Tsukada",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "1re division",rg: "Capitaine",ta: 168,arc: 1,img: "genryusai-shigekuni-yamamoto.webp"},
    {n: "Retsu Unohana",t: 1,em: "🩺😊⚔️",h: ["Elle est douce et souriante… en apparence.","C'est la meilleure soigneuse.","Elle a été le premier « Kenpachi ».","Elle était capitaine de la 4e division.","Anniversaire : 21 avril.","Zanpakutō : Minazuki.","Voix japonaise : Aya Hisakawa."],va: "Aya Hisakawa",g: "F",ra: "Shinigami",af: ["Gotei 13"],di: "4e division",rg: "Capitaine",ta: 159,arc: 1,img: "retsu-unohana.webp"},
    {n: "Suì-Fēng",t: 1,em: "🐝🥷💨",h: ["Elle vénère son ancienne maîtresse.","Son sabre tue en deux coups au même endroit.","Elle dirige les forces secrètes.","Elle est capitaine de la 2e division.","Anniversaire : 11 février.","Zanpakutō : Suzumebachi.","Bankai : Jakuhō Raikōben.","Voix japonaise : Tomoko Kawakami."],va: "Tomoko Kawakami",g: "F",ra: "Shinigami",af: ["Gotei 13","Onmitsukidō"],di: "2e division",rg: "Capitaine",ta: 150,arc: 1,img: "sui-feng.webp"},
    {n: "Sajin Komamura",t: 1,em: "🐺🐶⛩️",h: ["Il cache son visage sous un casque.","Il a une tête de loup.","Il est très loyal au capitaine-commandant.","Il est capitaine de la 7e division.","Anniversaire : 23 août.","Zanpakutō : Tenken.","Bankai : Kokujō Tengen Myō'ō.","Voix japonaise : Tetsu Inada."],va: "Tetsu Inada",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "7e division",rg: "Capitaine",ta: 288,arc: 1,img: "sajin-komamura.webp"},
    {n: "Rangiku Matsumoto",t: 1,em: "🍶💃🌫️",h: ["Elle est très coquette et boit beaucoup.","Son sabre se change en cendres.","Elle a grandi avec un futur traître.","Elle est lieutenante de la 10e division.","Anniversaire : 29 septembre.","Zanpakutō : Haineko.","Voix japonaise : Kaya Matsutani."],va: "Kaya Matsutani",g: "F",ra: "Shinigami",af: ["Gotei 13"],di: "10e division",rg: "Lieutenant",ta: 172,arc: 1,img: "rangiku-matsumoto.webp"},
    {n: "Ikkaku Madarame",t: 1,em: "🪒🥢🐉",h: ["Il a le crâne rasé.","Il cache qu'il a un bankai.","Il adore les combats.","Il est officier de la 11e division.","Anniversaire : 9 novembre.","Zanpakutō : Hōzukimaru.","Bankai : Ryūmon Hōzukimaru.","Voix japonaise : Nobuyuki Hiyama."],va: "Nobuyuki Hiyama",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "11e division",rg: "Lieutenant",ta: 182,arc: 1,img: "ikkaku-madarame.webp"},
    {n: "Yumichika Ayasegawa",t: 1,em: "🦚💅✨",h: ["Il est obsédé par la beauté.","Il cache la vraie forme de son sabre.","Il porte des plumes au coin de l'œil.","Il est officier de la 11e division.","Anniversaire : 19 septembre.","Zanpakutō : Ruri'iro Kujaku.","Voix japonaise : Jun Fukuyama."],va: "Jun Fukuyama",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "11e division",rg: "Officier",ta: 169,arc: 1,img: "yumichika-ayasegawa.webp"},
    {n: "Shinji Hirako",t: 1,em: "🙃😁🎩",h: ["Il a un grand sourire plein de dents.","Son sabre inverse les sens.","Il a été transformé en hollow il y a 100 ans.","Il dirige les Visored.","Anniversaire : 10 mai.","Zanpakutō : Sakanade.","Bankai : Sakashima Yokoshima Happōfusagari.","Voix japonaise : Masaya Onosaka."],va: "Masaya Onosaka",g: "M",ra: "Shinigami",af: ["Gotei 13","Visored"],di: "5e division",rg: "Capitaine",ta: 176,arc: 2,img: "shinji-hirako.webp"},
    {n: "Ulquiorra Cifer",t: 1,em: "🦇💚😶🖤",h: ["Il a des traces vertes sous les yeux, comme des larmes.","Il ne comprend pas le « cœur ».","Il a enlevé une lycéenne.","C'est le 4e Espada.","Anniversaire : 1 décembre.","Resurrección : Murciélago.","Voix japonaise : Daisuke Namikawa."],va: "Daisuke Namikawa",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 169,arc: 2,img: "ulquiorra-cifer.webp"},
    {n: "Grimmjow Jaegerjaquez",t: 1,em: "🐆💙😈",h: ["Il a les cheveux bleus.","Il est obsédé par un combat contre le héros.","Il a une forme de panthère.","C'est le 6e Espada.","Anniversaire : 31 juillet.","Resurrección : Pantera.","Voix japonaise : Jun'ichi Suwabe."],va: "Jun'ichi Suwabe",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 186,arc: 2,img: "grimmjow-jaegerjaquez.webp"},
    {n: "Nelliel Tu Odelschwanck",t: 1,em: "🐐👧💚",h: ["Elle a longtemps été une enfant.","Elle a un masque en forme de crâne de bélier.","Elle était une Espada.","Elle aide le héros au Hueco Mundo.","Anniversaire : 24 avril.","Resurrección : Gamuza.","Voix japonaise : Tomoko Kaneda."],va: "Tomoko Kaneda",g: "F",ra: "Arrancar",af: ["Armée d'Aizen","Espada","Karakura"],di: "—",rg: "Espada",ta: 176,arc: 3,img: "nelliel-tu-odelschwanck.webp"},
    {n: "Coyote Starrk",t: 1,em: "🐺😴🔫",h: ["Il est très paresseux.","Il ne supportait pas la solitude.","Il partage son âme avec une petite fille.","C'est le 1er Espada.","Anniversaire : 19 janvier.","Resurrección : Los Lobos."],g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 187,arc: 2,img: "coyote-starrk.webp"},
    {n: "Tier Harribel",t: 1,em: "🦈💛🗡️",h: ["Elle cache le bas de son visage.","Elle a trois fidèles Fracción.","Elle a une forme de requin.","C'est la 3e Espada.","Anniversaire : 25 juillet.","Resurrección : Tiburón.","Voix japonaise : Megumi Ogata."],va: "Megumi Ogata",g: "F",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 175,arc: 2,img: "tier-harribel.webp"},
    {n: "Yhwach",t: 1,em: "👁️👑⚫",h: ["Il est le père des Quincy.","Il voit l'avenir.","Il peut voler les pouvoirs.","Il dirige le Wandenreich.","Épithète de Sternritter : « A: The Almighty ».","Voix japonaise : Takayuki Sugō."],va: "Takayuki Sugō",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 200,arc: 6,img: "yhwach.webp"},
    {n: "Isshin Kurosaki",t: 1,em: "🩺👨🤸",h: ["Il attaque son fils par surprise tous les matins.","Il est médecin.","Il a un énorme poster de sa femme.","Il a été capitaine de la 10e division.","Anniversaire : 10 décembre.","Zanpakutō : Engetsu.","Voix japonaise : Toshiyuki Morikawa."],va: "Toshiyuki Morikawa",g: "M",ra: "Shinigami",af: ["Karakura","Gotei 13"],di: "10e division",rg: "Capitaine",ta: 186,arc: 0,img: "isshin-kurosaki.webp"},
    {n: "Kon",t: 1,em: "🧸🦁😍",h: ["Il vit dans une peluche.","Il est obsédé par les filles.","Il est très rapide des jambes.","C'est une âme modifiée.","Anniversaire : 30 décembre.","Voix japonaise : Mitsuaki Madono."],va: "Mitsuaki Madono",g: "M",ra: "Âme modifiée",af: ["Karakura"],di: "—",rg: "Aucun",ta: 27,arc: 0,img: "kon.webp"},
    {n: "Kūgo Ginjō",t: 1,em: "✝️💀🎸",h: ["Il dirige un groupe de gens aux pouvoirs étranges.","Il a été le premier shinigami remplaçant.","Son arme est une croix.","Il veut voler des pouvoirs.","Anniversaire : 15 novembre.","Fullbring : Cross of Scaffold.","Voix japonaise : Hiroki Tōchi."],va: "Hiroki Tōchi",g: "M",ra: "Fullbringer",af: ["Xcution"],di: "—",rg: "Shinigami remplaçant",ta: 187,arc: 5,img: "kugo-ginjo.webp"},
    {n: "Shūkurō Tsukishima",t: 1,em: "📖🔖😏",h: ["Il lit tout le temps.","Il peut s'insérer dans le passé des gens.","Son arme est un marque-page.","Il fait partie de Xcution.","Anniversaire : 4 février.","Fullbring : Book of the End.","Voix japonaise : Daisuke Ono."],va: "Daisuke Ono",g: "M",ra: "Fullbringer",af: ["Xcution"],di: "—",rg: "Aucun",ta: 198,arc: 5,img: "shukuro-tsukishima.webp"},
    {n: "Jugram Haschwalth",t: 1,em: "⚖️👑🛡️",h: ["Il est le bras droit de l'empereur.","Il rééquilibre le bon et le mauvais sort.","Il était ami d'enfance d'un autre Quincy.","C'est le grand maître des Sternritter.","Anniversaire : 5 novembre.","Épithète de Sternritter : « B: The Balance ».","Voix japonaise : Yū'ichirō Umehara."],va: "Yū'ichirō Umehara",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 189,arc: 6,img: "jugram-haschwalth.webp"},
    {n: "Bazz-B",t: 1,em: "🔥🤘😤",h: ["Il a une crête rouge.","Il manie le feu.","Il veut se venger de l'empereur.","C'est un Sternritter.","Anniversaire : 14 juillet.","Épithète de Sternritter : « H: The Heat ».","Voix japonaise : Yūki Ono."],va: "Yūki Ono",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 179,arc: 6,img: "bazz-b.webp"},
    {n: "Askin Nakk Le Vaar",t: 2,em: "☠️💉😐",h: ["Il parle beaucoup pour un méchant.","Il contrôle la dose létale de toute chose.","Il devient un garde impérial.","C'est un Sternritter.","Anniversaire : 6 juin.","Épithète de Sternritter : « D: The Deathdealing »."],g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 187,arc: 6,img: "askin-nakk-le-vaar.webp"},
    {n: "Shūhei Hisagi",t: 2,em: "🏷️69️⃣📰",h: ["Il a le chiffre 69 tatoué sur la joue.","Il a peur de son propre sabre.","Il écrit pour le journal des shinigami.","Il est lieutenant de la 9e division.","Anniversaire : 14 août.","Zanpakutō : Kazeshini.","Voix japonaise : Katsuyuki Konishi."],va: "Katsuyuki Konishi",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "9e division",rg: "Lieutenant",ta: 181,arc: 1,img: "shuhei-hisagi.webp"},
    {n: "Izuru Kira",t: 2,em: "😞🪝📜",h: ["Il est toujours déprimé.","Son sabre alourdit tout ce qu'il touche.","Il était le lieutenant d'un traître.","Il est lieutenant de la 3e division.","Anniversaire : 27 mars.","Zanpakutō : Wabisuke.","Voix japonaise : Takahiro Sakurai."],va: "Takahiro Sakurai",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "3e division",rg: "Lieutenant",ta: 173,arc: 1,img: "izuru-kira.webp"},
    {n: "Momo Hinamori",t: 2,em: "🍑🔥😢",h: ["Elle adorait son capitaine.","Elle est amie d'enfance du plus jeune capitaine.","Elle est experte en kidō.","Elle est lieutenante de la 5e division.","Anniversaire : 3 juin.","Zanpakutō : Tobiume.","Voix japonaise : Kumi Sakuma."],va: "Kumi Sakuma",g: "F",ra: "Shinigami",af: ["Gotei 13"],di: "5e division",rg: "Lieutenant",ta: 151,arc: 1,img: "momo-hinamori.webp"},
    {n: "Nanao Ise",t: 2,em: "👓📚🍶",h: ["Elle porte des lunettes et un livre.","Elle gronde son capitaine sans cesse.","Elle a hérité d'un sabre sacré.","Elle est lieutenante de la 1re division.","Anniversaire : 7 juillet.","Voix japonaise : Hitomi Nabatame."],va: "Hitomi Nabatame",g: "F",ra: "Shinigami",af: ["Gotei 13","Clan noble"],di: "1re division",rg: "Lieutenant",ta: 164,arc: 1,img: "nanao-ise.webp"},
    {n: "Isane Kotetsu",t: 2,em: "🩹😳👭",h: ["Elle est très grande et très timide.","C'est une soigneuse.","Elle a une petite sœur dans une autre division.","Elle devient capitaine de la 4e division.","Anniversaire : 2 août.","Zanpakutō : Itegumo.","Voix japonaise : Yukana."],va: "Yukana",g: "F",ra: "Shinigami",af: ["Gotei 13"],di: "4e division",rg: "Capitaine",ta: 187,arc: 1,img: "isane-kotetsu.webp"},
    {n: "Hanatarō Yamada",t: 2,em: "🩹🧹😅",h: ["Il est très gentil et maladroit.","C'est un soigneur.","Il aide le héros à s'introduire dans la prison.","Il est officier de la 4e division.","Anniversaire : 1 avril.","Zanpakutō : Hisagomaru.","Voix japonaise : Kōki Miyata."],va: "Kōki Miyata",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "4e division",rg: "Officier",ta: 153,arc: 1,img: "hanataro-yamada.webp"},
    {n: "Tetsuzaemon Iba",t: 2,em: "🕶️💪",h: ["Il porte des lunettes de soleil.","Il a été à la 11e division.","Il devient capitaine de la 7e division.","Anniversaire : 18 juillet.","Voix japonaise : Rintarō Nishi."],va: "Rintarō Nishi",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "7e division",rg: "Capitaine",ta: 182,arc: 1,img: "tetsuzaemon-iba.webp"},
    {n: "Marechiyo Ōmaeda",t: 2,em: "🍘💰😏",h: ["Il est très riche et adore les chips de riz.","Il est très grand et gros.","Il se moque des autres.","Il est lieutenant de la 2e division.","Anniversaire : 5 mai.","Zanpakutō : Gegetsuburi.","Voix japonaise : Shōto Kashii."],va: "Shōto Kashii",g: "M",ra: "Shinigami",af: ["Gotei 13","Onmitsukidō"],di: "2e division",rg: "Lieutenant",ta: 210,arc: 1,img: "marechiyo-omaeda.webp"},
    {n: "Chōjirō Sasakibe",t: 2,em: "⚡🫖👴",h: ["Il adore le thé anglais.","Il a une moustache.","Il cache un bankai.","Il était lieutenant de la 1re division.","Anniversaire : 4 novembre.","Zanpakutō : Gonryōmaru.","Bankai : Kōkō Gonryō Rikyū.","Voix japonaise : Taro Yamaguchi."],va: "Taro Yamaguchi",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "1re division",rg: "Lieutenant",ta: 179,arc: 1,img: "chojiro-sasakibe.webp"},
    {n: "Yachiru Kusajishi",t: 2,em: "🍬🌸👧",h: ["C'est une petite fille aux cheveux roses.","Elle se perche sur l'épaule de son capitaine.","Elle donne des surnoms à tout le monde.","Elle est lieutenante de la 11e division.","Anniversaire : 12 février.","Zanpakutō : Sanpo Kenjū.","Voix japonaise : Hisayo Mochizuki."],va: "Hisayo Mochizuki",g: "F",ra: "Shinigami",af: ["Gotei 13"],di: "11e division",rg: "Lieutenant",ta: 109,arc: 1,img: "yachiru-kusajishi.webp"},
    {n: "Nemu Kurotsuchi",t: 2,em: "🧪🤖🙇‍♀️",h: ["Elle obéit à tout.","Elle a été créée par son « père ».","Elle est artificielle.","Elle est lieutenante de la 12e division.","Anniversaire : 30 mars.","Voix japonaise : Rie Kugimiya."],va: "Rie Kugimiya",g: "F",ra: "Âme artificielle",af: ["Gotei 13"],di: "12e division",rg: "Lieutenant",ta: 167,arc: 1,img: "nemu-kurotsuchi.webp"},
    {n: "Akon",t: 2,em: "🦌🔬",h: ["Il a trois cornes sur le front.","Il travaille à l'institut de recherche.","Il est fumeur.","Il devient lieutenant de la 12e division.","Anniversaire : 29 juin.","Voix japonaise : Keijin Okuda."],va: "Keijin Okuda",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "12e division",rg: "Lieutenant",ta: 176,arc: 0,img: "akon.webp"},
    {n: "Sentarō Kotsubaki",t: 2,em: "🗣️😤",h: ["Il se dispute sans cesse avec une collègue.","Il veut plaire à son capitaine.","Il est officier de la 13e division.","Il devient lieutenant de la 13e division.","Anniversaire : 22 septembre.","Voix japonaise : Kōichi Tōchika."],va: "Kōichi Tōchika",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "13e division",rg: "Lieutenant",ta: 183,arc: 1,img: "sentaro-kotsubaki.webp"},
    {n: "Kiyone Kotetsu",t: 2,em: "🗣️👧",h: ["Elle se dispute sans cesse avec un collègue.","Elle veut plaire à son capitaine.","Sa grande sœur est soigneuse.","Elle est à la 13e division.","Anniversaire : 22 septembre.","Voix japonaise : Chinami Nishimura."],va: "Chinami Nishimura",g: "F",ra: "Shinigami",af: ["Gotei 13"],di: "13e division",rg: "Officier",ta: 154,arc: 1,img: "kiyone-kotetsu.webp"},
    {n: "Kaien Shiba",t: 2,em: "🌊🔱💚",h: ["Il était très aimé par sa division.","Son sabre est un trident d'eau.","Il est mort à cause d'un hollow.","Il était lieutenant de la 13e division.","Anniversaire : 27 octobre.","Zanpakutō : Nejibana.","Voix japonaise : Toshihiko Seki."],va: "Toshihiko Seki",g: "M",ra: "Shinigami",af: ["Gotei 13","Clan noble"],di: "13e division",rg: "Lieutenant",ta: 183,arc: 1,img: "kaien-shiba.webp"},
    {n: "Kūkaku Shiba",t: 2,em: "💥🎆🦾",h: ["Il lui manque un bras… elle le cache sous une manche.","C'est une experte en feux d'artifice.","Elle propulse le héros avec un canon.","Elle dirige le clan Shiba.","Anniversaire : 1 octobre.","Voix japonaise : Akiko Hiramatsu."],va: "Akiko Hiramatsu",g: "F",ra: "Âme",af: ["Clan noble"],di: "—",rg: "Aucun",ta: 168,arc: 1,img: "kukaku-shiba.webp"},
    {n: "Ganju Shiba",t: 2,em: "🐗🎆😤",h: ["Il chevauche un sanglier.","Il déteste les shinigami.","Il fabrique des boules explosives.","C'est le frère cadet de Kūkaku.","Anniversaire : 15 octobre.","Voix japonaise : Wataru Takagi."],va: "Wataru Takagi",g: "M",ra: "Âme",af: ["Clan noble"],di: "—",rg: "Aucun",ta: 182,arc: 1,img: "ganju-shiba.webp"},
    {n: "Tessai Tsukabishi",t: 2,em: "👨‍🍳🕶️💪",h: ["Il porte des lunettes et une moustache.","Il est très fort en kidō.","Il travaille dans une boutique de bonbons.","Il a été capitaine de l'unité de kidō.","Anniversaire : 12 mai.","Voix japonaise : Kiyoyuki Yanada."],va: "Kiyoyuki Yanada",g: "M",ra: "Shinigami",af: ["Boutique Urahara"],di: "—",rg: "Aucun",ta: 200,arc: 0,img: "tessai-tsukabishi.webp"},
    {n: "Jinta Hanakari",t: 2,em: "🧢⚾😤",h: ["C'est un garçon roux très agressif.","Il se bat avec une batte.","Il travaille dans une boutique de bonbons.","Il embête sa collègue Ururu.","Anniversaire : 4 avril.","Voix japonaise : Takako Honda."],va: "Takako Honda",g: "M",ra: "Âme modifiée",af: ["Karakura","Boutique Urahara"],di: "—",rg: "Aucun",ta: 126,arc: 0,img: "jinta-hanakari.webp"},
    {n: "Ururu Tsumugiya",t: 2,em: "👧🔫😶",h: ["C'est une fillette timide.","Elle devient une machine de combat.","Elle travaille dans une boutique de bonbons.","Jinta l'embête sans cesse.","Anniversaire : 9 septembre.","Voix japonaise : Noriko Shitaya."],va: "Noriko Shitaya",g: "F",ra: "Âme modifiée",af: ["Karakura","Boutique Urahara"],di: "—",rg: "Aucun",ta: 141,arc: 0,img: "ururu-tsumugiya.webp"},
    {n: "Hiyori Sarugaki",t: 2,em: "🩴😤🐒",h: ["Elle frappe les gens avec sa sandale.","Elle est petite et colérique.","Elle a été lieutenante de la 12e division.","C'est une Visored.","Anniversaire : 1 août.","Zanpakutō : Kubikiri Orochi.","Voix japonaise : Reiko Takagi."],va: "Reiko Takagi",g: "F",ra: "Shinigami",af: ["Gotei 13","Visored"],di: "12e division",rg: "Lieutenant",ta: 133,arc: 2,img: "hiyori-sarugaki.webp"},
    {n: "Kensei Muguruma",t: 2,em: "6️⃣9️⃣👊",h: ["Il porte le chiffre 69 sur son torse.","Il a sauvé un enfant qui deviendra lieutenant.","C'est un Visored.","Il redevient capitaine de la 9e division.","Anniversaire : 30 juillet.","Zanpakutō : Tachikaze.","Bankai : Tekken Tachikaze.","Voix japonaise : Tomokazu Sugita."],va: "Tomokazu Sugita",g: "M",ra: "Shinigami",af: ["Gotei 13","Visored"],di: "9e division",rg: "Capitaine",ta: 179,arc: 2,img: "kensei-muguruma.webp"},
    {n: "Rōjūrō Ōtoribashi",t: 2,em: "🎻🎵😎",h: ["On l'appelle « Rose ».","Il a de longs cheveux blonds.","Son bankai est un concert.","Il redevient capitaine de la 3e division.","Anniversaire : 17 mars.","Zanpakutō : Kinshara.","Bankai : Kinshara Butōdan.","Voix japonaise : Kenyu Horiuchi."],va: "Kenyu Horiuchi",g: "M",ra: "Shinigami",af: ["Gotei 13","Visored"],di: "3e division",rg: "Capitaine",ta: 187,arc: 2,al: ["Rose"],img: "rojuro-otoribashi.webp"},
    {n: "Love Aikawa",t: 2,em: "🕶️📚🔥",h: ["Il a une coupe afro.","Il adore les mangas.","C'est un Visored.","Il redevient capitaine de la 7e division.","Anniversaire : 10 octobre.","Zanpakutō : Tengumaru.","Voix japonaise : Tetsu Inada."],va: "Tetsu Inada",g: "M",ra: "Shinigami",af: ["Gotei 13","Visored"],di: "7e division",rg: "Capitaine",ta: 189,arc: 2,img: "love-aikawa.webp"},
    {n: "Lisa Yadōmaru",t: 2,em: "👓📖😏",h: ["Elle lit des magazines coquins.","Elle porte des lunettes et des nattes.","Elle était lieutenante de Kyōraku.","C'est une Visored.","Anniversaire : 3 février.","Zanpakutō : Haguro Tonbo.","Voix japonaise : Kanako Hattori."],va: "Kanako Hattori",g: "F",ra: "Shinigami",af: ["Gotei 13","Visored"],di: "8e division",rg: "Capitaine",ta: 162,arc: 2,img: "lisa-yadomaru.webp"},
    {n: "Mashiro Kuna",t: 2,em: "🥸💚😝",h: ["Elle se plaint sans arrêt.","Elle a une énergie débordante.","Elle était lieutenante de la 9e division.","C'est une Visored.","Anniversaire : 1 avril.","Voix japonaise : Akemi Kanda."],va: "Akemi Kanda",g: "F",ra: "Shinigami",af: ["Gotei 13","Visored"],di: "9e division",rg: "Lieutenant",ta: 153,arc: 2,img: "mashiro-kuna.webp"},
    {n: "Hachigen Ushōda",t: 2,em: "🧔🟣🛡️",h: ["Il est immense et très doux.","Il est expert en barrières.","Il a été lieutenant de l'unité de kidō.","C'est un Visored.","Anniversaire : 8 septembre.","Voix japonaise : Takashi Nagasako."],va: "Takashi Nagasako",g: "M",ra: "Shinigami",af: ["Visored"],di: "—",rg: "Aucun",ta: 257,arc: 2,img: "hachigen-ushoda.webp"},
    {n: "Ichibe'e Hyōsube",t: 2,em: "📛🖌️🧔",h: ["Il a donné un nom à tout.","Il est chauve et barbu.","Il dirige la garde royale.","C'est le chef de la Division Zéro.","Anniversaire : 1 janvier.","Zanpakutō : Ichimonji.","Voix japonaise : Naomi Kusumi."],va: "Naomi Kusumi",g: "M",ra: "Shinigami",af: ["Division Zéro"],di: "Division Zéro",rg: "Garde royale",ta: 181,arc: 6,img: "ichibe-e-hyosube.webp"},
    {n: "Ōetsu Nimaiya",t: 2,em: "😎🗡️🎤",h: ["Il parle comme un rappeur.","Il a créé les zanpakutō.","Il porte des lunettes de soleil.","Il fait partie de la Division Zéro.","Anniversaire : 18 août.","Voix japonaise : Yōji Ueda."],va: "Yōji Ueda",g: "M",ra: "Shinigami",af: ["Division Zéro"],di: "Division Zéro",rg: "Garde royale",ta: 172,arc: 6,img: "oetsu-nimaiya.webp"},
    {n: "Kirio Hikifune",t: 2,em: "🍙🫃👩‍🍳",h: ["Elle change de corpulence.","Elle cuisine pour guérir.","Elle a été capitaine de la 12e division.","Elle fait partie de la Division Zéro.","Anniversaire : 16 décembre.","Voix japonaise : Ayumi Tsunematsu."],va: "Ayumi Tsunematsu",g: "F",ra: "Shinigami",af: ["Gotei 13","Division Zéro"],di: "Division Zéro",rg: "Garde royale",ta: 174,arc: 6,img: "kirio-hikifune.webp"},
    {n: "Tenjirō Kirinji",t: 2,em: "♨️🦵🥸",h: ["Il a une coiffure très haute.","Il dirige une source chaude qui soigne.","Il a été capitaine de la 4e division.","Il fait partie de la Division Zéro.","Anniversaire : 31 mai.","Zanpakutō : Kinpika."],g: "M",ra: "Shinigami",af: ["Division Zéro"],di: "Division Zéro",rg: "Garde royale",ta: 193,arc: 6,img: "tenjiro-kirinji.webp"},
    {n: "Senjumaru Shutara",t: 2,em: "🧵👘🕸️",h: ["Elle a six bras.","Elle a créé l'uniforme des shinigami.","Son bankai est un métier à tisser.","Elle fait partie de la Division Zéro.","Anniversaire : 1 novembre.","Zanpakutō : Shigarami.","Bankai : Shatatsu Karagara Shigarami no Tsuji.","Voix japonaise : Rina Satō."],va: "Rina Satō",g: "F",ra: "Shinigami",af: ["Division Zéro"],di: "Division Zéro",rg: "Garde royale",ta: 158,arc: 6,img: "senjumaru-shutara.webp"},
    {n: "Baraggan Louisenbairn",t: 2,em: "👑💀⏳",h: ["C'est un vieux roi.","Il fait vieillir tout ce qu'il touche.","Il régnait sur le Hueco Mundo avant Aizen.","C'est le 2e Espada.","Anniversaire : 9 février.","Resurrección : Arrogante.","Voix japonaise : Shōzō Iizuka."],va: "Shōzō Iizuka",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 166,arc: 3,img: "baraggan-louisenbairn.webp"},
    {n: "Nnoitra Gilga",t: 2,em: "🌙🗡️😈",h: ["Il est très grand et maigre.","Il porte une arme en forme de croissant.","Il déteste une ancienne Espada.","C'est le 5e Espada.","Anniversaire : 11 novembre.","Resurrección : Santa Teresa.","Voix japonaise : Nobutoshi Canna."],va: "Nobutoshi Canna",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 215,arc: 2,img: "nnoitra-gilga.webp"},
    {n: "Szayelaporro Granz",t: 2,em: "🔬🌹😈",h: ["C'est un savant fou.","Il porte des lunettes roses.","Il crée des poupées vaudou.","C'est le 8e Espada.","Anniversaire : 22 juin.","Resurrección : Fornicarás.","Voix japonaise : Kōsuke Toriumi."],va: "Kōsuke Toriumi",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 185,arc: 3,img: "szayelaporro-granz.webp"},
    {n: "Aaroniero Arruruerie",t: 2,em: "🫙😈🗣️",h: ["Il a une tête en forme de bocal.","Il a deux voix.","Il prend l'apparence de Kaien Shiba.","C'est le 9e Espada.","Anniversaire : 23 avril.","Resurrección : Glotonería."],g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 205,arc: 2,img: "aaroniero-arruruerie.webp"},
    {n: "Zommari Rureaux",t: 2,em: "👁️🧘",h: ["Il peut prendre le contrôle des corps.","Il est très rapide.","Il a de nombreux yeux.","C'est le 7e Espada.","Anniversaire : 13 octobre.","Resurrección : Brujería.","Voix japonaise : Taiten Kusunoki."],va: "Taiten Kusunoki",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 196,arc: 3,img: "zommari-rureaux.webp"},
    {n: "Yammy Llargo",t: 2,em: "👊🐘😡",h: ["Il est gigantesque et colérique.","Il grossit en s'énervant.","Il a un chien Arrancar.","C'est le 10e… et le 0e Espada.","Anniversaire : 3 avril.","Resurrección : Ira.","Voix japonaise : Kenji Nomura."],va: "Kenji Nomura",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 230,arc: 2,img: "yammy-llargo.webp"},
    {n: "Lilynette Gingerbuck",t: 2,em: "👧🐺",h: ["C'est une enfant turbulente.","Elle porte un demi-masque avec une corne.","Elle se change en pistolets.","Elle est l'autre moitié du 1er Espada.","Anniversaire : 19 janvier.","Resurrección : Los Lobos.","Voix japonaise : Kiyomi Asai."],va: "Kiyomi Asai",g: "F",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 142,arc: 3,img: "lilynette-gingerbuck.webp"},
    {n: "Wonderweiss Margela",t: 2,em: "👶🔥",h: ["Il ne parle presque pas.","Il a été créé pour sceller une flamme.","C'est un Arrancar spécial.","Il est le numéro 77.","Anniversaire : 6 juillet.","Resurrección : Extinguir.","Voix japonaise : Hisayoshi Suganuma."],va: "Hisayoshi Suganuma",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Numeros",ta: 155,arc: 2,img: "wonderweiss-margela.webp"},
    {n: "Ryūken Ishida",t: 2,em: "🏥🏹👓",h: ["Il est directeur d'hôpital.","Il méprise les pouvoirs de son fils.","Il est un Quincy très puissant.","C'est le père d'Uryū.","Anniversaire : 14 mars.","Voix japonaise : Ken Narita."],va: "Ken Narita",g: "M",ra: "Quincy",af: ["Karakura"],di: "—",rg: "Aucun",ta: 178,arc: 1,img: "ryuken-ishida.webp"},
    {n: "Masaki Kurosaki",t: 2,em: "👩🌻⚪",h: ["Elle était très souriante.","Elle est morte quand son fils était petit.","C'était une Quincy.","C'est la mère d'Ichigo.","Anniversaire : 9 juin.","Voix japonaise : Sayaka Ōhara."],va: "Sayaka Ōhara",g: "F",ra: "Quincy",af: [],di: "—",rg: "Aucun",ta: 161,arc: 0,img: "masaki-kurosaki.webp"},
    {n: "Karin Kurosaki",t: 2,em: "⚽👧👀",h: ["Elle adore le football.","Elle voit les fantômes.","Elle a une sœur jumelle.","C'est la sœur d'Ichigo.","Anniversaire : 6 mai.","Voix japonaise : Rie Kugimiya."],va: "Rie Kugimiya",g: "F",ra: "Humain",af: ["Karakura"],di: "—",rg: "Aucun",ta: 136,arc: 0,img: "karin-kurosaki.webp"},
    {n: "Yuzu Kurosaki",t: 2,em: "🍳👧🧸",h: ["Elle cuisine pour toute la famille.","Elle est très douce.","Elle a une sœur jumelle.","C'est la sœur d'Ichigo.","Anniversaire : 6 mai.","Voix japonaise : Ayumi Sena."],jp: "黒崎 遊子",va: "Ayumi Sena",g: "F",ra: "Humain",af: ["Karakura"],di: "—",rg: "Aucun",ta: 137,arc: 0,img: "yuzu-kurosaki.webp"},
    {n: "Tatsuki Arisawa",t: 2,em: "🥋💪👧",h: ["Elle est championne de karaté.","Elle est la meilleure amie d'Orihime.","Elle connaît le héros depuis l'enfance.","Elle est au lycée de Karakura.","Anniversaire : 17 juillet.","Voix japonaise : Junko Noda."],va: "Junko Noda",g: "F",ra: "Humain",af: ["Karakura"],di: "—",rg: "Aucun",ta: 155,arc: 0,img: "tatsuki-arisawa.webp"},
    {n: "Keigo Asano",t: 2,em: "😭🤪🎉",h: ["Il est très bruyant et dramatique.","Il est un ami du héros au lycée.","Il a une grande sœur.","Il vit à Karakura.","Anniversaire : 1 avril.","Voix japonaise : Katsuyuki Konishi."],va: "Katsuyuki Konishi",g: "M",ra: "Humain",af: ["Karakura"],di: "—",rg: "Aucun",ta: 172,arc: 0,img: "keigo-asano.webp"},
    {n: "Mizuiro Kojima",t: 2,em: "📱😏",h: ["Il sort avec des femmes plus âgées.","Il est toujours sur son téléphone.","Il est un ami du héros au lycée.","Il vit à Karakura.","Anniversaire : 23 mai.","Voix japonaise : Jun Fukuyama."],va: "Jun Fukuyama",g: "M",ra: "Humain",af: ["Karakura"],di: "—",rg: "Aucun",ta: 154,arc: 0,img: "mizuiro-kojima.webp"},
    {n: "Don Kanonji",t: 2,em: "📺🙌😆",h: ["Il anime une émission de télé sur les fantômes.","Son cri est « Bwahahaha ».","Il est médium.","Il fait équipe avec les Karakura Superheroes.","Anniversaire : 23 mars.","Voix japonaise : Shigeru Chiba."],va: "Shigeru Chiba",g: "M",ra: "Humain",af: ["Karakura"],di: "—",rg: "Aucun",ta: 185,arc: 0,img: "don-kanonji.webp"},
    {n: "Grand Fisher",t: 2,em: "🎣😈",h: ["C'est un hollow qui attire ses proies.","Il a tué la mère du héros.","Il devient un Arrancar.","Il est tué par Isshin.","Voix japonaise : Chafurin."],va: "Chafurin",g: "M",ra: "Hollow",af: ["Armée d'Aizen"],di: "—",rg: "Aucun",ta: 342,arc: 0,img: "grand-fisher.webp"},
    {n: "Riruka Dokugamine",t: 2,em: "💗📦😤",h: ["Elle peut enfermer les gens dans des objets.","Elle est très capricieuse.","Elle fait partie de Xcution.","Elle porte des couettes.","Anniversaire : 14 avril.","Fullbring : Dollhouse.","Voix japonaise : Megumi Toyoguchi."],va: "Megumi Toyoguchi",g: "F",ra: "Fullbringer",af: ["Xcution"],di: "—",rg: "Aucun",ta: 156,arc: 5,img: "riruka-dokugamine.webp"},
    {n: "Yukio Hans Vorarlberna",t: 2,em: "🎮🕹️😒",h: ["Il est toujours sur sa console.","Il est très riche.","Il peut créer des mondes de jeu vidéo.","Il fait partie de Xcution.","Anniversaire : 23 décembre.","Fullbring : Invaders Must Die.","Voix japonaise : Mitsuhiro Ichiki."],va: "Mitsuhiro Ichiki",g: "M",ra: "Fullbringer",af: ["Xcution"],di: "—",rg: "Aucun",ta: 154,arc: 5,img: "yukio-hans-vorarlberna.webp"},
    {n: "Jackie Tristan",t: 2,em: "👢💪",h: ["Ses bottes deviennent plus fortes quand elles sont sales.","Elle a perdu sa famille.","Elle fait partie de Xcution.","C'est une Fullbringer.","Fullbring : Dirty Boots.","Voix japonaise : Atsuko Yuya."],va: "Atsuko Yuya",g: "F",ra: "Humain",af: ["Xcution"],di: "—",rg: "Aucun",ta: null,arc: 5,img: "jackie-tristan.webp"},
    {n: "Giriko Kutsuzawa",t: 2,em: "⏱️🍸",h: ["Il est barman.","Il contrôle le temps avec des contrats.","Il fait partie de Xcution.","C'est un Fullbringer.","Fullbring : Time Tells No Lies.","Voix japonaise : Atsushi Ono."],va: "Atsushi Ono",g: "M",ra: "Fullbringer",af: ["Xcution"],di: "—",rg: "Aucun",ta: null,arc: 5,img: "giriko-kutsuzawa.webp"},
    {n: "Moe Shishigawara",t: 3,em: "😤🕶️",h: ["Il est très arrogant.","Il fait partie de Xcution.","C'est un Fullbringer.","Fullbring : Jackpot Knuckle.","Voix japonaise : Hiroyuki Yoshino."],va: "Hiroyuki Yoshino",g: "M",ra: "Fullbringer",af: [],di: "—",rg: "Aucun",ta: null,arc: 5,img: "moe-shishigawara.webp"},
    {n: "Ikumi Unagiya",t: 2,em: "🐟💼👩",h: ["Elle dirige une petite entreprise.","Elle engage le héros pour des petits boulots.","Elle a un fils.","Elle tient l'Unagiya.","Voix japonaise : Yūko Kaida."],va: "Yūko Kaida",g: "F",ra: "Humain",af: [],di: "—",rg: "Aucun",ta: null,arc: 5,img: "ikumi-unagiya.webp"},
    {n: "Lille Barro",t: 2,em: "🔫👁️✝️",h: ["Il est le premier Sternritter.","Son arme est un fusil.","Il est garde de l'empereur.","Il dirige le Schutzstaffel.","Anniversaire : 11 avril.","Épithète de Sternritter : « X: The X-Axis »."],g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 182,arc: 6,img: "lille-barro.webp"},
    {n: "Gerard Valkyrie",t: 2,em: "🛡️⚔️💪",h: ["Il est gigantesque.","Il grandit quand on le blesse.","Il est garde de l'empereur.","C'est un Sternritter.","Anniversaire : 7 janvier.","Épithète de Sternritter : « M: The Miracle ».","Voix japonaise : Tsuyoshi Koyama."],va: "Tsuyoshi Koyama",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 222,arc: 6,img: "gerard-valkyrie.webp"},
    {n: "Pernida Parnkgjas",t: 2,em: "✋🧬",h: ["Il ne parle pas.","Il ressemble à un bras géant.","Il est garde de l'empereur.","C'est le bras gauche du Roi des âmes.","Anniversaire : 19 janvier.","Épithète de Sternritter : « C: The Compulsory »."],g: "N",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 150,arc: 6,img: "pernida-parnkgjas.webp"},
    {n: "Bambietta Basterbine",t: 2,em: "💣💥😈",h: ["Elle est très cruelle.","Elle fait exploser ce qu'elle touche.","Elle fait partie d'un groupe de quatre filles.","C'est une Sternritter.","Anniversaire : 6 août.","Épithète de Sternritter : « E: The Explode ».","Voix japonaise : Ayana Taketatsu."],va: "Ayana Taketatsu",g: "F",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 156,arc: 6,img: "bambietta-basterbine.webp"},
    {n: "Candice Catnipp",t: 2,em: "⚡💅😠",h: ["Elle est très colérique.","Elle manie la foudre.","Elle fait partie d'un groupe de quatre filles.","C'est une Sternritter.","Anniversaire : 7 juin.","Épithète de Sternritter : « T: The Thunderbolt ».","Voix japonaise : Yumi Uchiyama."],va: "Yumi Uchiyama",g: "F",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 166,arc: 6,img: "candice-catnipp.webp"},
    {n: "Liltotto Lamperd",t: 2,em: "🍭🦷😐",h: ["Elle est petite et blasée.","Elle peut tout dévorer.","Elle fait partie d'un groupe de quatre filles.","C'est une Sternritter.","Anniversaire : 16 septembre.","Épithète de Sternritter : « G: The Glutton ».","Voix japonaise : Aoi Yūki."],va: "Aoi Yūki",g: "F",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 149,arc: 6,img: "liltotto-lamperd.webp"},
    {n: "Giselle Gewelle",t: 2,em: "🧟💋😈",h: ["Elle crée des zombies.","Elle est en fait un garçon.","Elle fait partie d'un groupe de quatre filles.","C'est une Sternritter.","Anniversaire : 24 décembre.","Épithète de Sternritter : « Z: The Zombie ».","Voix japonaise : Nao Tōyama."],va: "Nao Tōyama",g: "F",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 160,arc: 6,img: "giselle-gewelle.webp"},
    {n: "Meninas McAllon",t: 2,em: "💪💖",h: ["Elle est très forte.","Elle est très gentille.","Elle fait partie des filles Sternritter.","C'est une Sternritter.","Anniversaire : 9 mars.","Épithète de Sternritter : « P: The Power ».","Voix japonaise : Reina Ueda."],va: "Reina Ueda",g: "F",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 191,arc: 6,img: "meninas-mcallon.webp"},
    {n: "Gremmy Thoumeaux",t: 2,em: "🧠💭🌠",h: ["Il est un cerveau dans un bocal.","Il rend réel tout ce qu'il imagine.","Il a fait tomber une météorite.","C'est un Sternritter.","Anniversaire : 30 juin.","Épithète de Sternritter : « V: The Visionary ».","Voix japonaise : Natsuki Hanae."],va: "Natsuki Hanae",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 155,arc: 6,img: "gremmy-thoumeaux.webp"},
    {n: "Äs Nödt",t: 2,em: "😱👁️",h: ["Il a un visage effrayant.","Il manipule la peur.","Il a combattu Byakuya.","C'est un Sternritter.","Anniversaire : 29 décembre.","Épithète de Sternritter : « F: The Fear »."],g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 179,arc: 6,img: "as-nodt.webp"},
    {n: "Quilge Opie",t: 2,em: "🦁⚖️",h: ["Il est chasseur en chef.","Il a envahi le Hueco Mundo.","Il a emprisonné le héros.","C'est un Sternritter.","Anniversaire : 1 septembre.","Épithète de Sternritter : « J: The Jail ».","Voix japonaise : Kō'ichi Yamadera."],va: "Kō'ichi Yamadera",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 178,arc: 6,img: "quilge-opie.webp"},
    {n: "Mask De Masculine",t: 2,em: "🦸‍♂️⭐💪",h: ["Il porte un masque de catcheur.","Il a un fan qui l'encourage.","Il devient plus fort quand on l'acclame.","C'est un Sternritter.","Anniversaire : 20 octobre.","Épithète de Sternritter : « S: The Superstar ».","Voix japonaise : Yasuhiro Mamiya."],va: "Yasuhiro Mamiya",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 200,arc: 6,img: "mask-de-masculine.webp"},
    {n: "BG9",t: 3,em: "🤖",h: ["C'est un robot.","Il ne parle pas.","C'est un Sternritter.","Voix japonaise : Hideyuki Tanaka."],va: "Hideyuki Tanaka",g: "?",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 190,arc: 6,img: "bg9.webp"},
    {n: "Cang Du",t: 3,em: "🦾🐉",h: ["Il a un corps d'acier.","Il a combattu Hitsugaya.","C'est un Sternritter.","Anniversaire : 27 mai.","Épithète de Sternritter : « I: The Iron ».","Voix japonaise : Ryō Kuratomi."],va: "Ryō Kuratomi",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 177,arc: 6,img: "cang-du.webp"},
    {n: "NaNaNa Najahkoop",t: 3,em: "👀🎰",h: ["Il paralyse ses ennemis.","Il a combattu Kenpachi.","C'est un Sternritter.","Anniversaire : 27 février.","Épithète de Sternritter : « U: The Underbelly ».","Voix japonaise : Tomoaki Maeno."],va: "Tomoaki Maeno",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 192,arc: 6,img: "nanana-najahkoop.webp"},
    {n: "PePe Waccabrada",t: 3,em: "💘👴",h: ["Il fait tomber les gens amoureux de lui.","Il est vieux et petit.","C'est un Sternritter.","Anniversaire : 3 avril.","Épithète de Sternritter : « L: The Love ».","Voix japonaise : Ryu Yamaguchi."],va: "Ryu Yamaguchi",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 146,arc: 6,img: "pepe-waccabrada.webp"},
    {n: "Robert Accutrone",t: 3,em: "🧓🔫",h: ["Il est âgé et porte une moustache.","Il manie des pistolets.","C'est un Sternritter.","Voix japonaise : Takaya Hashi."],va: "Takaya Hashi",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 176,arc: 6,img: "robert-accutrone.webp"},
    {n: "Driscoll Berci",t: 3,em: "💀💪",h: ["Il est immense.","Il devient plus fort à chaque meurtre.","C'est un Sternritter.","Anniversaire : 25 mars.","Épithète de Sternritter : « O: The Overkill ».","Voix japonaise : Nobuaki Kanemitsu."],va: "Nobuaki Kanemitsu",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 235,arc: 6,img: "driscoll-berci.webp"},
    {n: "Royd Lloyd",t: 3,em: "🎭👯",h: ["Il copie l'apparence des autres.","Il a un jumeau.","C'est un Sternritter.","Anniversaire : 28 avril.","Épithète de Sternritter : « Y: The Yourself ».","Voix japonaise : Yūsuke Kobayashi."],va: "Yūsuke Kobayashi",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 170,arc: 6,img: "royd-lloyd.webp"},
    {n: "Loyd Lloyd",t: 3,em: "🎭👯",h: ["Il copie l'apparence des autres.","Il a un jumeau.","C'est un Sternritter.","Anniversaire : 28 avril.","Épithète de Sternritter : « Y: The Yourself »."],g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 170,arc: 6,img: "loyd-lloyd.webp"},
    {n: "Berenice Gabrielli",t: 3,em: "❓🗣️",h: ["Il pose des questions.","Il est vaincu très vite.","C'est un Sternritter.","Anniversaire : 8 février.","Épithète de Sternritter : « Q: The Question »."],g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 174,arc: 6,img: "berenice-gabrielli.webp"},
    {n: "Jerome Guizbatt",t: 3,em: "🦍🗣️",h: ["Il se change en gorille.","Il crie très fort.","C'est un Sternritter.","Anniversaire : 25 août.","Épithète de Sternritter : « R: The Roar ».","Voix japonaise : Takahiro Fujiwara."],va: "Takahiro Fujiwara",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 189,arc: 6,img: "jerome-guizbatt.webp"},
    {n: "Nianzol Weizol",t: 3,em: "🌀😓",h: ["Il peut faire tourner les choses.","Il est très lâche.","C'est un Sternritter.","Anniversaire : 21 mai.","Épithète de Sternritter : « W: The Wind ».","Voix japonaise : Sōichirō Hoshi."],va: "Sōichirō Hoshi",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 156,arc: 6,img: "nianzol-weizol.webp"},
    {n: "Shaz Domino",t: 3,em: "🦇🧛",h: ["C'est un vampire.","Il a combattu des Visored.","C'est un Sternritter.","Voix japonaise : Shinya Takahashi."],va: "Shinya Takahashi",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: null,arc: 6,img: "shaz-domino.webp"},
    {n: "Guenael Lee",t: 3,em: "🔫",h: ["Il s'est infiltré au Seireitei.","C'est un Quincy.","Race : Quincy.","Affiliation : Wandenreich, Sternritter.","Épithète de Sternritter : « V: Vanishing Point ».","Voix japonaise : Tadashi Miyazawa."],va: "Tadashi Miyazawa",g: "M",ra: "Quincy",af: ["Wandenreich","Sternritter"],di: "—",rg: "Sternritter",ta: 155,arc: 6,img: "guenael-lee.webp"},
    {n: "Asguiaro Ebern",t: 3,em: "🔫🦴",h: ["C'est un Arrancar au service des Quincy.","Il a combattu le héros au Hueco Mundo.","Race : Arrancar.","Affiliation : Armée d'Aizen, Wandenreich.","Anniversaire : 18 juin.","Voix japonaise : Wataru Komada."],va: "Wataru Komada",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Wandenreich"],di: "—",rg: "Aucun",ta: 181,arc: 6,img: "asguiaro-ebern.webp"},
    {n: "Emilou Apacci",t: 3,em: "🦌💙",h: ["Elle a une corne.","Elle se dispute avec les deux autres Fracción.","C'est une Fracción de Harribel.","Anniversaire : 17 mai.","Resurrección : Cierva.","Voix japonaise : Kumi Sakuma."],va: "Kumi Sakuma",g: "F",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 156,arc: 3,img: "emilou-apacci.webp"},
    {n: "Franceska Mila Rose",t: 3,em: "🦁💪",h: ["Elle est très musclée.","Elle se dispute avec les deux autres Fracción.","C'est une Fracción de Harribel.","Anniversaire : 17 août.","Resurrección : Leona.","Voix japonaise : Sayori Ishizuka."],va: "Sayori Ishizuka",g: "F",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 177,arc: 3,img: "franceska-mila-rose.webp"},
    {n: "Cyan Sung-Sun",t: 3,em: "🐍👘",h: ["Elle cache sa bouche avec sa manche.","Elle se dispute avec les deux autres Fracción.","C'est une Fracción de Harribel.","Anniversaire : 17 février.","Resurrección : Anaconda.","Voix japonaise : Ayumi Sena."],va: "Ayumi Sena",g: "F",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 154,arc: 3,img: "cyan-sung-sun.webp"},
    {n: "Loly Aivirrne",t: 3,em: "😠🖤",h: ["Elle est jalouse de l'otage d'Aizen.","Elle porte des couettes.","Elle a une amie Menoly.","Anniversaire : 27 janvier.","Resurrección : Escolopendra.","Voix japonaise : Hana Takeda."],va: "Hana Takeda",g: "F",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Numeros",ta: 155,arc: 3,img: "loly-aivirrne.webp"},
    {n: "Menoly Mallia",t: 3,em: "😐💛",h: ["Elle est jalouse de l'otage d'Aizen.","Elle a les cheveux courts.","Elle est amie de Loly.","Anniversaire : 7 décembre.","Voix japonaise : Hitomi Harada."],va: "Hitomi Harada",g: "F",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Numeros",ta: 160,arc: 3,img: "menoly-mallia.webp"},
    {n: "Pesche Guatiche",t: 3,em: "🤪🐛",h: ["Il est très bizarre.","Il porte un caleçon.","Il protège Nelliel.","Anniversaire : 25 mai.","Resurrección : Última.","Voix japonaise : Takehito Koyasu."],va: "Takehito Koyasu",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 175,arc: 3,img: "pesche-guatiche.webp"},
    {n: "Dondochakka Birstanne",t: 3,em: "😢🐻",h: ["Il pleure souvent.","Il parle en « ~ssu ».","Il protège Nelliel.","Anniversaire : 30 juin.","Voix japonaise : Daisuke Gōri."],va: "Daisuke Gōri",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 204,arc: 3,img: "dondochakka-birstanne.webp"},
    {n: "Dordoni Alessandro Del Socaccio",t: 3,em: "🌪️🎩",h: ["Il a une moustache.","Il est l'ancien 3e Espada.","Il a affronté le héros au Hueco Mundo.","Anniversaire : 28 août.","Resurrección : Giralda.","Voix japonaise : Kōji Ishii."],va: "Kōji Ishii",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 190,arc: 3,img: "dordoni-alessandro-del-socaccio.webp"},
    {n: "Cirucci Sanderwicci",t: 3,em: "🐦🎀",h: ["Elle est l'ancienne 5e Espada.","Elle a un yo-yo géant.","Elle a affronté Uryū.","Anniversaire : 27 février.","Resurrección : Golondrina.","Voix japonaise : Hōko Kuwashima."],va: "Hōko Kuwashima",g: "F",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 158,arc: 3,img: "cirucci-sanderwicci.webp"},
    {n: "Gantenbainne Mosqueda",t: 3,em: "🐉",h: ["Il est l'ancien 2e Espada.","Il a affronté Chad.","Il a une forme de dragon.","Anniversaire : 21 septembre.","Resurrección : Dragra.","Voix japonaise : Masato Funaki."],va: "Masato Funaki",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 201,arc: 3,img: "gantenbainne-mosqueda.webp"},
    {n: "Charlotte Chuhlhourne",t: 3,em: "🌹💄",h: ["Il se trouve d'une beauté absolue.","Il a affronté Yumichika.","C'est une Fracción de Baraggan.","Anniversaire : 8 août.","Resurrección : Reina De Rosas.","Voix japonaise : Kenta Miyake."],va: "Kenta Miyake",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 192,arc: 4,img: "charlotte-chuhlhourne.webp"},
    {n: "Findorr Calius",t: 3,em: "🦀",h: ["Il a affronté Ikkaku.","C'est une Fracción de Baraggan.","Race : Arrancar.","Affiliation : Armée d'Aizen.","Anniversaire : 27 juin.","Resurrección : Pinza Aguda.","Voix japonaise : Takashi Kondō."],va: "Takashi Kondō",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 180,arc: 4,img: "findorr-calius.webp"},
    {n: "Ggio Vega",t: 3,em: "🐯",h: ["Il a affronté Suì-Fēng.","C'est une Fracción de Baraggan.","Race : Arrancar.","Affiliation : Armée d'Aizen.","Anniversaire : 7 mai.","Resurrección : Tigre Estoque.","Voix japonaise : Tetsuya Kakihara."],va: "Tetsuya Kakihara",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 163,arc: 4,img: "ggio-vega.webp"},
    {n: "Choe Neng Poww",t: 3,em: "🐡",h: ["Il est immense.","Il a affronté Hisagi.","C'est une Fracción de Baraggan.","Anniversaire : 4 mars.","Resurrección : Calderón.","Voix japonaise : Hiroshi Shirokuma."],va: "Hiroshi Shirokuma",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 391,arc: 4,img: "choe-neng-poww.webp"},
    {n: "Abirama Redder",t: 3,em: "🦅",h: ["Il a une forme d'aigle.","Il a affronté Kira.","C'est une Fracción de Baraggan.","Anniversaire : 19 août.","Resurrección : Águila.","Voix japonaise : Kazunari Tanaka."],va: "Kazunari Tanaka",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 183,arc: 4,img: "abirama-redder.webp"},
    {n: "Nirgge Parduoc",t: 3,em: "🦣",h: ["Il a une forme de mammouth.","Il a affronté Ōmaeda.","C'est une Fracción de Baraggan.","Anniversaire : 17 octobre.","Resurrección : Mamut.","Voix japonaise : Daisuke Matsuoka."],va: "Daisuke Matsuoka",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 212,arc: 4,img: "nirgge-parduoc.webp"},
    {n: "Luppi Antenor",t: 3,em: "🐙",h: ["Il a remplacé le 6e Espada un moment.","Il a des tentacules.","C'est un Arrancar.","Anniversaire : 5 juin.","Resurrección : Trepadora.","Voix japonaise : Daisuke Kishio."],va: "Daisuke Kishio",g: "M",ra: "Arrancar",af: ["Armée d'Aizen","Espada"],di: "—",rg: "Espada",ta: 161,arc: 2,img: "luppi-antenor.webp"},
    {n: "Tesra Lindocruz",t: 3,em: "🐗",h: ["Il est très fidèle à son maître.","C'est la Fracción de Nnoitra.","Race : Arrancar.","Affiliation : Armée d'Aizen.","Anniversaire : 13 mai.","Resurrección : Verruga.","Voix japonaise : Yū'ichi Nakamura."],va: "Yū'ichi Nakamura",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 178,arc: 3,img: "tesra-lindocruz.webp"},
    {n: "Shawlong Koufang",t: 3,em: "🦗",h: ["Il dirige les Fracción de Grimmjow.","Il a affronté Hitsugaya.","Race : Arrancar.","Affiliation : Armée d'Aizen.","Anniversaire : 4 novembre.","Resurrección : Tijereta.","Voix japonaise : Hideyuki Tanaka."],va: "Hideyuki Tanaka",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 190,arc: 2,img: "shawlong-koufang.webp"},
    {n: "Edrad Liones",t: 3,em: "🌋",h: ["Il a affronté Ikkaku à Karakura.","C'est une Fracción de Grimmjow.","Race : Arrancar.","Affiliation : Armée d'Aizen.","Anniversaire : 25 août.","Resurrección : Volcánica.","Voix japonaise : Taiten Kusunoki."],va: "Taiten Kusunoki",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 200,arc: 2,img: "edrad-liones.webp"},
    {n: "Yylfordt Granz",t: 3,em: "🐂",h: ["C'est le grand frère de Szayelaporro.","Il a affronté Renji.","C'est une Fracción de Grimmjow.","Anniversaire : 22 juin.","Resurrección : Del Toro.","Voix japonaise : Kōichi Tōchika."],va: "Kōichi Tōchika",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 185,arc: 2,img: "yylfordt-granz.webp"},
    {n: "Di Roy Rinker",t: 3,em: "🦈",h: ["Il a affronté Rukia.","C'est une Fracción de Grimmjow.","Race : Arrancar.","Affiliation : Armée d'Aizen.","Anniversaire : 19 juin.","Voix japonaise : Takashi Kondō."],va: "Takashi Kondō",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 168,arc: 0,img: "di-roy-rinker.webp"},
    {n: "Nakeem Grindina",t: 3,em: "🦏",h: ["Il a affronté Rangiku.","C'est une Fracción de Grimmjow.","Race : Arrancar.","Affiliation : Armée d'Aizen.","Anniversaire : 3 août.","Voix japonaise : Taketora."],va: "Taketora",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Fracción",ta: 180,arc: 2,img: "nakeem-grindina.webp"},
    {n: "Rudbornn Chelute",t: 3,em: "💀🌳",h: ["Il commande les Exequias.","Il crée des soldats squelettes.","Race : Arrancar.","Affiliation : Armée d'Aizen.","Anniversaire : 8 janvier.","Resurrección : Árbol.","Voix japonaise : Taro Yamaguchi."],va: "Taro Yamaguchi",g: "M",ra: "Arrancar",af: ["Armée d'Aizen"],di: "—",rg: "Numeros",ta: 172,arc: 3,img: "rudbornn-chelute.webp"},
    {n: "Ayon",t: 3,em: "👹",h: ["C'est une créature monstrueuse.","Elle est née des bras des trois Fracción de Harribel.","Race : Hollow.","Affiliation : Armée d'Aizen."],g: "M",ra: "Hollow",af: ["Armée d'Aizen"],di: "—",rg: "Aucun",ta: null,arc: 4,img: "ayon.webp"},
    {n: "Metastacia",t: 3,em: "🦑",h: ["C'est un hollow.","Il a tué Kaien Shiba.","Race : Hollow.","Affiliation : Armée d'Aizen.","Voix japonaise : Hōchū Ōtsuka."],va: "Hōchū Ōtsuka",g: "M",ra: "Hollow",af: ["Armée d'Aizen"],di: "—",rg: "Aucun",ta: null,arc: 1,img: "metastacia.webp"},
    {n: "Shrieker",t: 3,em: "🎤👻",h: ["C'est un hollow.","Il a tué une mère et son enfant.","Il apparaît au début du manga.","Voix japonaise : Hisao Egawa."],va: "Hisao Egawa",g: "M",ra: "Hollow",af: [],di: "—",rg: "Aucun",ta: null,arc: 0,img: "shrieker.webp"},
    {n: "Sora Inoue",t: 3,em: "👨‍👧💔",h: ["C'est le grand frère d'Orihime.","Il est mort dans un accident.","Il est devenu un hollow.","Voix japonaise : Yūji Ueda."],va: "Yūji Ueda",g: "M",ra: "Hollow",af: [],di: "—",rg: "Aucun",ta: null,arc: 0,img: "sora-inoue.webp"},
    {n: "Hiyosu",t: 3,em: "🧑‍🔬",h: ["Il travaille à l'institut de recherche.","Il est à la 12e division.","Race : Shinigami.","Affiliation : Gotei 13.","Anniversaire : 30 septembre.","Voix japonaise : Kouhei Matsumoto."],va: "Kouhei Matsumoto",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "12e division",rg: "Aucun",ta: 172,arc: 0,img: "hiyosu.webp"},
    {n: "Jirōbō Ikkanzaka",t: 3,em: "🌪️",h: ["Il est le frère d'un gardien des portes.","Il est officier de la 7e division.","Race : Shinigami.","Affiliation : Gotei 13.","Anniversaire : 9 novembre.","Zanpakutō : Tsunzakigarasu.","Voix japonaise : Kazuhiro Nakata."],va: "Kazuhiro Nakata",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "7e division",rg: "Officier",ta: 231,arc: 1,img: "jirobo-ikkanzaka.webp"},
    {n: "Jidanbō Ikkanzaka",t: 3,em: "🚪💪",h: ["Il est gigantesque.","Il garde une porte du Seireitei.","Il se lie d'amitié avec le héros.","Anniversaire : 10 janvier.","Voix japonaise : Takashi Nagasako."],va: "Takashi Nagasako",g: "M",ra: "Shinigami",af: [],di: "—",rg: "Aucun",ta: 988,arc: 1,img: "jidanbo-ikkanzaka.webp"},
    {n: "Zennosuke Kurumadani",t: 3,em: "🙄",h: ["Il protège Karakura après Rukia.","Il est à la 13e division.","Race : Shinigami.","Affiliation : Gotei 13, Karakura.","Anniversaire : 25 juin.","Zanpakutō : Tsuchinamazu.","Voix japonaise : Masashi Yabe."],va: "Masashi Yabe",g: "M",ra: "Shinigami",af: ["Gotei 13","Karakura"],di: "13e division",rg: "Officier",ta: null,arc: 1,img: "zennosuke-kurumadani.webp"},
    {n: "Ryūnosuke Yuki",t: 3,em: "🧑",h: ["Il protège Karakura.","Il est à la 13e division.","Race : Shinigami.","Affiliation : Gotei 13, Karakura.","Anniversaire : 9 mai.","Voix japonaise : Daiki Yamashita."],va: "Daiki Yamashita",g: "M",ra: "Shinigami",af: ["Gotei 13","Karakura"],di: "13e division",rg: "Aucun",ta: 156,arc: 6,img: "ryunosuke-yuki.webp"},
    {n: "Shino Madarame",t: 3,em: "👧",h: ["Elle protège Karakura.","Elle est à la 13e division.","Race : Shinigami.","Affiliation : Gotei 13, Karakura.","Anniversaire : 16 avril.","Voix japonaise : Asami Seto."],va: "Asami Seto",g: "F",ra: "Shinigami",af: ["Gotei 13","Karakura"],di: "13e division",rg: "Aucun",ta: 159,arc: 6,img: "shino-madarame.webp"},
    {n: "Yasochika Iemura",t: 3,em: "👓🩺",h: ["Il est soigneur.","Il est officier de la 4e division.","Race : Shinigami.","Affiliation : Gotei 13.","Anniversaire : 29 février.","Voix japonaise : Yutaka Aoyama."],va: "Yutaka Aoyama",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "4e division",rg: "Officier",ta: 179,arc: 1,img: "yasochika-iemura.webp"},
    {n: "Sōken Ishida",t: 3,em: "👴🏹",h: ["C'est le grand-père d'Uryū.","Il a été tué devant son petit-fils.","Race : Quincy.","Affiliation : Wandenreich.","Anniversaire : 22 mars.","Voix japonaise : Eiji Maruyama."],va: "Eiji Maruyama",g: "M",ra: "Quincy",af: [],di: "—",rg: "Aucun",ta: 160,arc: 0,img: "soken-ishida.webp"},
    {n: "Kanae Katagiri",t: 3,em: "👩",h: ["Elle était domestique dans la famille Ishida.","C'est la mère d'Uryū.","Race : Quincy.","Affiliation : Wandenreich.","Anniversaire : 10 juin.","Voix japonaise : Mamiko Noto."],va: "Mamiko Noto",g: "F",ra: "Quincy",af: [],di: "—",rg: "Aucun",ta: 162,arc: 6,img: "kanae-katagiri.webp"},
    {n: "Hisana Kuchiki",t: 3,em: "🌸💔",h: ["Elle est morte de maladie.","Elle était la femme de Byakuya.","C'est la grande sœur de Rukia.","Voix japonaise : Fumiko Orikasa."],va: "Fumiko Orikasa",g: "F",ra: "Âme",af: ["Clan noble"],di: "—",rg: "Aucun",ta: null,arc: 1,img: "hisana-kuchiki.webp"},
    {n: "Miyako Shiba",t: 3,em: "👩💔",h: ["Elle était la femme de Kaien.","Elle a été tuée par un hollow.","Race : Shinigami.","Affiliation : Gotei 13, Clan noble.","Voix japonaise : Sumi Shimamoto."],va: "Sumi Shimamoto",g: "F",ra: "Shinigami",af: ["Gotei 13","Clan noble"],di: "13e division",rg: "Aucun",ta: null,arc: 1,img: "miyako-shiba.webp"},
    {n: "Yūshirō Shihōin",t: 3,em: "👦⚡",h: ["C'est le petit frère de Yoruichi.","Il dirige le clan Shihōin.","Race : Shinigami.","Affiliation : Clan noble.","Anniversaire : 3 mars.","Voix japonaise : Hiromi Igarashi."],va: "Hiromi Igarashi",g: "M",ra: "Shinigami",af: ["Clan noble"],di: "—",rg: "Aucun",ta: 146,arc: 6,img: "yushiro-shihoin.webp"},
    {n: "Mizuho Asano",t: 3,em: "👩😤",h: ["Elle est la grande sœur de Keigo.","Elle tombe amoureuse d'un ami du héros.","Race : Humain.","Affiliation : Karakura.","Anniversaire : 2 avril.","Voix japonaise : Kaoru Morota."],va: "Kaoru Morota",g: "F",ra: "Humain",af: ["Karakura"],di: "—",rg: "Aucun",ta: 162,arc: 2,img: "mizuho-asano.webp"},
    {n: "Chizuru Honshō",t: 3,em: "😍👓",h: ["Elle est amoureuse d'Orihime.","Elle porte des lunettes.","Elle est au lycée de Karakura.","Voix japonaise : Saki Nakajima."],va: "Saki Nakajima",g: "F",ra: "Humain",af: ["Karakura"],di: "—",rg: "Aucun",ta: 163,arc: 0,img: "chizuru-honsho.webp"},
    {n: "Michiru Ogawa",t: 3,em: "🧸",h: ["Elle est timide.","Elle fait des peluches.","Elle est au lycée de Karakura.","Anniversaire : 3 mars.","Voix japonaise : Asami Sanada."],va: "Asami Sanada",g: "F",ra: "Humain",af: [],di: "—",rg: "Aucun",ta: 153,arc: 0,img: "michiru-ogawa.webp"},
    {n: "Ryō Kunieda",t: 3,em: "🏃‍♀️📚",h: ["Elle est très bonne élève.","Elle est très rapide.","Elle est au lycée de Karakura.","Anniversaire : 18 mai.","Voix japonaise : Hitomi Nabatame."],va: "Hitomi Nabatame",g: "F",ra: "Humain",af: [],di: "—",rg: "Aucun",ta: 166,arc: 0,img: "ryo-kunieda.webp"},
    {n: "Misato Ochi",t: 3,em: "👩‍🏫",h: ["C'est la professeure principale du héros.","Elle est au lycée de Karakura.","Race : Humain.","Anniversaire : 13 septembre.","Voix japonaise : Hitomi Nabatame."],va: "Hitomi Nabatame",g: "F",ra: "Humain",af: [],di: "—",rg: "Aucun",ta: null,arc: 0,img: "misato-ochi.webp"},
    {n: "Kazui Kurosaki",t: 3,em: "👦🍓",h: ["Il apparaît dans le dernier chapitre.","C'est le fils d'Ichigo.","Race : Humain.","Affiliation : Karakura.","Anniversaire : 29 avril."],g: "M",ra: "Humain",af: ["Karakura"],di: "—",rg: "Aucun",ta: null,arc: 6,img: "kazui-kurosaki.webp"},
    {n: "Ichika Abarai",t: 3,em: "👧🍍",h: ["Elle apparaît dans le dernier chapitre.","C'est la fille de Renji et Rukia.","Race : Shinigami.","Affiliation : Gotei 13.","Anniversaire : 28 octobre."],g: "F",ra: "Shinigami",af: ["Gotei 13"],di: "—",rg: "Aucun",ta: null,arc: 6,img: "ichika-abarai.webp"},
    {n: "Soul King",t: 3,em: "👑🔮",h: ["Il n'a plus de bras ni de jambes.","Il maintient l'équilibre des mondes.","Il est enfermé dans un cristal."],g: "M",ra: "Inconnu",af: [],di: "—",rg: "Aucun",ta: null,arc: 6,al: ["Roi des âmes"],img: "soul-king.webp"},
    {n: "Mimihagi",t: 3,em: "👁️",h: ["C'est un dieu.","C'est le bras droit du Roi des âmes.","Race : Inconnu."],g: "N",ra: "Inconnu",af: [],di: "—",rg: "Aucun",ta: null,arc: 6,img: "mimihagi.webp"},
    {n: "Kenpachi Kiganjō",t: 3,em: "👊",h: ["Il était le 10e Kenpachi.","Il a été tué par Zaraki.","Race : Shinigami.","Affiliation : Gotei 13.","Anniversaire : 5 octobre.","Voix japonaise : Takahiro Fujiwara."],va: "Takahiro Fujiwara",g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "11e division",rg: "Capitaine",ta: 221,arc: 6,img: "kenpachi-kiganjo.webp"},
    {n: "Genshirō Okikiba",t: 3,em: "👴",h: ["Il devient lieutenant de la 1re division après Sasakibe.","Il est à la 1re division.","Race : Shinigami.","Affiliation : Gotei 13."],g: "M",ra: "Shinigami",af: ["Gotei 13"],di: "1re division",rg: "Lieutenant",ta: null,arc: 6,img: "genshiro-okikiba.webp"},
    {n: "Kaoru Unagiya",t: 3,em: "👦",h: ["C'est le fils de la patronne de l'Unagiya.","Race : Humain.","Voix japonaise : Kaoru Mizuhara."],va: "Kaoru Mizuhara",g: "M",ra: "Humain",af: [],di: "—",rg: "Aucun",ta: null,arc: 5,img: "kaoru-unagiya.webp"},
    {n: "Zangetsu (Quincy Powers)",t: 3,em: "🧥🕶️",h: ["Il se présentait comme le sabre du héros.","Il porte un long manteau noir.","Il ressemble à un jeune Yhwach.","Voix japonaise : Takayuki Sugō."],va: "Takayuki Sugō",g: "M",ra: "Zanpakutō",af: [],di: "—",rg: "Aucun",ta: null,arc: 0,img: "zangetsu-quincy-powers.webp"},
    {n: "Zangetsu (Zanpakutō spirit)",t: 3,em: "⚪👹",h: ["C'est un double tout blanc du héros.","Il veut le dominer.","C'est son hollow intérieur.","Bankai : Tensa Zangetsu.","Voix japonaise : Masakazu Morita."],jp: "斬月",va: "Masakazu Morita",g: "M",ra: "Zanpakutō",af: [],di: "—",rg: "Aucun",ta: 174,arc: 1,img: "zangetsu-zanpakuto-spirit.webp"},
    {n: "Bonnie",t: 3,em: "🐗",h: ["C'est un sanglier.","Il est la monture de Ganju.","Race : Âme."],g: "F",ra: "Âme",af: [],di: "—",rg: "Aucun",ta: null,arc: 1,img: "bonnie.webp"},
  ]});  // (non indenté : les textes sur plusieurs lignes restent exactement les tiens)
  // ---- fin ----
  ctx.onOpen(() => { dleOpen('bleachdle'); });
}
