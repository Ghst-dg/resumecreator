const inputList = ["Skill", "Edu", "Exp", "Ach", "Int", "Proj", "Cont"];
const inputTypes = ["Skills", "Education", "Experience", "Achievements", "Interests", "Projects", "Contacts"];
const glowList = ['.right', '.left', '.left', '.right', '.right', '.left', '.bottom'];
const formContainer = document.querySelector('.form');
const resumeCardAppend = document.querySelector('.resumeContent');

const selectColorForMe2 = () => {
    const colorList = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff',
                        '#fbf8cc', '#fde4cf', '#ffcfd2', '#f1c0e8', '#cfbaf0', '#a3c4f3', '#90dbf4', '#8eecf5', '#98f5e1', '#b9fbc0'];

    const i = Math.floor(Math.random() * colorList.length);
    return colorList[i];
}

for(let i = 0; i < inputList.length; i++)
{

    const clr = selectColorForMe2();

    const inputBox = document.createElement('input');
    inputBox.setAttribute('class', `input${inputList[i]}`);
    const appBttn = document.createElement('button');
    appBttn.setAttribute('class', 'appendBttn');
    appBttn.innerText = '+';

    const inputContainerBox = document.createElement('div');
    inputContainerBox.style.filter = `drop-shadow(0 3px 0px ${clr}) drop-shadow(0 2px 0px black)`;
    inputContainerBox.setAttribute('class', 'inputList');
    const inputLegend = document.createElement('legend');
    inputLegend.innerText = `${inputTypes[i]}`;

    const inputFS = document.createElement('fieldset');
    inputFS.setAttribute('class', 'inputContainer');

    inputContainerBox.appendChild(inputBox);
    inputContainerBox.appendChild(appBttn);

    inputFS.appendChild(inputLegend);
    inputFS.appendChild(inputContainerBox);

    inputBox.addEventListener('click', () => {
        document.querySelector('.upper').style.backgroundColor = 'inherit';
        document.querySelector('.up').style.backgroundColor = 'inherit';
        document.querySelector('.left').style.backgroundColor = 'inherit';
        document.querySelector('.right').style.backgroundColor = 'inherit';
        document.querySelector('.upper').style.backgroundColor = 'inherit';
        document.querySelector('.bottom').style.backgroundColor = 'inherit';

        document.querySelector(`${glowList[i]}`).style.backgroundColor = `${clr}`;
    })

    formContainer.appendChild(inputFS);
        appBttn.addEventListener('click', ()=>{
            const appInputBox = document.createElement('input');
            appInputBox.setAttribute('class', `input${inputList[i]}`);

            const appInputContainerBox = document.createElement('div');
            appInputContainerBox.setAttribute('class', 'inputList');
            appInputContainerBox.style.filter = `drop-shadow(0 3px 0px ${clr}) drop-shadow(0 2px 0px black)`;

            const removeInput = document.createElement('button');
            removeInput.setAttribute('class', 'appendBttn');
            removeInput.innerText = '-';
            appInputContainerBox.appendChild(appInputBox);
            appInputContainerBox.appendChild(removeInput);
            inputFS.appendChild(appInputContainerBox);

            appInputBox.addEventListener('click', () => {
                document.querySelector('.upper').style.backgroundColor = 'inherit';
                document.querySelector('.up').style.backgroundColor = 'inherit';
                document.querySelector('.left').style.backgroundColor = 'inherit';
                document.querySelector('.right').style.backgroundColor = 'inherit';
                document.querySelector('.upper').style.backgroundColor = 'inherit';
                document.querySelector('.bottom').style.backgroundColor = 'inherit';

                document.querySelector(`${glowList[i]}`).style.backgroundColor = `${clr}`;
            })

            removeInput.addEventListener('click', ()=>{
                appInputContainerBox.remove();
            })
        })
}

const clr1 = selectColorForMe2();
const clr2 = selectColorForMe2();

document.querySelector('.inputName').style.filter = `drop-shadow(0 3px 0px ${clr1}) drop-shadow(0 2px 0px black)`;
document.querySelector('.inputAbout').style.filter = `drop-shadow(0 3px 0px ${clr2}) drop-shadow(0 2px 0px black)`;

document.querySelector('.inputName').addEventListener('click', () =>{
    document.querySelector('.upper').style.backgroundColor = 'inherit';
    document.querySelector('.up').style.backgroundColor = 'inherit';
    document.querySelector('.left').style.backgroundColor = 'inherit';
    document.querySelector('.right').style.backgroundColor = 'inherit';
    document.querySelector('.upper').style.backgroundColor = 'inherit';
    document.querySelector('.bottom').style.backgroundColor = 'inherit';

    document.querySelector('.upper').style.backgroundColor = `${clr1}`;
})

document.querySelector('.inputAbout').addEventListener('click', () =>{
    document.querySelector('.upper').style.backgroundColor = 'inherit';
    document.querySelector('.up').style.backgroundColor = 'inherit';
    document.querySelector('.left').style.backgroundColor = 'inherit';
    document.querySelector('.right').style.backgroundColor = 'inherit';
    document.querySelector('.upper').style.backgroundColor = 'inherit';
    document.querySelector('.bottom').style.backgroundColor = 'inherit';

    document.querySelector('.up').style.backgroundColor = `${clr2}`;
})

document.querySelector('.nextBttn').addEventListener('click', ()=>{
    document.querySelector('.formViewPort').style.display = 'none';
    document.querySelector('.preview').style.display = 'flex';

    document.querySelector('.name').innerHTML = document.querySelector('.inputName').value;
    document.querySelector('.about').innerHTML = document.querySelector('.inputAbout').value;

    for(let i = 0; i < inputList.length; i++)
    {
        const a = document.querySelector(`.input${inputList[i]}`).value;
        if(inputList[i] === 'Skill' || inputList[i] === 'Ach' || inputList[i] === 'Int')
        {
            if(a)
            {
                pumpAIP(inputList[i], inputTypes[i]);
            }
        }

        else if(inputList[i] === 'Edu' || inputList[i] === 'Exp' || inputList[i] === 'Proj')
        {
            if(a)
            {
                pumpEEP(inputList[i], inputTypes[i]);
            }
        }

        else if(inputList[i] === 'Cont' && a)
        {
            const apend = document.querySelectorAll('.inputCont');
            for(let j = 0; j < apend.length; j++)
            {
                const text = document.createElement('span');
                text.setAttribute('class', 'prof');
                const val = apend[j].value
                text.innerHTML = `${j + 1}. ${val}`;
                document.querySelector('.resumeProf').appendChild(text);
            }

        }
    }
});

const pumpAIP = (cls, val) =>{
    const card = document.createElement('div');
    const title = document.createElement('div');
    const content = document.createElement('div');
    const text1 = document.createElement('span');

    card.setAttribute('class', 'hList');
    title.setAttribute('class', 'hcardHeader');
    content.setAttribute('class', 'hcardContent');
    text1.setAttribute('class', 'hcardTitle');

    text1.innerHTML = `${val}`;

    const sel = document.querySelectorAll(`.input${cls}`);
    for(let j = 0; j < sel.length; j++)
    {
        const text2 = document.createElement('span');
        text2.setAttribute('class', 'hcardList');
        const list = sel[j].value;
        text2.innerHTML = `${j + 1}. ${list}`;
        content.appendChild(text2);
    }

    title.appendChild(text1);
    card.appendChild(title);
    card.appendChild(content);
    document.querySelector('.resumeAIP').appendChild(card);
}

const pumpEEP = (cls, val) =>{
    const card = document.createElement('div');
    const title = document.createElement('div');
    const content = document.createElement('div');
    const text1 = document.createElement('span');

    card.setAttribute('class', 'wList');
    title.setAttribute('class', 'wcardHeader');
    content.setAttribute('class', 'wcardContent');
    text1.setAttribute('class', 'wcardTitle');

    text1.innerHTML = `${val}`;

    const sel = document.querySelectorAll(`.input${cls}`);
    for(let j = 0; j < sel.length; j++)
    {
        const text2 = document.createElement('span');
        text2.setAttribute('class', 'wcardList');
        const list = sel[j].value;
        text2.innerHTML = `${j + 1}. ${list}`;
        content.appendChild(text2);
    }

    title.appendChild(text1);
    card.appendChild(title);
    card.appendChild(content);
    document.querySelector('.resumeEEP').appendChild(card);
}


document.querySelector('.helpBttn').addEventListener('click', ()=>{
    document.querySelector('.modal').style.display = 'flex';
    document.querySelector('.form').style.filter = 'blur(5px)';
    document.querySelector('.nextBttn').style.filter = 'blur(5px)';
    document.querySelector('.map').style.filter = 'blur(5px)';
    document.querySelector('.formPic').style.filter = 'blur(5px)';
})

document.querySelector('.modal').addEventListener('click', e =>{
    if(e.target == e.currentTarget)
    {
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.form').style.filter = 'blur(0px)';
        document.querySelector('.nextBttn').style.filter = 'drop-shadow(0 3px 0px white) drop-shadow(0 2px 0px black)';
        document.querySelector('.map').style.filter = 'blur(0px)';
        document.querySelector('.formPic').style.filter = 'blur(0px)';
    }
})

document.querySelector('.closeBttn').addEventListener('click', ()=>{
    formElement.style.display = 'none';
    landingElement.style.display = 'flex';
})