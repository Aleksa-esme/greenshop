const cartItem = {
    props: ['cartItem'],
    template: `
                <tr class="modal_table-row">
                    
                    <td class="modal_table-product">
                        <img class="modal_table-img" :src="cartItem.img" :alt="cartItem.product_name">
                        <p class="modal_table-name">{{ cartItem.product_name }}</p>
                    </td>
                    
                    <td class="modal_table-qty">
                        <div class="modal_table-qty-block">
                            <button @click="$root.$refs.cart.decreaseProduct(cartItem)" class="modal_table-qty-btn">-</button>
                            {{ cartItem.quantity }}
                            <button @click="$root.$refs.cart.addProduct(cartItem)" class="modal_table-qty-btn">+</button>
                        </div>
                    </td>
                    
                    <td class="modal_table-price">{{ cartItem.quantity * cartItem.price }}</td>
                    
                    <td>
                        <button @click="$root.$refs.cart.removeProduct(cartItem)" class="modal_table-delete-btn">
                            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8892 8.55408C15.8892 16.5731 17.0435 20.1979 9.27967 20.1979C1.5149 20.1979 2.693 16.5731 2.693 8.55408" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.3651 5.47979H1.2146"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.7148 5.47979C12.7148 5.47979 13.2434 1.71408 9.28911 1.71408C5.33578 1.71408 5.86435 5.47979 5.86435 5.47979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </td>

                </tr>
    `
};

const cart = {
    components: { cartItem },
    data () {
        return {
            isVisibleCart: false,
            cartItems: []
        }
    },
    methods: {
        showCart() {
            this.isVisibleCart = !this.isVisibleCart;
        },

        addProduct(product) {      
            this.$parent.getJson(`../DB/addToBasket.json`)
            .then(data => {
                if (data.result) {
                    product.quantity ? product.quantity : Vue.set(product, 'quantity', 1);
                    let find = this.cartItems.find(el => el.id_product === product.id_product);
                    if(find){
                        find.quantity ++;
                    } else {
                        this.cartItems.push(product);
                    }
                }
            });
        },

        decreaseProduct(product) {
            this.$parent.getJson(`../DB/deleteFromBasket.json`)
            .then(data => {
                if (data.result) {
                    if (product.quantity == 1) {
                        this.removeProduct(product);
                    } else {
                        product.quantity--; 
                    }
                }
            });
        },

        removeProduct(product) {
            this.$parent.getJson(`../DB/deleteFromBasket.json`)
            .then(data => {
                if (data.result) {
                    this.cartItems = this.cartItems.filter(item => {
                        return item !== product;
                    })
                }
            });
        },

        getTotalPrice() {
            return this.cartItems.reduce((accum, item) => accum += (item.quantity * item.price), 0);
        },

        getTotalQty() {
            return this.cartItems.reduce((accum, item) => accum += item.quantity, 0);
        },
    },
    mounted () {
        this.$parent.getJson(`../DB/getBasket.json`)
        .then(data => {
            for(let el of data.contents){
                this.cartItems.push(el);
            }
        });
    },
    template: `
        <div class="cart">
        
            <button id="show-modal" @click="showCart()" class="svg_button cart_button" type="button">
                <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1567 20.25H9.89163C6.79003 20.25 4.26667 17.7267 4.26667 14.6251V8.85947C4.26667 5.9762 2.82958 3.30739 0.422521 1.72031C-0.00975775 1.43531 -0.129101 0.853876 0.155897 0.421598C0.440896 -0.0107278 1.02228 -0.130118 1.45465 0.154974C2.82874 1.06097 3.94351 2.2559 4.74067 3.63167C4.91293 3.82466 6.30202 5.29699 8.57919 5.29699H19.3748C22.3201 5.24191 24.6254 8.19769 23.8554 11.0406L22.6126 15.9939C21.9839 18.4998 19.7404 20.25 17.1567 20.25ZM5.90513 6.64234C6.06099 7.36238 6.14166 8.10483 6.14166 8.85947V14.6251C6.14166 16.6928 7.8239 18.375 9.89163 18.375H17.1567C18.8792 18.375 20.3748 17.2082 20.794 15.5376L22.0367 10.5844C22.4943 8.89509 21.1243 7.13931 19.3748 7.17198H8.57914C7.54926 7.17198 6.65283 6.94993 5.90513 6.64234ZM9.42289 22.8281C9.42289 22.1809 8.89822 21.6563 8.25102 21.6563C6.69609 21.7182 6.69745 23.9387 8.25102 24C8.89822 24 9.42289 23.4753 9.42289 22.8281ZM18.751 22.8281C18.751 22.1809 18.2263 21.6563 17.5791 21.6563C16.0242 21.7182 16.0255 23.9387 17.5791 24C18.2263 24 18.751 23.4753 18.751 22.8281ZM20.3123 9.98446C20.3123 9.46668 19.8925 9.04697 19.3748 9.04697H8.95414C7.71027 9.09647 7.71121 10.8729 8.95414 10.922H19.3748C19.8925 10.922 20.3123 10.5022 20.3123 9.98446Z"/>
                </svg>
                <span class="cart_indicator">
                    <span class="cart_indicator-text">{{ getTotalQty() }}</span>
                </span>
            </button>

            <transition name="modal" v-if="isVisibleCart">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            
                            <button class="modal_close_btn" @click="showCart()">
                                <svg  viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.170067 0.170067C0.396823 -0.056689 0.764467 -0.056689 0.991223 0.170067L6 5.17884L11.0088 0.170067C11.2355 -0.056689 11.6032 -0.056689 11.8299 0.170067C12.0567 0.396823 12.0567 0.764467 11.8299 0.991223L6.82116 6L11.8299 11.0088C12.0567 11.2355 12.0567 11.6032 11.8299 11.8299C11.6032 12.0567 11.2355 12.0567 11.0088 11.8299L6 6.82116L0.991223 11.8299C0.764467 12.0567 0.396823 12.0567 0.170067 11.8299C-0.056689 11.6032 -0.056689 11.2355 0.170067 11.0088L5.17884 6L0.170067 0.991223C-0.056689 0.764467 -0.056689 0.396823 0.170067 0.170067Z"/>
                                </svg>
                            </button>
                            
                            <p v-if="cartItems == 0" class="modal_empty">Your cart is empty :(</p>
                            
                            <table v-else="cartItems > 0" class="modal_table">
                                <caption class="modal_caption">Your Order</caption>
                                <!-- <colgroup></colgroup> -->
                                
                                <thead class="modal_table-header">
                                    <tr>
                                        <th class="modal_table-header-th">Products</th>
                                        <th class="modal_table-header-th">Qty</th>
                                        <th class="modal_table-header-th">Subtotal</th>
                                    </tr>
                                </thead>
                                
                                <tfoot>
                                    <tr>
                                        <td colspan="2" class="modal_table-total">Total</td>
                                        <td class="modal_table-total-price">$ {{ getTotalPrice() }}</td>
                                    </tr>
                                </tfoot>
                                
                                <tbody>
                                    <cart-item 
                                        v-for="product of cartItems" 
                                        :key="product.id_product"
                                        :cart-item="product"
                                    >
                                    </cart-item>
                                </tbody>
                            
                            </table>
                        
                            <div class="modal_footer"></div>
                        
                        </div>
                    </div>
                </div>
            </transition>
        </div>

    
  `

};