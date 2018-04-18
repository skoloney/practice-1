export default function getTopLetter(str) {
    const charCount = new Map();

    for (const char of str) {
        const count = charCount.has(char)
            ? charCount.get(char) + 1
            : 1;

        charCount.set(char, count);
    }

    let max = 0;
    let maxSymbol = "";
    for (const [char, count] of charCount) {
        if (max < count) {
            max = count;
            maxSymbol = char;
        }
    }

    return maxSymbol;
}
