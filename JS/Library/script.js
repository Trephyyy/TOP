let myLibrary = [];
const root = document.querySelector(':root')
const currentColor = getComputedStyle(root).getPropertyValue("--theme-color")
const theme1 = document.getElementById('dark');
const theme2 = document.getElementById('light');
const cancelButton = document.getElementById('Cancel')
const addNew = document.getElementById('addNew')
const newBookPopup = document.getElementById('newBookWindow')
const read = document.getElementById('read')
const readFalse = document.getElementById('readFalse')
const readTrue = document.getElementById('readTrue')


addNew.onclick = () =>{
      newBookPopup.style.display = "flex"; 
}
cancelButton.onclick = () =>{
  newBookPopup.style.display = "none";
}
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
    root.style.setProperty('--theme-sidebar-color', 'wheat')
    root.style.setProperty('--window-color', '#c9c9c9')
}
function themeSetDark(){
    root.style.setProperty('--theme-color', '#101010')
    root.style.setProperty('--theme-text-color', 'white')
    root.style.setProperty('--theme-sidebar-color', 'rgb(70, 70, 70)')
    root.style.setProperty('--window-color', 'rgb(39, 39, 39)')
    
}
function isInputNumber (evt){
  const ch = String.fromCharCode(evt.which);
  if (!(/\d{1,6}/.test(ch))){

    evt.preventDefault();
  }
}
