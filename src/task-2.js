
export default function getNthItem(a, n) {
    if (n !== 0 && a !== 0) {
        for (let S = [0], i = 1; i <= n; i++) {
            S[i] = a - 2 * S[i - 1];
            if (i >= n) {
                return S[i];
            }

        }
    }
    return 0;
}
