document.addEventListener('DOMContentLoaded', () => {
    const kirby = document.getElementById('movable-kirby');
    const container = document.getElementById('image-container');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Move Kirby with the mouse
    document.addEventListener('mousemove', (event) => {
        const rect = kirby.getBoundingClientRect();
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
        kirby.style.left = `${newLeft}px`;
        kirby.style.top = `${newTop}px`;
    });

    function createOnigiri() {
        const onigiri = document.createElement('div');
        onigiri.classList.add('onigiri'); // Use the updated class name
        onigiri.style.left = `${Math.random() * (viewportWidth - 50)}px`; // Random horizontal position
        onigiri.style.top = '0px'; // Start from the top of the container
        container.appendChild(onigiri);

        // Animate falling
        const fallInterval = setInterval(() => {
            const onigiriRect = onigiri.getBoundingClientRect();
            const kirbyRect = kirby.getBoundingClientRect();
            let onigiriTop = parseFloat(onigiri.style.top) || 0;

            if (onigiriTop < viewportHeight) {
                onigiri.style.top = `${onigiriTop + 5}px`; // Falling speed

                // Check for collision
                if (
                    onigiriRect.left < kirbyRect.right &&
                    onigiriRect.right > kirbyRect.left &&
                    onigiriRect.top < kirbyRect.bottom &&
                    onigiriRect.bottom > kirbyRect.top
                ) {
                    // Collision detected
                    container.removeChild(onigiri);
                    clearInterval(fallInterval);
                }
            } else {
                // Remove the onigiri if it goes out of bounds
                container.removeChild(onigiri);
                clearInterval(fallInterval);
            }
        }, 20); // Adjust the interval for falling speed
    }

    // Create a new onigiri item every 2 seconds
    const onigiriInterval = setInterval(createOnigiri, 2000);
});