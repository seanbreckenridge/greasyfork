// ==UserScript==
// @name         MyAnimeList Remove Unnecessary Spacing
// @namespace    https://greasyfork.org/en/users/96096-purple-pinapples
// @version      1.0.3
// @description  Removes unnecessary padding on MyAnimeList profiles.
// @author       PurplePinapples
// @include      https://myanimelist.net/profile/*
// @license      WTFPL
// @run-at       document-end
// ==/UserScript==

$('head').append('<style type="text/css">\n .profile .user-profile-about\n{margin-bottom: 0px !important;\n}\n .page-common .pt24 \n{padding-top: 0px !important\n}\n</style>');