const $ = document;
console.log(`js is loaded in header`);

// API 보류
// 문제점 1. 렌더링 순서 이슈 - HTML페이지가 렌더링 된 후 렌더링돼서 어색하다.
// 문제점 2. 그렇게 의미있는 작업인지 모르겠다.
// const fetchData = async () => {
//   try {
//     const url = "https://api.adviceslip.com/advice";
//     const option = {
//       method: "get",
//     };
//     let textSource = "";
//     const response = await fetch(url, option)
//       .then((response) => response.json())
//       .then((data) => (textSource = data.slip.advice));
//     const advice = $.createElement("div");
//     advice.id = "id_div";
//     const adviceText = $.createTextNode(textSource);
//     advice.appendChild(adviceText);
//     $.getElementById("header").appendChild(advice);
//   } catch (e) {
//     throw e;
//   }
// };

// 구조를 조금 더 깔끔하게?
console.log(new Date());

// const addListButton = $.createElement("button");
// addListButton.id = "addListButton";
// addListButton.addEventListener("click", () => {
//   const temp = $.createElement("div");
//   const temptext = $.createTextNode("hello");
//   temp.appendChild(temptext);
//   $.getElementById("main").appendChild(temp);
//   console.log("button");
// });
// $.getElementById("header").appendChild(addListButton);

// const dateView = $.createElement("div");
// const dateViewText = $.createTextNode(new Date());
// dateView.appendChild(dateViewText);
// $.getElementById("header").appendChild(dateView);

// fetchData();
