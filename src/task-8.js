
export default function getTopLetter(str) {
/*    const dop = [];
    let key;
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        if (!dop[ str[i]]) {
            dop[ str[i]] = 1;
        } else {
            dop[ str[i]] += 1;
        }
        if (dop[ str[i]] > max) {
            max = dop[ str[i]];
            key = str[i];
        }
    }
    return key;
}
*/
    const [...z] = str.split("");
    const map = new Map();
    for (const i in z) {
        if (!map.has(str[i])) {
            map.set(str[i], 1);
        } else {
            let value = map.get(str[i]);
            value += 1;
            map.set(str[i], value);
        }
    }
    let max = 0;
    let key1;
    map.forEach((value, key) => {
        if (max < value) {
            max = value;
            key1 = key;
        }
    });
    return key1;
}
