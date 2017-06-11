var wordList = alphabetList();  // 単語
var timer1;             // setInterval
var wordChars;          // 選ばれた単語を格納
var messageArea;        // メッセージ
var wordArea;           // 問題文字列
var typeArea;           // タイピングした文字列
var score;              // 正解数
var time = 0;           // 経過時間
var listNumber = -1;    // 配列

window.onload = function () {
    messageArea = document.getElementById("message");
    wordArea = document.getElementById("word");
    typeArea = document.getElementById("type");
    startButton = document.getElementById("start-button");
}

// 3秒後に開始
function onStartButtonClick() {
    startButton.style.display = "none";
    messageArea.textContent = "3秒後に始まります！！！";
    setTimeout("startTyping()", 3000);
}

// 開始
function startTyping() {
    score = 0;
    nextWord();
    timer1 = setInterval("countUp()", 100);
    startButton.disabled = true;
}

// 終了
function stopTyping() {
    clearInterval(timer1);
    wordChars = [];
    messageArea.textContent = time / 10 + "秒で終了しました！";
    wordArea.textContent = "";
    typeArea.textContent = "";
    startButton.disabled = false;
}

// 次の単語を表示
function nextWord() {
    listNumber++;
    wordArea.textContent = wordList[listNumber];
    typeArea.textContent = "";
    wordChars = wordList[listNumber].toUpperCase().split('');
}
