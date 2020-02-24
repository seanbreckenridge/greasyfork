// ==UserScript==
// @name         MyAnimeList Hide Cover Image
// @namespace    https://greasyfork.org/en/users/96096-purple-pinapples
// @version      0.1
// @description  Hides the Cover Image on MAL
// @author       PurplePinapples
// @include      /^https?:\/\/myanimelist\.net\/(anime|manga)\/\d+\/?.+
// @include      /^https?:\/\/myanimelist\.net\/(anime|manga)\.php\?id=\d
// @exclude      /^https?:\/\/myanimelist\.net\/(anime|manga)\/\d+\/[^\/]+\/[a-z]+
// @license      WTFPL
// @run-at       document-end
// ==/UserScript==

(function() {
    "use strict";
    $("tr > td.borderClass > div > div > a > img.ac").hide();
})();