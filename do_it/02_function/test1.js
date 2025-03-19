let age = Number(prompt('나이를 입력하세요'));

function checkAge(age) {
    return (age>18) ? true : confirm('보호자의 동의를 받으셨나요?');
}

checkAge(age);