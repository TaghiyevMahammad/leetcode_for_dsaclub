var maxProfit = function(prices) {
    let profit = 0;
    let minPrice = prices[0]; 

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; 
        }
        let currentProfit = prices[i] - minPrice; 
        if (currentProfit > profit) {
            profit = currentProfit; 
        }
    }

    return profit;
};

// console.log(maxProfit([7,1,5,3,6,4]))