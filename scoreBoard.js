const inputContainer = document.querySelector('.input-container'),
    inputForm = inputContainer.querySelector('.inputs'),
    nameForm = inputForm.querySelector('.name-form'),
    nameInput = nameForm.querySelector('input'),
    priceForm = inputForm.querySelector('.money-form'),
    priceInput = priceForm.querySelector('input');
const scoreContainer = document.querySelector('.score-container'),
    SC1_5 = scoreContainer.querySelector('.scoreboard-container1-5'),
    SB1_5 = SC1_5.querySelector('.scoreboard1-5'),
    SC6_10 = scoreContainer.querySelector('.scoreboard-container6-10'),
    SB6_10 = SC6_10.querySelector('.scoreboard6-10'),
    SC11_15 = scoreContainer.querySelector('.scoreboard-container11-15'),
    SB11_15 = SC11_15.querySelector('.scoreboard11-15');
const first = SB1_5.querySelector('.first'),
    second = SB1_5.querySelector('.second'),
    third = SB1_5.querySelector('.third'),
    fourth = SB1_5.querySelector('.fourth'),
    fifth = SB1_5.querySelector('.fifth'),
    sixth = SB6_10.querySelector('.sixth'),
    seventh = SB6_10.querySelector('.seventh'),
    eighth = SB6_10.querySelector('.eighth'),
    ninth = SB6_10.querySelector('.ninth'),
    tenth = SB6_10.querySelector('.tenth'),
    eleventh = SB11_15.querySelector('.eleventh'),
    twelfth = SB11_15.querySelector('.twelfth'),
    thirteenth = SB11_15.querySelector('.thirteenth'),
    fourteenth = SB11_15.querySelector('.fourteenth'),
    fifteenth = SB11_15.querySelector('.fifteenth');
let cnt = "";
let scoreLst = [];
const scoreObj = {
    1: first,
    2: second,
    3: third,
    4: fourth,
    5: fifth,
    6: sixth,
    7: seventh,
    8: eighth,
    9: ninth,
    10: tenth,
    11: eleventh,
    12: twelfth,
    13: thirteenth,
    14: fourteenth,
    15: fifteenth
};

function paintScore() {
    for(let i = 0; i < ((15 > scoreLst.length) ? scoreLst.length : 15); i++){
        const score = scoreObj[i+1].querySelector('span');
        score.innerText = `${i+1}등. ${scoreLst[i].name}, ${scoreLst[i].price}`;
    }
}
function calculateScore() {
    scoreLst.sort(function(a,b) {
        return a.price < b.price ? 1 : -1;
    })
    localStorage.setItem('scoreLst', JSON.stringify(scoreLst));
    paintScore();
}
function nameSubmit(event) {
    event.preventDefault();
    const cntVal = nameInput.value;
    cnt = cntVal;
    console.log(cnt);
}
function priceSubmit(event) {
    event.preventDefault();
    const cntVal = priceInput.value;
    
    if(scoreLst.length === 0) {
        tempObj = {
            name: cnt,
            price: parseInt(cntVal)
        }
        scoreLst.push(tempObj);
    } else {
        temp = 0;
        for(let i=0; i<scoreLst.length; i++){
            if(scoreLst[i].name == cnt){
                scoreLst[i].price += parseInt(cntVal);
                temp = 1;
            }
        }
        if(!temp) {
            tempObj = {
                name: cnt,
                price: parseInt(cntVal)
            }
            scoreLst.push(tempObj);
        }
    }
    calculateScore();
}
function loadScore() {
    const loadedScore = localStorage.getItem('scoreLst');
    if (loadedScore !== null) {
        const parsedScore = JSON.parse(loadedScore);
        scoreLst = parsedScore;
        paintScore();
    }
}
function init() {
    loadScore();
    nameForm.addEventListener('keyup', nameSubmit);
    nameForm.addEventListener('submit', nameSubmit);
    priceForm.addEventListener('submit', priceSubmit);
}
init();