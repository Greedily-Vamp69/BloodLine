import { mkdir, writeFile } from "node:fs/promises";

const bloodlines = {
  kojou: ["古城", "こじょう"], shingetsu: ["新月", "しんげつ"], meitei: ["酩酊", "めいてい"],
  shuushuu: ["蒐集", "しゅうしゅう"], eiya: ["永夜", "えいや"], kogetsu: ["孤月", "こげつ"],
  hakumei: ["薄明", "はくめい"], kyouen: ["狂宴", "きょうえん"], kyouji: ["矜持", "きょうじ"], shiso: ["始祖", "しそ"]
};

const root = "https://greedily-vamp69.github.io/BloodLine";

for (const [key, [name, reading]] of Object.entries(bloodlines)) {
  const url = `${root}/results/${key}/`;
  const image = `${root}/assets/characters/${key}.webp`;
  const description = `私の中に眠る血族は「${name}」でした。あなたに流れる夜の血は、どの血族のもの？`;
  const html = `<!doctype html>
<html lang="ja"><head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>吸血鬼の血族診断 | ${name}</title><meta name="description" content="${description}">
  <meta property="og:type" content="website"><meta property="og:url" content="${url}">
  <meta property="og:title" content="吸血鬼の血族診断 | ${name}"><meta property="og:description" content="${description}">
  <meta property="og:image" content="${image}"><meta property="og:image:width" content="1680"><meta property="og:image:height" content="945">
  <meta property="og:image:alt" content="吸血鬼の血族「${name}（${reading}）」の紙人形">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="吸血鬼の血族診断 | ${name}">
  <meta name="twitter:description" content="${description}"><meta name="twitter:image" content="${image}">
  <meta http-equiv="refresh" content="0; url=../../?result=${key}"><script>location.replace("../../?result=${key}");<\/script>
</head><body><p><a href="../../?result=${key}">「${name}」の鑑定結果を見る</a></p></body></html>
`;
  const directory = new URL(`../results/${key}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
}
