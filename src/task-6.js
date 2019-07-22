
export default function getStats(data) {
    if (data.length !== 0) {
        let mn = data[0]; // у разі використання Math.min не потрібно
        let mx = data[0]; // у разі використання Math.max не потрібно
        let ag = 0;
        for (let i = 0; i < data.length; i++) {
            ag += data[i];
            if (data[i] > mx) { mx = data[i]; } // у разі використання Math.max не потрібно
            if (data[i] < mn) { mn = data[i]; } // у разі використання Math.min не потрібно
        }
        ag /= data.length;
        return {
            min: mn, // Math.min.apply(null, data),
            max: mx, // Math.max.apply(null, data),
            avg: ag
        };
    }
    return {
        min: null,
        max: null,
        avg: null
    };
}
