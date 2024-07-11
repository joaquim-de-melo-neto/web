const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.jfif") {
    myImage.setAttribute("src", "images/dog.jfif");
  } else {
    myImage.setAttribute("src", "images/cat.jfif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
      }
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

  

  myButton.onclick = () => {
    setUserName();
  };
  
  
  
