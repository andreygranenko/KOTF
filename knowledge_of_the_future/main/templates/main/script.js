'use strict';

document.addEventListener("DOMContentLoaded", function() {
    // NavBar
    
    const navBar = document.querySelector('header'),
          menuItems = document.querySelectorAll('header li');

    function handleMouseOver() {
        menuItems.forEach(item => {
            const firstLetter = item.querySelector('.first-letter'),
                  restOfText = item.querySelector('.rest-of-text');
            console.log(firstLetter);
            console.log(restOfText); 
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
                restOfText.style.display = 'none';
            }
        });
    }

    handleMouseOut();
    navBar.addEventListener('mouseover', handleMouseOver);
    navBar.addEventListener('mouseout', handleMouseOut);
    

 //da
  });