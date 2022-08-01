/* 전역변수 리스트 ------------------------- */
const services = document.querySelector("#services");

const article2 = services.querySelectorAll(".wrap article")[1];
const itemTitle = article2.querySelector("h2");
const itemContent = article2.querySelector("p");

const servicesImg = services.querySelector(".servicesImg");
const img = servicesImg.querySelector("img");
const title = servicesImg.querySelector("h2");
const btns = services.querySelectorAll(".wrap ul li");
let total = btns.length;



/* 이벤트 연결 ----------------------------- */
for (let i = 0; i < total; i++) {
  btns[i].addEventListener("click", e => {
    e.preventDefault();

    let isOn = btns[i].classList.contains("on");
    if(isOn) return;

    servicesOn(i);
    servicesCon(i);
  });
}

fetch("./data/services.json")
  .then(item => {
    return item.json();
  })
  .then(json => {
    const servicesInfo = json.item;

    let name = servicesInfo[0].name;
    let con = servicesInfo[0].content;

    itemTitle.innerHTML = name;
    itemContent.innerText = con;
  });


/* 함수 선언 ------------------------------- */
function servicesOn(index) {

  let clickA = btns[index].querySelector("a");
  let imgSrc = clickA.getAttribute("href");

  img.setAttribute("src", imgSrc);

  for (let el of btns) {
    el.classList.remove("on");
  }
  btns[index].classList.add("on");
}

function servicesCon(index) {
  fetch("./data/services.json")
    .then(item => {
      return item.json();
    })
    .then(json => {
      const servicesInfo = json.item;

      let name = "";
      let con = "";

      servicesInfo.map(() => {
        name = servicesInfo[index].name;
        con = servicesInfo[index].content;
      });

      title.innerText = ".0" + (index + 1);

      itemTitle.innerHTML = name;
      itemContent.innerText = con;
    });
}