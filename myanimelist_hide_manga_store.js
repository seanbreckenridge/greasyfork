// ==UserScript==
// @name         MyAnimeList Hide Manga Store
// @namespace    https://greasyfork.org/en/users/96096-purplepinapples
// @version      0.5
// @description  Hides the Manga Store Ads on MyAnimeList.
// @author       PurplePinapples
// @match        https://myanimelist.net/*
// @license      WTFPL
// ==/UserScript==

(function() {
    "use strict";
    $(".mal-ad-unit").hide()
    $(".left-info-block-manga-store-button").parent().removeClass();
    $(".left-info-block-manga-store-button").hide();
    $(".manga-store-preview").hide();
    $(".manga-store-information").hide();
    $(".btn-affiliate.manga-store").hide();
    $(".btn-forum-manga-store").hide();
    // if we're on the forum
    if (window.location.href.indexOf("topicid=") == -1) {
        $("h2:contains('Manga Store')").parent().parent().hide();
    //on anime/manga page
    } else {
        $('h2:contains("Manga Store")').parent().hide();
    }
})();