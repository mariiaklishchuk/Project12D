// call before definitions
try {
    console.log(getCalculation("area")("circle", 10));
} catch (error) {
    console.error("Error:", error.message);
}

// Function Declaration
function calculateArea(shape, value) {
    if (shape === "circle") {
        return Math.PI * value * value;
    } else if (shape === "square") {
        return value * value;
    } else {
        return "Invalid shape";
    }
}

// Function Expression
const calculatePerimeter = function (shape, value) {
    if (shape === "circle") {
        return 2 * Math.PI * value;
    } else if (shape === "square") {
        return 4 * value;
    } else {
        return "Invalid shape";
    }
};

// Higher-Order Function
function getCalculation(type) {
    return type === "area" ? calculateArea : calculatePerimeter;
}

// call after definitions
console.log(getCalculation("area")("circle", 10)); // Works now
