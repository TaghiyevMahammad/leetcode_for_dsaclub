var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let tamamlayici = target - nums[i];
        if (map.hasOwnProperty(tamamlayici)) {
            return [map[tamamlayici], i];
        }
        map[nums[i]] = i;
    }
};

// console.log(twoSum([2, 7, 11, 15], 9));