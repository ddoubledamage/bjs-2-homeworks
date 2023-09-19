"use strict"

function solveEquation(a, b, c) {
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant > 0) {
		let firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
		let secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [firstRoot, secondRoot];
	} else if (discriminant === 0) {
		let root = -b / (2 * a);
		return [root];
	} else if (discriminant < 0) {
		return [];
	}
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
		return false;
	}
	let monthlyInterstedRate = percent / 100 / 12;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (monthlyInterstedRate + (monthlyInterstedRate / (((1 + monthlyInterstedRate) ** countMonths) - 1)));
	let totalPayment = +(monthlyPayment * countMonths).toFixed(2);
	return totalPayment;
}