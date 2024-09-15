document.addEventListener('mousemove', (event) => {
    const image = document.getElementById('movable-kirby');
    const rect = image.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate new position
    let newLeft = event.clientX;
    let newTop = event.clientY;

    // Ensure the image stays within the viewport bounds
    if (newLeft + rect.width > viewportWidth) {
        newLeft = viewportWidth - rect.width;
    }
    if (newTop + rect.height > viewportHeight) {
        newTop = viewportHeight - rect.height;
    }

    // Apply the new position
    image.style.left = `${newLeft}px`;
    image.style.top = `${newTop}px`;
});


