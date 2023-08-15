const $ = document;
console.log(`js is loaded in header`);

const fetchData = async () => {
  try {
    const url = "https://api.adviceslip.com/advice";
    const option = {
      method: "get",
    };
    let textSource = "";
    const response = await fetch(url, option)
      .then((response) => response.json())
      //   .then(data => console.log(data[1].respond))
      .then((data) => (textSource = data.slip.advice));
    const advice = $.createElement("div");
    advice.id = "id_div";
    const adviceText = $.createTextNode(textSource);
    advice.appendChild(adviceText);
    $.getElementById("header").appendChild(advice);
  } catch (e) {
    throw e;
  }
};

// 구조를 조금 더 깔끔하게?
console.log(new Date());

// const dateView = $.createElement("div");
// const dateViewText = $.createTextNode(new Date());
// dateView.appendChild(dateViewText);
// $.getElementById("header").appendChild(dateView);

fetchData();
