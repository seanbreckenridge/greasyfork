// ==UserScript==
// @name         Remove darkened /r/anime dark mode spoiler links
// @namespace    https://greasyfork.org/en/users/96096-purplepinapples
// @version      0.4
// @description  removes the maroon-ish color of visited links on /r/anime dark mode; sets them to pink
// @author       PurplePinapples
// @match        *://*.reddit.com/r/anime/*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";
     $('head').append('<style>a.title[href*="spoilers"]:visited {color: #c42fd8 !important}</style>');
})();