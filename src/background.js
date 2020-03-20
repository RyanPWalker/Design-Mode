'use strict';

chrome.extension.onMessage.addListener(function (request) {
  var currentDesignMode = request.currentDesignMode;
  var iconPath = currentDesignMode === 'on' ? 'cursor' : 'greyscaleCursor';

  chrome.browserAction.setIcon({
      path: {
          "16": "images/" + iconPath + "16.png",
          "32": "images/" + iconPath + "32.png",
          "64": "images/" + iconPath + "64.png",
          "128": "images/" + iconPath + "128.png"
      }
  });
});

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, {file: "src/utils/getChromeVersion.js"}); // functions called by other files need to be loaded first
  chrome.tabs.executeScript(null, {file: "src/toggleDesignMode.js"});
  chrome.tabs.executeScript(null, {file: "src/disableButtons.js"});
});
