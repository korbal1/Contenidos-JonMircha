const d = document;

export default function countdown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
    limitTime = countdownDate - now,
    days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
    hours = Math.trunc((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.trunc((limitTime % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.trunc((limitTime % (1000 * 60)) / (1000));

    $countdown.innerHTML = `<h3>Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para mi cumpleaños 😊😊</h3>`;

    console.log(countdownDate, now, limitTime)
    if(limitDate < 0){
        clearInterval(countdownTempo);
        $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
}, 1000);
}