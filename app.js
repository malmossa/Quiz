const form = document.querySelector(".quiz-form");
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

  console.log(userScore);
});
