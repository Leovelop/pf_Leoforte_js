const content = document.querySelector(".content");
const innerVisual = content.querySelector(".sub_visual .innerVisual");

setTimeout(() => {
  innerVisual.classList.add(className_on);
}, 100, setTimeout(() => {
  content.classList.add(className_on);
}, 300));