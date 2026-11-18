'use strict';

const animalInput = document.getElementById('animal');
const form = document.getElementById('assessment');
const resultArea = document.getElementById('result-area');
const tweetArea = document.getElementById('tweet-area');

const answers = [
  '聞き上手です。友だちが話すとき、最後までじっくり聞ける人です。',
  '好奇心いっぱいです。初めて見るものにも、面白いところを見つけられます。',
  '気配り上手です。ひとりでいる人にも自然に声をかけられます。',
  'アイデアが豊かです。いつもの遊びに新しいルールを思いつく人です。',
  '根気があります。好きなことにじっくり取り組めます。',
  '周りを明るくする人です。楽しい発見をみんなと分け合えます。'
];

function assessment(animal) {
  // 授業の診断と同じように、文字の番号を足して結果を選ぶ。
  let sum = 0;
  for (let i = 0; i < animal.length; i++) {
    sum = sum + animal.charCodeAt(i);
  }
  const index = sum % answers.length;
  return '「' + animal + '」が好きなあなたは、' + answers[index];
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const animal = animalInput.value.trim();
  resultArea.textContent = '';
  tweetArea.textContent = '';
  if (animal === '') {
    resultArea.textContent = '好きな動物を入れてください。';
    animalInput.focus();
    return;
  }

  const heading = document.createElement('h3');
  heading.textContent = '診断結果';
  resultArea.appendChild(heading);

  const paragraph = document.createElement('p');
  const result = assessment(animal);
  paragraph.textContent = result;
  resultArea.appendChild(paragraph);

  // 診断結果とハッシュタグを入れたXの投稿画面へのリンクを作る。
  const anchor = document.createElement('a');
  const postText = result + '\n#動物診断';
  anchor.setAttribute('href', 'https://x.com/intent/tweet?text=' + encodeURIComponent(postText));
  anchor.setAttribute('target', '_blank');
  anchor.setAttribute('rel', 'noopener');
  anchor.textContent = 'Xでポストする';
  tweetArea.appendChild(anchor);
});
