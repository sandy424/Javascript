const inputBox = document.getElementById('input-box');
const checkList = document.getElementById('list');

// 추가 버튼 함수
function addTask() {
    if(inputBox === '') {
        alert('입력된 내용이 없습니다.');
    }else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        checkList.appendChild(li);
    }
}