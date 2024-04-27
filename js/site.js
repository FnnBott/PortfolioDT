//TODO: API HOOKUP
// API: https://api.breakingbadquotes.xyz/v1/quotes (add "/'num'" for more than one quote)
let url = 'https://api.breakingbadquotes.xyz/v1/quotes';
const qotd = document.getElementById("qotd");



fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let quotes = data;
        console.log(quotes)
        for (quoteText of quotes) {
            qotd.innerHTML +=
                `<i><q>${quoteText.quote}</q></i> -- ${quoteText.author}`
        }
    });

const currentImage = document.getElementById('currentImage');
let images = [
    './images/chloe-screenshot1.jpg',
    './images/chloe-screenshot2.jpg',
    './images/chloe-screenshot3.jpg',
    './images/chloe-screenshot4.jpg'
];
let currentImageId = 0;
currentImage.src = images[currentImageId];
function updateImage() {
    currentImageId++; // move to next image
    if (currentImageId >= images.length) { // did we go too far?
        currentImageId = 0;
    }
    console.log('changing image', currentImageId);
    currentImage.src = images[currentImageId];
}
setInterval(updateImage, 5000); // call updateImage every 5000ms



