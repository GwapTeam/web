//コメントアウトされているのはボツにしたものです


var queList = ['問題1:テトリスを作ったのは日本人である', '問題2:１円玉の直径は2cmである', '問題3:塩はカロリー0である', '問題4:レモンはミカン科の果物である', '問題5:パンとご飯を同じ分量だけ食べた時、消化が早いのはパンである'];	//問題のリスト
var ansNum = [0, 1, 1, 1, 0];   //0の時NOを選ぶと正解、1の時YESを選ぶと正解
var i = 0;  //正解問題数
var count = 1;  //現在の回答問題数
var h1id = 'h1id';

function startClick(){
    location.href="quiz_question.html";
}


function question() {
    var h1Text = document.getElementById(h1id);
    h1Text.textContent = queList[0];
    document.body.style.backgroundColor = "#BBFFAA";

}

function onClickChoiceYes() {
    var h1Text = document.getElementById(h1id);
    h1Text.textContent = queList[count];

    if (ansNum[count - 1] === 0) {
        question_judge(false);
    } else {
        i = i + 1;
        question_judge(true);
    }
}

function onClickChoiceNo() {
    var h1Text = document.getElementById(h1id);
    h1Text.textContent = queList[count];

    if (ansNum[count - 1] === 0) {
        i = i + 1;
        question_judge(true);
    } else {
        question_judge(false);
    }
}

function question_judge(check) {
    if (check === true) {
        swal("正解", count + "問目終了。", "success");
    } else {
        swal("不正解", count + "問目終了。", "error");
    }
    if (count < 5) {
        countUp();
    } else {
        location.href = 'quiz_kekka.html';
        localStorage.setItem('access_count', i);
    }
}

function countUp() {
    count = count + 1;
    return count;
}

function kekka() {
    var j = localStorage.getItem('access_count'); //正解数
    var k = 5 - j;      //不正解数(正解数ー問題数)
    var m = j / 5;      //正答率を求める
    document.getElementById("seikai").innerHTML = j;
    document.getElementById("huseikai").innerHTML = k;
    document.getElementById("seitouritu").innerHTML = m * 100 + "%"
}


/*
 function onClickTrue() {
 var h1text = document.getElementById("h1id");
 h1text.textContent = queList[count];
 document.getElementById("buttonA").value=ansList[count];
 document.getElementById("buttonB").value=ansList[count+5];
 i = i + 1;
 alert("正解！");
 }

 function onClickFalse() {
 var h1text = document.getElementById("h1id");
 h1text.textContent = queList[count];
 document.getElementById("buttonA").value=ansList[count];
 document.getElementById("buttonB").value=ansList[count+5];
 alert("不正解・・・");
 }



 function counterA()   {
 document.getElementsById("buttonA").onclick = function() {
 countUp();
 }
 }

 function counterB(){
 document.getElementsById("buttonB").onclick = function(){
 countUp();
 }
 }
 */



