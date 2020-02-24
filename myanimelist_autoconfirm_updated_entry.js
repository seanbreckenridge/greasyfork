// ==UserScript==
// @name         MyAnimeList Auto-Confirm updated entry
// @namespace    https://greasyfork.org/en/users/96096-purple-pinapples
// @version      0.1.4
// @description  Automatically goes back to anime page after successfully updating an entry
// @author       PurplePinapples
// @license      WTFPL
// @run-at       document-end
// @match        https://myanimelist.net/editlist.php?type=anime&id=*
// @match        https://myanimelist.net/panel.php?go=add&selected_series_id=*
// @match        https://myanimelist.net/panel.php?go=editmanga&id=*
// @match        https://myanimelist.net/ownlist/anime/*/edit
// @match        https://myanimelist.net/ownlist/manga/*/edit
// @match        https://myanimelist.net/ownlist/anime/*/delete
// @match        https://myanimelist.net/ownlist/manga/*/delete
// @match        https://myanimelist.net/panel.php?go=addmanga&selected_manga_id=*
// @match        https://myanimelist.net/ownlist/anime/add?selected_series_id=*
// @match        https://myanimelist.net/ownlist/manga/add?selected_manga_id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if ($("#content > .goodresult > strong:contains('Successfully')").length > 0) {
        location.href = $("#content > .goodresult > a:last-child").attr("href");
    }
})();