var wordChars;
var messageArea;
var wordArea;
var list = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = 0;
var time = 0;
var rnd;

document.onkeydown = function (e) {
    var key;
    key = String.fromCharCode(e.keyCode);

    if (wordChars == key) {
        rnd = Math.floor(Math.random() * list.length);
        number++;
        wordArea.textContent = list[rnd];
        wordChars = list[rnd];
    }
    if (number == list.length) {
        clearInterval();
        alert(time + "秒で終了しました！");
        number++;
    }else if(time >= 3){
        alert(number + "文字打てました！");
        number = list.length;
    }
}
function countUp() {
    time++;
}
