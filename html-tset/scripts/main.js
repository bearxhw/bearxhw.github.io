let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg') {
      myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'FirefoxUser：' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'FirefoxUser：' + storedName;
}
myButton.onclick = function() {
   setUserName();
}