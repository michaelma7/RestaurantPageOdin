import blueberry from './photos/best-blueberry-muffin.jpg';
import molten from './photos/Easy-Molten-Chocolate-Lava-Cakes4.jpg';
import oreo from './photos/oreo-muffins-14.jpg';
import brown from './photos/ya-brown-butter-maple-muffins.jpg';

function carousel () {
    //create carousel div
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    //create buttons
    const leftButton = document.createElement('button');
    leftButton.innerHTML = '&#8249';
    leftButton.classList.add('arrow');
    leftButton.setAttribute('id', 'left');
    const rightButton = document.createElement('button');
    rightButton.innerHTML = '&#8250';
    rightButton.classList.add('arrow');
    rightButton.setAttribute('id', 'right');
    
    //pic array for insertion
    const blueberryMuffin = new Image();
    blueberryMuffin.src = blueberry;
    const moltenMuffin = new Image();
    moltenMuffin.src = molten;
    const oreoMuffin = new Image();
    oreoMuffin.src = oreo;
    const brownMuffin = new Image();
    brownMuffin.src = brown; 
    const picArray = [moltenMuffin, blueberryMuffin, oreoMuffin, brownMuffin];

    //create slides with ul
    const slides = document.createElement('ul');
    slides.classList.add('slideshow');
    for(let i=0; i<4; i++) {
        const pic = document.createElement('li');
        pic.classList.add(`slide`);
        pic.appendChild(picArray[i]);
        slides.appendChild(pic);
    };

    //creating event listeners for scrolling
    leftButton.addEventListener('click', (e) => {
        const slide = document.querySelector('.slide');
        const slideWidth = slide.clientWidth;
        slides.scrollLeft -= slideWidth;
    });
    rightButton.addEventListener('click', (e) => {
        const slide = document.querySelector('.slide');
        const slideWidth = slide.clientWidth;
        slides.scrollLeft += slideWidth;
    });

    //creating carousel div
    carousel.appendChild(leftButton);
    carousel.appendChild(rightButton);
    carousel.appendChild(slides);

    return carousel
}

export default carousel