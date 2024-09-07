document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Dummy logic to determine if the video is real or AI-generated
    // Replace this with your actual verification logic
    let isReal = Math.random() > 0.5;

    let resultIcon = document.getElementById('resultIcon');
    let resultText = document.getElementById('resultText');
    let resultDiv = document.getElementById('result');

    if (isReal) {
        resultIcon.src = "https://img.icons8.com/fluency/48/thumb-up.png";
        resultText.textContent = "Yours is real!";
    } else {
        resultIcon.src = "https://img.icons8.com/color/48/000000/thumbs-down.png";
        resultText.textContent = "Yours is AI-generated!";
    }

    resultDiv.classList.remove('hidden');
});
