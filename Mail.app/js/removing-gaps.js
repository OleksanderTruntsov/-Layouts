/**
 * Created by oleksander on 16.03.16.
 */
// remove unwanted nodes from inside a DOM node
var utils = {};

utils.clean = function(node) {
    var child, i, len = node.childNodes.length;
    if (len === 0) { return; }
    // iterate backwards, as we are removing unwanted nodes
    for (i = len; i > 0; i -= 1) {
        child = node.childNodes[i - 1];
        // comment node? or empty text node
        if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue) )) {
            node.removeChild(child);
        } else {
            if (child.nodeType === 1) {
                utils.clean(child);
            }
        }
    }
};

document.documentElement.className='js';
utils.clean(document.querySelector('div.clean'));
