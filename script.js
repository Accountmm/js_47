// let y = e.offsetRight
// let x = e.pageX
// console.log(x);




// const eyes = document.querySelectorAll('.eye .black ');
// window.addEventListener(`mousemove`, function move(e) {
//     eyes.forEach(eye => {alias "-myjump" "-jump"
//         let y = e.pageY + eye.offsetLeft
//         let x = e.pageX + eye.offsetRight
//         eye.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
//         // console.log(y);
//     })
// })


const eyes = document.querySelectorAll('.black');

window.addEventListener('mousemove', function move(e) {
    eyes.forEach(eye => {
        let speed = eye.getAttribute(`speed`)
        console.log(speed);
        let x = (window.innerWidth - e.pageX * speed) / 60;
        let y = (window.innerHeight - e.pageY * speed) / 60;

        eye.style.transform = `translate(${-x}px, ${-y}px)`;
        console.log((e.pageX / 2)-  e.pageX);
    });
});
// console.log(mouth.offsetRight);

// console.log(eye);
// console.log(eye.pageY);