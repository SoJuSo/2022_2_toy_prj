const $ = document;
console.log("js load in main");

const advice = $.createElement("div");
const adviceText = $.createTextNode("main");
advice.appendChild(adviceText);
$.getElementById("main").appendChild(advice);
