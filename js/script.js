'use strict';
let offset = 0;
const sliderElements = document.querySelector('.slider-box__wrapper');
const buttonNext = document.querySelector('.icon_next');
const buttonPrevious = document.querySelector('.icon_previous');

const resolutions = {
    phone: window.matchMedia('(max-width: 909px)'),
    tablet: window.matchMedia('(max-width: 1429px)'),
    laptop: window.matchMedia('(max-width: 1629px)')
}

const nextSlide = () => {
    buttonPrevious.style.opacity = '1';
    if(resolutions.phone.matches) {
        offset -= 32.5;
        if(offset <= -162.5) {
            buttonNext.style.opacity = '.3';
            offset = -162.5;
        }
        sliderElements.style.left = offset + 'rem';
    } else if(resolutions.tablet.matches) {
        offset -= 32.5;
        if(offset <= -130) {
            buttonNext.style.opacity = '.3';
            offset = -130;
        }
        sliderElements.style.left = offset + 'rem';
    } else if(resolutions.laptop.matches) {
        offset -= 32.5;
        if(offset <= -65) {
            buttonNext.style.opacity = '.3';
            offset = -65;
        }
        sliderElements.style.left = offset + 'rem';
    } else {
        offset -= 32.5;
        if(offset <= -65) {
            buttonNext.style.opacity = '.3';
            offset = -65;
        }
        sliderElements.style.left = offset + 'rem';
    }
}

const previousSlide = () => {
    buttonNext.style.opacity = '1';
    if(resolutions.phone.matches) {
        offset += 32.5;
        if(offset >= 0) {
            buttonPrevious.style.opacity = '.3';
            offset = 0;
        }
        sliderElements.style.left = offset + 'rem';
    } else if(resolutions.tablet.matches) {
        offset += 32.5;
        if(offset >= 0) {
            buttonPrevious.style.opacity = '.3';
            offset = 0;
        }
        sliderElements.style.left = offset + 'rem';
    } else if(resolutions.laptop.matches) {
        offset += 32.5;
        if(offset >= 0) {
            buttonPrevious.style.opacity = '.3';
            offset = 0;
        }
        sliderElements.style.left = offset + 'rem';
    } else {
        offset += 32.5;
        if(offset >= 0) {
            buttonPrevious.style.opacity = '.3';
            offset = 0;
        }
        sliderElements.style.left = offset + 'rem';
    }
}

buttonNext.addEventListener('click', nextSlide);
buttonPrevious.addEventListener('click', previousSlide);

