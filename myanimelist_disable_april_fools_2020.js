// ==UserScript==
// @name         MyAnimeList Disable April Fools 2020
// @namespace    https://greasyfork.org/en/users/96096-purple-pinapples
// @version      0.1.0
// @description  Disables MALs emoji styling for April Fools 2020.
// @author       PurplePinapples
// @include      https://myanimelist.net/*
// @license      WTFPL
// @run-at       document-end
// ==/UserScript==

document.querySelector("body").classList.remove("aprilfools_2020");
