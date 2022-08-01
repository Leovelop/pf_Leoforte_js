/* 전역변수 리스트 ---------------------------------------- */
const skipNavi = document.querySelectorAll("#skipNavi li a");


/* 이벤트 연결 ---------------------------------------- */
for (let el of skipNavi) {
  el.addEventListener("focusin", e => {
    el.classList.add("on");
  });

  el.addEventListener("focusout", e => {
    el.classList.remove("on");
  })
}