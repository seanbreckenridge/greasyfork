// ==UserScript==
// @name         MyAnimeList Swap Peoples' Name Order
// @namespace    https://greasyfork.org/en/users/96096-purple-pinapples
// @version      1.1.1
// @description  Swaps the name of people on MyAnimeList from the regular "Last Name, First Name" to "First Name Last Name"
// @author       PurplePinapples
// @match        https://myanimelist.net/people.php?id=*
// @match        https://myanimelist.net/people/*
// @license      WTFPL
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var name = $("h1").text();
    var commaIndex = name.indexOf(",");
    if (commaIndex != -1) {
        var swappedName = name.substring(commaIndex + 2) + " " + name.substring(0, commaIndex);
        $("h1").html(swappedName);
    }
})();
