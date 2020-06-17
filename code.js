const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopWatch = document.querySelector('.stopWatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

let countTime;
let minutes = 0;
let seconds = 0;
let timeArray = [];

const handleStart = () => {
    clearInterval(countTime);
    countTime = setInterval(() =>{
        
        if(seconds < 9){
            seconds++;
            stopWatch.textContent = `${minutes}:0${seconds}`
        }
        else if(seconds>=9 && seconds<59){
            seconds++;
            stopWatch.textContent = `${minutes}:${seconds}`
        }
        else{
            minutes++;
            seconds = 0;
            stopWatch.textContent = `${minutes}:00`
        }
    },1000)
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleStop = () =>{
    time.innerHTML = `Latest time: ${stopWatch.textContent}`
    if(stopWatch.textContent !== '0:00'){
        time.style.visibility = "visible"
        timeArray.push(stopWatch.textContent)
    }
    clearEvery();
}

const handleReset = () =>{
    clearEvery();
    time.style.visibility = "hidden"
    timeArray = [];
}

const clearEvery = () =>{
    clearInterval(countTime);
    seconds = 0;
    minutes = 0;
    stopWatch.textContent = '0:00';
    timeList.textContent = '';

}

const showHistory = () => {
    timeList.textContent = '';
    let elementsNumb = 1;
    timeArray.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Time ${elementsNumb} <span>${time}</span>`;
        elementsNumb++;
        timeList.appendChild(newTime)
    })
}

const toggleModal = () =>{
    if(!(modalShadow.style.display === "block")){
        modalShadow.style.display = "block";
    }
    else  modalShadow.style.display = "none";
   
    modalShadow.classList.toggle("modal-animation")
}

startBtn.addEventListener('click',handleStart)
pauseBtn.addEventListener('click',handlePause)
stopBtn.addEventListener('click',handleStop)
resetBtn.addEventListener('click',handleReset)
historyBtn.addEventListener('click',showHistory)
infoBtn.addEventListener('click',toggleModal)
closeModalBtn.addEventListener('click',toggleModal)
window.addEventListener('click',e => e.target === modalShadow ? toggleModal() : false)