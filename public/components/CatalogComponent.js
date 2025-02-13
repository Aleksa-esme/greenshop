// const moment = require('moment');
const product = {
    props: ['product'],
    template: `
            <div class="catalog_product">
                
                <figure>
                    <img :src="product.img" alt="product.product_name">
                    
                    <div class="catalog_product-menu">
                        <button @click="$root.$refs.cart.addProduct(product)" class="svg_button catalog_product-menu-button">
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.294 16.8745H8.24077C5.65655 16.8745 3.55412 14.7721 3.55412 12.1879V7.38404C3.55412 4.98174 2.35676 2.75812 0.351225 1.43578C-0.00894369 1.19832 -0.108379 0.71388 0.129078 0.353711C0.366535 -0.00649689 0.850939 -0.105971 1.21119 0.131564C2.35606 0.886427 3.28487 1.88203 3.94905 3.0283C4.09258 3.1891 5.24995 4.41583 7.14726 4.41583H16.142C18.596 4.36994 20.5168 6.83265 19.8752 9.20136L18.8397 13.3283C18.3159 15.4163 16.4466 16.8745 14.294 16.8745ZM4.91926 5.53676C5.04912 6.13669 5.11634 6.75528 5.11634 7.38404V12.1879C5.11634 13.9107 6.51796 15.3123 8.24077 15.3123H14.294C15.7291 15.3123 16.9752 14.3401 17.3245 12.9482L18.3599 8.8212C18.7412 7.41372 17.5997 5.95082 16.142 5.97804H7.14722C6.28913 5.97804 5.54224 5.79304 4.91926 5.53676ZM7.85021 19.0226C7.85021 18.4833 7.41307 18.0462 6.87383 18.0462C5.57828 18.0978 5.57942 19.9479 6.87383 19.9989C7.41307 19.9989 7.85021 19.5618 7.85021 19.0226ZM15.6222 19.0226C15.6222 18.4833 15.1851 18.0462 14.6459 18.0462C13.3503 18.0978 13.3514 19.9479 14.6459 19.9989C15.1851 19.9989 15.6222 19.5618 15.6222 19.0226ZM16.9231 8.32137C16.9231 7.88996 16.5734 7.54026 16.142 7.54026H7.45966C6.42329 7.5815 6.42407 9.06158 7.45966 9.10248H16.142C16.5734 9.10248 16.9231 8.75277 16.9231 8.32137Z" />
                            </svg> 
                        </button>
                        <button class="svg_button catalog_product-menu-button">
                            <svg width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873V17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532V1.26532Z" />
                            </svg> 
                        </button>
                    </div>
                
                </figure>
                
                <figcaption>
                    <p class="catalog_product-name">{{product.product_name}}</p>
                    <p class="catalog_product-price">$ {{product.price}}</p>
                </figcaption>
            
            </div>
    `
};

Vue.component("All plants", {
    props: ['filtered', 'selectedSizes'],
    components: { product },
    computed: {
        filteredSizes() {
            
            if (!this.selectedSizes.length) 
                return this.filtered;
            
            return this.filtered.filter(product => {
                return this.selectedSizes.includes(product.size);
            });
        }
    },
    template: `
                <section class="catalog_products">
                    <product 
                        v-for="product of filteredSizes" 
                        :key="product.id_product"
                        :product="product"
                    >
                    </product>
                </section>
    `
    //     v-for="product of filtered" 

});
// сделать фильтрацию по дате
Vue.component("New arrivals", {
    props: ['products'],
    data () {
        return {
            filteredByDate: [],
        }
    },
    components: { product },
    mounted () {
        // this.filteredByDate = this.products.sort((a,b) => moment(b.date_arrival, 'DD.MM.YY') - moment(a.date_arrival, 'DD.MM.YY'));
    },
    methods: {
    },
    // template: `
    //             <section class="catalog_products">
    //             <p>{{ currentDate }}</p>
    //                 <product 
    //                     v-for="product of filteredByDate" 
    //                     :key="product.id_product"
    //                     :product="product"
    //                 >
    //                 </product>
    //             </section>
    // `
});
// сделать фильтрацию по наличию скидки
Vue.component("Sale", {
    template: "<div>Sale component</div>"
});

const catalog = {
    data () {
        return {
            products: [],
            filtered: [],
            currentTab: "All plants",
            tabs: ["All plants", "New arrivals", "Sale"]
        }
    },
    computed: {
        currentTabComponent: function() {
            return this.currentTab;
        }
    },
    mounted () {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.$data.products.push(el);
                    this.$data.filtered.push(el);
                }
            });
    },
    methods: {
        filter(value) {
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
    },
    template: `
                <div>
                    
                    <div class="catalog_nav">
                        <ul class="catalog_nav">
                            <li 
                                v-for="tab in tabs"
                                v-bind:key="tab"
                                v-bind:class="['catalog_nav-tab', { active: currentTab === tab }]"
                                v-on:click="currentTab = tab"
                            >
                                {{ tab }}
                            </li>
                        </ul>
                    </div>
                    
                    <component 
                        v-bind:is="currentTabComponent" 
                        class="tab"
                        :filtered="filtered"
                        :products="products"
                        :selectedSizes="$parent.$refs.filterCustom.selectedSizes"
                    >
                    </component>
                
                </div>
    `
};

export default {
    catalog: catalog,
    product: product
}