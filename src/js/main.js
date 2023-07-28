import '../css/tailwind.css'
import Alpine from 'alpinejs'


Alpine.store('theme', {
    init() {

        this.switch(this.value)

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (this.value === 'system') {
                this.switch(this.value)
            }
        })
    },

    value: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system',

    switch(theme) {
        console.log(this.value, '*******')
        console.log(theme)
        if (theme === 'dark') {
            this.darkMode()
            localStorage.setItem('theme', 'dark')
            this.value = 'dark'
        } else if (theme === 'light') {
            this.lightMode()
            localStorage.setItem('theme', 'light')
            this.value = 'light'
        } else {

            (window.matchMedia('(prefers-color-scheme: dark)').matches) ? this.darkMode() : this.lightMode()
            localStorage.removeItem('theme')
            this.value = 'system'
        }

    },

    darkMode() {
        console.log('darkMode')
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')

    },

    lightMode() {
        console.log('lightMode')
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
    }


})

Alpine.store('menu', {
    on: false,
    open() {
        this.on = true
    },
    close() {
        this.on = false
    }

})

window.Alpine = Alpine

Alpine.start()