const filtercustom = {
    data () {
        return {
            products: [],
            categories: [],
            sizes: [],
        }
    },
    mounted () {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.$data.products.push(el);
                }
                this.products.filter(item => {
                    item.category.filter(el => {
                        if (!this.categories.includes(el)) {
                            this.categories.push(el);
                        }
                    })
                })
                this.products.filter(el => {
                    if (!this.sizes.includes(el.size)) {
                        this.sizes.push(el.size);
                    }
                })
            })
    },
    methods: {
        filter(value) {
            // let regexp = new RegExp(value, 'i');
            // this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
        
        getSizeQty(size) {
            let qty = 0;
            this.products.filter(el => {
                if (el.size == size) {
                    qty++;
                }
            })
            return qty;
        },
        
        getCategoryQty(category) {
            let qty = 0;
            this.products.filter(item => {
                if (item.category.includes(category)) {
                    qty++;;
                }
            })
            return qty;
        } 
        //перенести эти методы в catalog, и запрашивать методы от туда
    },
    template: `
            <div class="filter">
                <h6 class="filter_heading">Categories</h6>
                
                <ul class="filter_list" v-for="category of categories">
                    <li>{{ category }}<span>( {{ getCategoryQty(category) }} )</span></li>
                </ul>

                <!-- <h6 class="filter_heading">Price range</h6>
                
                <button class="button filter_button">Filter</button> -->
                
                <h6 class="filter_heading">Size</h6>
                
                <ul class="filter_list" v-for="size of sizes">
                    <li>{{ size }}<span>( {{ getSizeQty(size) }} )</span></li>
                </ul>

            </div>
    `
}