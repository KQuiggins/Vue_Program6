const app = Vue.createApp({
    data() {       // data function must return an object
        return {
            name: 'Sadie Wilson'   // initial value
        }
    }
})

app.mount('#template')   // mount in div id=template