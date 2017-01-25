// 単語
var wordList = [
    // 初期単語
    "Web","Game","iPhone","Android",
    // 干支
    "sun","mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","moon",
    // 惑星
    "mouse","cow","tiger","rabbit","dragon","snake","horse","sheep","bird","monkey","dog","boar"
];

var timeLimit = 600;    // 60.0秒
var timer1;             // setInterval
var wordChars;          // ランダムに選ばれた単語を格納
var charIndex;          // 単語の何番目
var messageArea;        // メッセージ
var wordArea;           // 問題文字列
var typeArea;           // タイピングした文字列
var score;              // 正解数
var timeLeft;           // 残り時間

window.onload = function () {
    messageArea = document.getElementById("message");
    wordArea = document.getElementById("word");
    typeArea = document.getElementById("type");
    startButton = document.getElementById("start-button");
    progressBar = document.getElementById("remain");
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
    timeLeft = timeLimit;
    nextWord();
    //countDown();
    timer1 = setInterval("countDown()", 100);
    startButton.disabled = true;
}

// 終了
function stopTyping() {
    clearInterval(timer1);
    wordChars = [];
    if(timeLeft <= 0){
        messageArea.textContent = "Score: " + score;
    }else{
        messageArea.textContent = (timeLeft/10) + "秒残しでクリアしました!";
    }
    wordArea.textContent = "";
    typeArea.textContent = "";
    startButton.disabled = false;
}

// 次の単語を表示
function nextWord() {
    charIndex = 0;
    var random = Math.floor(Math.random() * wordList.length);
    wordArea.textContent = wordList[random];
    typeArea.textContent = "";
    wordChars = wordList[random].toUpperCase().split('');
}

// 残り時間を計測
function countDown() {
    messageArea.textContent = timeLeft / 10 + " 秒 "
    progressBar.value = timeLeft;
    if (timeLeft <= 0) {
        stopTyping();
        return;
    }
    if (timeLeft > 600) {
        timeLeft = 600;
    }
    timeLeft--;
}

// キー押下時の処理
document.onkeydown = function (e) {
    var keyStr;
    keyStr = String.fromCharCode(e.keyCode);

    if (wordChars[charIndex] == keyStr) {
        charIndex++;
        typeArea.textContent = typeArea.textContent + keyStr;
        if (charIndex == wordChars.length) {
            score++;            // 正解数 +1
            timeLeft += 15;     // 残り時間1.5秒増
            if(score >= 5){     // 5問でクリア
                stopTyping();
                swal("Good job!","5問正解!クリア!","success");
            }else{
                nextWord();     //次の単語へ
            }
        }
    }else{
        timeLeft -= 15;         // 残り時間1.5秒減
    }

};
