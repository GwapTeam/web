var wordChars;
var messageArea;
var wordArea;
var list = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = 0;
var time = 0;

document.onkeydown = function (e) {
    var key;
    key = String.fromCharCode(e.keyCode);

    if (wordChars == key) {
        number++;
        wordArea.textContent = list[number];
        wordChars = list[number];
    }
    if (number == list.length) {
        clearInterval();
        alert(time + "秒で終了しました！");
        number++;
    }
};
function countUp() {
    time++;
}
