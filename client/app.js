document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please fill in both username/email and password.");
    return;
  }

  const emailOrPhonePattern = /^[\w.-]+@[\w.-]+\.\w{2,}$|^[0-9]{10}$/;
  if (!emailOrPhonePattern.test(username)) {
    alert("Enter a valid email address or 10-digit phone number.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert("Login successful!");
});
