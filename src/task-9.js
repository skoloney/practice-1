
export default function merge(data) {
    const obj = {};
    for (const i of data) {
        for (const b in i) {
            if (!obj[b]) {
                obj[b] = [i[b]];
            } else {
                obj[b].push(i[b]);
            }
        }
    }
    return obj;
}
