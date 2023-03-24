const popupWrapper = document.querySelector('.popup-wrapper')
const navIconsHeader = document.querySelectorAll('.l-header__content')
const popupApps = document.querySelector('.popup--apps')
const popupAccount = document.querySelector('.popup--account')

console.log(navIconsHeader)

popupWrapper.addEventListener('click', event => {
    if(event.target.className === "popup-wrapper"){
        popupWrapper.style.position = 'static'
        popupApps.style.display = 'none'
        popupAccount.style.display = 'none'
    } 
})

navIconsHeader[1].addEventListener('click', event => {
    const clickedElement = event.target
   
   if(clickedElement.className === 'apps' || clickedElement.classList[1] === 'link--applications'){
        popupApps.style.display = 'block'
        popupAccount.style.display = 'none'
        popupWrapper.style.position = 'absolute'
   }else if(clickedElement.className === 'avatar' || clickedElement.classList[1] === 'link--avatar'){
        popupAccount.style.display = 'block'
        popupApps.style.display = 'none'
        popupWrapper.style.position = 'absolute'
   }
})