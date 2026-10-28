document.addEventListener('DOMContentLoaded', () => {

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const playBtn = document.getElementById('playAudioBtn');
    const statusText = document.getElementById('playerStatus');

    const song = new Audio('sway.mp3'); 
    let isPlaying = false;

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            song.pause();
            isPlaying = false;
            playBtn.textContent = '▶ PLAY TRACK';
            statusText.textContent = 'Status: Paused';
        } else {
            song.play();
            isPlaying = true;
            playBtn.textContent = '⏹ PAUSE TRACK';
            statusText.textContent = 'Status: Playing...';
        }
    });

    song.addEventListener('ended', () => {
        isPlaying = false;
        playBtn.textContent = '▶ PLAY TRACK';
        statusText.textContent = 'Status: Standby';
    });
});