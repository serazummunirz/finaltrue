// Get the XPath you want to search for (change this to your desired XPath)
const inputXpath = '//input[@type="checkbox"]'; // Replace this with your XPath

// Function to find the element based on XPath and click it
function checkElementByXPath(xpath) {
  const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (element) {
    element.click();
    console.log(`Clicked element with XPath: ${xpath}`);
  } else {
      console.log(`Not clicked`);
   }
    
  // ;
}

// Function to continuously check for the XPath on the current page at an interval
function checkForXPath() {
  const interval = setInterval(() => {
    checkElementByXPath(inputXpath);
  }, 1000); // Adjust the interval as needed (in milliseconds)
}

// Initiate the process on page load
checkForXPath();