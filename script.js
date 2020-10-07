// window.onload = function() {
//     let canvas = document.querySelector("#canvas");
//     let ctx = canvas.getContext("2d");
//     let imgBug = document.querySelector(".bug-img");
//     let imgCarrot = document.querySelector(".carrot-img")

//     let bugX = Math.random() * 990;
//     let bugY = Math.random() * 285;
//     console.log(bugX);
//     console.log(bugY);

//     let carrotX = Math.random() * 960;
//     let carrotY = Math.random() * 255;

//     ctx.drawImage(imgCarrot, carrotX, carrotY);
//     ctx.drawImage(imgBug, bugX, bugY);
    
//   }

window.onload = function() {
    setTimer();
    setItems();
}

const play = document.querySelector(".btn-play");
play.addEventListener('click', function() {
    let canvas = document.querySelector("#canvas");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    setItems();
});

function setItems() {
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");
    let imgBug = document.querySelector(".bug-img");
    let imgCarrot = document.querySelector(".carrot-img")
    
    for (let i = 0 ; i < 20 ; i++) {
        ctx.drawImage(imgCarrot, Math.random() * 960, Math.random() * 255);
    }

    for (let b = 0 ; b < 20 ; b++) {
        ctx.drawImage(imgBug, Math.random() * 990, Math.random() * 285);
    }
}

function setTimer() {
    let time = 11;
    let sec = "";
    let x = setInterval(function() {
        sec = time - 1;
        document.querySelector(".timer").innerHTML = sec + "초";
        time--;

        if (time < 0) {
            clearInterval(x);
            alert("Game Over!");
            document.querySelector(".timer").innerHTML = "0초";
        }
    },1000)
}