/* 전역변수 리스트 --------------------------- */
const visual = document.querySelector("#visual");
const visSlider = visual.querySelector("#visSlider");
const lists = visSlider.querySelectorAll("li");
let len = lists.length;

const prev = visual.querySelector(".prev");
const next = visual.querySelector(".next");
const speed = 1000;

let enableClick = true;
let active = 0;

/* 이벤트 정의 ------------------------------ */
init();

//prev 버튼 클릭 이벤트
prev.addEventListener("click", e => {
  e.preventDefault();

  if (enableClick) {
    enableClick = false;
    prevSlide();
    fadeOn();
  }
});

//next 버튼 클릭 이벤트
next.addEventListener("click", e => {
  e.preventDefault();

  if (enableClick) {
    enableClick = false;
    nextSlide();
    fadeOn();
  }
});



/* 함수 선언 -------------------------------- */
//초기화 함수
function init() {
  lists.forEach(li => {
    li.style.width = `${100 / len}%`;
  });

  let inner = visSlider.querySelector("li.on .inner");
  inner.style.opacity = 1;

  visSlider.style.left = "-100%";
  visSlider.prepend(visSlider.lastElementChild);
  visSlider.style.width = `${100 * len}%`;
}

//활성화 함수 정의
function activation(index, arr) {
  for (let el of arr) {
    el.classList.remove("on");
    setTimeout(()=> {
      el.querySelector(".inner").style.transform = `translate(-50%, -30%)`;

    }, 500);
  }

  arr[index].classList.add("on");
  setTimeout(()=> {
  arr[index].querySelector(".inner").style.transform = `translate(-50%, -40%)`;

  }, 1000);
}

//prev 버튼 함수 정의
function prevSlide() {
  new Anime(visSlider, {
    prop: "left",
    value: "0%",
    duration: speed,
    callback: () => {
      visSlider.style.left = "-100%";
      visSlider.prepend(visSlider.lastElementChild);
      enableClick = true;
    }
  });

  (active == 0) ? active = len - 1 : active--;

  activation(active, lists);
}

//next 버튼 함수 정의
function nextSlide() {
  new Anime(visSlider, {
    prop: "left",
    value: "-200%",
    duration: speed,
    callback: () => {
      visSlider.style.left = "-100%";
      visSlider.append(visSlider.firstElementChild);
      enableClick = true;
    }
  });

  (active == len - 1) ? active = 0 : active++;
  activation(active, lists);
}

function fadeOn() {
  let inner = visSlider.querySelector("li.on .inner");

  lists.forEach(li => {
    let inners = li.querySelector(".inner");
    
    new Anime(inners, {
      prop: "opacity",
      value: 0,
      duration: 100,
      callback: () => {
        new Anime(inner, {
          prop: "opacity",
          value: 1,
          duration: speed
        });
      }
    });
  });
}