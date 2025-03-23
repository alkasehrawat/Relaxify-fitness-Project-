

document.getElementById('adviceBtn').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice?' + Math.random())
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('adviceDisplay').innerText = `"${data.slip.advice}"`;
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
});



