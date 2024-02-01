import _ from 'lodash';
import homeContent from './homeContent';
import aboutContent from './aboutContent';
import menuContent from './menuContent';
import './style.css';

const pageController = (function () {
    //cache DOM
    const content = document.querySelector('#content');
    const homeButton = document.querySelector('.home');
    const menuButton = document.querySelector('.menu');
    const aboutButton = document.querySelector('.about');
    
    //event listeners
    homeButton.addEventListener('click', (e) => {content.appendChild(home)});
    menuButton.addEventListener('click', (e) => {content.appendChild(aboutContent())});
    aboutButton.addEventListener('click', (e) => {console.log('wow')});

    //store tab data (or should I only call it when button clicked?)
    const home = homeContent();
    // const menu = menuContent();
    // const about = aboutContent();

    content.appendChild(home);
})();
