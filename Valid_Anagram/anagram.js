var isAnagram = function(s, t) {
    const cleaned = str => str.split("").sort().join("");
    return cleaned(s) === cleaned(t);
};