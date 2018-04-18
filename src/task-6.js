export default function getStats(data) {

    if (data.length === 0) {
        return {
            min: null,
            max: null,
            avg: null
        };
    }

    let min = Infinity,
        max = -Infinity,
        sum = 0;

    for (const val of data) {
        min = (min > val) ? val : min;
        max = (max < val) ? val : max;
        sum += val;
    }

    return {
        min,
        max,
        avg: sum / data.length
    };
}
