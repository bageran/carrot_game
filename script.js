const canvas = document.querySelector("#canvas");
const gameBox = document.querySelector('.game-box');


window.onload = function() {
    setTimer();
    setCarrots();
    setBugs();
}

const play = document.querySelector(".btn-play");
play.addEventListener('click', () => {
    let backAudio = new Audio('sound/bg.mp3');
    backAudio.play();
    window.location.reload();
});

function setCarrots() {
    for (let i = 0 ; i < 15 ; i++) {
        let imgCarrotX = Math.random() * 960;
        let imgCarrotY = Math.random() * 255;

        let imgCarrot = document.createElement('span');
        imgCarrot.setAttribute('class', 'carrot-item')
        imgCarrot.innerHTML = "<img src='img/carrot.png' style='position:absolute; left:"+imgCarrotX+"px; top: "+imgCarrotY+"px;'>";

        canvas.appendChild(imgCarrot);           
        
        imgCarrot.addEventListener('click', () => {
            console.log('뿅');
            
            let pickCarrot = new Audio('sound/carrot_pull.mp3');
            pickCarrot.play();

            imgCarrot.remove();

            playCounter();
        });
    }
}

function setBugs() {
    for (let i = 0 ; i < 25 ; i++) {
        let imgBugX = Math.random() * 990;
        let imgBugY = Math.random() * 285;

        let imgBug = document.createElement('span');
        imgBug.innerHTML = "<img src='img/bug.png' style='position:absolute; left:"+imgBugX+"px; top: "+imgBugY+"px;'>";

        canvas.appendChild(imgBug);

        imgBug.addEventListener('click', () => {
            let pickBug = new Audio('sound/bug_pull.mp3');
            pickBug.play();
        });
    }
}

function setTimer() {
    let time = 9;
    let x = setInterval(function() {
        sec = time;
        document.querySelector(".timer").innerHTML = time + "초";
        time--;

        if (counter == 0) {
            clearInterval(x);
            document.querySelector(".timer").innerHTML = (sec+1) + "초";

        } else if (time < 0) {
            clearInterval(x);
            document.querySelector(".timer").innerHTML = "0초";
            let alretAudio = new Audio('sound/alert.wav');
            alretAudio.play();

            let failPopup = showRefreshPopup();
            gameBox.appendChild(failPopup);

            return;
        }
    },1000)
}

let counter = 15;
function playCounter() {
    console.log('빼기빼기');
    let countCarrot = document.querySelector(".carrot-counter");
    counter--;
    countCarrot.innerText = counter;
    if (counter == 0) {
        let winAudio = new Audio('sound/game_win.mp3');
        winAudio.play();
       
        let winPopup = showWinPopup();
        gameBox.appendChild(winPopup);
    }
}

function showWinPopup() {
    let winPopup = document.createElement('div');
    winPopup.setAttribute('class', 'popup');

    let btnRefresh = document.createElement('button');
    btnRefresh.setAttribute('class', 'btn-refresh');
    btnRefresh.innerHTML = `<i class="fas fa-redo"></i>`;
    btnRefresh.addEventListener('click', () => {
        // window.location.reload();
        setTimer();
        setCarrots();
        setBugs();
    });

    let textReplay = document.createElement('p');
    textReplay.setAttribute('class', 'text-replay');
    textReplay.innerText = 'You Win! 🎉'

    winPopup.appendChild(btnRefresh);
    winPopup.appendChild(textReplay);

    play.remove();

    return winPopup;
}

function showRefreshPopup() {
    let failPopup = document.createElement('div');
    failPopup.setAttribute('class', 'popup');

    let btnRefresh = document.createElement('button');
    btnRefresh.setAttribute('class', 'btn-refresh');
    btnRefresh.innerHTML = `<i class="fas fa-redo"></i>`;
    btnRefresh.addEventListener('click', () => {
        window.location.reload();
    });

    let textReplay = document.createElement('p');
    textReplay.setAttribute('class', 'text-replay');
    textReplay.innerText = 'You lose. 💩'

    failPopup.appendChild(btnRefresh);
    failPopup.appendChild(textReplay);

    play.remove();

    return failPopup;
}




