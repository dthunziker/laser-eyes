window.addEventListener('DOMContentLoaded', (event) => {

    let css = '* { outline: 1px solid red !important; }';
    let textArea = document.getElementById('css');

    chrome.storage.sync.get(['laserEyesCss'], (result) => {
        if (result && result.laserEyesCss) {
            css = result.laserEyesCss;
        }
        
        textArea.value = css;
    });

    textArea.addEventListener('keyup', () => {
        setCss(textArea.value);
    });
});

function setCss(value) {
    chrome.storage.sync.set({ 'laserEyesCss': value }, () => {
        console.log('laserEyesCss was set to ' + value);
    });
}