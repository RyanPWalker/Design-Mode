'use strict';

var designModeIsOn = document.designMode === 'on';
var buttons = document.getElementsByTagName('button');
var disableAnchors = function(e) {
    e.preventDefault();
}
var disableButtons = function() {
    for (var i = 0; i < buttons.length; i++) {
        var old_element = buttons[i];
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
    }
}

if (designModeIsOn) {
    document.addEventListener('click', disableAnchors);
    disableButtons();
} else {
    document.removeEventListener('click', disableAnchors);
}