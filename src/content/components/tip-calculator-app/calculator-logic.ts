/**
 * Pure calculation functions for the tip calculator
 * These are separated for easier testing
 */

export interface CalculationResult {
	tipAmountPerPerson: number;
	totalPerPerson: number;
}

/**
 * Calculate tip amount and total per person
 * @param total - Bill total
 * @param tip - Tip percentage (e.g., 15 for 15%)
 * @param numPeople - Number of people splitting the bill
 * @returns Calculation result or null if inputs are invalid
 */
export function calculateBill(
	total: number,
	tip: number,
	numPeople: number,
): CalculationResult {
	let tipAmountPerPerson = 0,
		totalPerPerson = 0;

	if (total <= 0 || numPeople <= 0) {
		return {
			tipAmountPerPerson,
			totalPerPerson,
		};
	}

	tipAmountPerPerson = (total * tip) / 100 / numPeople;
	totalPerPerson = (total * (1 + tip / 100)) / numPeople;

	return {
		tipAmountPerPerson,
		totalPerPerson,
	};
}

/**
 * Format currency value to 2 decimal places with dollar sign
 * @param value - Numeric value to format
 * @returns Formatted string (e.g., "$12.34")
 */
export function formatCurrency(value: number): string {
	return `$${value.toFixed(2)}`;
}
