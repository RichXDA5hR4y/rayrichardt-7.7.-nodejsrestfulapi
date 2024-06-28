// geometry.js

// Function to calculate area of a square
function calculateSquareArea(side) {
    return side * side;
}

// Function to calculate perimeter of a square
function calculateSquarePerimeter(side) {
    return 4 * side;
}

// Function to calculate area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function to calculate perimeter of a rectangle
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

module.exports = {
    calculateSquareArea,
    calculateSquarePerimeter,
    calculateRectangleArea,
    calculateRectanglePerimeter
};
