'use strict';

var currentDesignMode = '';
// Before Chrome 64, designMode was accessed through the HTMLDocument alias.
// designMode doesn't exist before 45
// https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode#Browser_compatibility
if (getChromeVersion() < 64) {
  HTMLDocument.designMode = HTMLDocument.designMode === 'on' ? 'off' : 'on';
  currentDesignMode = HTMLDocument.designMode;
} else {
  document.designMode = document.designMode === 'on' ? 'off' : 'on';
  currentDesignMode = document.designMode;
}

chrome.extension.sendMessage({
  "currentDesignMode": currentDesignMode
});
