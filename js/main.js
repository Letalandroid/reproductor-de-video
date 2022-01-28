const video = document.getElementById("video");
const volumen = document.getElementById("volumen");
const pause = document.getElementsByClassName("fas")[1];
const play = document.getElementsByClassName("fas")[0];
const controles = document.getElementsByClassName("controles")[0];
pause.style.display = "none";

document.getElementsByClassName("fas")[0].addEventListener("click", () => {

    video.play();
    play.style.display = "none";
    pause.style.display = "inline";

});

document.getElementsByClassName("fas")[1].addEventListener("click", () => {

    video.pause();
    pause.style.display = "none";
    play.style.display = "inline";

});

volumen.addEventListener("mousemove", () => {

    video.volume = volumen.value / 100;

    if (volumen.value <= 50 && volumen.value >= 1) {

        document.getElementById("vol").className = ("fas fa-volume-down");

    } else if (volumen.value == 0) {

        document.getElementById("vol").className = ("fas fa-volume-mute");

    } else {

        document.getElementById("vol").className = ("fas fa-volume-up");

    }

});

document.getElementsByClassName("fa-expand")[0].addEventListener("click", () => {

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        video.style.width = "100%";
        video.style.height = "100vh";
        controles.style.width = "100%";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            video.style.width = "70%";
            video.style.height = "auto";
            controles.style.width = "70%";
        }
    }

});