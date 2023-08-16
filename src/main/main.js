console.log("js load in main");

// const main = $.createElement("div");
// const mainText = $.createTextNode("main");
// main.appendChild(mainText);
// $.getElementById("main").appendChild(main);

// const list = $.createElement("div");
// list.id = "list_div";
// const listtext = $.createTextNode("hello");
// list.appendChild(listtext);
// $.getElementById("main").appendChild(list);

// 방법 1
// const addListButton = $.createElement("input");
// addListButton.type = "button";
// addListButton.id = "addListButton";
// addListButton.value = "+";

// 방법 2
const addListButton = $.createElement("button");
addListButton.id = "addListButton";
addListButton.innerText = "+";
let temp = 0;
addListButton.addEventListener("click", () => {
  //   const temp = $.createElement("div");
  //   const temptext = $.createTextNode("hello");
  //   temp.appendChild(temptext);
  //   $.getElementById("main").appendChild(temp);
  //   console.log("button");
  const list = $.createElement("div");
  list.id = "list_div";
  const input = $.createElement("input");
  list.appendChild(input);
  //   const listtext = $.createTextNode(temp);
  //   list.appendChild(listtext);
  $.getElementById("main").appendChild(list);
  temp++;
});
$.getElementById("main").appendChild(addListButton);
