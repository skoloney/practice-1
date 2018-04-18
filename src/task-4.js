
function padTime(x) {
    return x >= 10 ? `${x}` : `0${x}`;
}

export default function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    const meridiem = hours >= 12 ? "PM" : "AM";

    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)} ${meridiem}`;
}
