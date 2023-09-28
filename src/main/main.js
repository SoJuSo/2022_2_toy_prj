// console.log("js load in main");

// const addListButton = $.createElement("button"); // 버튼 추가
// addListButton.id = "addListButton";
// addListButton.innerText = "+";
// $.getElementById("main").appendChild(addListButton);

// const textfield = $.createElement("input");
// textfield.type = "text";
// textfield.id = "textfield";
// textfield.placeholder = "입력";
// $.getElementById("main").appendChild(textfield);
// // $.getElementById("textfield").addEventListener("click", addtodo());

// //추가하는 함수 생성
// const addtodo = () => {
//   if ($.getElementById("textfield").value == false) {
//     alert("비어있습니다!!");
//     console.log("!!");
//   }
//   console.log("11");
// };

// const addButton = $.getElementById("addListButton");
// addButton.addEventListener("on", addtodo());

// const deletetodo = (e) => {
//   let remove = e.target.parentElement;
//   remove.remove();
// };

//왜 위에 코드 실행시키면 바로 실행되는지 알아내기

console.log("js load in main");

//상단 입력, 추가 div로 감싸기
const upper_div_wrapper = $.createElement("div");
upper_div_wrapper.id = "upper_div_wrapper";
$.getElementById("main").appendChild(upper_div_wrapper);

const addListButton = $.createElement("button"); // 버튼 추가
addListButton.id = "addListButton";
addListButton.innerText = "+";
addListButton.onclick = "addtodo()";
$.getElementById("upper_div_wrapper").appendChild(addListButton);

const textfield = $.createElement("input");
textfield.type = "text";
textfield.id = "textfield";
textfield.placeholder = "입력";
$.getElementById("upper_div_wrapper").appendChild(textfield);
// $.getElementById("textfield").addEventListener("click", addtodo());

//중단부 입력
const middle_div_wrapper = $.createElement("div");
middle_div_wrapper.id = "middle_div_wrapper";
$.getElementById("main").appendChild(middle_div_wrapper);

//리스트 표기하는 ul li tag 생성
const ul_wrapper = $.createElement("ul");
ul_wrapper.id = "ul_wrapper";
$.getElementById("middle_div_wrapper").appendChild(ul_wrapper);

//ID, CLASS 분리

//#######################################################
/* 함수 라인 */
//#######################################################
//추가하는 함수 생성

//버튼에 추가하는 이벤트
const addListButton_add_function = $.getElementById("addListButton");
addListButton_add_function.addEventListener("click", () => {
  addtodo();
});
const addtodo = () => {
  if ($.getElementById("textfield").value == false) {
    alert("비어있습니다!!");
    // console.log("!!");
  } else {
  }
  // console.log("11");
};

const deletetodo = (e) => {
  let remove = e.target.parentElement;
  remove.remove();
};
