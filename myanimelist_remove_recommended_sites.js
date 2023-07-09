// ==UserScript==
// @name         MyAnimeList Remove Recommended Sites
// @namespace    https://greasyfork.org/en/users/96096-purple-pinapples
// @version      0.9.5
// @description  Removes the reccomended sites on the bottom of the page.
// @author       PurplePinapples
// @match        https://myanimelist.net/*
// @license      WTFPL
// ==/UserScript==

$("head").append(
  '<style type="text/css">.fb-page {display: none !important;} .footer-link-icon-block {display: none !important;}.page-common #copyright{padding-top: 10px !important;}</style>'
);
