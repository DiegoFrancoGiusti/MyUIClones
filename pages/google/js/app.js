const popupWrapper = document.querySelector('.popup-wrapper')
const navIconsHeader = document.querySelectorAll('.l-header__content')
const popupApps = document.querySelector('.popup--apps')
const popupAccount = document.querySelector('.popup--account')

const closePopups = ({target}) => {
    const isWrapper = target.className === "popup-wrapper"

    if(isWrapper){
        popupWrapper.style.position = 'static'
        popupApps.style.display = 'none'
        popupAccount.style.display = 'none'
    } 
}

const openPopups = ({target}) => {
    const clickedElement = target
    const isAppsPopup = clickedElement.className === 'apps' || clickedElement.classList[1] === 'link--applications'
    const isAccountPopup = clickedElement.className === 'avatar' || clickedElement.classList[1] === 'link--avatar'

   if(isAppsPopup){
        popupApps.style.display = 'block'
        popupAccount.style.display = 'none'
        popupWrapper.style.position = 'absolute'
        
   }else if(isAccountPopup){
        popupAccount.style.display = 'block'
        popupApps.style.display = 'none'
        popupWrapper.style.position = 'absolute'
   }
}

popupWrapper.addEventListener('click', closePopups)
navIconsHeader[1].addEventListener('click', openPopups)