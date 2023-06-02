//your code here
async function showMessage() {
	const textInput = document.getElementById(`text`).value;
    const delayInput = document.getElementById(`delay`).value;

	if (textInput && delayInput) {
		const delayInSec = parseInt(textInput);
		const outputDiv = document.getElementById(`output`);

		outputDiv.textContent = 'Waiting...';
		await new Promise((resolve) => setTimeout(resolve, delayInput*1000));

		outputDiv.textContent = textInput;
	}
}
const btn = document.getElementById("btn");
btn.addEventListener("click", showMessage);
