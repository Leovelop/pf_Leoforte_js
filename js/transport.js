fetch("./data/transport.json")
  .then(item => {
    return item.json();
  })
  .then(json => {
    const transportInfo = json.data;

    //console.log(json.data);
  }
);