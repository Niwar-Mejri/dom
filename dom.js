function updateTotal() {
    const items = document.querySelectorAll(".cart-item");
    let total = 0;
    items.forEach(item => {
      const price = parseFloat(item.querySelector(".price").dataset.price);
      const quantity = parseInt(item.querySelector(".count").innerText);
      total += price * quantity;
    });
    document.getElementById("total").innerText = total;
  }
  
  document.querySelectorAll(".plus").forEach(button => {
    button.addEventListener("click", () => {
      const count = button.parentElement.querySelector(".count");
      count.innerText = parseInt(count.innerText) + 1;
      updateTotal();
    });
  });
  
  document.querySelectorAll(".minus").forEach(button => {
    button.addEventListener("click", () => {
      const count = button.parentElement.querySelector(".count");
      if (parseInt(count.innerText) > 1) {
        count.innerText = parseInt(count.innerText) - 1;
        updateTotal();
      }
    });
  });
  
  document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
      updateTotal();
    });
  });
  
  document.querySelectorAll(".like").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("liked");
      button.innerText = button.classList.contains("liked") ? "❤️" : "♡";
    });
  });
  
  // Initial update
  updateTotal();
  