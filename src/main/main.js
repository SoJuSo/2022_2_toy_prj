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
textfield.addEventListener("keyup", (e) => {
  if (e.key == "Enter" || e.key == 13) {
    e.preventDefault();
    $.getElementById("addListButton").click();
  }
});

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
  const inputtext = $.getElementById("textfield");
  addtodo(inputtext);
});

//임시
const addtodo = (inputtext) => {
  if (inputtext.value == false) {
    alert("할 일을 입력해 주세요!");
    // console.log("!!");
  } else {
    // alert(`${inputtext}`);
    let addlist = $.createElement("li");
    let listtext = $.createElement("div");
    let delete_button = $.createElement("button");
    delete_button.id = "list_button_delete";
    let checkbox = $.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = "list_input_checkbox";
    //날짜 입력받기
    const date = $.createElement("div");
    date.id = "list_div_date";
    date.innerText = new Date()
      .toLocaleString()
      .slice(0, new Date().toLocaleString().length - 3); //초단위 제거

    if (inputtext.value === undefined) {
      listtext.innerText = inputtext;
    } else {
      listtext.innerText = inputtext.value;
    }
    console.log(inputtext);
    if (inputtext.value !== undefined) {
      setLocalStorage(inputtext.value);
    }

    $.getElementById("ul_wrapper").appendChild(addlist);
    addlist.appendChild(listtext);
    addlist.appendChild(date);
    addlist.appendChild(delete_button);
    addlist.prepend(checkbox);

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
        listtext.style.textDecorationLine = "line-through";
        date.style.textDecorationLine = "line-through";
      } else {
        listtext.style.textDecorationLine = "none";
        date.style.textDecorationLine = "none";
      }
    });
  }
  // console.log("11");
};

const deletetodo = (e) => {
  let remove = e.target.parentElement; //해당 element만 삭제되어야 하기 때문
  remove.remove();
};

if (getLocalStorage) {
  addtodo(getLocalStorage());
}
