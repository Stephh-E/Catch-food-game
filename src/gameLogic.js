
document.addEventListener('mousemove', (event) => {
    const image = document.getElementById('movable-image');
    
    // Set the image's top and left properties based on cursor position
    image.style.left = `${event.clientX}px`;
    image.style.top = `${event.clientY}px`;
});


