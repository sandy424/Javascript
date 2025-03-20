let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for(var s in salaries) {
    sum += salaries[s];
}
console.log("월급의 합계: " + sum);