document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('animate-up');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('animate-up');
    });

    const colorBlocks = document.querySelectorAll('.color-block');
    colorBlocks.forEach(block => {
        block.addEventListener('mouseover', function() {
            const audioSrc = this.getAttribute('data-audio');
            const audio = new Audio(audioSrc);
            audio.play();
        });
    });
});
