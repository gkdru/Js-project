document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const repeatPassword = document
      .getElementById("repeatPassword")
      .value.trim();

    if (password !== repeatPassword) {
      alert("Пароли не совпадают");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    form.reset();

    window.location.href = "login.html";
  });
});
