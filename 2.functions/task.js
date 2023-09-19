function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = [0];
	max = Math.max(...arr);
	min = Math.min(...arr);
	avg = Number((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
	return {
		max: max,
		min: min,
		avg: avg
	}
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	avg = arr.reduce((a, b) => a + b);
	return avg
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	let countEvenElement = 0;
	let countOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			countEvenElement += arr[i];
		} else {
			countOddElement += arr[i];
		}
	}
	return countEvenElement - countOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			countEvenElement += 1;
			sumEvenElement += arr[i];
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const max = func(...arrOfArr[i]);
		if (max > maxWorkResult) {
			maxWorkResult = max;
		}
	}
	return maxWorkResult;
}