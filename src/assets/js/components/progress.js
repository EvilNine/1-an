const progress = () => {
    const btn = document.getElementById('progessBtn')
    const prg = document.getElementById('progress');

    btn.addEventListener('click', () => {
        const btnVal = +btn.dataset.value;
        if(prg.value < 100) {
            prg.value += btnVal
            prg.style.cssText = `--val:${prg.value}%`;
            prg.setAttribute('title', prg.value)
        }
        
    });
}

export default progress;