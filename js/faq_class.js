class FAQ {
  constructor(selector, opt) {
    /* 전역변수 리스트 ------------------------- */
    this.faq = document.querySelector(selector);
    this.faqTitle = this.faq.querySelectorAll(opt.faqTitle);
    this.faqContent = this.faq.querySelectorAll(opt.faqContent);
    this.className_on = "on";



    /* 이벤트 연결 ----------------------------- */
    this.faqTitle.forEach((title, index) => {
      title.addEventListener("click", e => {
        let isOn = e.currentTarget.classList.contains(this.className_on);
        this.clearActivation(this.faqTitle);
        this.clearActivation(this.faqContent);

        if (isOn) {
          this.clearActivation(this.faqTitle);
          this.clearActivation(this.faqContent);
          return;
        }

        e.currentTarget.classList.add(this.className_on);
        this.faqContent[index].classList.add(this.className_on);
      });
    });
  }

  /* 함수 선언 ------------------------------- */
  clearActivation(arr) {
    for (let el of arr) {
      el.classList.remove(this.className_on);
    }
  }
}