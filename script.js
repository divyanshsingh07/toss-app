document.getElementById('tossButton').addEventListener('click', function() {
    const coin = document.getElementById('coin');
    const resultDisplay = document.getElementById('result');

    coin.style.display = 'block';
    coin.classList.remove('toss-animation');
    resultDisplay.classList.remove('show-result');
    resultDisplay.innerText = 'Tossing...';

    void coin.offsetWidth; // Trigger a reflow to restart the animation
    coin.classList.add('toss-animation');

    setTimeout(() => {
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

        if (result === 'Heads') {
            coin.style.backgroundImage = "url('heads.png')";
        } else {
            coin.style.backgroundImage = "url('tails.png')";
        }

        resultDisplay.innerText = `Result: ${result}`;
        resultDisplay.classList.add('show-result');
    }, 1000);
});
