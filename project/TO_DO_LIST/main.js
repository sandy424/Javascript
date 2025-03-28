const inputBox = document.getElementById("input-box");
const checkList = document.getElementById("list");

// 추가 버튼 함수
function addTask() {
    if(inputBox.value === '') {
        alert('입력된 내용이 없습니다.');
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        checkList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
} 

checkList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

//사이드바 버튼
const sideBar = document.querySelector('.sidebar');
const sideBtn = document.querySelector('.side-btn span');

function openBar() {
    sideBar.classList.toggle('active');
}
sideBtn.addEventListener('click', openBar);