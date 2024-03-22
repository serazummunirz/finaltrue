
const inputXpath = '//div[@class="content-center"]';
const checkXpath = '//input[@type="checkbox"]';
const hCaptchapath = '//textarea[@name="h-captcha-response"]';

// Function to find the element based on XPath and click it
function checkElementByXPath(xpath) {
  const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (element) {
    let url = "http://127.0.0.1:5000/browser/1";
    let payload = {
      id: 1,
      status: 1
    }
    let options = {
      method: "PUT",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    }
    fetch(url, options)
    .then(response => console.log(response.status))
    console.log(`Updated API Request`);
  } else {
    console.log(`Not clicked`);
  }
}


function checkCaptchaByXPath(xpath) {
  const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (element) {
    let url = "http://127.0.0.1:5000/browser/1";
    let payload = {
      id: 1,
      status: 2
    }
    let options = {
      method: "PUT",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    }
    fetch(url, options)
    .then(response => console.log(response.status))
    console.log(`Updated API Request`);
  } else {
    console.log(`Not clicked`);
  }
}


// Function to find the element based on XPath and click it
function checkBoxByXPath(xpath) {
  const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (element) {
    element.click();
    console.log(`Clicked element with XPath: ${xpath}`);
  } else {
      console.log(`Not clicked`);
   }
}



// Function to continuously check for the XPath on the current page at an interval
function checkForXPath() {
  const interval = setInterval(() => {
    checkElementByXPath(inputXpath);
    checkBoxByXPath(checkXpath);
    checkCaptchaByXPath(hCaptchapath);
  }, 500); // Adjust the interval as needed (in milliseconds)
}

// Initiate the process on page load
checkForXPath();