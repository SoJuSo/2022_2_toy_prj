const $ = document;
console.log("js load in main");

const main = $.createElement("div");
const mainText = $.createTextNode("main");
main.appendChild(mainText);
$.getElementById("main").appendChild(main);
