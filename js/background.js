
let injected = false;
let css = '* { outline: 1px solid red !important; }'
let enabledIcons = {
    "16": "/img/16-on.png",
    "32": "/img/16-on.png",
    "48": "/img/16-on.png",
    "128": "/img/16-on.png"
};
let disabledIcons = {
    "16": "/img/16.png",
    "32": "/img/32.png",
    "48": "/img/48.png",
    "128": "/img/128.png"
};

chrome.action.onClicked.addListener(function (tab) {

    chrome.storage.sync.get(['laserEyesCss'], function (result) {

        if (result && result.laserEyesCss) {
            css = result.laserEyesCss;
        }

        if (!injected) {
            chrome.scripting.insertCSS({
                target: { tabId: tab.id },
                css: css
            }, function () {
                injected = true;
                chrome.action.setIcon({
                    path: enabledIcons,
                    tabId: tab.id
                });
            });
        }
        else {
            chrome.scripting.removeCSS({
                target: { tabId: tab.id },
                css: css
            }, function () {
                injected = false;
                chrome.action.setIcon({
                    path: disabledIcons,
                    tabId: tab.id
                });
            });
        }
    });

});
