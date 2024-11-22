// Select all accordion buttons
const accordionBtns = document.querySelectorAll(".accordion");

// Loop through each accordion button
accordionBtns.forEach((accordion) => {
  // Add click event listener
  accordion.addEventListener("click", function () {
    this.classList.toggle("is-open");

    // Get the associated content div
    const content = this.nextElementSibling;

    // Toggle aria-expanded attribute
    const isOpen = this.classList.contains("is-open");
    this.setAttribute("aria-expanded", isOpen);

    // Toggle content visibility
    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });

  // Add keyboard accessibility
  accordion.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.click();
    }
  });
});
