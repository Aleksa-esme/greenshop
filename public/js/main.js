const app = new Vue({
    el: '#app',
    data: {
        error: false,
    },
    mounted(){},
    // components: { myheader, blog, cart, catalog, filter, footer, news, search },
    components: { search, catalog, filtercustom, cart, news, blog },
    methods: {
        async getJson(url) {
            try {
                const result = await fetch(url);
                return await result.json();
            } catch (error) {
                this.error = !this.error;
                // this.$refs.error.text = error;
            }
        },

        async postJson(url, data){
            try {
                const result = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await result.json();
            } catch (error) {
                this.error = !this.error;
                // this.$refs.error.text = error;
            }
        },
        async putJson(url, data){
            try {
                const result = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await result.json();
            } catch (error) {
                this.error = !this.error;
                // this.$refs.error.text = error;
            }
        },

        async deleteJson(url, data){
            try {
                const result = await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await result.json();
            } catch (error) {
                this.error = !this.error;
                // this.$refs.error.text = error;
            }
        },
    },
});

export default {
    app:app
}