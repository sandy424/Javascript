var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'mael'
};
for(var p in person) {
    console.log(p + ": " + person[p]);
}

var array = ['one', 'two'];

for(var i in array) {
    console.log(i + ': ' + array[i]);
}