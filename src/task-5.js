
export default function trim(text, maxLength) {
    if (maxLength <= 0) { throw new RangeError("значення <= 0"); }
    if (maxLength >= text.length) { return text; }
    text = text.substr(0, maxLength - 1);
    text = `${text}\u2026`;
    return text;
    // замість 5-7 рядку може бути: return = `${text.substr(0, maxLength - 1)}\u2026`;
}
