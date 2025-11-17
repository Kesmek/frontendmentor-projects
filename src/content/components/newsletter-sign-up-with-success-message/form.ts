import {
	clearFieldError,
	type MessageByFieldType,
	validateField,
} from "@utils/form";

const form = document.getElementById("newsletter__form") as HTMLFormElement;

// Field-specific custom messages
const fieldMessages: MessageByFieldType = {
	email: {
		valueMissing: "Email address is required",
		typeMismatch: "Valid email required",
	},
};

/**
 * Validate all form fields
 */
const validateAllFields = (): boolean => {
	const fields = Array.from(
		form.querySelectorAll("input, select, textarea"),
	) as HTMLInputElement[];

	let isValid = true;
	let firstInvalidField: HTMLInputElement | null = null;

	for (const field of fields) {
		const fieldValid = validateField(
			field,
			fieldMessages,
			".newsletter__form-group",
			"newsletter__form-error",
		);
		if (!fieldValid) {
			isValid = false;
			if (!firstInvalidField) {
				firstInvalidField = field;
			}
		}
	}

	// Focus first invalid field
	if (firstInvalidField) {
		firstInvalidField.focus();
	}

	return isValid;
};

// Clear errors when user starts typing
form.addEventListener("input", (event) => {
	const field = event.target as HTMLInputElement;
	if (
		field.tagName === "INPUT" ||
		field.tagName === "TEXTAREA" ||
		field.tagName === "SELECT"
	) {
		clearFieldError(field, ".newsletter__form-group", "newsletter__form-error");
	}
});

// Validate on blur for better UX (optional)
form.addEventListener(
	"blur",
	(event) => {
		const field = event.target as HTMLInputElement;
		if (
			field.tagName === "INPUT" ||
			field.tagName === "TEXTAREA" ||
			field.tagName === "SELECT"
		) {
			// Only validate if field has been touched
			if (field.value) {
				validateField(
					field,
					fieldMessages,
					".newsletter__form-group",
					"newsletter__form-error",
				);
			}
		}
	},
	true, // Use capture phase to catch blur events
);

// Handle form submission
form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (validateAllFields()) {
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);

		// Update email in success message
		const emailElement = document.querySelector(
			".newsletter__success-email",
		) as HTMLElement;
		if (emailElement && data.email) {
			emailElement.textContent = data.email as string;
		}

		// Show success dialog
		const dialog = document.querySelector(
			".newsletter__success",
		) as HTMLDialogElement;
		if (dialog) {
			dialog.showModal();
		}

		// Clear form fields
		form.reset();
	}
});
