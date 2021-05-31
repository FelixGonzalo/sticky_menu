const header_sticky = document.getElementById("header-sticky")

window.onscroll = function () {
  addHeaderSticky()
}

function addHeaderSticky() {
  if (window.pageYOffset === 0) {
    header_sticky.classList.remove("header-sticky")
  } else {
    header_sticky.classList.add("header-sticky")
  }
}