// for(var i = 0; i < 10; i++) {
// 	console.log("hello");
// }

// function Add(a, b) {
// 	console.log(a + b);
// 	return a + b;
// }

// var sum = Add(2, 2);

var ul = document.querySelectorAll("li");

ul.forEach(function(element, index){
	element.innerHTML = "element " + index;
});