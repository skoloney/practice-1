export default function merge(data) {
    const result = {};

    for (const currentObj of data) {
        for (const [key, val] of Object.entries(currentObj)) {
            result[key] = key in result
                ? [...result[key], val]
                : [val];
        }
    }

    return result;
}
