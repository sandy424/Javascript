let user = {name: 'John'};
let admin = user;
admin.name = 'Pete'; //변경됨
console.log(user.name);
console.log(admin);
console.log("--------------");
/**
 * 참조에 의한 비교
 * 동등 연산자 ==
 * 일치 연산자 ===  둘다 동일하게 동작함.
 */
let a = {};
let b = a;  //복사
console.log(a==b);
console.log(a===b);