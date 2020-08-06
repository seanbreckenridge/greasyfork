// ==UserScript==
// @name        Letterboxd Hide Home in Menu
// @namespace   https://greasyfork.org/en/users/96096-purple-pinapples
// @match       https://letterboxd.com/*
// @grant       none
// @version     0.1
// @description Hide the Home Button in the profile dropdown menu
// @author      PurplePinapples
// @license     WTPFL
// ==/UserScript==

// doesnt seem to appear as soon as the page loads, try every 500ms if it fails
function hideItem() {
    const homeLi = document.querySelector('.subnav li.divider:nth-child(2)');
    if (homeLi) {
      homeLi.style.display = 'none';
    } else {
      setTimeout(() => hideItem(), 500); 
    }
}

(function() {
  hideItem();
})();