const longDescription = window.matchMedia("(min-width: 1100px)");
// Check if the media query is true
let description = document.querySelector(".movieDescription");

function change(e) {
  if (e.matches) {
    description.textContent =
      "When the Riddler, a sadistic serial killer, begins to kill Gotham’s main political figures, Batman is forced to investigate corruption in the city and question his family’s involvement.";
  } else {
    description.textContent =
      "When the Riddler, a sadistic serial killer, begins to kill Gotham’s main political figures...";
  }
}
longDescription.addListener(change);

change(longDescription);

let confirm = document.querySelector(".confirm");

let menu = document.querySelector(".tags");

let add = document.querySelector("#add");

add.addEventListener("click", () => {
  if ((menu.style.display = "none")) {
    menu.style.display = "block";
  }
});

confirm.addEventListener("click", () => {
  menu.style.display = "none";
});

let watch = document.querySelector(".cta");
let video = document.querySelector(".video");

watch.addEventListener("click", () => {
  video.style.display = "block";
});
