var messageArea;

window.onload = function () {
    messageArea = document.getElementById("message");
    wordArea = document.getElementById("word");
    startButton = document.getElementById("start-button");
}

// ボタンを押した時
function onStartButtonClick() {
    startButton.style.display = "none";
    messageArea.textContent = "";
    wordArea.textContent = list[number];
    wordChars = list[number];
    setInterval("countUp()", 1000);
}
