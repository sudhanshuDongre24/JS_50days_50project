const rating = document.querySelectorAll(".rating");
const ratingContainer = document.querySelector(".rating-contianer");
const sndBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }

  if (e.target.classList.contains("rating")) {
    removeActive();
    e.target.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sndBtn.addEventListener("click", (e) => {
  panel.innerHTML = `<i class="fas fa-heart"></i>
  <strong>Thank You!</strong>
  <br>
  <stong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support</p>
  <br style:"margin-top:10px;">
  <button class="btn" type="button" onClick="window.location.reload()">
   Reload Page
</button>
`;
});

function removeActive() {
  rating.forEach((rating) => {
    rating.classList.remove("active");
  });
}
