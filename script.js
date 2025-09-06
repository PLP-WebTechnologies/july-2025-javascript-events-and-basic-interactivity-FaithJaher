// Part 1: Event Handling
document.getElementById("greetBtn").addEventListener("click", () => {
  document.getElementById("greetMsg").textContent = "Hello! Thanks for clicking the button!!";
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterEl = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterEl.textContent = count;
});

// FAQ Toggle with + and -
const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const toggle = q.querySelector(".faq-toggle");

    const isOpen = answer.style.display === "block";
    answer.style.display = isOpen ? "none" : "block";
    toggle.textContent = isOpen ? "➕" : "➖";
  });
});

// Part 3: Form Validation with JavaScript
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMsg = document.getElementById("formMsg");

  let valid = true;

  // Validate name
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email with regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final feedback
  if (valid) {
    formMsg.textContent = "✅ Form submitted successfully!";
    formMsg.style.color = "green";

    // Show popup
    popup.style.display = "flex";
  } else {
    formMsg.textContent = "❌ Please fix the errors above.";
    formMsg.style.color = "red";
  }
});

// Close popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
