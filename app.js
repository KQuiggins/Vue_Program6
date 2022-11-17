const app = Vue.createApp({
    data() {       
        return {
            tickets: [],
            
            
        }
    },
    created() {
        this.getTickets();
    },
    methods: {
       async getTickets() {
            const response = await fetch('tickets1.json');
            this.tickets = await response.json();
            
        }
    },
})

app.mount('#main')   // mount in div id=template