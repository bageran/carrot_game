const canvas = document.querySelector("#canvas");

window.onload = function() {
    setTimer();
    setCarrots();
    setBugs();
}

const play = document.querySelector(".btn-play");
play.addEventListener('click', function() {
    setTimer();
    setCarrots();
    setBugs();
});

function setCarrots() {
    for (let i = 0 ; i < 20 ; i++) {
        let imgCarrotX = Math.random() * 960;
        let imgCarrotY = Math.random() * 255;

        let imgCarrot = document.createElement('span');
        imgCarrot.setAttribute('class', 'carrot-item')
        imgCarrot.innerHTML = "<img src='img/carrot.png' style='position:absolute; left:"+imgCarrotX+"px; top: "+imgCarrotY+"px;'>";

        imgCarrot.addEventListener('click', () => {
            console.log('뿅');
            imgCarrot.remove();
        });
        canvas.appendChild(imgCarrot);                
    }
}

function setBugs() {
    for (let i = 0 ; i < 20 ; i++) {
        let imgBugX = Math.random() * 990;
        let imgBugY = Math.random() * 285;

        let imgBug = document.createElement('span');
        imgBug.innerHTML = "<img src='img/bug.png' style='position:absolute; left:"+imgBugX+"px; top: "+imgBugY+"px;'>";

        canvas.appendChild(imgBug);
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
    let sec = "";
    let x = setInterval(function() {
        sec = time - 1;
        document.querySelector(".timer").innerHTML = sec + "초";
        time--;

        if (time < 0) {
            clearInterval(x);
            // alert("Game Over!");
            document.querySelector(".timer").innerHTML = "0초";
        }
    },1000)
}

function showPopup() {

}