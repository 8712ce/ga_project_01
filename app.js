const pages = document.getElementsByTagName("section")
const navButtons = document.getElementsByTagName("button")
console.log("hello")

function onClickHandle(event) {
    // console.log(event)
    const pageId = event.target.innerText.toLowerCase().replaceAll(' ', '_')

    // loop over all the pages
    for (let i = 0; i < pages.length; i++) {
        // check if the page we're currently looping over has an id that matches the clicked button's text
        if (pageId === pages[i].id) {
            // if the page's id matches the clicked button's text, make that page visible.
            pages[i].className = "current_page"
        } else {
            // if the page's id doesn't match the clicked button's text, make that page invisible.
            pages[i].className = "hidden_page"
        }
    }

}

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', onClickHandle)
}


// EDITED CODE FROM W3SCHOOLS STARTS HERE //
// EDITED CODE FROM W3SCHOOLS STARTS HERE //
// EDITED CODE FROM W3SCHOOLS STARTS HERE //

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("my_slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

// EDITED CODE FROM W3SCHOOLS ENDS HERE //
// EDITED CODE FROM W3SCHOOLS ENDS HERE //
// EDITED CODE FROM W3SCHOOLS ENDS HERE //



//Grabbing Elements
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')
const close = document.getElementById('close')

//Functions
const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none';
}

//Event Listeners
openBtn.addEventListener('click', openModal)
close.addEventListener('click', closeModal)
