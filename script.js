const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('add');

    btn.innerHTML = sound;

    document.getElementById('buttons').appendChild(btn);

})