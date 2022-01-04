const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

const correctAnswers = ["B", "B", "A", "B"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userScore = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // Check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      userScore += 25;
    }
  });

  // Show result on page
  result.querySelector("span").textContent = `${userScore}%`;
  result.classList.remove("d-none");
});
