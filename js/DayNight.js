const banner = document.querySelector('.banner')
const about = document.querySelector('.aboutMe')
const skils = document.querySelector('.skils')
const hobbies = document.querySelector('.hobbies')
const body = document.querySelector('body')
const dayNight = document.querySelector('.dayNight')

dayNight.onclick = function(){
    banner.classList.toggle('night')
    about.classList.toggle('night')
    skils.classList.toggle('night')
    hobbies.classList.toggle('night')
    body.classList.toggle('night')
}