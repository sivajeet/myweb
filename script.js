const background = document.querySelector('.shape-container');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

function createShape() {
    const shapes = ['square', 'circle'];
    const shape = document.createElement('div');
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shape.classList.add('shape', randomShape);

    const size = Math.random() * 50 + 10; // Random size between 10 and 60 pixels
    shape.style.width = size + 'px';
    shape.style.height = size + 'px';

    shape.style.border = `4px solid ${getRandomColor()}`; // Increase border thickness and use random color

    // Adjust initial positions to cluster more towards the edges
    const initialX = Math.random() * (screenWidth - size * 2) + size; // Avoid shapes starting at the very edge
    const initialY = Math.random() * (screenHeight - size * 2) + size; // Avoid shapes starting at the very edge
    shape.style.left = initialX + 'px';
    shape.style.top = initialY + 'px';

    // Assign random velocities for horizontal and vertical movement
    const horizontalVelocity = Math.random() * 2 - 1; // Random value between -1 and 1
    const verticalVelocity = Math.random() * 2 - 1; // Random value between -1 and 1

    // Use CSS animations for movement
    shape.style.animation = `move-${randomShape} ${(Math.random() * 4 + 2)}s linear infinite`;
    shape.style.animationDirection = horizontalVelocity < 0 ? 'reverse' : 'normal';
    shape.style.animationIterationCount = 'infinite';

    // Update position using JavaScript animations
    let currentX = initialX;
    let currentY = initialY;

    const animationInterval = setInterval(() => {
        currentX += horizontalVelocity * 10; // Adjust the speed here
        currentY += verticalVelocity * 10; // Adjust the speed here

        if (
            currentX < -size ||
            currentX > screenWidth ||
            currentY < -size ||
            currentY > screenHeight
        ) {
            clearInterval(animationInterval);
            background.removeChild(shape);
        } else {
            shape.style.left = currentX + 'px';
            shape.style.top = currentY + 'px';
        }
    }, 100);

    background.appendChild(shape);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(createShape, 100); // Add squares and circles to the background more frequently
