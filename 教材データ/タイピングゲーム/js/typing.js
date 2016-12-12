// 単語
var wordList = [
    "Web","Game","iPhone","Android",
    "sun","mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","moon",
    "mouse","cow","tiger","rabbit","dragon","snake","horse","sheep","bird","monkey","dog","boar"
];

// 時間制限
var timeLimit = 600;    //60.0秒
var timer1;
var wordStr;
var wordChars;
var charIndex;
var messageArea;
var wordArea;
var typeArea;
var score;
var timeLeft;

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
    messageArea.textContent = "Ready?";
    setTimeout("startTyping()", 300);
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
        messageArea.textContent = (timeLeft/10) + "秒残しでクリア！";
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
    if (e.keyCode == 189) {
        keyStr = "-";
    } else {
        keyStr = String.fromCharCode(e.keyCode);
    }

    if (wordChars[charIndex] == keyStr) {
        charIndex++;
        typeArea.textContent = typeArea.textContent + keyStr;
        if (charIndex == wordChars.length) {
            score++;
            timeLeft += 15;
          if(score >= 50){    //50問でクリア
                stopTyping();
                alert('クリア');
                //sweetalert表示されない(´；ω；`)ｳｩｩ
                //swal("Good job!","5問正解!クリア!","success");
          }else{
              nextWord();
          }
        }
    } else {
        timeLeft -= 15;
    }

};
