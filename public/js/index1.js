const images = document.querySelectorAll('.image-wraper img')
const popupImage = document.querySelector('.popup-img')
const popup = document.querySelector('.popup-img img')
    images.forEach(image => {
        image.onclick = () => {
            popupImage.style.display = 'block'
            popup.src = image.getAttribute('src')
        }
})

document.querySelector('.popup-img span').onclick = () => {
    popupImage.style.display = 'none'
}