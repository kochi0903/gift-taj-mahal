const invitation = document.querySelector("#invitation");
const gift = document.querySelector("#gift");
const inviteFooter = document.querySelector("#invite-footer");
const openGift = document.querySelector("#open-gift");
const letter = document.querySelector("#letter");
const openLetter = document.querySelector("#open-letter");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let opening = false;
const stars = document.querySelector(".stars");
for (let i = 0; i < 75; i++) {
  const star = document.createElement("span");
  star.className = i % 9 === 0 ? "star bright" : "star";
  star.style.left = `${(i * 37.13 + 3) % 100}%`;
  star.style.top = `${(i * 23.79 + 7) % 95}%`;
  stars.append(star);
}
openGift.addEventListener("click", () => {
  if (opening) return;
  opening = true;
  openGift.disabled = true;
  invitation.classList.add("opening");
  setTimeout(
    () => {
      invitation.hidden = true;
      inviteFooter.hidden = true;
      gift.hidden = false;
      window.scrollTo({ top: 0, behavior: "instant" });
      document.querySelector("#gift-title").focus({ preventScroll: true });
      opening = false;
    },
    reduceMotion.matches ? 0 : 750,
  );
});
openLetter.addEventListener("click", () => {
  letter.showModal();
  document.body.style.overflow = "hidden";
});
function closeLetter() {
  letter.close();
}
document.querySelector("#close-letter").addEventListener("click", closeLetter);
document.querySelector("#back-to-taj").addEventListener("click", closeLetter);
letter.addEventListener("close", () => {
  document.body.style.overflow = "";
  openLetter.focus({ preventScroll: true });
});
letter.addEventListener("click", (event) => {
  if (event.target === letter) {
    const rect = letter.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      closeLetter();
  }
});
document.querySelector("#replay").addEventListener("click", () => {
  gift.hidden = true;
  invitation.hidden = false;
  inviteFooter.hidden = false;
  invitation.classList.remove("opening");
  openGift.disabled = false;
  window.scrollTo({ top: 0, behavior: "instant" });
  openGift.focus({ preventScroll: true });
});
