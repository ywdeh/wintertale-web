function copyIP() {
    navigator.clipboard.writeText("wt-de.hedwy.art");
    };

window.addEventListener('load', () => {
const elements = document.querySelectorAll('.with-fade');
elements.forEach(el => {
    el.classList.remove('pre-fade');
    el.classList.add('fade-in');
    });
});

const parallaxSection = document.getElementById('parallax');
window.addEventListener('mousemove', (e) => {
if (!parallaxSection) return;
const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;
const xOffset = (x - 0.5) * 20;
const yOffset = (y - 0.5) * 20;
parallaxSection.style.backgroundPosition = `calc(50% - ${xOffset}px) calc(50% - ${yOffset}px)`;
});

const hoverSound = document.getElementById("hover-sound");
hoverSound.volume = 0.1;

document.querySelectorAll(".tap-sound").forEach(el => {
    el.addEventListener("click", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});