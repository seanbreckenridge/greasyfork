// ==UserScript==
// @name         Change MAL Club in Menu
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Changes the Clubs link in the profile dropdown from all clubs to your clubs
// @author       PurplePinapples
// @match        https://myanimelist.net/*
// @exclude      /^https:\/\/myanimelist\.net\/(anime|manga)list\/*
// @license      WTFPL
// ==/UserScript==

(function () {
  "use strict";
  $("#header-menu")
    .find("ul>li:contains('Clubs')>a")
    .attr("href", $(".header-profile-button").attr("href") + "/clubs");
})();
