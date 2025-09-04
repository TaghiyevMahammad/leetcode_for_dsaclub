var containsDuplicate = function(nums) {
    const freq = {};
    for (let num of nums) {
        if (freq[num]) {
            return true;
        }
        freq[num] = 1;
    }
    return false;
};
