var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const freq = new Map();

    for (const ch of s) {
        freq.set(ch,(freq.get(ch) || 0)+1);
    }

    for (const ch of t) {
        if (!freq.has(ch)) {
            return false;
        }
        freq.set(ch, freq.get(ch) - 1 );
        if(freq.get(ch) === 0) {
            freq.delete(ch);
        }
        
    }
    return freq.size === 0;
};