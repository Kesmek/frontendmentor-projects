const form = document.getElementById("newsletter__form") as HTMLFormElement;
const closeButton = document.getElementById(
  "newsletter__success-btn",
) as HTMLButtonElement;

// Custom error messages for each validity state
type ErrorMessages = {
  valueMissing?: string;
  typeMismatch?: string;
  patternMismatch?: string;
  tooShort?: string;
  tooLong?: string;
  rangeUnderflow?: string;
  rangeOverflow?: string;
  stepMismatch?: string;
  badInput?: string;
};

// Default error messages
const defaultMessages: ErrorMessages = {
  valueMissing: "This field is required",
  typeMismatch: "Please enter a valid value",
  patternMismatch: "Please match the requested format",
  tooShort: "Please lengthen this text",
  tooLong: "Please shorten this text",
};

// Field-specific custom messages
const fieldMessages: Record<string, ErrorMessages> = {
  email: {
    valueMissing: "Email address is required",
    typeMismatch: "Valid email required",
  },
};

/**
 * Get custom error message for a field based on its validity state
 */
const getCustomErrorMessage = (field: HTMLInputElement): string => {
  const validity = field.validity;
  const fieldName = field.name;
  const messages = fieldMessages[fieldName] || {};

  // Check each validity state and return appropriate message
  if (validity.valueMissing) {
    return messages.valueMissing || defaultMessages.valueMissing!;
  }
  if (validity.typeMismatch) {
    return messages.typeMismatch || defaultMessages.typeMismatch!;
  }
  if (validity.patternMismatch) {
    return messages.patternMismatch || defaultMessages.patternMismatch!;
  }
  if (validity.tooShort) {
    return messages.tooShort || defaultMessages.tooShort!;
  }
  if (validity.tooLong) {
    return messages.tooLong || defaultMessages.tooLong!;
  }
  if (validity.rangeUnderflow) {
    return messages.rangeUnderflow || defaultMessages.rangeUnderflow!;
  }
  if (validity.rangeOverflow) {
    return messages.rangeOverflow || defaultMessages.rangeOverflow!;
  }
  if (validity.stepMismatch) {
    return messages.stepMismatch || defaultMessages.stepMismatch!;
  }
  if (validity.badInput) {
    return messages.badInput || defaultMessages.badInput!;
  }

  return "";
};

/**
 * Show error message for a field
 */
const showFieldError = (field: HTMLInputElement, message: string): void => {
  const formGroup = field.parentElement;
  if (!formGroup) return;

  const errorElement = formGroup.querySelector(
    ".newsletter__form-error",
  ) as HTMLElement;
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
const clearFieldError = (field: HTMLInputElement): void => {
  const formGroup = field.parentElement;
  if (!formGroup) return;

  const errorElement = formGroup.querySelector(
    ".newsletter__form-error",
  ) as HTMLElement;
  if (!errorElement) return;

  errorElement.textContent = "";
  field.removeAttribute("aria-invalid");
  field.removeAttribute("aria-describedby");
};

/**
 * Validate a single field using native validation
 */
const validateField = (field: HTMLInputElement): boolean => {
  // Use browser's native validation
  if (!field.validity.valid) {
    const message = getCustomErrorMessage(field);
    showFieldError(field, message);
    return false;
  }

  clearFieldError(field);
  return true;
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
    const fieldValid = validateField(field);
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
    clearFieldError(field);
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
        validateField(field);
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

    console.log("Form is valid!", data);

    // Show success dialog
    const dialog = document.querySelector(
      ".newsletter__success",
    ) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }
});

closeButton.addEventListener("click", (e) => {
  if (HTMLButtonElement.prototype.hasAttribute("commandForElement")) {
    console.log("has prototype");
  }

  const dialog = document.getElementById(
    "newsletter__success",
  ) as HTMLDialogElement;
  if (dialog.open) {
    dialog.close();
  }
});
