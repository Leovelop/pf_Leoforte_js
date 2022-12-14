/* 전역변수 리스트 ---------------------------------------- */
const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");



/* 이벤트 연결 ---------------------------------------- */
btnSubmit.addEventListener("click", e => {
  if (!isAgree("agree")) e.preventDefault();
  if (!isTxt("id", 5)) e.preventDefault();
  if (!isPwd("pwd1", "pwd2", 5)) e.preventDefault();
  if (!isCheck("hobby")) e.preventDefault();
  if (!isCheck("gender")) e.preventDefault();
  if (!isEmail("mail")) e.preventDefault();
  if (!isSelect("edu")) e.preventDefault();
  if (!isTxt("comments", 20)) e.preventDefault();
});



/* 함수 선언 ---------------------------------------- */
function isTxt(name, len) {
  if (len === undefined) len = 5;
  let input = form.querySelector(`[name=${name}]`);
  let txt = input.value;

  if (txt.length >= len) {
    const errMsgs = input.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();
    
    return true;
  } else {
    const errMsgs = input.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(`입력항목을 ${len}글자 이상 입력하세요.`);
    input.closest("td").append(errMsg);

    return false;
  }
}

function isEmail(name) {
  let input = form.querySelector(`[name=${name}]`);
  let txt = input.value;

  if (/@/.test(txt)) {
    const errMsgs = input.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    
    return true;
  } else {
    const errMsgs = input.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(`@를 포함한 전체 이메일 주소를 입력하세요.`);
    input.closest("td").append(errMsg);

    return false;
  }
}

function isCheck(name) {
  let inputs = form.querySelectorAll(`[name=${name}]`);
  let isChecked = false;

  for (let el of inputs) {
    if (el.checked) isChecked = true;
  }

  if (isChecked) {
    const errMsgs = inputs[0].closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();

    
    return true;
  } else {
    const errMsgs = inputs[0].closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(`필수입력 항목을 체크해주세요.`);
    inputs[0].closest("td").append(errMsg);

    return false;
  }
}

function isAgree(name) {
  let input = form.querySelector(`[name=${name}]`);
  let isChecked = input.checked;

  if (isChecked) {
    const errMsgs = input.closest("div").querySelectorAll("p");
    if (errMsgs.length > 0) input.closest("div").querySelector("p").remove();

    
    return true;
  } else {    
    const errMsgs = input.closest("div").querySelectorAll("p");
    if (errMsgs.length > 0) input.closest("div").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(`약관에 동의해 주세요`);
    input.closest("div").append(errMsg);

    return false;
  }
}

function isPwd(name1, name2, len) {
  if (len === undefined) len = 5;
  let pwd1 = form.querySelector(`[name=${name1}]`);
  let pwd2 = form.querySelector(`[name=${name2}]`);

  let pwd1_val = pwd1.value;
  let pwd2_val = pwd2.value;

  const num = /[0-9]/;
  const eng = /[a-zA-Z]/;
  const spc = /[~!@#$%^&*()_+-={}|]/;

  if (pwd1_val === pwd2_val
    && pwd1_val.length >= len
    && num.test(pwd1_val)
    && eng.test(pwd1_val)
    && spc.test(pwd1_val)) {
    const errMsgs = pwd1.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) pwd1.closest("td").querySelector("p").remove();

    
    return true;
    
  } else {
    const errMsgs = pwd1.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) pwd1.closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(`비밀번호는 ${len}글자 이상으로 영문, 숫자, 특수문자를 포함해서 동일하게 입력하세요.`);
    pwd1.closest("td").append(errMsg);

    return false;
  }
}

function isSelect(name) {
  let sel = form.querySelector(`[name=${name}]`);
  let sel_index = sel.options.selectedIndex;
  let val = sel[sel_index].value;

  if (val !== "") {
    const errMsgs = sel.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) sel.closest("td").querySelector("p").remove();

    
    return true;
  } else {
    const errMsgs = sel.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) sel.closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(`항목을 선택해주세요.`);
    sel.closest("td").append(errMsg);

    return false;
  }
}