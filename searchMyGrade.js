const searchingBox = document.querySelector('.searching-box'),
    searchingContainer = searchingBox.querySelector('.searching-container'),
    searchingForm = searchingContainer.querySelector('.searching-form'),
    searchInput = searchingForm.querySelector('input');

const gradeContainer = searchingBox.querySelector('.grade-container'),
    grade = gradeContainer.querySelector('span');

let scoreList = [];
let i = 0;

function paintGrade() {
    grade.innerText = `${i+1}등`;
}
function failedSearching() {
    grade.innerText = 'X.X'
}
function handleSubmit(event) {
    event.preventDefault();
    loadScore();
    const cntVal = searchInput.value;
    temp = 0;
    for(i=0; i<scoreList.length; i++){
        if(scoreList[i].name === cntVal){
            paintGrade();
            temp = 1;
            break;
        }
    }
    if(!temp) {
        failedSearching();
    }
}
function loadScore() {
    const loadedScore = localStorage.getItem('scoreLst');
    if (loadedScore !== null) {
        const parsedScore = JSON.parse(loadedScore);
        scoreList = parsedScore;
    }
}
function init() {
    loadScore();
    searchingForm.addEventListener('submit', handleSubmit);
}
init();