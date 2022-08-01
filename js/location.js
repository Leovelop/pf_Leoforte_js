//7e1f763cf5a2410e9edb21b5c0ea339c : 카카오맵 key
/* 전역변수 리스트 ------------------------- */
var container = document.getElementById('map');

const t_on = document.querySelectorAll(".traffic li")[0];
const t_off = document.querySelectorAll(".traffic li")[1];
const branch_btns = document.querySelectorAll(".branch li");

let zoom = true;
let drag = true;

var options = { 
  center: new kakao.maps.LatLng(37.50703226648434, 126.75636533372187),
  level: 3
};

var map = new kakao.maps.Map(container, options);

var markerOptions = [
  {
    title: "본점",
    latlng: new kakao.maps.LatLng(37.50703226648434, 126.75636533372187),
    imgSrc: "img/location1.png",
    imgSize: new kakao.maps.Size(150),
    imgPos: { offset: new kakao.maps.Point(75, 75) },
    button: branch_btns[0]
  },
  {
    title: "지점1",
    latlng: new kakao.maps.LatLng(37.48766003247737, 126.75291625238107),
    imgSrc: "img/location2.png",
    imgSize: new kakao.maps.Size(150),
    imgPos: { offset: new kakao.maps.Point(75, 75) },
    button: branch_btns[1]
  },
  {
    title: "지점2",
    latlng: new kakao.maps.LatLng(37.4792269783883, 126.88318817650492),
    imgSrc: "img/location3.png",
    imgSize: new kakao.maps.Size(150),
    imgPos: { offset: new kakao.maps.Point(75, 75) },
    button: branch_btns[2]
  }
];

let mapTypeControl = new kakao.maps.MapTypeControl();




/* 이벤트 연결 ----------------------------- */
for (let i = 0; i < markerOptions.length; i++) {
  new kakao.maps.Marker({
    map: map,
    position: markerOptions[i].latlng,
    title: markerOptions[i].title,
    image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
  });

  markerOptions[i].button.onclick = e => {
    e.preventDefault();

    for (let k = 0; k < markerOptions.length; k++) {
      markerOptions[k].button.classList.remove("on");
    }
    markerOptions[i].button.classList.add("on");

    moveTo(markerOptions[i].latlng);
  }
}

//교통정보 표시해주는 맵으로 바꾸기
map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

//교통정보 보기, 끄기 버튼 클릭 이벤트
t_on.addEventListener("click", e => {
  e.preventDefault();
  if (t_on.classList.contains("on")) return;
  map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

  t_on.classList.add("on");
  t_off.classList.remove("on");
});

t_off.addEventListener("click", e => {
  e.preventDefault();
  if (t_off.classList.contains("on")) return;
  map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

  t_off.classList.add("on");
  t_on.classList.remove("on");
});

//브라우저의 너비가 줄어도 계속 중심에 오도록
window.addEventListener("resize", () => {
  let active_btn = document.querySelector(".branch li.on");
  let active_index = active_btn.getAttribute("data-index");

  map.setCenter(markerOptions[active_index].latlng);
});

map.addControl(mapTypeControl, kakao.maps.ControlPosition.RIGHT);



/* 함수 선언 ------------------------------- */
setZoomable(zoom);
function setZoomable(zoomable) {
  map.setZoomable(zoomable);
}

setDraggable(drag);
function setDraggable(draggable) {
  map.setDraggable(draggable);
}

function moveTo(target) {
  var moveLatLon = target;
  map.setCenter(moveLatLon);
}