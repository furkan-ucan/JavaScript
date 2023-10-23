// Kullanıcının adını sormak için bir kez prompt kullan
const myName = prompt("Adınızı Girin:");

function showTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  const day = days[date.getDay()];

  // Kullanıcının adını yalnızca bir kez güncelleyin
  if (myName) {
    document.getElementById("myName").textContent = myName;
  }

  const myClock = document.getElementById("myClock");
  myClock.textContent = `${hours}:${minutes}:${seconds} ${day}`;
}

showTime(); // Sayfa yüklendiğinde saat gösterimini hemen başlat

setInterval(showTime, 1000); // Her 1 saniyede bir saat güncelle
