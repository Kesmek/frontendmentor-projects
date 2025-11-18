const form = document.getElementById("ratings-form") as HTMLFormElement;
const errorMessage = document.getElementById(
	"ratings-error",
) as HTMLSpanElement;
const ratingInputs = document.querySelectorAll<HTMLInputElement>(
	'input[name="rating"]',
);
const resultDiv = document.getElementById("result");
const entryDiv = document.getElementById("entry");

const showResult = () => {
	if (resultDiv && entryDiv) {
		resultDiv.hidden = false;
		resultDiv.style.display = "grid";
		entryDiv.hidden = true;
		entryDiv.style.display = "none";
		console.log("showing result");
	}
};

form?.addEventListener("submit", (ev) => {
	ev.preventDefault();

	// Check if any radio is selected
	const selectedRating = new FormData(form).get("rating");

	if (!selectedRating) {
		// Show error
		errorMessage.textContent = "Please select a rating before submitting";
		ratingInputs[0].focus();
		return;
	}

	// Valid - clear error and proceed
	errorMessage.textContent = "";

	showResult();
});

// Clear error when user selects any radio
ratingInputs.forEach((input) => {
	input.addEventListener("change", () => {
		errorMessage.textContent = "";
	});
});
