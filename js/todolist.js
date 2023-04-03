
const todoForm = document.getElementById("todo-form"); 
const todoInput = document.querySelector("#todo-form input"); // Form 하위에 있는 Input 가져옴. selector 다음 띄어쓰고 element 입력
// const todoInput = todoForm.querySelector("input"); // 또는 이렇게 해도 됨!
const todoList = document.getElementById("todo-list");

let toDos = [];

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(toDos)) // 로컬스토리지에 저장할 때 배열을 텍스트로 변경.
}

function deleteTodo(event){
    const li = event.target.parentElement ; // 선택한 element의 부모 element를 변수로 지정
    toDos = toDos.filter(potato => potato.id !== parseInt(li.id)); // 필터링한 새로운 배열을 toDos 기존 배열에 덮어쓰기. toDo.id는 number라서 속성값으로 추가된 li.id (string type)과 비교할 수 없음. parseInt로 변환해서 비교
    li.remove(); // 선택한 요소 삭제
    saveTodo(); // 새롭게 생성된 배열 toDos를 db에 저장
}

function showTodo(newTodoObj){
    const li = document.createElement("li"); // 문서에 <li> 요소 생성
    li.id = newTodoObj.id; //<li> 에 속성 추가
    const span = document.createElement("span"); // 문서에 <span> 요소 생성
    const btn = document.createElement("button"); // 문서에 <button> 요소 생성
    todoList.append(li); // "todo-list" 영역에 생성한 <li>를 추가
    li.appendChild(span); // li 하위에 child에 생성한 <span> 추가
    li.appendChild(btn);
    span.innerText = newTodoObj.text; // 생성한 span에 추가한 할일을 텍스트로 추가
    btn.innerText = " DONE"; // 생성한 btn에 추가한 삭제 버튼을 위한 텍스트(X) 추가
    btn.addEventListener("click", deleteTodo)
    // console.log(li.id); //확인용

};

function todoHandler(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""; // 입력 필드 비워주기
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); // 배열에 새로 생성한 객체 저장
    saveTodo();
    showTodo(newTodoObj);
}

todoForm.addEventListener("submit", todoHandler) // submit 속성을 이용하려면 form 형태에서 가능


const savedTodos = localStorage.getItem("todos") // 로컬스토리지에 있는 값 가져옴

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos); // string을 js에서 사용 가능한 object로 만듬. arra로. typeof parsedTodos 치면 object 나옴
    toDos = parsedTodos // 기존에 있던 배열에 파싱된 값들을 할당
    parsedTodos.forEach(showTodo); // 각 배열에 있는 아이템들에 shoTodo함수를 호출하여 화면에 보여주기
}