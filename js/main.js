
// mouse

const coords = {x:0, y: 0 };
const circles = document.querySelectorAll(".circle")

circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX + window.scrollX;
    coords.y = e.clientY + window.scrollY;

});

function animatedCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });
    requestAnimationFrame(animatedCircles)
}
animatedCircles();

// menu hamburger

const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',() =>{
    navLinks.classList.toggle('mobile-menu')
})


//timer

document.addEventListener('DOMContentLoaded', function () {
    
    const timerElement = document.querySelector('.timer');

    setInterval(function () {
       
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}`;

        timerElement.textContent = formattedTime;
    }, 1000);

    function padNumber(number) {
        return number < 10 ? '0' + number : number;
    }
});

