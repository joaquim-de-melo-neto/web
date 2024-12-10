const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
    .then(response => response.text())
    .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // Add your code here
    const mothers = JSON.parse(catString);
    for (let index = 0; index < mothers.length; index++) {
        if (index === mothers.length - 1) {
            motherInfo += ` and ${mothers[index].name}.`;
        }
        else motherInfo += `${mothers[index].name}, `;

        for (const cat of mothers[index].kittens) {
            total++;
            if (cat.gender === 'm') male++;
        }

        kittenInfo = `Males: ${male} Female: ${total - male}`;
    };
    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
