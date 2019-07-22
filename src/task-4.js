
export default function formatTime(seconds) {
    const dt = new Date(2019, 0, 1, 0, 0, 0, 0);
    dt.setSeconds(dt.getSeconds() + seconds);
    if (dt.getHours() !== 0 && dt.getHours() !== 10 && dt.getHours() !== 11 && dt.getHours() !== 12 && dt.getHours() !== 22 && dt.getHours() !== 23) { return `0${dt.toLocaleTimeString()}`; }
    return dt.toLocaleTimeString();
}
