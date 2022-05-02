const app = new Vue({
    el: '#app',
    data: {
        error: false,
    },
    // components: { myheader, blog, cart, catalog, filter, footer, news, search },
    components: { search, catalog, cart, news, blog },
    methods: {
        async getJson(url) {
            try {
                const result = await fetch(url);
                return await result.json();
            } catch (error) {
                console.log(error);
                this.error = !this.error;
            }
        },
    },
})