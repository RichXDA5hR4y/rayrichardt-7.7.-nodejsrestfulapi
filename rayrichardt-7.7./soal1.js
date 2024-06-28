// index.js

const readline = require('readline');
const geometry = require('./geometry');
const logging = require('./soal2');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to handle square calculations
function handleSquare() {
    rl.question('Enter the side length of the square: ', (answer) => {
        const side = parseFloat(answer);
        
        const area = geometry.calculateSquareArea(side);
        const perimeter = geometry.calculateSquarePerimeter(side);

        console.log(`Square - Area: ${area}, Perimeter: ${perimeter}`);

        logging.writeToLogFile(`Calculations for Square - Side: ${side}, Area: ${area}, Perimeter: ${perimeter}`);

        rl.close();
    });
}

// Function to handle rectangle calculations
function handleRectangle() {
    rl.question('Enter the length of the rectangle: ', (lengthAnswer) => {
        rl.question('Enter the width of the rectangle: ', (widthAnswer) => {
            const length = parseFloat(lengthAnswer);
            const width = parseFloat(widthAnswer);
            
            const area = geometry.calculateRectangleArea(length, width);
            const perimeter = geometry.calculateRectanglePerimeter(length, width);

            console.log(`Rectangle - Area: ${area}, Perimeter: ${perimeter}`);

            logging.writeToLogFile(`Calculations for Rectangle - Length: ${length}, Width: ${width}, Area: ${area}, Perimeter: ${perimeter}`);

            rl.close();
        });
    });
}

// Main logic
rl.question('Calculate (1) Square or (2) Rectangle? ', (choice) => {
    if (choice === '1') {
        handleSquare();
    } else if (choice === '2') {
        handleRectangle();
    } else {
        console.log('Invalid choice. Please enter 1 or 2.');
        rl.close();
    }
});
