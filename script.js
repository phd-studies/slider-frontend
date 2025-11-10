const carousel = document.querySelector('.carousel');
let isDragging = false;
let startX;
let rotation = 0;

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    carousel.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX;
    const deltaX = x - startX;
    rotation += deltaX * 0.5; // Adjust the sensitivity of the panning

    carousel.style.transform = `rotateY(${rotation}deg)`;
    startX = x;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.transition = 'transform 0.5s';
});
