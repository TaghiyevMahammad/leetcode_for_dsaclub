var isPalindrome = function(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g , "");
    const rev = cleaned.split("").reverse().join("");
    return cleaned === rev;
};