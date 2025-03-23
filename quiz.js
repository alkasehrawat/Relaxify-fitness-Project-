// Function to calculate the result based on the user's answers
function calculateResult(event) {
    event.preventDefault();

    // Get all the form data
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    let totalScore = 0;

    // Loop through each question and calculate the total score
    for (let entry of formData.entries()) {
        totalScore += parseInt(entry[1]);
    }

    // Display result based on total score
    let resultText;
    if (totalScore <= 10) {
        resultText = 'Low Stress';
    } else if (totalScore <= 20) {
        resultText = 'Moderate Stress';
    } else if (totalScore <= 30) {
        resultText = 'High Stress';
    } else {
        resultText = 'Severe Stress';
    }

    document.getElementById('result').innerHTML = `<h3>Your Stress Level: ${resultText}</h3>`;
}
