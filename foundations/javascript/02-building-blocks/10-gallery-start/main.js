//OK 1. Declare a const array listing the filenames of each image, such as 'pic1.jpg'. 
//OK 2. Declare a const object listing the alternative text for each image. 
//OK 3. Loop through the array of filenames, and for each one, insert an <img> 
//    element inside the thumb-bar <div> that embeds that image in the page along with its alternative text. 
//OK 4. Add a click event listener to each <img> inside the thumb-bar <div> so that,
//    when they are clicked, the corresponding image and alternative text are displayed in the displayed-img <img> element.
// OK 5. Add a click event listener to the <button> so that when it is clicked,
//    a darken effect is applied to the full-size image. When it is clicked again, the darken effect is removed again.

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altTexts = {
    'pic1.jpg': 'olho do capiroto doido',
    'pic2.jpg': 'paredes alcalinas',
    'pic3.jpg': 'flores roxas',
    'pic4.jpg': 'paredes de pirâmide egípcia',
    'pic5.jpg': 'borboleta monarca'
};


/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', altTexts[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener(
        'click', e => {
            // displayedImage.setAttribute('src', e.target.getAttribute('src'));
            displayedImage.src = e.target.src; // prefira essa já que src é um propriedade diretamente acessível
            displayedImage.alt = e.target.alt;
        }
    );
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',
    () => {
        const btnClass = btn.getAttribute('class');
        if (btnClass === 'dark') {
            btn.setAttribute('class', 'light');
            btn.textContent = 'Ligthen';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        }

        else {
            btn.setAttribute('class', 'dark');
            btn.textContent = 'Darken';
            overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
    });