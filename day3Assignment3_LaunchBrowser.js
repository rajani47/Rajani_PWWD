/* Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch
 messages, and `runTests` with `switch` for test type messages. */

let browserName;
let testType;

// Write a function to launch a browser based on the browser name

function launchBrowser(browserName) {
     if(browserName == "Chrome") {
        console.log(browserName + " is launched successfully.");
    }
    else 
      console.log("Some other Browser is launched successfully. Name is : " + browserName);
}

// Write a function to run tests based on the test type

function runTests(testType) {
    switch(testType) {
        case "Smoke":
            console.log("Test Type is : " + testType);
            break;
        case "Regression":
            console.log("Test Type is : " + testType);
            break;
        case "Sanity":
            console.log("Test Type is : " + testType);
            break;
        default:
            console.log("Test Type is Functional");     
    }
}

// Function calling
launchBrowser('Chrome');
runTests('Regression');

console.log("--------------------------------------------------");

// Function calling
launchBrowser('UnknownBrowser');
runTests('Not clear');
