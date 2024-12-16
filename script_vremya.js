const countdownDate = new Date("Mart 21, 2025 12:00:00").getTime();

const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} д ${hours} ч ${minutes} мин ${seconds} сек`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Турнир стартовал!";
    }
}, 1000);