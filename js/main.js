const video = document.getElementById("video");
const volumen = document.getElementById("volumen");
const pause = document.getElementsByClassName("fas")[1];
const play = document.getElementsByClassName("fas")[0];
const controles = document.getElementsByClassName("controles")[0];
const duration = document.getElementsByClassName("duration")[0];
const minutes = document.getElementById("minutes");
const second = document.getElementById("seconds");
const line_time = document.getElementById("line-time");
pause.style.display = "none";

document.getElementsByClassName("fas")[0].addEventListener("click", () => {

    video.play();
    play.style.display = "none";
    pause.style.display = "inline";

    let min = 0;

    setInterval(() => {

        let second_now = Math.round(video.currentTime);
        line_time.value = second_now;

        if (second_now <= 59) {

            min = 0;

        }

        if (second_now >= 120 && second_now <= 179) {

            second_now -= 120;
            min = 2;

        }

        if (second_now >= 60 && second_now <= 119) {

            second_now -= 60;
            min = 1;

        }

        else if (second_now >= 180) {

            second_now -= 180;
            min = 3;

        }

        if (second_now <= 9) {

            second_now = '0' + second_now;

        }

        second.innerHTML = second_now;
        minutes.innerHTML = min;

    }, 1000);

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

line_time.addEventListener("mouseup", () => {

    video.currentTime = line_time.value;

});

document.getElementsByClassName("fa-expand")[0].addEventListener("click", () => {

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        video.style.width = "100%";
        video.style.height = "100vh";
        controles.style.width = "100%";
        duration.style.width = "80%";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            video.style.width = "70%";
            video.style.height = "auto";
            controles.style.width = "70%";
            duration.style.width = "65%";
        }
    }

});