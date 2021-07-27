var maxProfit = function (prices) {
	let maxPrice = 0;
	let minPrice = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < prices.length; i++) {
		minPrice = prices[i] < minPrice ? prices[i] : minPrice;
		maxPrice = Math.max(maxPrice, prices[i] - minPrice);
	}
	return maxPrice;
};
