* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.header {
    background-color: #333;
    padding: 1rem;
    position: fixed;
    width: 100%;
    top: 0;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li a {
    color: white;
    text-decoration: none;
    padding: 0 1rem;
}

.main {
    margin-top: 80px;
}

.hero {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f4f4f4;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.cta-button {
    padding: 1rem 2rem;
    margin-top: 2rem;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: #555;
}

.footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
}
document.addEventListener('DOMContentLoaded', function() {
    const cube = document.querySelector('.cube');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialRotation = { x: 0, y: 0 };

    cube.addEventListener('mousedown', startRotating);
    document.addEventListener('mousemove', rotate);
    document.addEventListener('mouseup', stopRotating);

    function startRotating(e) {
        isDragging = true;
        currentX = e.clientX;
        currentY = e.clientY;
        cube.style.animation = 'none';
    }

    function rotate(e) {
        if (!isDragging) return;

        const deltaX = e.clientX - currentX;
        const deltaY = e.clientY - currentY;

        initialRotation.x += deltaY * 0.5;
        initialRotation.y += deltaX * 0.5;

        cube.style.transform = `rotateX(${initialRotation.x}deg) rotateY(${initialRotation.y}deg)`;

        currentX = e.clientX;
        currentY = e.clientY;
    }

    function stopRotating() {
        isDragging = false;
    }
});
