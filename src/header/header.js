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

fetchData();

console.log(new Date());
