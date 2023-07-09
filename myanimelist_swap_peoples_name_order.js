// ==UserScript==
// @name         MyAnimeList Swap Peoples' Name Order
// @namespace    https://greasyfork.org/en/users/96096-purple-pinapples
// @version      1.3.0
// @description  Swaps the name of people on MyAnimeList from the regular "Last Name, First Name" to "First Name Last Name"
// @author       PurplePinapples
// @match        https://myanimelist.net/people.php?id=*
// @match        https://myanimelist.net/people/*
// @license      WTFPL
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";
  const css_selector = "h1 > strong";
  let name = $(css_selector).text();
  let commaIndex = name.indexOf(",");
  if (commaIndex != -1) {
    let swappedName =
      name.substring(commaIndex + 2) + " " + name.substring(0, commaIndex);
    $(css_selector).html(swappedName);
  }
})();
