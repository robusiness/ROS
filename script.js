let root = document.querySelector(':root');
function calculateFontSize(width, height) {
    if (width/height <= 1920/1080) {
        return '2vh';
    } else {
        return '1vw';
    }
}

let fontSize = calculateFontSize(window.innerWidth, window.innerHeight);

root.style.setProperty('--font-size', fontSize);