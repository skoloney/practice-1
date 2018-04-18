export default function sumDigits(n) {
    let result = 0;

    while (n) {
        result += n % 10;
        n = Math.trunc(n / 10);
    }
    return result;
}
