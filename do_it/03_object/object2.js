//빈 객체 생성
var person = new Object();
//프로퍼티 추가
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function() {
    console.log("Hi! My name is " + this.name);
};

console.log(person);
person.sayHello();