async function delayMessage() {
	const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;
	
	if (textInput && delayInput) {
		const delayInSeconds = parseInt(delayInput);
        const outputDiv = document.getElementById('output');
		
		outputDiv.textContent = 'Waiting...';
		
		await new Promise(resolve => setTimeout(resolve, delayInSeconds * 1000));
		outputDiv.textContent = textInput;
	}
}

const btn = document.getElementById('btn');
btn.addEventListener('click', delayMessage);