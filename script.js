const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');
const textContentContainer = document.getElementById('textContentContainer');
const imageSlider = document.getElementsByClassName('image-from-wrapper');
const container = document.getElementById('mainContainer');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

//Content change index
let globalI = 0, imageNameTemplate;

init();
backBtn.addEventListener('click', goBack);
forwardBtn.addEventListener('click', goForward);
openMenu.addEventListener('click', () => {
    container.classList.toggle('active');
});
closeMenu.addEventListener('click', () => {
    container.classList.toggle('active');
});

function init() {
    globalI = 0;
    textContentContainer.style.justifyContent = 'flex-start';
    imageSlider[globalI].style.zIndex = "1";
}

function changeZIndex() {
    console.log(globalI);
    imageSlider[globalI].style.zIndex = "1";
    for(let i = 0; i < imageSlider.length; i++)
        if(globalI != i)
            imageSlider[i].style.zIndex = "0";
}

function goBack() {
    if(globalI == 0) globalI = 2;
    else globalI--;

    //Change position for text content 
    switch(globalI) {
        case 0:
            textContentContainer.style.justifyContent = 'flex-start';
            break;
        case 1:
            textContentContainer.style.justifyContent = 'center';
            break;
        case 2:
            textContentContainer.style.justifyContent = 'flex-end';
            break;
    }
    //Change the image from image slider
    changeZIndex();
}

function goForward() {
    if(globalI == 2) globalI = 0;
    else globalI++;

    //Change position for text content 
    switch(globalI) {
        case 0:
            textContentContainer.style.justifyContent = 'flex-start';
            break;
        case 1:
            textContentContainer.style.justifyContent = 'center';
            break;
        case 2:
            textContentContainer.style.justifyContent = 'flex-end';
            break;
    }
    //Change image from image slider
    changeZIndex();
}