// logging.js

const fs = require('fs');

// Function to write log to log.txt file
function writeToLogFile(message) {
    const logFilePath = 'log.txt';
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: ${message}\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error(`Error writing to log file: ${err}`);
        } else {
            console.log(`Logged: ${message}`);
        }
    });
}

module.exports = {
    writeToLogFile
};
