const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');

let isDragging = false;
let startX, startY;
let rotationX = 0;
let rotationY = 0;

carouselContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    carouselContainer.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX;
    const y = e.clientY;
    const deltaX = x - startX;
    const deltaY = y - startY;

    rotationY += deltaX * 0.5;
    rotationX -= deltaY * 0.5; // Invert for natural feel

    carouselContainer.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    startX = x;
    startY = y;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    carouselContainer.style.transition = 'transform 0.5s';
});
