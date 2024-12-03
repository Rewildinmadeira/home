document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    accordionItem.classList.toggle("active");

    // Close other open accordions (optional)
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });
  });
});
