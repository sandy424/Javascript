var person = {
	name: 'Lee',
	gender: 'male',
	sayHello: function() {
		console.log('Hi! My name is ' + this.name);
		}
};
console.log(person);
person.sayHello();