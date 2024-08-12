// Get A All images
let images = Array.from(document.querySelectorAll(".galary div img"));
// Get The Counter Of Images
let length;
// Get The Result Show Images Box
let Show = document.querySelector(".show-image");
// Get The Button Close The Box-Show
let Close = document.getElementById("close");
// Get Next Button
let Next = document.getElementById("next");
// Get Prev Button
let Prev = document.getElementById("prev");

// Show The Image On Click
images.forEach(function (img) {
  img.onclick = function () {
    Show.classList.add("show");
    Show.children[1].src = this.src;
    length = images.indexOf(this);
  };
});

// Next And Prev Images
Next.onclick = function () {
  length++;
  check();
  Show.children[1].src = images[length].src;
};

Prev.onclick = function () {
  length--;
  check();
  Show.children[1].src = images[length].src;
};

// Check Of Length Equle Max Or Min (The Images Count)
function check() {
  if (length === images.length - 1) {
    Next.classList.add("des");
  } else {
    Next.classList.remove("des");
  }
  if (length === 0) {
    Prev.classList.add("des");
  } else {
    Prev.classList.remove("des");
  }
}

// Close The Box-Show On Click Close Button
Close.onclick = function () {
  Show.classList.remove("show");
};
