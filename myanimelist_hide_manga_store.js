// ==UserScript==
// @name         MyAnimeList Hide Manga Store
// @namespace    https://greasyfork.org/en/users/96096-purplepinapples
// @version      0.7
// @description  Hides the Manga Store Ads on MyAnimeList.
// @author       PurplePinapples
// @match        https://myanimelist.net/*
// @license      MIT
// ==/UserScript==
function tail(some_list) {
    return some_list[some_list.length - 1];
}

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
    if (window.location.href.indexOf("topicid=") != -1) {
        const manga_store_h2 = $("h2:contains('Manga Store')")
        // bubble up tree till we hit something that contains a profile image (user profile), then hide the prev element
        let elements = [manga_store_h2]
        while ($(tail(elements)).find("a[href^='/profile']").length === 0) {
            elements.push($(tail(elements).parent()))
        }
        // hide the second to last item
        elements.pop() // remove highest item (full page which includes profile pic)
        if (elements.length > 0) {
            elements.pop().hide();
        }
    } else {
        //on anime/manga page
        let c = window.location.href
        if (c.indexOf("/anime/") != -1 || c.indexOf("/manga/") != -1 || c.indexOf("anime.php?id=") != -1 || c.indexOf("manga.php?id=") != -1) {
            $('h2:contains("Manga Store")').parent().hide();
        }
    }
})();