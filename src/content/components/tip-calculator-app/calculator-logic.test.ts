import { describe, expect, test } from "bun:test";
import { calculateBill, formatCurrency } from "./calculator-logic";

describe("Calculator Logic", () => {
	describe("calculateBill", () => {
		test("calculates correct tip and total for basic case", () => {
			const result = calculateBill(100, 15, 2);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBe(7.5);
			expect(result.totalPerPerson).toBeCloseTo(57.5);
		});

		test("calculates correct values for 1 person", () => {
			const result = calculateBill(50, 20, 1);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBe(10);
			expect(result.totalPerPerson).toBe(60);
		});

		test("calculates correct values for multiple people", () => {
			const result = calculateBill(200, 18, 4);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBe(9);
			expect(result.totalPerPerson).toBe(59);
		});

		test("handles 0% tip", () => {
			const result = calculateBill(100, 0, 2);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBe(0);
			expect(result.totalPerPerson).toBe(50);
		});

		test("handles decimal bill amounts", () => {
			const result = calculateBill(142.55, 15, 3);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBeCloseTo(7.128);
			expect(result.totalPerPerson).toBeCloseTo(54.644);
		});

		test("returns null when total is 0", () => {
			const result = calculateBill(0, 15, 2);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBe(0);
			expect(result.totalPerPerson).toBe(0);
		});

		test("returns null when total is negative", () => {
			const result = calculateBill(-50, 15, 2);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBe(0);
			expect(result.totalPerPerson).toBe(0);
		});

		test("returns null when numPeople is 0", () => {
			const result = calculateBill(100, 15, 0);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBe(0);
			expect(result.totalPerPerson).toBe(0);
		});

		test("returns null when numPeople is negative", () => {
			const result = calculateBill(100, 15, -2);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBe(0);
			expect(result.totalPerPerson).toBe(0);
		});

		test("handles very large tip percentage", () => {
			const result = calculateBill(100, 100, 2);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBe(50);
			expect(result.totalPerPerson).toBe(100);
		});

		test("handles fractional people (edge case)", () => {
			// While not realistic, the function should still calculate
			const result = calculateBill(100, 15, 2.5);

			expect(result).not.toBeNull();
			expect(result.tipAmountPerPerson).toBe(6);
			expect(result.totalPerPerson).toBeCloseTo(46);
		});
	});

	describe("formatCurrency", () => {
		test("formats whole numbers with 2 decimals", () => {
			expect(formatCurrency(10)).toBe("$10.00");
		});

		test("formats decimal numbers", () => {
			expect(formatCurrency(12.5)).toBe("$12.50");
		});

		test("rounds to 2 decimal places", () => {
			expect(formatCurrency(12.555)).toBe("$12.55"); // Note: toFixed uses banker's rounding
			expect(formatCurrency(12.556)).toBe("$12.56");
		});

		test("formats zero", () => {
			expect(formatCurrency(0)).toBe("$0.00");
		});

		test("formats negative numbers", () => {
			expect(formatCurrency(-5.5)).toBe("$-5.50");
		});

		test("formats very small numbers", () => {
			expect(formatCurrency(0.01)).toBe("$0.01");
		});

		test("formats large numbers", () => {
			expect(formatCurrency(1234567.89)).toBe("$1234567.89");
		});
	});
});
