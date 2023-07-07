const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll("[data-content]")

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skils__active')
            })

            target.classList.add('skils__active')

            tabs.forEach(tab => {
                tab.classList.remove('skils__active')
            })

            tab.classList.add('skils__active')
        })
    })