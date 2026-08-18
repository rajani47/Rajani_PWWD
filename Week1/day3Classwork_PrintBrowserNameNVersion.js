const browserName = "Chrome";
const browserVersion = "1.0.0.120";

function displayBrowserVersion() {
   let browserNameFunctionScope = "Firefox120";
    if(browserName == "Chrome") {
        console.log("Browser Name is : " + browserName);
        console.log("Browser Version is : " + browserVersion);
    }
    console.log("Browser Version is : " + browserName);
    console.log("Browser Version Function Scope is : " + browserNameFunctionScope);
}
displayBrowserVersion();
   console.log("Browser Version is : " + browserName);
   //console.log("Browser Version Function Scope is : " + browserNameFunctionScope);
