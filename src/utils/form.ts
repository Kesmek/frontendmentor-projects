// Custom error messages for each validity state
type ErrorMessages = {
	[P in keyof Omit<ValidityState, "valid" | "customError">]: string;
};

// Valid HTML input types
type InputType =
	| "button"
	| "checkbox"
	| "color"
	| "date"
	| "datetime-local"
	| "email"
	| "file"
	| "hidden"
	| "image"
	| "month"
	| "number"
	| "password"
	| "radio"
	| "range"
	| "reset"
	| "search"
	| "submit"
	| "tel"
	| "text"
	| "time"
	| "url"
	| "week";

type MessageByFieldType = Partial<Record<InputType, Partial<ErrorMessages>>>;

/**
 * Get custom error message for a field based on its validity state
 */
const getCustomErrorMessage = (
	field: HTMLInputElement | HTMLFieldSetElement,
	customMessageByField?: MessageByFieldType,
): string => {
	const validity = field.validity;
	const fieldName = field.type as InputType;
	const messages = customMessageByField?.[fieldName] || {};

	// Map validity states to default error messages
	const defaultMessages: ErrorMessages = {
		valueMissing: "This field is required",
		typeMismatch: "Value is invalid",
		patternMismatch: "The text does not match the pattern",
		tooShort: "This text is too short",
		tooLong: "This text is too long",
		rangeOverflow: "Value is not within required range",
		rangeUnderflow: "Value is not within required range",
		stepMismatch: "Value does not match the step constraint",
		badInput: "Invalid input",
	};

	// Find the first validity error and return its message
	for (const [key, defaultMessage] of Object.entries(defaultMessages)) {
		if (validity[key as keyof ValidityState]) {
			return messages[key as keyof ErrorMessages] || defaultMessage;
		}
	}

	return "";
};

/**
 * Show error message for a field
 */
const showFieldError = (
	field: HTMLInputElement | HTMLFieldSetElement,
	message: string,
	groupSelector: string,
	errorSelector: string,
): void => {
	// Get ancestor form element by classname (usually parent)
	const formGroup = field.closest(groupSelector);
	if (!formGroup) return;

	// get error component by classname
	const errorElement = formGroup.querySelector(errorSelector) as HTMLElement;
	if (!errorElement) return;

	errorElement.textContent = message;
	field.setAttribute("aria-invalid", "true");

	if (errorElement.id) {
		field.setAttribute("aria-describedby", errorElement.id);
	}
};

/**
 * Clear error message for a field
 */
const clearFieldError = (
	field: HTMLInputElement,
	groupSelector: string,
	errorSelector: string,
): void => {
	// Get ancestor form element by classname (usually parent)
	const formGroup = field.closest(groupSelector);
	if (!formGroup) return;

	// get error component by classname
	const errorElement = formGroup.querySelector(errorSelector) as HTMLElement;
	if (!errorElement) return;

	errorElement.textContent = "";
	field.removeAttribute("aria-invalid");
	field.removeAttribute("aria-describedby");
};

/**
 * Validate field using its grouping element and the error element
 */
const validateField = (
	field: HTMLInputElement,
	fieldErrors?: MessageByFieldType,
	groupSelector: string = ".input-group",
	errorSelector: string = ".input-error",
): boolean => {
	if (!field.validity.valid) {
		const message = getCustomErrorMessage(field, fieldErrors);
		showFieldError(field, message, groupSelector, errorSelector);
		return false;
	}

	clearFieldError(field, groupSelector, errorSelector);
	return true;
};

export {
	getCustomErrorMessage,
	showFieldError,
	clearFieldError,
	validateField,
};
export type { MessageByFieldType };
