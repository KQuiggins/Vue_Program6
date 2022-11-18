const app = Vue.createApp({
    data() {       
        return {
            tickets: [],
            filtered: [],
            //showTable: false,

            
            
        }
    },
    created() {
        this.getTickets();
       
    },
    methods: {
       async getTickets() {
            const response = await fetch('tickets1.json');
            this.tickets = await response.json();
            this.filtered = this.tickets.filter((ticket) => ticket.actual_speed - ticket.posted_speed >= 25);
            console.log(this.filtered); 
            
        },
        
    },
})

app.mount('#main')   // mount in div id=template