function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    const utcTime = now.toUTCString();
    utcTimeElement.textContent = `Current UTC Time: ${utcTime}`;
}

setInterval(updateUTCTime, 1000);

updateUTCTime();