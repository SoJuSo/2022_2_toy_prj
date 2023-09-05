console.log("js load in main");

let temp = 0;
// 방법 1
// const addListButton = $.createElement("input");
// addListButton.type = "button";
// addListButton.id = "addListButton";
// addListButton.value = "+";

// 방법 2
const addListButton = $.createElement("button");
addListButton.id = "addListButton";
addListButton.innerText = "+";
addListButton.addEventListener("click", () => {
  temp++;
  const list = $.createElement("div");
  list.id = "list_div";
  const input = $.createElement("input");
  list.appendChild(input);
  $.getElementById("main").appendChild(list);

  const del = $.createElement("button");
  del.id = "del_button";
  del.addEventListener("click", () => {
    deletefunc();
  });
  del.innerText = "-";
  list.appendChild(del);
  $.getElementById("main").appendChild(list);
});
$.getElementById("main").appendChild(addListButton);

const deletefunc = () => {
  console.log("del", temp);
  const div = $.getElementById("list_div");
  div.remove();
  temp--;
};
