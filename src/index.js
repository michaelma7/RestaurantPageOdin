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
    homeButton.addEventListener('click', (e) => {   content.removeChild(content.lastChild);
                                                    content.appendChild(home);
                                                });
    menuButton.addEventListener('click', (e) => {   content.removeChild(content.lastChild);
                                                    content.appendChild(menu);
                                                });
    aboutButton.addEventListener('click', (e) => {  content.removeChild(content.lastChild);
                                                    content.appendChild(about);
                                                });

    //store tab data (or should I only call it when button clicked?)
    const home = homeContent();
    const menu = menuContent();
    const about = aboutContent();
    
    //default load home page data
    content.appendChild(home);

})();
