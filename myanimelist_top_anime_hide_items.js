// ==UserScript==
// @name         MyAnimeList Top Anime Hide Items
// @namespace    https://greasyfork.org/en/users/96096-purple-pinapples
// @version      0.2
// @description  Hides anything on the "top anime/manga" pages that are already on your list
// @author       PurplePinapples
// @match        https://myanimelist.net/topanime.php*
// @match        https://myanimelist.net/topmanga.php*
// @license      WTFPL
// @run-at       document-end
// ==/UserScript==

$("tr.ranking-list").each(function () {
  if ($(this).find(".notinmylist").length === 0) {
    $(this).hide();
  }
});
