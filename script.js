// let y = e.offsetRight
// let x = e.pageX
// console.log(x);




// const eyes = document.querySelectorAll('.eye .black ');
// window.addEventListener(`mousemove`, function move(e) {
//     eyes.forEach(eye => {

//         let y = e.pageY + eye.offsetLeft
//         let x = e.pageX + eye.offsetRight
//         eye.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
//         // console.log(y);
//     })
// })


const eyes = document.querySelectorAll('.eye .black');
window.addEventListener('mousemove', function move(e) {
    eyes.forEach(eye => {
        let y = e.pageY + eye.offsetTop;
        let x = e.pageX + eye.offsetLeft;
        eye.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
}); 
// console.log(mouth.offsetRight);

// console.log(eye);
// console.log(eye.pageY);