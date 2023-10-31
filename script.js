const background = document.querySelector('.shape-container');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

function createShape() {
    const studyEmojis = [
        '📚', '📖', '🎓', '📝', '📅', '🧠', '📓', '📜', '📋', '🖋', '✏️', '📏',
        '📎', '📚', '📊', '📈', '🔍'
    ]; // Study-related emojis

    const humanEmojis = [
        '👩‍🎓', '👨‍🎓', '👩‍💼', '👨‍💼', '🙋', '🙇', '💁', '🤷'
    ]; // Human emojis

    const funnyEmojis = [
        '😄', '😎', '🤓'
    ]; // Funny emojis

    const emojiCategories = [studyEmojis, humanEmojis, funnyEmojis];
    const randomCategory = emojiCategories[Math.floor(Math.random() * emojiCategories.length)];
    const shape = document.createElement('div');
    const randomEmoji = randomCategory[Math.floor(Math.random() * randomCategory.length)];
    shape.classList.add('shape'); // You can keep this class for styling

    const size = Math.random() * 50 + 10; // Random size between 10 and 60 pixels
    shape.style.fontSize = size + 'px'; // Set the font size to control the emoji size

    shape.innerText = randomEmoji; // Set the emoji as the inner text

    // Adjust initial positions to cluster more towards the edges
    const initialX = Math.random() * (screenWidth - size * 2) + size; // Avoid shapes starting at the very edge
    const initialY = Math.random() * (screenHeight - size * 2) + size; // Avoid shapes starting at the very edge
    shape.style.left = initialX + 'px';
    shape.style.top = initialY + 'px';

    // Assign random velocities for horizontal and vertical movement
    const horizontalVelocity = Math.random() * 2 - 1; // Random value between -1 and 1
    const verticalVelocity = Math.random() * 2 - 1; // Random value between -1 and 1

    // Use CSS animations for movement
    shape.style.animation = 'move-emoji ' + (Math.random() * 4 + 2) + 's linear infinite';
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

setInterval(createShape, 100); // Add mixed emojis to the background more frequently
