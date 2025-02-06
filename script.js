function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    const utcTime = now.toUTCString();
    utcTimeElement.textContent = `Current UTC Time: ${utcTime}`;
}

// Update UTC time every second
setInterval(updateUTCTime, 1000);

// Call function on page load
updateUTCTime();
