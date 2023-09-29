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

//#######################################################
/* 상단부 입력 라인*/
//#######################################################
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
textfield.placeholder = "할 일 입력";
$.getElementById("upper_div_wrapper").appendChild(textfield);
// $.getElementById("textfield").addEventListener("click", addtodo());

//#######################################################
/* 중단부 리스트 */
//#######################################################
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

//버튼에 이벤트 추가
const addListButton_add_function = $.getElementById("addListButton");
addListButton_add_function.addEventListener("click", () => {
  addtodo();
});

//임시
const addtodo = () => {
  const inputtext = $.getElementById("textfield");
  if (inputtext.value == false) {
    alert("할 일을 입력해 주세요!");
    // console.log("!!");
  } else {
    // alert(`${inputtext}`);
    let addlist = $.createElement("li");
    let delete_button = $.createElement("button");
    let checkbox = $.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    addlist.innerHTML = new Date().toLocaleString() + "\n" + inputtext.value;

    $.getElementById("ul_wrapper").appendChild(addlist);
    addlist.appendChild(delete_button);
    addlist.appendChild(checkbox);

    delete_button.addEventListener("click", deletetodo);
    delete_button.innerText = "x";
    // delete_button.style.fontSize = "20px";

    inputtext.value = "";
    // inputtext.focus();
    checkbox.addEventListener("change", function () {
      //할일 완료 후 클릭시 밑줄로 표시
      //temp로 구현하니 역시나, 모든 속성이 temp에 따라 바뀐다.
      //체크박스를 통해 구현해보자
      if (checkbox.checked) {
        addlist.style.textDecorationLine = "line-through";
      } else {
        addlist.style.textDecorationLine = "none";
      }
    });
  }
  // console.log("11");
};

const deletetodo = (e) => {
  let remove = e.target.parentElement; //해당 element만 삭제되어야 하기 때문
  remove.remove();
};
