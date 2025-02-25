const kakashi = document.querySelector('.kakashi');
document.addEventListener('mousemove', (e) => {
    let x = e.clientX / window.innerWidth * 100;
    let y = e.clientY / window.innerHeight * 100;
    kakashi.style.transform = `translate(${x - 50}%, ${y - 50}%)`;
});