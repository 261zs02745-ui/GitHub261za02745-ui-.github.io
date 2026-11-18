const messages = [
  "あなたが見つけた小さな楽しみは、今日を明るくする宝物です。",
  "好きなことを話すあなたの笑顔は、周りの人まで笑顔にします。",
  "あなたの「やってみたい」から、すてきな物語が始まります。",
  "あなたがじっくり考えたひとことは、誰かの心に温かく届きます。",
  "今日の小さな発見が、明日の楽しみをひとつ増やしてくれます。",
  "あなたの自由な発想が、いつもの景色に新しい色を添えます。",
  "あなたが重ねてきた一歩一歩に、成長の芽が育っています。",
  "ふと口にした「ありがとう」が、あなたにも相手にも幸せを運びます。",
  "あなたの好奇心の先には、夢中になれるものが待っています。",
  "あなたには、身近な人のすてきなところを見つける才能があります。",
  "あなたが自分のペースで進む姿は、誰かの勇気になります。",
  "あなたが楽しんで選んだ道には、あなたらしい花が咲きます。"
];

const month = document.getElementById("month");
const day = document.getElementById("day");
const result = document.getElementById("result");
const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function addOptions(select, lastNumber) {
  for (let number = 1; number <= lastNumber; number++) {
    const option = document.createElement("option");
    option.value = number;
    option.textContent = number;
    select.appendChild(option);
  }
}

addOptions(month, 12);

month.addEventListener("change", function () {
  const previousDay = day.value;
  day.options.length = 1;
  day.disabled = month.value === "";
  if (!day.disabled) {
    const lastDay = daysInMonth[Number(month.value) - 1];
    addOptions(day, lastDay);
    if (Number(previousDay) <= lastDay) {
      day.value = previousDay;
    }
  }
  result.hidden = true;
});

day.addEventListener("change", function () {
  result.hidden = true;
});

document.getElementById("fortune-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // 誕生日から番号を作り、割り算の余りでメッセージを一つ選ぶ。
  const birthdayNumber = Number(month.value) * 31 + Number(day.value);
  const index = birthdayNumber % messages.length;
  document.getElementById("result-title").textContent = month.value + "月" + day.value + "日生まれのあなたへ";
  document.getElementById("message").textContent = messages[index];
  result.hidden = false;
});
