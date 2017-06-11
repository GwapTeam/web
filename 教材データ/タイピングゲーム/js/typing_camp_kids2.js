// 単語リスト
function alphabetList(){
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    return alphabet;
}
// キー押下時の処理
document.onkeydown = function (e) {
    var keyStr;
    keyStr = String.fromCharCode(e.keyCode);

    if (wordChars == keyStr) {
        typeArea.textContent = keyStr;
        score++;
        if (listNumber + 1 == wordList.length) {
            stopTyping();
        }else{
            nextWord();
        }
    }
};
// 時間を計測
function countUp() {
    messageArea.textContent = "";
    time++;
}
