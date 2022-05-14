hamBttn = document.querySelector('.ham');
hamMenu = document.querySelector('.sideMenu');
previewPanel = document.querySelector('.previewMain');
let count = 0;

document.querySelector('.goBackBttn').addEventListener('click', ()=>{
    document.querySelector('.formViewPort').style.display = 'flex';
    document.querySelector('.preview').style.display = 'none';

    const eep = document.querySelector('.resumeEEP');
    const aip = document.querySelector('.resumeAIP');
    const prof = document.querySelector('.resumeProf')

    while(eep.firstChild)
    {
        eep.removeChild(eep.lastChild);
    }

    while(aip.firstChild)
    {
        aip.removeChild(aip.lastChild);
    }

    while(prof.firstChild)
    {
        prof.removeChild(prof.lastChild);
    }

    const resumeAbout = document.querySelector('.about');
    if(resumeAbout.firstChild)
    {
        resumeAbout.removeChild(resumeAbout.lastChild);
    }

    const resumeName = document.querySelector('.name');
    if(resumeName.firstChild)
    {
        resumeName.removeChild(resumeName.lastChild);
    }
});

const controlTitle = ['Name', 'About', 'Titles Left', 'Contents Left', 'Titles Right', 'Contents Right', 'Hyperlinks'];
const outputClassList = ['name', 'about', 'wcardTitle', 'wcardList', 'hcardTitle', 'hcardList', 'prof'];
const defaultFontSize = [40, 14, 24, 9, 24, 14, 12]

const selectColorForMe3 = () => {
    const colorList = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff',
                        '#fbf8cc', '#fde4cf', '#ffcfd2', '#f1c0e8', '#cfbaf0', '#a3c4f3', '#90dbf4', '#8eecf5', '#98f5e1', '#b9fbc0'];

    const i = Math.floor(Math.random() * colorList.length);
    return colorList[i];
}

for(let i = 0; i < controlTitle.length; i++){
    const container = document.createElement('div');
    const addysun = document.createElement('button');
    const subs = document.createElement('button');
    const text = document.createElement('div');

    container.setAttribute('class', 'fontControlBttnContainer');
    addysun.setAttribute('class', 'fontAppender');
    subs.setAttribute('class', 'fontDecrease');
    text.setAttribute('class', 'indicator');

    text.innerText = `${controlTitle[i]}: ${defaultFontSize[i]}`;
    addysun.innerText = '+';
    subs.innerText = '-';
    text.style.filter = `drop-shadow(0 3px 0px ${selectColorForMe3()}) drop-shadow(0 2px 0px black)`;

    let counter = defaultFontSize[i];

    addysun.addEventListener('click', ()=>{
        ++counter;
        const font = document.querySelectorAll(`.${outputClassList[i]}`);
        text.innerText = `${controlTitle[i]}: ${counter}`;
        for(let j = 0; j < font.length; j++){
            font[j].style.fontSize = `${counter}px`;
        }
    });

    subs.addEventListener('click', ()=>{
        const font = document.querySelectorAll(`.${outputClassList[i]}`);
        if(counter > 1)
        {
            --counter;
            text.innerText = `${controlTitle[i]}: ${counter}`;
            for(let j = 0; j < font.length; j++){
                font[j].style.fontSize = `${counter}px`;
            }
        }
    });

    container.appendChild(subs);
    container.appendChild(text);
    container.appendChild(addysun);
    document.querySelector('.fontControlBox').appendChild(container);
}

document.querySelector('.downloadBttn').addEventListener('click', ()=>{
    html2canvas(document.querySelector('.resume')).then(canvas => {
        document.body.appendChild(canvas);
        canvas.style.display = 'none';
        return canvas;
    })
    .then(canvas => {
        const image = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.setAttribute('download', 'resume.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
    })
})

document.querySelector('.templateControlCard').style.filter = `drop-shadow(0 5px 0px ${selectColorForMe3()}) drop-shadow(0 2px 0px black)`;
document.querySelector('.fontControlCard').style.filter = `drop-shadow(0 5px 0px ${selectColorForMe3()}) drop-shadow(0 2px 0px black)`;
document.querySelector('.fontControlCardImage').style.backgroundColor = `${selectColorForMe3()}`;

const templeNames = ['Plain Sheet',
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

let counter1 = 1;

document.querySelector('.templateControlAppend').addEventListener('click', ()=>{
    ++counter1;
    if(counter1 === 18)
        counter1 = 1;

    document.querySelector('.tempImage').setAttribute('src', `template${counter1}.png`);
    document.querySelector('link').setAttribute('href', `template${counter1}.css`);
    document.querySelector('.templateControlCardText').innerText = `${templeNames[counter1 - 1]}`
})

document.querySelector('.templateControlBack').addEventListener('click', () =>{
    --counter1;
    if(counter1 === 0)
        counter1 = 18;

    document.querySelector('.tempImage').setAttribute('src', `template${counter1}.png`);
    document.querySelector('link').setAttribute('href', `template${counter1}.css`);
    document.querySelector('.templateControlCardText').innerText = `${templeNames[counter1 - 1]}`
})

const textFamily = ['Urbanist',
                    'Vidaloka',
                    'Fredoka',
                    'Roboto',
                    'Arima Madurai',
                    'Sora',
                    'Baloo 2',
                    'Abhaya Libre',
                    'Saira',
                    'Bree Serif',
                    'Raleway',
                    'Montserrat',
                    'Merriweather',
                    'Ubuntu Mono',
                    'Poppins',
                    'Ramaraja',
                    'Playfair Display'];

let counter2 = 1;

document.querySelector('.fontControlAppend').addEventListener('click', ()=>{
    ++counter2;
    if(counter2 === 17)
        counter2 = 0;

    document.querySelector('.fontBoxed').style.fontFamily = `${textFamily[counter2]}`;
    document.querySelector('.resume').style.fontFamily = `${textFamily[counter2]}`;
    document.querySelector('.fontControlCardText').innerText = `${textFamily[counter2]}`;
    document.querySelector('.fontControlCardImage').style.backgroundColor = `${selectColorForMe3()}`;
})

document.querySelector('.fontControlBack').addEventListener('click', () =>{
    --counter2;
    if(counter2 === -1)
        counter2 = 16;

    document.querySelector('.fontBoxed').style.fontFamily = `${textFamily[counter2]}`;
    document.querySelector('.resume').style.fontFamily = `${textFamily[counter2]}`;
    document.querySelector('.fontControlCardText').innerText = `${textFamily[counter2]}`;
    document.querySelector('.fontControlCardImage').style.backgroundColor = `${selectColorForMe3()}`;
})