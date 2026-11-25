// lancé par le test « local » de NeoDex : une partie libre en mode Classique, huit essais tapés au clavier comme un joueur,
// puis vérifie le bandeau illustré et qu'aucun texte ne déborde de sa case (ni du tableau, ni de la fenêtre)
module.exports = async ({ pj, sleep }) => {
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); 0`);
  await sleep(600);
  await pj(`(() => { const w = document.querySelector('.dleWrap'), b = [...w.querySelectorAll('button')]; b.find(x => /PARTIE LIBRE/.test(x.textContent))?.click(); w.querySelector('.tab')?.click(); const sel = w.querySelector('select'); sel.selectedIndex = sel.options.length - 1; sel.dispatchEvent(new Event('change')); b.find(x => /NOUVELLE PARTIE/.test(x.textContent))?.click(); return 0; })()`);
  await sleep(300);
  let restarts = 0;
  for (const q of ['a', 'e', 'i', 'o', 'u', 'an', 'ra', 'ka', 'ma', 'sa', 'na', 'ta', 'ri', 'ko', 'mi', 'to']) {
    const done = await pj(`(() => { const w = document.querySelector('.dleWrap'), i = w.querySelector('.mdInput'); if (i.closest('.mdForm').style.display === 'none') return 'gagné'; i.value = ${JSON.stringify(q)}; i.dispatchEvent(new Event('input')); i.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'})); return w.querySelectorAll('.mdGuesses .mdRow:not(.head)').length; })()`);
    if (done === 'gagné') { if (restarts++ > 2) break; await pj(`([...document.querySelectorAll('.dleWrap button')].find(x => /NOUVELLE PARTIE/.test(x.textContent))?.click(), 0)`); await sleep(200); continue; }
    if (done >= 8) break;
    await sleep(150);
  }
  await sleep(900);  // les cases se retournent une à une
  const r = await pj(`(() => { const w = document.querySelector('.dleWrap'), rows = w.querySelectorAll('.mdGuesses .mdRow:not(.head)').length, bad = [];
    for (const c of w.querySelectorAll('.mdCell, .mdH')) if (c.scrollWidth > c.clientWidth + 1 || c.scrollHeight > c.clientHeight + 1) bad.push(c.textContent.slice(0, 30) + ' (' + c.scrollWidth + '>' + c.clientWidth + ' / ' + c.scrollHeight + '>' + c.clientHeight + ')');
    const ban = w.querySelector('.dleBan'), px = ban.getContext('2d').getImageData(0, 0, ban.width, ban.height).data; let lit = 0; for (let k = 3; k < px.length; k += 4) if (px[k]) lit++;
    return { rows, bad: bad.slice(0, 5), ban: ban.width + 'x' + ban.height + ':' + Math.round(lit / (ban.width * ban.height) * 100), sw: document.documentElement.scrollWidth, ww: innerWidth, font: getComputedStyle(w.querySelector('.mdInput')).fontSize }; })()`);
  if (r.rows < 3) throw new Error('les essais devaient s’afficher : ' + JSON.stringify(r));
  if (r.bad.length) throw new Error('texte qui déborde de sa case : ' + r.bad.join(' / '));
  if (!/:100$/.test(r.ban)) throw new Error('le bandeau devait être dessiné en entier : ' + r.ban);
  if (r.sw > r.ww + 1) throw new Error('la page dépasse la fenêtre : ' + r.sw + ' > ' + r.ww);
  // Ombre et Flou : le portrait dessiné (Ombre : 2 tons, puis 3 après une erreur), puis une partie gagnée et son partage en carrés
  const pix = () => pj("(() => { const c = document.querySelector('.dleWrap .mdPix'); if (!c) return -1; const p = c.getContext('2d').getImageData(0, 0, c.width, c.height).data, s = new Set(); for (let k = 0; k < p.length; k += 4) if (p[k + 3]) s.add(p[k] + ',' + p[k + 1] + ',' + p[k + 2]); return s.size; })()");
  const shot = n => process.env.NEO_SHOTS && pj("document.querySelector('.dleWrap .mdPix').toDataURL()").then(d => fs.writeFileSync(path.join(process.env.NEO_SHOTS, 'dle-' + n + '.png'), Buffer.from(d.split(',')[1], 'base64')));
  const fs = require('fs'), path = require('path');
  const tab = m => pj("(document.querySelector('.dleWrap .tab[data-m=\"" + m + "\"]').click(), 0)");
  const wrong = () => pj("(() => { const w = document.querySelector('.dleWrap'), i = w.querySelector('.mdInput'); for (const q of 'aeiouyntrsklmhgdcbpvzjfw') { i.value = q; i.dispatchEvent(new Event('input')); const b = w.querySelector('.mdSugItem'); if (b) { b.dispatchEvent(new MouseEvent('mousedown', {bubbles: true})); return 1; } } return 0; })()");
  await tab('shadow'); await sleep(600);
  const t0 = await pix(); if (t0 !== 2) throw new Error('ombre : 2 tons attendus, ' + t0);
  await shot('ombre-0');
  let won = await pj("document.querySelector('.dleWrap .mdForm').style.display === 'none'");
  if (!won) { await wrong(); await sleep(600); won = await pj("document.querySelector('.dleWrap .mdForm').style.display === 'none'"); if (!won) { const t1 = await pix(); if (t1 !== 3) throw new Error('ombre : 3 tons attendus après une erreur, ' + t1); await shot('ombre-1'); } }
  await tab('blur'); await sleep(600);
  const b0 = await pix(); if (b0 < 50) throw new Error('flou : portrait vide ' + b0);
  await shot('flou-0');
  for (let k = 0; k < 400 && !await pj("document.querySelector('.dleWrap .mdForm').style.display === 'none'"); k++) { if (!await wrong()) break; await sleep(60); }
  const share = await pj("(() => { const b = [...document.querySelectorAll('.dleWrap .mdWin button')].find(x => /PARTAGER/.test(x.textContent)); if (!b) return 'pas de bouton'; let t = ''; navigator.clipboard.writeText = v => (t = v, Promise.resolve()); b.click(); return t; })()");
  if (!/^.+ · Flou · partie libre : trouvé en \d+ essais?\n(🟥)*🟩$/u.test(share)) throw new Error('partage : ' + share);
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  await pj(`(document.querySelector('.dleWrap .mdGuesses').scrollIntoView({block: 'start'}), 0)`);
  return r.rows + ' essais, aucun texte qui déborde · bandeau ' + r.ban + ' % · saisie en ' + r.font;
};
