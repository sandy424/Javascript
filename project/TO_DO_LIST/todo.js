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

checkList.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

//사이드바 버튼
document.querySelector(".sidebar .side-btn").addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("active");
})
//setting 버튼 테마 변경
const setting = document.querySelector(".links");
