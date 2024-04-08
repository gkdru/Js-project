document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (!storedUsername || !storedPassword) {
      alert("У вас нет зарегистрированного аккаунта");
      return;
    }

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    if (
      enteredUsername === storedUsername &&
      enteredPassword === storedPassword
    ) {
      window.location.href = "index.html";
    } else {
      alert("Неверное имя пользователя или пароль");
    }

    form.reset();
  });
});
