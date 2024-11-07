const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  if (username === "admin" && password === "admin") {
    alert("Login successful");
    
  } else {
    alert("Login failed");
  }
});
