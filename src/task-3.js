
export default function sumDigits(n) {
    if (n !== 0) {
        let s = 0;
        let t;
        while (n) {
            t = n % 10;
            n = (n - t) / 10;
            s += t;
        }
        return s;
    }
    return 0;
}
