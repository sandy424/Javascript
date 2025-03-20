/**
 * ES6에서 추가된 for-of문
 * 배열의 요소를 순회하기 위해 사용한다.
 */
const array = [1,2,3];
array.name = 'my array';

for(const value of array) {
    console.log(value);
}

console.log('------------------------');
for(const [index, value] of array.entries()) {
    console.log(index, value);
}
