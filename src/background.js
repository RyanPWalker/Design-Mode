'use strict';

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, {file: "src/toggleDesignMode.js"});
});