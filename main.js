const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            // solution
            url: 'https://www.vuemastery.com',
            inventory: 8, // new data property //
            // solution L4
            onSale: true,
        }
    }
})
