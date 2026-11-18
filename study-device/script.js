const notes = document.getElementById("notes");
const report = document.getElementById("report");
const review = document.getElementById("review");
const device = document.getElementById("device");
const reason = document.getElementById("reason");

function showDevice(event) {
  const choice = event.currentTarget;
  notes.setAttribute("aria-pressed", choice === notes);
  report.setAttribute("aria-pressed", choice === report);
  review.setAttribute("aria-pressed", choice === review);

  if (choice === notes) {
    device.textContent = "ペン対応タブレット";
    reason.textContent = "授業のPDFにペンで直接書き込めます。図や矢印を使って、自分がわかりやすい形にまとめられます。";
  } else if (choice === report) {
    device.textContent = "ノートパソコン";
    reason.textContent = "キーボードで長い文章を入力しやすく、資料と原稿を画面に並べて、引用元を確認しながら書けます。";
  } else {
    device.textContent = "スマートフォン";
    reason.textContent = "電車やバスの中でも片手で取り出せます。単語カードや一問一答なら、降りるまでの短い時間でも復習できます。";
  }
}

notes.addEventListener("click", showDevice);
report.addEventListener("click", showDevice);
review.addEventListener("click", showDevice);
