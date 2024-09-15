document.getElementById('processText').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    document.getElementById('outputText').innerHTML = processText(inputText);
});

function processText(text) {
    return text.split(' ').map(word => {
        const length = word.length;
        const boldCount = Math.ceil(length / 2);
        const boldedPart = word.slice(0, boldCount);
        const remainingPart = word.slice(boldCount);
        return `<span class="highlight"><strong>${boldedPart}</strong>${remainingPart}</span>`;
    }).join(' ');
}






