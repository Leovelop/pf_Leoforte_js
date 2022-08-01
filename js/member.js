const frame = document.querySelector(".member");
const ceoIntro = document.querySelector(".ceoIntro");
const ceoFrame = ceoIntro.querySelector(".innerCeo .wrap");

fetch("./data/members.json")
  .then(data => {
    return data.json();
  })
  .then(json => {
    const memberInfo = json.data;
    delete memberInfo[0];

    let tags = "";
    memberInfo.map(member => {

      tags += `
        <article>
            <div class="memberPic">
                <img src="${member.pic}">
            </div>
            <div>
                <h3>${member.position}</h3>
                <h2>${member.name}</h2>
                <p>${member.quotes}</p>
            </div>
        </article>
        `;
    });

    frame.innerHTML = tags;
  });

fetch("./data/members.json")
  .then(data => {
    return data.json();
  })
  .then(json => {
    const ceoInfo = json.data[0];

    let quotes = "";
    quotes = `
            <article>
                <p>
                    <i class="fas fa-quote-left"></i>
                    ${ceoInfo.quotes}
                    <i class="fas fa-quote-right"></i>
                </p>
                <h3>${ceoInfo.position}</h3>
                <h2>${ceoInfo.name}</h2>
            </article>
            <article>
                <img src=${ceoInfo.pic}>
            </article>
    `;

    ceoFrame.innerHTML = quotes;
  });