'use strict';

function getChromeVersion () {     
  var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

  return raw ? parseInt(raw[2], 10) : 0;
}

// Before Chrome 64, designMode was accessed through the HTMLDocument alias.
// designMode doesn't exist before 45
// https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode#Browser_compatibility
if (getChromeVersion() < 64) {
  HTMLDocument.designMode = HTMLDocument.designMode === 'on' ? 'off' : 'on';
} else {
  document.designMode = document.designMode === 'on' ? 'off' : 'on';
}

