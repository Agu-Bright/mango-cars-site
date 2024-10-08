const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "NGN",
	currencyDisplay: "narrowSymbol",
	maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)

	// These options are needed to round to whole numbers if that's what you want.
	//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
});

export const moneyFormat = (amount: number) => formatter.format(amount);

export function generateArray(upToNumber: number) {
	const resultArray: number[] = [];

	for (let i = 1; i <= upToNumber; i++) {
		resultArray.push(i);
	}

	return resultArray;
}
