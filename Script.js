/* OPEN INVITATION */
function openInvitation() {
  document.getElementById("openScreen").style.display = "none";
  document.getElementById("weddingContent").style.display = "block";

  const inviteBox = document.getElementById("inviteBox");
  if (inviteBox) {
    inviteBox.style.display = "block";
  }

  updateCountdown();
}

/* COUNTDOWN ELEMENT */
const countdownEl = document.getElementById("countdown");

/* WEDDING DATE */
const weddingDate = new Date("2026-11-28T19:00:00+05:30").getTime();

/* UPDATE COUNTDOWN */
function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    if (countdownEl) {
      countdownEl.innerHTML = "We Are Married ❤️";
    }
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (countdownEl) {
    countdownEl.innerHTML =
      `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }
}

/* RUN EVERY SECOND */
setInterval(updateCountdown, 1000);
