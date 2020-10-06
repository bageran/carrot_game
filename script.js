window.onload = function() {
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");
    let imgBug = document.querySelector(".bug-img");
    let imgCarrot = document.querySelector(".carrot-img")

    let bugX = Math.random() * 990;
    let bugY = Math.random() * 285;
    console.log(bugX);
    console.log(bugY);

    let carrotX = Math.random() * 104;
    let carrotY = Math.random() * 33;

    ctx.drawImage(imgCarrot, carrotX, carrotY);
    ctx.drawImage(imgBug, bugX, bugY);
    
  }
