
setTimeout((function x() {Array.from(document.getElementsByClassName('answers')[0].children).map(x => {
if(document.getElementsByClassName('game')[0].children[1].children[0].innerText.replace(/\s+/g, "") == x.style.backgroundColor.toString().replace(/\s+/g, "")) {x.click(); return true;} else {return false ;}; setTimeout(x(),10})}),100)