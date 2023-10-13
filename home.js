//from bulma
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

//3d modelling page
var imgVisible = true

document.getElementById("favorite").addEventListener("click", function () {
  var renders = document.getElementById("renders");
  var animation = document.getElementById("animation");

  if (imgVisible) {
    renders.style.display = "none";
    animation.style.display = "flex"
    imgVisible = false;
  } else {
    renders.style.display = "flex";
    animation.style.display = "none"
    imgVisible = true;
  }
});