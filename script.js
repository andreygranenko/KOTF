'use strict';

document.addEventListener("DOMContentLoaded", function() {
    // NavBar
    
    const navBar = document.querySelector('header'),
          menuItems = document.querySelectorAll('header li');

    function handleMouseOver() {
        menuItems.forEach(item => {
            const firstLetter = item.querySelector('.first-letter'),
                  restOfText = item.querySelector('rest-of-text');
            if (firstLetter && restOfText) {
                restOfText.style.display = 'inline';
            }
        });
    }

    function handleMouseOut() {
        menuItems.forEach(item => {
            const firstLetter = item.querySelector('.first-letter'),
                  restOfText = item.querySelector('.rest-of-text');
            if (firstLetter && restOfText) {
                restOfText.style.display = 'inline';
            }
        });
    }

    handleMouseOut();

    

    navBar.addEventListener('mouseover', e => {
        console.log('hey');
    });
  });