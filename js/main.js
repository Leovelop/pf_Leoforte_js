/* 전역변수 리스트 -------------------- */
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const className_on = "on";


/* 이벤트 연결 ----------------------- */
btnCall.onclick = function (e) {
  e.preventDefault();

  activeBtn(btnCall);
}

window.onresize = function () {
  let wid = window.innerWidth;
  
  if (wid >= 1180) {
    menuMo.classList.remove(className_on);
    btnCall.classList.remove(className_on);
  }
}


/* 함수 선언 ------------------------- */
function activeBtn(el) {
  el.classList.toggle(className_on);
  menuMo.classList.toggle(className_on);
}