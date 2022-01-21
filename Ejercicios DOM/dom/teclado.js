const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage);
        console.log(e.keyCode);
        console.log(e.key);

    // const move = (direction) =>{
        
    // }

    switch (e.keyCode){
        case 37:
            e.preventDefault();
           //move("left");
           x--;
            break;
        case 38:
            e.preventDefault();
            //move("up");
            y--;
            break;
        case 39:
            e.preventDefault();
            //move("right");
            x++;
            break;
        case 40:
            e.preventDefault();
            //move("down");
            y++;
            break;
        default:
            break;
}
$ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}

export function shortcuts (e) {
    // console.log(e.type);
    // console.log(e.keyCode);
    // console.log(e.code);
    // console.log(e);


if (e.key === "a" && e.altKey){
    alert("Haz lanzado una alerta con el teclado");
}

if (e.key === "c" && e.altKey){
    confirm("Haz lanzado un confirm con el teclado");
}

if (e.key === "p" && e.altKey){
    prompt("Haz lanzado una prompt con el teclado");
}
}