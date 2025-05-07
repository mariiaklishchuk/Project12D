// Default parameter in a function
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetUser();
greetUser("Mariia"); 

// `this` behavior in regular vs arrow function
const user = {
    name: "John",
    sayHi: function () {
        console.log("Regular function:", this.name);
    },
    sayHiArrow: () => {
        console.log("Arrow function:", this.name);
    }
};

user.sayHi(); // Regular function: John
user.sayHiArrow(); // Arrow function: undefined (or window object in browsers)

// `var` vs `let` in loops
console.log("Loop Scope Test:");

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 100);
}

