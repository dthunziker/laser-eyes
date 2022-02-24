window.addEventListener('DOMContentLoaded', (event) => {

    let css = '* { outline: 1px solid red !important; }';
    let textArea = document.getElementById('css');

    chrome.storage.sync.get(['laserEyesCss'], (result) => {
        if (result && result.laserEyesCss) {
            css = result.laserEyesCss;
        }

        textArea.value = css;
    });

    ['keyup', 'change'].forEach((e) => {
        textArea.addEventListener(e, () => {
            chrome.storage.sync.set({ 'laserEyesCss': textArea.value }, () => {
                console.log('laserEyesCss was set to ' + textArea.value);
            });
        });
    });

});
