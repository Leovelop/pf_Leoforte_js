/* 전역변수 리스트 ---------------------------------------- */
const vidList = document.querySelector(".vidList");
const key = 'AIzaSyAOiT2-Yj0veEYNUOGKDKzUueC7c2T_EdU';
const playlistId = 'PL2_X9EceJ6Ly4UrI8wTT2itehjT3J423s';
const num = 8;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`; 



/* 이벤트 연결 ---------------------------------------- */
fetch(url)
.then(data => {
    return data.json();
})
.then(json => {
    let items = json.items;
    console.log(items); 

    let result = "";

    items.map(item => {

        let title = item.snippet.title;
        if(title.length > 10) {
            title = title.substr(0, 30) + "...";
        }

        let con = item.snippet.description;
        if(con.length > 150) {
            con = con.substr(0, 150) + "...";
        }
        if (con.length == 0) {
            con = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, omnis.';
        }

        let date = item.snippet.publishedAt;
        date = date.split("T")[0];

        result += `
                <article>
                    <h2 class="vidTitle">${item.snippet.videoOwnerChannelTitle}</h2>
                    <a href="${item.snippet.resourceId.videoId}" class="pic">
                        <img src="${item.snippet.thumbnails.standard .url}" alt="${item.snippet.videoOwnerChannelTitle}'s video">
                    </a>
                    <div class="con">
                        <span>${date}</span>
                        <h3>${title}</h3>
                        <p>${con}</p>
                    </div>
                </article>
                `;
    });

    vidList.innerHTML = result;
});

vidList.addEventListener("click", e => {
    e.preventDefault();

    //클릭한 요소의 부모태그가 a요소가 아니라면 중지
    //a요소의 href값을 받아야 하므로
    if(!e.target.closest("a")) return;

    const vidId = e.target.closest("a").getAttribute("href");
    let pop = document.createElement("figure");
    pop.classList.add("pop");

    pop.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
                    <span class="btnClose">CLOSE</span>
                    `;

    vidList.append(pop);
});

vidList.addEventListener("click", e => {
    const pop = vidList.querySelector(".pop");

    if(pop){
        const close = pop.querySelector("span");
        if(e.target == close) pop.remove();
    }
})



/* 함수 선언 ---------------------------------------- */
