// ==UserScript==
// @name         MyAnimeList Seasonal Anime Hide Dropped.
// @namespace    https://greasyfork.org/en/users/96096-purple-pinapples
// @version      0.1.2
// @description  Toggles dropped to off on Seasonal Lists automatically
// @author       PurplePinapples
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @license      WTFPL
// @run-at       document-end
// @include      https://myanimelist.net/anime/season*
// ==/UserScript==

var returnValue = function () {
    "use strict";
    $("ul#mylist>li#dropped").removeClass("selected");
}();