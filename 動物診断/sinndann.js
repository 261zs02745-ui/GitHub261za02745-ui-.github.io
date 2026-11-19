'use strict';

const animalInput = document.getElementById('animal');
const form = document.getElementById('diagnosis-form');
const resultArea = document.getElementById('result-area');
const tweetArea = document.getElementById('tweet-area');

const answers = [
  '聞き上手です。友達の話を最後までじっくり聞けます。',
  '好奇心が旺盛です。初めて見るものからも面白いことを見つけられます。',
  '気配りが上手です。一人でいる人にも自然に声をかけられます。',
  'アイデアが豊かです。いつもの遊びでも、新しい楽しみ方を思いつきます。',
  '根気があります。好きなことにじっくり取り組めます。',
  '周りを明るくする人です。楽しい発見をみんなと分け合えます。'
];

function diagnoseAnimal(animal) {
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
    const message = document.createElement('p');
    message.className = 'alert alert-warning mb-0';
    message.textContent = '好きな動物の名前を入力してください。';
    resultArea.appendChild(message);
    animalInput.focus();
    return;
  }

  const result = diagnoseAnimal(animal);
  const card = document.createElement('div');
  card.className = 'card';

  const heading = document.createElement('h2');
  heading.className = 'card-header text-bg-primary h5';
  heading.textContent = '診断結果';

  const body = document.createElement('div');
  body.className = 'card-body';

  const paragraph = document.createElement('p');
  paragraph.className = 'card-text';
  paragraph.textContent = result;

  body.appendChild(paragraph);
  card.appendChild(heading);
  card.appendChild(body);
  resultArea.appendChild(card);

  // 診断結果とハッシュタグを入れたXの投稿画面へのリンクを作る。
  const anchor = document.createElement('a');
  const postText = result + '\n#動物診断';
  anchor.setAttribute('href', 'https://x.com/intent/tweet?text=' + encodeURIComponent(postText));
  anchor.setAttribute('target', '_blank');
  anchor.setAttribute('rel', 'noopener');
  anchor.className = 'btn btn-dark';
  anchor.textContent = 'Xでポストする';
  tweetArea.appendChild(anchor);
});
