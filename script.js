const canvas = document.querySelector("#canvas");

window.onload = function() {
    setTimer();
    setCarrots();
    setBugs();
}

const play = document.querySelector(".btn-play");
play.addEventListener('click', function() {
    window.location.reload();
});

function setCarrots() {
    for (let i = 0 ; i < 5 ; i++) {
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
    for (let i = 0 ; i < 5 ; i++) {
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



/* 캔버스 삽질 */
// function setItems() {
//     let canvas = document.querySelector("#canvas");
//     let ctx = canvas.getContext("2d");
//     let imgBug = document.querySelector(".bug-img");
//     let imgCarrot = document.querySelector(".carrot-img");
    
//     for (let i = 0 ; i < 20 ; i++) {
//         ctx.drawImage(imgCarrot, Math.random() * 960, Math.random() * 255);
//     }

//     for (let b = 0 ; b < 20 ; b++) {
//         ctx.drawImage(imgBug, Math.random() * 990, Math.random() * 285);
//     }
// }

function setTimer() {
    let time = 10;
    let x = setInterval(function() {
        sec = time;
        document.querySelector(".timer").innerHTML = time + "초";
        time--;

        if (time < 0) {
            clearInterval(x);
            // alert("Game Over!");
            document.querySelector(".timer").innerHTML = "0초";
            let alretAudio = new Audio('sound/alert.wav');
            alretAudio.play();
        }
    },1000)
}

let counter = 5;
function playCounter() {
    console.log('빼기빼기');
    let countCarrot = document.querySelector(".carrot-counter");
    counter--;
    countCarrot.innerText = counter;
    if (counter == 0) {
        console.log('win');
        let winAudio = new Audio('sound/game_win.mp3');
        winAudio.play();
    }
}