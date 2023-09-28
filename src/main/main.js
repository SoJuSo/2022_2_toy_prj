console.log("js load in main");

const addListButton = $.createElement("button"); // 버튼 추가
addListButton.id = "addListButton";
addListButton.innerText = "+";
addListButton.onclick = "addtodo()";
$.getElementById("main").appendChild(addListButton);
const addListButton_add_function = $.getElementById("addListButton");
addListButton_add_function.addEventListener("click", () => {
  addtodo();
});

const textfield = $.createElement("input");
textfield.type = "text";
textfield.id = "textfield";
textfield.placeholder = "입력";
$.getElementById("main").appendChild(textfield);
// $.getElementById("textfield").addEventListener("click", addtodo());

//추가하는 함수 생성
const addtodo = () => {
  if ($.getElementById("textfield").value == false) {
    alert("비어있습니다!!");
    // console.log("!!");
  }
  // console.log("11");
};

const deletetodo = (e) => {
  let remove = e.target.parentElement;
  remove.remove();
};
