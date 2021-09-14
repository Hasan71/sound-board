const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerHTML = sound;

    btn.addEventListener ('click', () => {
        stopSound();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})

//to avoid playing over one another
function stopSound () {
    sounds.forEach(sound => {
        const music = document.getElementById(sound);
        music.pause();
        music.currentTime = 0;
    })
}