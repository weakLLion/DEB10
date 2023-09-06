function notyet() {
    alert("Maaf untuk saat ini dalam masa pengerjaan!");
}

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const twelveHours = hours % 12 || 12; // Convert to 12-hour format

    const timeString = `${twelveHours}:${minutes}:${seconds} ${ampm}`;
    clockElement.textContent = timeString;
  }

  setInterval(updateClock, 1000);
  updateClock();
console.log("Web Created by : Syarief Rangga Nirwana");
console.log("Web Created date : Rabu, 15 Maret 2023");