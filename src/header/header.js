const $ = document;
console.log(`js is loaded in header`);

const fetchData = async () => {
  try {
    const url = "https://api.qwer.pw/request/helpful_text?apikey=guest";
    const option = {
      method: "get",
    };
    let textSource = "";
    const response = await fetch(url, option)
      .then((response) => response.json())
      //   .then(data => console.log(data[1].respond))
      .then((data) => (textSource = data[1].respond));
    const advice = document.createElement("div");
    advice.id = "id_div";
    const adviceText = document.createTextNode(textSource);
    advice.appendChild(adviceText);
    document.getElementById("header").appendChild(advice);
  } catch (e) {
    throw e;
  }
  try {
    const url = "https://api.qwer.pw/request/helpful_text?apikey=guest";
    const option = {
      method: "get",
    };
    let textSource = "";
    const response = await fetch(url, option)
      .then((response) => response.json())
      //   .then(data => console.log(data[1].respond))
      .then((data) => (textSource = data[1].respond));
    const advice = document.createElement("div");
    const adviceText = document.createTextNode(textSource);
    advice.appendChild(adviceText);
    document.getElementById("header").appendChild(advice);
  } catch (e) {
    throw e;
  }
};

// 구조를 조금 더 깔끔하게?
console.log(new Date());

const dateView = document.createElement("div");
const dateViewText = document.createTextNode(new Date());
dateView.appendChild(dateViewText);
document.getElementById("header").appendChild(dateView);

fetchData();
