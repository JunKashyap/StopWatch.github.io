var timerId;
var str = document.getElementById("start");
var pus = document.getElementById("pause");
var stp = document.getElementById("stop");
var timeformat = document.getElementById("time");
pus.setAttribute("disabled", true);
stp.setAttribute("disabled", true);
var time = 0;
setTime();

function setTime() {
    // console
    timeformat.innerText = (parseInt(time / 3600) < 10 ? "0" : "") + parseInt(time / 3600) + ":" +
        (parseInt((time / 60) % 60) < 10 ? "0" : "") + parseInt((time / 60) % 60) + ":" +
        (parseInt((time) % 60) < 10 ? "0" : "") + parseInt((time) % 60);
}


function start() {
    str.setAttribute("disabled", true);
    pus.removeAttribute("disabled", true);
    stp.removeAttribute("disabled", true);
    timerId = setInterval(() => {
        time += 0.1;
        setTime();
    }, 100);
}
function stop() {
    str.removeAttribute("disabled", true);
    pus.setAttribute("disabled", true);
    stp.setAttribute("disabled", true);
    pus.innerText = "pause"
    clearInterval(timerId);
    time = 0;
    setTime();
}

function pause() {
    if (pus.innerText === "pause") {
        clearInterval(timerId);
        pus.innerText = "continue";
    } else {
        start();
        pus.innerText = "pause";
    }
}
