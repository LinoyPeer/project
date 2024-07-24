const btn = document.getElementById('btn');
const clearBtn = document.getElementById('clearBtn');
let result = document.getElementById('result');


// פונקציה להכנסת נתונים חדשים
function inputResult() {
    let textInput = document.getElementById('textInput');
    const myObject = {
        text: textInput.value,
        isDone: false,
    };
    if (textInput.value != "") {
        getData = JSON.parse(localStorage.getItem('listData')) || [];
        getData.push(myObject);
        localStorage.setItem('listData', JSON.stringify(getData));
        const flexElement = document.createElement('div');
        const checkIf = document.createElement('input');
        checkIf.type = 'checkbox';
        const textAside = document.createElement('span');
        flexElement.appendChild(checkIf);
        flexElement.appendChild(textAside);
        result.appendChild(flexElement);
        textAside.innerText = textInput.value;
        textInput.value = "";
        location.reload();

    }


};


// פונקציה לטעינה ושחזור נתונים לאחר רענון
function loadResult() {
    getData = JSON.parse(localStorage.getItem('listData')) || [];
    getData.forEach(item => {
        const flexElement = document.createElement('div');
        const checkIf = document.createElement('input');
        checkIf.type = 'checkbox';
        const textAside = document.createElement('span');
        flexElement.appendChild(checkIf);
        flexElement.appendChild(textAside);
        result.appendChild(flexElement);
        textAside.innerText = item.text;
        item.isDone ? textAside.style.textDecoration = 'line-through' : textAside.style.textDecoration = 'none';
        item.isDone ? checkIf.checked = true : checkIf.checked = false;


        // מאזין לאירוע change על ה-checkbox
        checkIf.addEventListener('change', () => {
            item.isDone ? textAside.style.textDecoration = 'line-through' : textAside.style.textDecoration = 'none';
            item.isDone = checkIf.checked;
            let getData = JSON.parse(localStorage.getItem('listData')) || [];
            getData = getData.map(newItems => {
                if (newItems.text === item.text) {
                    return item;
                } else {
                    return newItems;
                }
            })
            localStorage.setItem('listData', JSON.stringify(getData));
            item.isDone ? textAside.style.textDecoration = 'line-through' : textAside.style.textDecoration = 'none'
        })
    })
}


// פונקציה למחיקת נתונים
function earseBtn() {
    localStorage.removeItem('listData');
    result.innerHTML = '';
}


// קריאות לפונקציות 
btn.addEventListener('click', inputResult);
clearBtn.addEventListener('click', earseBtn);
loadResult();
