// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns the best profit 
// I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// No "shorting"—you must buy before you sell. 
// You may not buy and sell in the same time step (at least 1 minute must pass).

var getMaxProfitPositive = (stockPricesYesterday) => {
  // Initialize minPrice as first element in stockPricesYesterday
  let minPrice = stockPricesYesterday[0];
  // Initialize maxProfit as 0
  let maxProfit = 0;
  // Iterate through stockPricesYesterday
  for (let i = 0; i < stockPricesYesterday.length; i++) {
    // Initialize currentPrice
    let currentPrice = stockPricesYesterday[i];
    // Set minPrice to the smallest of currentPrice vs minPrice
    minPrice = Math.min(currentPrice, minPrice);
    // Calculate currentProfit using minPrice
    let currentProfit = currentPrice - minPrice;
    // Set maxProfit to the largest of currentProfit vs maxProfit
    maxProfit = Math.max(currentProfit, maxProfit);
  }
  // Return maxProfit
  return maxProfit;
};

var getMaxProfitNegative = (stockPricesYesterday) => {
  // Initialize minPrice as first element in stockPricesYesterday
  let minPrice = stockPricesYesterday[0];
  // Initialize maxProfit as first profit from stockPricesYesterday
  let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
  // Iterate through stockPricesYesterday
  for (let i = 1; i < stockPricesYesterday.length; i++) {
    // Initialize currentPrice
    let currentPrice = stockPricesYesterday[i];
    // Calculate currentProfit using minPrice
    let currentProfit = currentPrice - minPrice;
    // Set maxProfit to the largest of currentProfit vs maxProfit    
    maxProfit = Math.max(currentProfit, maxProfit);
    // Set minPrice to the smallest of currentPrice vs minPrice
    minPrice = Math.min(currentPrice, minPrice);
  }
  // Return maxProfit
  return maxProfit;
};

console.log(getMaxProfitPositive([10, 7, 5, 8, 11, 9]));

console.log(getMaxProfitNegative([10, 7, 5, 3, 2, 1]));




