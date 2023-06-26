const popupWrapper = document.querySelector('.popup-wrapper')
const navIconsHeader = document.querySelectorAll('.l-header__content')
const popupApps = document.querySelector('.popup--apps')
const popupAccount = document.querySelector('.popup--account')

const setPopupDisplay = (popup1,popup2) => {
    popup1.style.display = 'block'
    popup2.style.display = 'none'
}

const closePopups = ({target}) => {
    const isWrapper = target === popupWrapper

    if(isWrapper){
        popupWrapper.classList.remove('show-popup')
    } 
    
}

const openPopups = ({target}) => {
    const clickedElement = target
    const isAppsPopup = clickedElement.className === 'apps' || clickedElement.classList[1] === 'link--applications'
    const isAccountPopup = clickedElement.className === 'avatar' || clickedElement.classList[1] === 'link--avatar'

   if(isAppsPopup){
        setPopupDisplay(popupApps,popupAccount)
        popupWrapper.classList.add('show-popup')
        
   }else if(isAccountPopup){
        setPopupDisplay(popupAccount,popupApps)
        popupWrapper.classList.add('show-popup')
   }
}

popupWrapper.addEventListener('click', closePopups)
navIconsHeader[1].addEventListener('click', openPopups)