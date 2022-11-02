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