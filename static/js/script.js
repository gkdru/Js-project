const container = document.querySelector(".shop_list");
const loginButton = document.getElementById("loginBtn");
const signUpButton = document.getElementById("signUpBtn");
const storedUsername = localStorage.getItem("username");
let items;
if (storedUsername) {
  loginButton.textContent = storedUsername;
}
loginButton.addEventListener("click", function () {
  if (storedUsername) {
    alert("Вы уже залогинены как " + storedUsername);
  } else {
    window.location.href = "login.html";
  }
});
if (storedUsername) {
  loginButton.textContent = storedUsername;
}

const renderElements = (items) => {
  container.innerHTML = "";

  items.forEach((shop_item) => {
    const item = document.createElement("div");
    item.classList.add("item");

    const image = document.createElement("img");
    image.src = shop_item.image;

    const text = document.createElement("p");
    text.innerText = shop_item.title;

    const price = document.createElement("p");
    price.innerText = shop_item.price + "$";

    item.appendChild(image);
    item.appendChild(text);
    item.appendChild(price);
    container.appendChild(item);
  });
};

document.getElementById("applyFilter").addEventListener("click", function () {
  const itemName = document.getElementById("itemName").value.toLowerCase();
  const sortOrder = document.getElementById("sortOrder").value;

  let filteredItems = items;

  if (itemName !== "") {
    filteredItems = filteredItems.filter((item) => {
      return item.title.toLowerCase().includes(itemName);
    });
  }

  if (sortOrder === "asc") {
    filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredItems.sort((a, b) => b.price - a.price);
  }

  renderElements(filteredItems);
});

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((answer) => {
    items = answer;
    renderElements(items);
  });
