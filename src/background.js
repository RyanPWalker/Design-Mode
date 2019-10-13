'use strict';

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, {file: "src/utils/getChromeVersion.js"}); // functions called by other files need to be loaded first
  chrome.tabs.executeScript(null, {file: "src/toggleDesignMode.js"});
  chrome.tabs.executeScript(null, {file: "src/disableButtons.js"});
});
