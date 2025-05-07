// Regular function version
function createCounter(start) {
    let count = start;
    return function () {
        console.log(count);
        count++;
    };
}

// Arrow function version
const createArrowCounter = (start) => {
    let count = start;
    return () => {
        console.log(count);
        count++;
    };
};

// Testing closures
const counter1 = createCounter(5);
counter1(); 
counter1(); 

const counter2 = createArrowCounter(10);
counter2(); 
counter2(); 
