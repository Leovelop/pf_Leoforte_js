fetch("./data/transport.json")
  .then(item => {
    return item.json();
  })
  .then(json => {
    const transportInfo = json.item;

    console.log(transportInfo);
  }
);