
export default function convertToRoman(n) {
    let D = "";
    if (n > 0) {
        for (let i = 1; i <= n; i = 1) {
            if (n >= 1000) {
                D += "M";
                n = n - 1000;
            }
            if (n >= 900) {
                D += "CM";
                n = n - 900;
            }
            if (n >= 500) {
                D += "D";
                n = n - 500;
            }
            if (n >= 400) {
                D += "CD";
                n = n - 400;
            }
            if (n >= 100) {
                D += "C";
                n = n - 100;
                if (n >= 100) {
                    D += "C";
                    n = n - 100;
                    if (n >= 100) {
                        D += "C";
                        n = n - 100;
                    }
                }
            }
            if (n >= 90) {
                D += "XC";
                n = n - 90;
            }
            if (n >= 50) {
                D += "L";
                n = n - 50;
            }
            if (n >= 40) {
                D += "XL";
                n = n - 40;
            }
            if (n >= 10) {
                D += "X";
                n = n - 10;
                if (n >= 10) {
                    D += "X";
                    n = n - 10;
                    if (n >= 10) {
                        D += "X";
                        n = n - 10;
                    }
                }
            }
            if (n >= 9) {
                D += "IX";
                n = n - 9;
            }
            if (n >= 5) {
                D += "V";
                n = n - 5;
            }
            if (n >= 4) {
                D += "IV";
                n = n - 4;
            }
            if (n >= 1) {
                D += "I";
                n = n - 1;
            }
        }
        return D;
    }
    return "";
}
