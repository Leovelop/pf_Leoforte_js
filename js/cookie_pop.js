/* 전역변수 리스트 ------------------------- */
const popup = document.querySelector("#cookiePopup");
const btnClose = popup.querySelector(".close");
const isCookie = document.cookie.indexOf("today=done");



/* 이벤트 연결 ----------------------------- */
(isCookie == -1) ? popup.style.display = "block" : popup.style.display = "none";

btnClose.addEventListener("click", e => {
  e.preventDefault();
  let isChecked = popup.querySelector("input[type=checkbox]").checked;
  if (isChecked) setCookie("today", "done", 1);

  popup.style.display = "none";
});



/* 함수 선언 ------------------------------- */
function setCookie(name, value, due) {
  const today = new Date();
  const date = today.getDate();
  today.setDate(date + due);
  const duedate = today.toGMTString();

  document.cookie = `${name}=${value}; path="/"; expires=${duedate}`;
}