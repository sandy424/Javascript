let user = {
    name: "John",
    age: 30
};
let clone = {};
//빈 객체에 user 프로퍼티 복사
for(let key in user) {
    clone[key] = user[key];
}

clone.name = "Pete";
console.log(user.name);
console.log(clone.name);
console.log(user);
console.log(clone);

/**
 * 방법 2 Object.assign 문법 사용
 */
let per1 = {canView:true};
let per2 = {canEdit:true};
Object.assign(user, per1, per2);

