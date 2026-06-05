/* OPEN BUTTON */
function openInvitation() {
  document.getElementById("openScreen").style.display = "none";
  document.getElementById("weddingContent").style.display = "block";
  updateCountdown();
}

/* COUNTDOWN */
const countdownEl = document.getElementById("countdown");
const weddingDate = new Date("2026-11-28T19:00:00+05:30").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    countdownEl.innerHTML = "We Are Married ❤️";
    return;
  }

  const d = Math.floor(distance / (1000*60*60*24));
  const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((distance%(1000*60*60))/(1000*60));
  const s = Math.floor((distance%(1000*60))/1000);

  countdownEl.innerHTML =
    d + " Days " + h + " Hours " + m + " Minutes " + s + " Seconds";
}

/* RUN TIMER */
setInterval(updateCountdown, 1000);
