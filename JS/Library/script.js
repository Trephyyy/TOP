let myLibrary = [];
const root = document.querySelector(':root')
const currentColor = getComputedStyle(root).getPropertyValue("--theme-color")
const theme1 = document.getElementById('dark');

const theme2 = document.getElementById('light');
theme1.onclick = () => {
    themeSetDark()
    theme1.style.display = "none"
    theme2.style.display = "block"
}
theme2.onclick = () => {
    themeSetLight()
    theme2.style.display = "none"
    theme1.style.display = "block"
}
function themeSetLight(){
    root.style.setProperty('--theme-color', 'skyblue')
    root.style.setProperty('--theme-text-color', 'black')
}
function themeSetDark(){
    root.style.setProperty('--theme-color', '#101010')
    root.style.setProperty('--theme-text-color', 'white')
}

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}