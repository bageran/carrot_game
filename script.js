window.onload = function() {
    setTimer();
    setItems();
}

const play = document.querySelector(".btn-play");
play.addEventListener('click', function() {
    let canvas = document.querySelector("#canvas");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    setItems();
    setTimer();
});




function setItems() {
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");
    let imgBug = document.querySelector(".bug-img");
    let imgCarrot = document.querySelector(".carrot-img")
    imgCarrot.addEventListener("click", function() {
        alert("Hello World!");
    });
    
    for (let i = 0 ; i < 20 ; i++) {
        ctx.drawImage(imgCarrot, Math.random() * 960, Math.random() * 255);
    }

    for (let b = 0 ; b < 20 ; b++) {
        ctx.drawImage(imgBug, Math.random() * 990, Math.random() * 285);
    }


}



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