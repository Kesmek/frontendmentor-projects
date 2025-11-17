import {
	clearFieldError,
	type MessageByFieldType,
	validateField,
} from "@utils/form";

const billInput = document.getElementById("bill-total") as HTMLInputElement;
const tipInput = document.getElementById("tip-custom") as HTMLInputElement;
const numPeopleInput = document.getElementById(
	"num-people",
) as HTMLInputElement;
const tipPerPersonOutput = document.getElementById(
	"tip-per-person",
) as HTMLOutputElement;
const totalPerPersonOutput = document.getElementById(
	"total-per-person",
) as HTMLOutputElement;
const resetButton = document.getElementById("reset-btn") as HTMLButtonElement;
let total = 0,
	tip = 0,
	numPeople = 0;

const fieldErrors: MessageByFieldType = {
	number: {
		badInput: "Must be a number",
		valueMissing: "Must be a number",
	},
};

const uncheckRadios = (field: HTMLInputElement) => {
	const fieldset = field.closest(".input-group") as HTMLFieldSetElement;
	if (!fieldset) return;

	fieldset.querySelectorAll<HTMLInputElement>(".tip-radio").forEach((radio) => {
		radio.checked = false;
	});
};

const calculateBill = () => {
	if (total > 0 && numPeople > 0) {
		const tipAmountPerPerson = (total * tip) / 100 / numPeople;
		const totalPerPerson = (total * (1 + tip / 100)) / numPeople;

		tipPerPersonOutput.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
		totalPerPersonOutput.textContent = `$${totalPerPerson.toFixed(2)}`;
		resetButton.removeAttribute("disabled");
	} else {
		resetOutput();
	}
};

const resetOutput = () => {
	tipPerPersonOutput.textContent = `$0.00`;
	totalPerPersonOutput.textContent = `$0.00`;
	resetButton.setAttribute("disabled", "");
};

const setInputToVar = (field: HTMLInputElement): number => {
	const isValid = validateField(field, fieldErrors);

	if (isValid) {
		return field.valueAsNumber;
	}

	return 0;
};

billInput.addEventListener("input", (e) => {
	total = setInputToVar(e.target as HTMLInputElement);
	calculateBill();
});

tipInput.addEventListener("input", (e) => {
	tip = setInputToVar(e.target as HTMLInputElement);
	uncheckRadios(e.target as HTMLInputElement);
	calculateBill();
});

numPeopleInput.addEventListener("input", (e) => {
	numPeople = setInputToVar(e.target as HTMLInputElement);
	calculateBill();
});

// Clear custom tip input when a radio button is selected
const tipRadios = document.querySelectorAll<HTMLInputElement>(".tip-radio");
tipRadios.forEach((radio) => {
	radio.addEventListener("change", () => {
		if (radio.checked) {
			tipInput.value = "";
			clearFieldError(tipInput, ".input-group", ".input-error");
			tip = Number(radio.value);
			calculateBill();
		}
	});
});

resetButton.addEventListener("click", (e) => {
	(e.target as HTMLButtonElement).form?.reset();
	total = 0;
	tip = 0;
	numPeople = 0;
	resetOutput();
});
