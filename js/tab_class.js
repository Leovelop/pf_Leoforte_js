class TabCommunity{
  constructor(selector, opt) {
    /* 전역변수 리스트 ------------------------- */
    this.tab = document.querySelector(selector);
    this.btns = this.tab.querySelectorAll(opt.btns);
    this.articles = this.tab.querySelectorAll(opt.boxs);
    this.className_on = "on";


    /* 이벤트 연결 ----------------------------- */
    this.btns.forEach((btn, index) => {
      btn.addEventListener("click", e => {
        e.preventDefault();

        this.activation(this.btns, index);
        this.activation(this.articles, index);
      });
    });
  }


  /* 함수 선언 ------------------------------- */
  activation(arr, index) {
    for (let el of arr) {
      el.classList.remove(this.className_on);
    }

    arr[index].classList.add(this.className_on);
  }
}