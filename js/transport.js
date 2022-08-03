fetch("./data/transport.json")
  .then(item => {
    return item.json();
  })
  .then(json => {
    const transportInfo = json.data;

    //console.log(json.data);
    let name = "";
    let subway = "";
    let bus = "";
    let car = "";

    transportInfo.map(() => {
      name = transportInfo[index].name;
      subway = transportInfo[index].subway;
      bus = transportInfo[index].bus;
      car = transportInfo[index].car;
    });
  }
);