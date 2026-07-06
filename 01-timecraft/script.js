let timer = null;
let elapsedTime = 0;
let isRunning = false;

function updateJam () {

    const sekarang = new Date();

    let jam = sekarang.getHours();
    let menit = sekarang.getMinutes();
    let detik = sekarang.getSeconds();

    if (jam < 10) {
        jam = "0" + jam;
    }

    if (detik < 10) {
        detik = "0" + detik;
    }

    if (menit < 10) {
        menit = "0" + menit;
    }

    const formanWaktu = `${jam}:${menit}:${detik}`;

    document.getElementById("tampilan-jam").textContent = formanWaktu;


}

function startStopwatch() {
    if (isRunning) return;

    isRunning = true;

    timer = setInterval(function(){
        elapsedTime++;

        let jam = Math.floor(elapsedTime / 3600);
        let menit = Math.floor((elapsedTime % 3600) / 60);
        let detik = elapsedTime % 60;

        if (jam < 10) {
            jam = "0" + jam;
        }

        if (menit < 10) {
            menit = "0" + menit;
        }

        if (detik < 10) {
            detik = "0" + detik;
        }

        document.getElementById('tampilan-stopwatch').textContent = `${jam}:${menit}:${detik}`;
    }, 1000 );
}

function stopStopwatch() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    document.getElementById('tampilan-stopwatch').textContent = '00:00:00';
}

setInterval(updateJam, 1000);
updateJam();
document.getElementById('btn-start').addEventListener('click', startStopwatch);
document.getElementById('btn-stop').addEventListener('click', stopStopwatch);
document.getElementById('btn-reset').addEventListener('click', resetStopwatch);