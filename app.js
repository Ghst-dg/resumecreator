const links = ['Features', 'Templates', 'How To?', 'Create Resume'];
const navbar = document.querySelector('.navbar');

const selectColorForMe = () => {
    const colorList = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff',
                        '#fbf8cc', '#fde4cf', '#ffcfd2', '#f1c0e8', '#cfbaf0', '#a3c4f3', '#90dbf4', '#8eecf5', '#98f5e1', '#b9fbc0'];

    const i = Math.floor(Math.random() * colorList.length);
    return colorList[i];
}

for(let i = 0; i < links.length; i++)
{
    const box = document.createElement('div');
    box.setAttribute('class', 'hyLinks');

    const link = document.createElement('a');
    link.setAttribute('class', 'lnk');
    link.innerText = `${links[i]}`;

    if(i === 0)
    {
        link.setAttribute('href', '#feature');
    }

    if(i === 1)
    {
        link.setAttribute('href', '#template');
    }

    if(i === 2)
    {
        link.setAttribute('href', '#steps');
    }

    if(i === 3)
    {
        link.addEventListener('click', () => {
            formElement.style.display = 'flex';
            landingElement.style.display = 'none';
        })
    }

    box.appendChild(link);
    document.querySelector('.navbar').appendChild(box);
}



const contentFeatures = ['Single Page Web Application',
                        'Modular Forms',
                        'Multiple Templates',
                        'Live Preview',
                        'Faster Page',
                        'Instant Resume',
                        'No Registration',
                        'Lightweight Application',
                        'Free to Use',
                        'Unlimited Download'];

const contentImages = ['singPage', 'modForm', 'multiTemp', 'livePre', 'fastPage', 'instRes', 'noReg', 'lw', 'freeto', 'unlim'];
const contentElement = document.querySelector('.featureSlideContainer');
const featDot = document.querySelector('.featureDotContainer');

for(let i = contentFeatures.length - 1; i >= 0; i--)
{
    const card = document.createElement('div');
    const cardContent = document.createElement('div');
    const cardFrame = document.createElement('div');
    const cardText = document.createElement('span');
    const cardImage = document.createElement('img');
    const bund = document.createElement('div');

    card.setAttribute('class', 'card');
    card.style.filter = `drop-shadow(0 5px 0px ${selectColorForMe()}) drop-shadow(0 2px 0px black)`;
    cardContent.setAttribute('class', 'cardContent');
    cardFrame.setAttribute('class', 'cardImageFrame');
    cardImage.setAttribute('class', 'cardImage');

    cardText.innerText = `${contentFeatures[i]}`;
    cardContent.appendChild(cardText);

    cardImage.setAttribute('src', `${contentImages[i]}.png`);
    cardFrame.appendChild(cardImage);

    bund.setAttribute('class', 'dot');

    if(i % 2 == 0)
    {
        card.appendChild(cardFrame);
        card.appendChild(cardContent);
    }

    else
    {
        card.appendChild(cardContent);
        card.appendChild(cardFrame);
    }

    featDot.appendChild(bund);
    contentElement.prepend(card);

    bund.addEventListener('click', ()=>{
        currentFeatureSlide(`${contentFeatures.length - i}`);
    });
}

let featureSlideIndex = contentFeatures.length;
let myTimer = 5000;

document.querySelector('.upBttn').addEventListener('click', ()=>{
    plusFeatureSlide(1);
})

document.querySelector('.downBttn').addEventListener('click', ()=>{
    plusFeatureSlide(-1);
})

function plusFeatureSlide(n){
    clearInterval(myTimer);
    if(n > 0)
    {
        showFeatureSlides(featureSlideIndex -= 1);
    }
    else
    {
        showFeatureSlides(featureSlideIndex += 1);
    }

    if(n === -1)
    {
        myTimer = setInterval(function() {plusFeatureSlide(n + 2)}, 2500);
    }
    else
    {
        myTimer = setInterval(function() {plusFeatureSlide(n + 1)}, 2500);
    }
}

function showFeatureSlides(n)
{
    let slides = document.querySelectorAll('.card');
    let dots = document.querySelectorAll('.dot');

    if(n > slides.length)
    {
        featureSlideIndex = 1;
    }

    if(n < 1)
    {
        featureSlideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = 'none';
        dots[i].style.background = '#FFFFFF';
        dots[i].style.height = '10px';
        dots[i].style.width = '10px';
    }

    slides[featureSlideIndex - 1].style.display = 'flex';
    dots[featureSlideIndex - 1].style.background = '#ff9955';
    dots[featureSlideIndex - 1].style.height = '50px';
    dots[featureSlideIndex - 1].style.width = '10px';
}

window.addEventListener('load', () => {
    showFeatureSlides(featureSlideIndex);
    myTimer = setInterval(function() {plusFeatureSlide(1)}, 5000);
});

function currentFeatureSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {plusFeatureSlide(n + 1)}, 2500);
    showFeatureSlides(featureSlideIndex = n);
}



const templateNames = ['Plain Sheet',
                    'Evergreen',
                    'Yellow Desert',
                    'Green Desert',
                    'Blue Desert',
                    'Yellow Liner',
                    'Violet Liner',
                    'Aqua Liner',
                    'Pink Liner',
                    'Auto',
                    'Dark-G',
                    'Dark-R',
                    'Dark Sheet',
                    'Dark-G',
                    'Cool Fire',
                    'The Gray Side',
                    'Greyed Only',
                    'Black Rose'];


const templateDotAppend = document.querySelector('.templateDotContainer');
const templateAppend = document.querySelector('.templateSlideContainer');

for(let i = 0; i < templateNames.length; i++)
{
    const card = document.createElement('div');
    const cardPic = document.createElement('div');
    const cardText = document.createElement('div');
    const pic = document.createElement('img');
    const text = document.createElement('span');
    const bund = document.createElement('div');

    card.setAttribute('class', 'templateCard');
    card.style.filter = `drop-shadow(0 5px 0px ${selectColorForMe()}) drop-shadow(0 2px 0px black)`;
    cardPic.setAttribute('class', 'templateCardImage');
    pic.setAttribute('class', 'templateImage');
    cardText.setAttribute('class', 'templateCardText');
    text.setAttribute('class', 'templateText');

    pic.setAttribute('src', `template${[i + 1]}.png`);
    text.innerText = `${templateNames[i]}`;
    //text.style.fontFamily = `${templateFont[i]}`;

    cardPic.appendChild(pic);
    cardText.appendChild(text);

    if(i % 2)
    {
        card.appendChild(cardPic);
        card.appendChild(cardText);
    }

    else
    {
        card.appendChild(cardText);
        card.appendChild(cardPic);
    }

    bund.setAttribute('class', 'point');
    templateDotAppend.appendChild(bund);
    templateAppend.appendChild(card);

    bund.addEventListener('click', ()=>{
        currentTemplateSlide(`${i + 1}`);
    })
}

document.querySelector('.leftBttn').addEventListener('click', ()=>{
    plusTemplateSlides(-1);
})

document.querySelector('.rightBttn').addEventListener('click', ()=>{
    plusTemplateSlides(1);
})

let templateSlideIndex = 1;
let mineTimer = 8000;

function plusTemplateSlides(n){
    clearInterval(mineTimer);
    if (n < 0)
    {
        showTemplateSlides(templateSlideIndex -= 1);
    } 
    else
    {
        showTemplateSlides(templateSlideIndex += 1); 
    }
    
    if (n === -1)
    {
        mineTimer = setInterval(function(){plusTemplateSlides(n + 2)}, 2500);
    } 
    else
    {
        mineTimer = setInterval(function(){plusTemplateSlides(n + 1)}, 2500);
    }
}

function showTemplateSlides(n){
    let slides = document.querySelectorAll(".templateCard");
    let dots = document.querySelectorAll(".point");

    if(n > slides.length)
    {
        templateSlideIndex = 1;
    }

    if(n < 1)
    {
        templateSlideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = 'none';
        dots[i].style.background = '#FFFFFF';
        dots[i].style.height = '10px';
        dots[i].style.width = '10px';
    }

    slides[templateSlideIndex - 1].style.display = 'flex';
    dots[templateSlideIndex - 1].style.background = '#ffdd55';
    dots[templateSlideIndex - 1].style.height = '10px';
    dots[templateSlideIndex - 1].style.width = '50px';
}

window.addEventListener('load', ()=>{
    showTemplateSlides(templateSlideIndex);
    mineTimer = setInterval(function() {plusTemplateSlides(1)}, 5000);
});

function currentTemplateSlide(n){
    clearInterval(mineTimer);
    mineTimer = setInterval(function(){plusTemplateSlides(n + 1)}, 2500);
    showTemplateSlides(templateSlideIndex = n);
}


const tagAppendBox = document.querySelector('.stepsWindow');
const tagStr = ['Fill-Up the Details', 'Choose an Awesome Template', 'Adjust Font Family and Size' ,'Get Your Cool Resume'];
const tagPic = ['fillUp', 'selTemp', 'adjFont' ,'finalResume'];

for(let i = 0; i < tagStr.length; i++)
{
    const tagCard = document.createElement('div');
    tagCard.setAttribute('class', 'tag');
    tagCard.style.filter = `drop-shadow(0 4px 0px ${selectColorForMe()}) drop-shadow(0 2px 0px black)`

    const img = document.createElement('img');
    img.setAttribute('class', 'tagImg');
    img.setAttribute('src', `${tagPic[i]}.png`);

    const text = document.createElement('p');
    text.setAttribute('class', 'tagText');
    text.innerText = `${tagStr[i]}`;

    const tagCount = document.createElement('div');
    tagCount.setAttribute('class', 'tagNum');
    const strNum = document.createElement('p');
    strNum.setAttribute('class', 'tagText');
    strNum.innerText = `${i + 1}`;
    tagCard.appendChild(img);
    tagCard.appendChild(text);

    tagAppendBox.appendChild(tagCard);
}

formElement = document.querySelector('.formViewPort');
landingElement = document.querySelector('.landing');

document.querySelector('.nextHeaderBttn1').addEventListener('click', () =>{
    formElement.style.display = 'flex';
    landingElement.style.display = 'none';
})

document.querySelector('.nextHeaderBttn2').addEventListener('click', () =>{
    formElement.style.display = 'flex';
    landingElement.style.display = 'none';
})