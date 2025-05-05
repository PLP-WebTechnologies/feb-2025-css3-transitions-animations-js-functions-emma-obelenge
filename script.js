// Local Storage: Store and Retrieve User Preferences
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
  body.style.backgroundColor = "gray"; // Set dark background color
}

// Toggle theme and save to localStorage
themeToggle.addEventListener("click", () => {
  if (body.className === "dark-theme") {
    body.className = "";
    localStorage.setItem("theme", "");
    body.style.backgroundColor = "#f4f4f4"; // Reset background color
  } else {
    body.className = "dark-theme";
    localStorage.setItem("theme", "dark-theme");
    body.style.backgroundColor = "gray"; // Set dark background color
  }
});

// 1. Button Click Event
const button = document.getElementById("change-text-btn");
button.addEventListener("click", () => {
  button.textContent = "You clicked me!";
  button.style.backgroundColor = "#4CAF50";
});

// 2. Hover Effect
const hoverElement = document.getElementById("hover-box");
hoverElement.addEventListener("mouseover", () => {
  hoverElement.style.backgroundColor = "#FFD700";
});
hoverElement.addEventListener("mouseout", () => {
  hoverElement.style.backgroundColor = "#f4f4f4";
});

// 3. Keypress Detection
document.addEventListener("keypress", (event) => {
  const keyDisplay = document.getElementById("key-display");
  keyDisplay.textContent = `You pressed: ${event.key}`;
});

// Animation Triggered by User Actions
const secretButton = document.getElementById("secret-btn");
secretButton.addEventListener("dblclick", () => {
  secretButton.classList.add("animate");
  setTimeout(() => {
    secretButton.classList.remove("animate");
  }, 3000); // Animation lasts for 3 seconds
});

// Interactive Elements 🎮

// 1. Image Gallery
const images = document.querySelectorAll(".gallery img");
images.forEach((img) => {
  img.addEventListener("click", () => {
    const display = document.getElementById("image-display");
    display.src = img.src;
    display.alt = img.alt;
    display.style.display = "block";
  });
});

// 2. Tabs
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((content) => (content.style.display = "none"));

    tab.classList.add("active");
    tabContents[index].style.display = "block";
  });
});

// Form Validation with Animation Feedback
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");

  if (!email.value.includes("@")) {
    errorMessage.textContent = "Please enter a valid email address.";
    errorMessage.style.color = "red";
    errorMessage.style.animation = "shake 0.5s";
    return;
  }

  if (password.value.length < 8) {
    errorMessage.textContent = "Password must be at least 8 characters long.";
    errorMessage.style.color = "red";
    errorMessage.style.animation = "shake 0.5s";
    return;
  }

  errorMessage.textContent = "Form submitted successfully!";
  errorMessage.style.color = "green";
  errorMessage.style.animation = "none";
});

// Shake Animation for Error Messages
const errorMessage = document.getElementById("error-message");
errorMessage.addEventListener("animationend", () => {
  errorMessage.style.animation = "none";
});
