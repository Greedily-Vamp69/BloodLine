const bloodlines = {
  kojou: {
    name: "古城", reading: "こじょう", symbol: "古", color: "#70433d",
    image: "assets/characters/kojou.webp",
    caption: "流行に流されるより、自分が本当に良いと思うものを長く大切にするタイプ。落ち着いて見えるけれど、内側には簡単には譲れない強いこだわりがあります。古いものを守るだけでなく、積み重ねられた時間の価値を見抜く人です。",
    habitat: "老舗のお店 / 喫茶店 / バー / 洋館 / 歴史のある街"
  },
  shingetsu: {
    name: "新月", reading: "しんげつ", symbol: "新", color: "#464b88",
    image: "assets/characters/shingetsu.webp",
    caption: "新しい場所や人、遊びに反応する現代派。誘われたらとりあえず行ってみるし、楽しそうなことへの嗅覚がかなり鋭いタイプです。まだ誰も知らない夜を見つけると、真っ先に足を踏み入れます。",
    habitat: "ライブハウス / イベント / クラブ / 新しくできたお店"
  },
  meitei: {
    name: "酩酊", reading: "めいてい", symbol: "酔", color: "#9f2740",
    image: "assets/characters/meitei.webp",
    caption: "お酒が好きなのはもちろん、飲みの場そのものが好きなタイプ。楽しい夜にはだいたいいるし、気付けばもう1軒へ向かっています。杯を交わせば、初対面でも今夜の仲間です。",
    habitat: "居酒屋 / バー / 立ち飲み / 友達の飲み会"
  },
  shuushuu: {
    name: "蒐集", reading: "しゅうしゅう", symbol: "蒐", color: "#80613d",
    image: "assets/characters/shuushuu.webp",
    caption: "好きになったものへの熱量が高く、調べる、集める、眺めるまで全部楽しいタイプ。人から見ればただの物でも、自分にとっては一つひとつに意味があります。あなたの好きは、やがて小さな博物館になります。",
    habitat: "推し活現場 / 古着屋 / 雑貨店 / 展示会 / 自分の部屋"
  },
  eiya: {
    name: "永夜", reading: "えいや", symbol: "夜", color: "#30376d",
    image: "assets/characters/eiya.webp",
    caption: "夜になるほど元気になるタイプ。騒がしい夜も嫌いではないけれど、深夜特有の静けさや空気そのものをかなり好んでいます。誰もいない道を歩く時間が、あなたを本来の姿へ戻します。",
    habitat: "深夜の街 / コンビニまでの道 / 24時間営業のお店 / 夜の公園"
  },
  kogetsu: {
    name: "孤月", reading: "こげつ", symbol: "孤", color: "#41606b",
    image: "assets/characters/kogetsu.webp",
    caption: "誰とでも仲良くする必要はないと思っているタイプ。頼られることは多いけれど、自分が本当に頼る相手はかなり限られています。一人で立てる強さと、選んだ相手を深く信じる心を持つ人です。",
    habitat: "一人で落ち着けるお店 / 端の席 / 自宅 / 少人数の集まり"
  },
  hakumei: {
    name: "薄明", reading: "はくめい", symbol: "薄", color: "#80647b",
    image: "assets/characters/hakumei.webp",
    caption: "少し掴みどころがなく、独特の空気を持っているタイプ。本人は普通にしているつもりでも、なぜか印象に残ります。昼と夜の境目のように、相反するものを静かに同居させています。",
    habitat: "静かなカフェ / 展示会 / 夕方から夜に変わる頃の街"
  },
  kyouen: {
    name: "狂宴", reading: "きょうえん", symbol: "宴", color: "#a33a2e",
    image: "assets/characters/kyouen.webp",
    caption: "面白そうかどうかがかなり大事なタイプ。多少の無茶でも、後で笑い話になるなら悪くないと思っています。予定通りに終わらない夜ほど、あなたの血は騒ぎ出します。",
    habitat: "フェス / イベント / 飲み会 / 旅行先 / よく分からない集まり"
  },
  kyouji: {
    name: "矜持", reading: "きょうじ", symbol: "矜", color: "#7a5630",
    image: "assets/characters/kyouji.webp",
    caption: "人に合わせるより、自分が納得できるかを重視するタイプ。服でも仕事でも人間関係でも、自分なりの基準がちゃんとあります。その流儀は頑固さではなく、あなたがあなたでいるための誇りです。",
    habitat: "セレクトショップ / 行きつけのお店 / 自分で選んだ居場所"
  },
  shiso: {
    name: "始祖", reading: "しそ", symbol: "始", color: "#b49558",
    image: "assets/characters/shiso.webp",
    caption: "どれか1つの型に収まりにくいタイプ。場面によってまるで違う顔を見せるので、周りからすると意外と読めません。複数の血族の気配を宿しながら、どれにも支配されない稀少な存在です。",
    habitat: "どこにでもいる。気付いた時には、もう馴染んでいる"
  }
};

const questions = [
  {
    text: "今夜、自由に過ごせるなら何をする？",
    answers: [
      ["少し良い服を着て、落ち着いた店へ行く", { kyouji: 3, kojou: 2 }],
      ["気になるイベントや新しい場所へ出かける", { shingetsu: 3, kyouen: 2 }],
      ["仲の良い人を誘って飲みに行く", { meitei: 3, kyouen: 1 }, "drink"],
      ["誰にも予定を告げず、その時の気分で過ごす", { kogetsu: 2, eiya: 2, hakumei: 1 }]
    ]
  },
  {
    text: "初めて訪れた店で、つい目が向くのは？",
    answers: [
      ["建物や内装に残る歴史や雰囲気", { kojou: 3, eiya: 1 }],
      ["そこで今どんな人たちが楽しんでいるか", { shingetsu: 2, kyouen: 2 }],
      ["どんなお酒や料理が用意されているか", { meitei: 3, shuushuu: 1 }, "drink"],
      ["飾られている物や、店主のこだわりが見える品", { shuushuu: 3, kyouji: 2 }]
    ]
  },
  {
    text: "予定のない深夜。何をする？",
    answers: [
      ["気になっていたお店や場所へ行く", { shingetsu: 3, kyouen: 1 }],
      ["推し活に没頭する", { shuushuu: 3, kyouji: 1 }],
      ["夜散歩する", { eiya: 3, hakumei: 2 }],
      ["その時一番面白そうなことをする", { kyouen: 3, shingetsu: 1 }]
    ]
  },
  {
    text: "楽しい誘いと翌朝の予定が重なった。どうする？",
    answers: [
      ["翌朝の予定を優先して、誘いは断る", { kyouji: 3, kojou: 1 }],
      ["その夜の予定に専念して翌朝は諦める", { kyouen: 3, eiya: 1 }],
      ["酒があるならとりあえず行く", { meitei: 4, kyouen: 1 }, "drink"],
      ["どうにかして両方参加する", { shingetsu: 3, kyouen: 2 }]
    ]
  },
  {
    text: "周りによく言われるのは？",
    answers: [
      ["落ち着いてるね", { kojou: 3, eiya: 1 }],
      ["変わってるね", { hakumei: 3, shuushuu: 1 }],
      ["頼もしいね", { kogetsu: 3, kyouji: 1 }],
      ["こだわりがあるよね", { kyouji: 3, shuushuu: 2 }]
    ]
  },
  {
    text: "自分を一言で表すと？",
    answers: [
      ["好きなものにはとことん詳しい", { shuushuu: 3, kojou: 1 }],
      ["面白そうならまずやってみる", { kyouen: 3, shingetsu: 2 }],
      ["人付き合いは狭く深く", { kogetsu: 3, eiya: 1 }],
      ["自分に課したルールは絶対！", { kyouji: 4, kojou: 1 }]
    ]
  },
  {
    text: "一番惹かれる言葉は？",
    answers: [
      ["格式", { kojou: 4, kyouji: 1 }],
      ["自由", { shingetsu: 3, kyouen: 2 }],
      ["静寂", { eiya: 3, kogetsu: 2 }],
      ["美学", { kyouji: 3, shuushuu: 2 }]
    ]
  },
  {
    text: "もし突然、今いる場所から姿を消すなら？",
    answers: [
      ["何も言わず、静かに消える", { hakumei: 4, eiya: 1 }],
      ["最後に一晩だけ派手に遊ぶ", { kyouen: 3, meitei: 2 }, "drink"],
      ["大切な人にだけ理由を伝える", { kogetsu: 3, kojou: 1 }],
      ["自分がいた証を何か残していく", { shuushuu: 2, kyouji: 2, kojou: 1 }]
    ]
  },
  {
    text: "あなたにとって「仲間」とは？",
    answers: [
      ["一緒に新しい遊びや場所を開拓できる人", { shingetsu: 3, kyouen: 1 }],
      ["何も決めずに集まっても楽しく過ごせる人", { kyouen: 3, meitei: 2 }, "social"],
      ["本音や秘密を茶化さず話せる人", { kogetsu: 3, eiya: 1 }],
      ["好みや美学を説明しなくても理解してくれる人", { kyouji: 2, shuushuu: 2, hakumei: 1 }]
    ]
  },
  {
    text: "この中で一番重要だと思うものは？",
    answers: [
      ["お金", { kojou: 2, kyouji: 2 }],
      ["思い出の品", { shuushuu: 4, kojou: 1 }],
      ["愛するあの人", { kogetsu: 3, hakumei: 1 }],
      ["自分の時間", { eiya: 2, kogetsu: 2, shingetsu: 1 }]
    ]
  },
  {
    text: "長い人生の中で、自分はどう変わっていくと思う？",
    answers: [
      ["大切な部分は変えずに生きる", { kojou: 3, kyouji: 2 }],
      ["時代に合わせてどんどん変わる", { shingetsu: 3, kyouen: 1 }],
      ["出会った人や経験に影響されて変わる", { hakumei: 3, shuushuu: 1 }],
      ["変わる部分も変わらない部分も、どちらも自分だと思う", { hakumei: 2, kojou: 1, shingetsu: 1 }, "origin" ]
    ]
  },
  {
    text: "吸血鬼として悠久の時を生きるあなたが最も守りたいものとは？",
    answers: [
      ["誇り", { kyouji: 4, kojou: 1 }],
      ["自由", { shingetsu: 3, kyouen: 2 }],
      ["美学", { kyouji: 2, shuushuu: 2, hakumei: 1 }],
      ["記憶", { kojou: 2, eiya: 2, hakumei: 1 }]
    ]
  }
];

const screens = [...document.querySelectorAll(".screen")];
const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const answerList = document.querySelector("#answer-list");
const questionText = document.querySelector("#question-text");
const questionKicker = document.querySelector("#question-kicker");
const currentNumber = document.querySelector("#current-number");
const totalNumber = document.querySelector("#total-number");
const progressBar = document.querySelector("#progress-bar");
const retryButton = document.querySelector("#retry-button");
const shareButton = document.querySelector("#share-button");
const introLineageButton = document.querySelector("#intro-lineage-button");
const resultLineageButton = document.querySelector("#result-lineage-button");
const lineageBackButton = document.querySelector("#lineage-back-button");
const lineageGrid = document.querySelector("#lineage-grid");

let currentQuestion = 0;
let selectedAnswers = [];
let currentResult = null;
let lineageReturnScreen = "intro-screen";

totalNumber.textContent = questions.length;

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle("is-active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const number = currentQuestion + 1;
  currentNumber.textContent = number;
  questionKicker.textContent = `QUESTION ${String(number).padStart(2, "0")}`;
  questionText.textContent = question.text;
  progressBar.style.width = `${(number / questions.length) * 100}%`;
  backButton.disabled = currentQuestion === 0;
  answerList.replaceChildren();

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer[0];
    if (selectedAnswers[currentQuestion] === index) button.classList.add("is-selected");
    button.addEventListener("click", () => selectAnswer(index, button));
    answerList.append(button);
  });
}

function selectAnswer(index, button) {
  if (answerList.dataset.locked === "true") return;
  answerList.dataset.locked = "true";
  [...answerList.children].forEach((item) => item.classList.remove("is-selected"));
  button.classList.add("is-selected");
  selectedAnswers[currentQuestion] = index;

  window.setTimeout(() => {
    answerList.dataset.locked = "false";
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      renderQuestion();
    } else {
      beginAnalysis();
    }
  }, 260);
}

function calculateResult() {
  const normalKeys = Object.keys(bloodlines).filter((key) => key !== "shiso");
  const scores = Object.fromEntries(normalKeys.map((key) => [key, 0]));
  const primaryHits = Object.fromEntries(normalKeys.map((key) => [key, 0]));
  let drinkCount = 0;
  let originSignal = false;

  selectedAnswers.forEach((answerIndex, questionIndex) => {
    const answer = questions[questionIndex].answers[answerIndex];
    const points = answer[1];
    const topPoint = Math.max(...Object.values(points));
    Object.entries(points).forEach(([key, point]) => {
      scores[key] += point;
      if (point === topPoint && point >= 3) primaryHits[key] += 1;
    });
    if (answer[2] === "drink") drinkCount += 1;
    if (answer[2] === "origin") originSignal = true;
  });

  if (drinkCount === 2) scores.meitei += 2;
  if (drinkCount === 3) scores.meitei += 5;
  if (drinkCount >= 4) scores.meitei += 8;

  // 薄明は、複数の薄明らしい回答が重なった時だけ候補に残す。
  if (primaryHits.hakumei < 2) scores.hakumei *= .72;
  else scores.hakumei *= .92;

  // 設問数の差で特定の血族だけが出やすくならないよう、全体分布を補正する。
  const balance = {
    kojou: .96,
    shingetsu: .88,
    meitei: 1.08,
    shuushuu: .96,
    eiya: 1.28,
    kogetsu: 1.12,
    hakumei: 1.1,
    kyouen: .9,
    kyouji: .76
  };
  normalKeys.forEach((key) => { scores[key] *= balance[key]; });

  const ranking = normalKeys
    .map((key) => ({ key, score: scores[key], hits: primaryHits[key] }))
    .sort((a, b) => b.score - a.score || b.hits - a.hits || normalKeys.indexOf(a.key) - normalKeys.indexOf(b.key));

  const activeFamilies = ranking.filter((item) => item.score >= 6).length;
  const topGap = ranking[0].score - ranking[2].score;
  const dominant = ranking[0].score >= ranking[1].score + 5 || ranking[0].hits >= 4;

  // 始祖は幅広い血族が拮抗し、かつ「変化と不変」を選んだ時にのみ現れる隠し結果。
  if (originSignal && activeFamilies >= 5 && topGap <= 2.5 && !dominant && drinkCount < 3) return "shiso";
  return ranking[0].key;
}

function beginAnalysis() {
  showScreen("loading-screen");
  const messages = ["夜の気配を読み取っています...", "血に刻まれた記憶を辿っています...", "あなたを呼ぶ血族を探しています..."];
  const message = document.querySelector("#loading-message");
  let index = 0;
  const timer = window.setInterval(() => {
    index = (index + 1) % messages.length;
    message.textContent = messages[index];
  }, 650);

  window.setTimeout(() => {
    window.clearInterval(timer);
    displayResult(calculateResult(), true);
  }, 1900);
}

function displayResult(key, updateUrl = false) {
  const result = bloodlines[key] || bloodlines.kojou;
  const keys = Object.keys(bloodlines);
  currentResult = key in bloodlines ? key : "kojou";
  document.querySelector("#result-index").textContent = String(keys.indexOf(currentResult) + 1).padStart(2, "0");
  document.querySelector("#result-name").textContent = result.name;
  document.querySelector("#result-reading").textContent = result.reading;
  document.querySelector("#result-character-image").src = result.image;
  document.querySelector("#result-caption").textContent = result.caption;
  document.querySelector("#result-habitat").textContent = result.habitat;
  document.querySelector("#result-visual").style.setProperty("--accent", result.color);
  showScreen("result-screen");

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("result", currentResult);
    window.history.replaceState({}, "", url);
  }
}

function renderLineageGrid() {
  if (lineageGrid.children.length) return;
  Object.entries(bloodlines).forEach(([key, bloodline], index) => {
    const card = document.createElement("article");
    card.className = `lineage-card${key === "shiso" ? " is-hidden-origin" : ""}`;
    card.style.setProperty("--lineage-accent", bloodline.color);
    card.innerHTML = `
      <span class="lineage-card-number">${String(index + 1).padStart(2, "0")}</span>
      <img src="${bloodline.image}" alt="" loading="lazy">
      <span class="lineage-card-copy">
        <strong>${bloodline.name}</strong>
        <small>${bloodline.reading}</small>
      </span>
    `;
    lineageGrid.append(card);
  });
}

function showLineages(fromScreen) {
  lineageReturnScreen = fromScreen;
  renderLineageGrid();
  showScreen("lineage-screen");
}

function resetQuiz() {
  currentQuestion = 0;
  selectedAnswers = [];
  currentResult = null;
  const url = new URL(window.location.href);
  url.searchParams.delete("result");
  window.history.replaceState({}, "", url);
  renderQuestion();
  showScreen("intro-screen");
}

function shareResult() {
  const result = bloodlines[currentResult];
  const shareUrl = `https://greedily-vamp69.github.io/BloodLine/results/${currentResult}/`;
  const text = `私に流れる吸血鬼の血族は「${result.name}」でした。\n\nあなたの夜に流れる血は、どの血族のもの？\n#吸血鬼の血族診断 #BloodLine`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, "_blank", "noopener,noreferrer");
}

startButton.addEventListener("click", () => {
  renderQuestion();
  showScreen("quiz-screen");
});

backButton.addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
});

retryButton.addEventListener("click", resetQuiz);
shareButton.addEventListener("click", shareResult);
introLineageButton.addEventListener("click", () => showLineages("intro-screen"));
resultLineageButton.addEventListener("click", () => showLineages("result-screen"));
lineageBackButton.addEventListener("click", () => showScreen(lineageReturnScreen));

const directResult = new URLSearchParams(window.location.search).get("result");
if (directResult && bloodlines[directResult]) displayResult(directResult);
