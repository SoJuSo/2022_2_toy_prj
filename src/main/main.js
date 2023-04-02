console.log("js load in main");

const main = $.createElement("div");
const mainText = $.createTextNode("main");
main.appendChild(mainText);
$.getElementById("main").appendChild(main);

const list = $.createElement("div");
list.id = "list_div";
$.getElementById("main").appendChild(list);
