const form = document.querySelector('form');
var videoContainer = document.getElementsByClassName('container')[0];

if (videoContainer.style.display === 'none') {
    let image = 'url("https://preview.redd.it/lsknlqcnihza1.jpg?width=960&crop=smart&auto=webp&s=5d9b1f3632c2e393e67c6a69bc0c9d3a4a0b0645")';
    videoContainer.style.backgroundImage = image;
    minhaDiv.style.backgroundSize = 'cover';
}

var widthWindow = window.innerWidth;
if (widthWindow <= 414) {

    form.style.display = 'block'
    form.style.alignItems = 'center'
    form.style.justifyContent = 'center'
    form.style.textAlign = 'center'
    searchBox = document.querySelector('input.search-input')
    searchBox.style.width = '60%';
    // searchBox.style.display = 'none'

    submitButton = document.querySelector('input.submit-input')
    submitButton.style.width = '50%';

    videoContainer.style.display = 'block'
    allImgs = document.querySelectorAll('img')
    for (let i = 0; i < allImgs.length; i++) {
        allImgs[i].style.display = 'none';
    }
    video = document.querySelector('video')
    video.style.width = '100%'
    video.style.margin = 'none'
    video.style.height = '57%'
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('foi')
    let name = document.getElementsByClassName('search-input')[0];
    let messageDiv = document.getElementsByClassName('message')[0];
    let memeDiv = document.getElementsByClassName('meme')[0];
    if (videoContainer.style.display === 'none') {
        videoContainer.style.display = 'flex'
        messageDiv.style.display = 'block';
        memeDiv.style.display = 'block';
        messageDiv.innerHTML = `<p>${name.value} you has been rick rollado</p>`;
    } else {
        videoContainer.style.display = 'none'
    }
})