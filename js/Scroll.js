const sections = document.querySelectorAll('section')

window.addEventListener('scroll', checkSections)
    checkSections()

    function checkSections(){
        const triggerBottom = window.innerHeight / 5 * 4
        sections.forEach(box => {
            const boxTop = box.getBoundingClientRect().top
            if(boxTop < triggerBottom){
                box.classList.add('show')
            }else{
                box.classList.remove('show')
            }
        })
    }