const post = {
    props: ['post'],
    template: `
            <article class="blog_post">
                <figure>
                    <img :src="post.img" :alt="post.title">
                </figure>
                
                <figcaption class="blog_post-text" >
                    <time  class="blog_post-time" datetime="2022-09-12 19:00">{{ post.date }}</time>
                    <h6 class="blog_post-heading">{{ post.title }}</h6>
                    <p class="blog_post-p">{{ post.description }}</p>
                    <a class="blog_post-link" href="">Read more
                        <svg width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666672 4.81714C0.666672 4.56401 0.854774 4.35481 1.09882 4.3217L1.16667 4.31714L11.1667 4.31714C11.4428 4.31714 11.6667 4.541 11.6667 4.81714C11.6667 5.07027 11.4786 5.27947 11.2345 5.31257L11.1667 5.31714L1.16667 5.31714C0.890529 5.31714 0.666672 5.09328 0.666672 4.81714Z"/>
                            <path d="M6.78068 1.15514C6.585 0.960301 6.58431 0.64372 6.77915 0.448038C6.95628 0.270145 7.23402 0.253409 7.43008 0.398224L7.48626 0.446515L11.5196 4.46252C11.698 4.64017 11.7142 4.91891 11.5683 5.11496L11.5196 5.17111L7.48629 9.18778C7.29062 9.38264 6.97404 9.38198 6.77918 9.18632C6.60204 9.00844 6.58648 8.73063 6.73212 8.53519L6.78065 8.47921L10.458 4.81663L6.78068 1.15514Z"/>
                        </svg>    
                    </a>
                </figcaption>
            
            </article>
    `
}


const blog = {
    components: { post },
    data() {
        return {
            currentOffset: 0,
            windowSize: 1,
            paginationFactor: 288,
            posts: []
        }
    },
    mounted () {
        this.$parent.getJson(`/api/posts`)
           .then(data => {
               for(let el of data){
                   this.$data.posts.push(el);
               }
            });
    },
    computed: {
        atEndOfList() {
          return this.currentOffset <= (this.paginationFactor * -1) * (this.posts.length - this.windowSize);
        },
        atHeadOfList() {
          return this.currentOffset === 0;
        },
    },
    methods: {
        moveCarousel(direction) {
          if (direction === 1 && !this.atEndOfList) {
            this.currentOffset -= this.paginationFactor;
          } else if (direction === -1 && !this.atHeadOfList) {
            this.currentOffset += this.paginationFactor;
          }
        },
    },
    template: `
            <section class="blog">
                
                <h3 class="blog-heading">Our Blog Posts</h3>
                <p class="blog-p">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                
                <div class="blog_posts">
                    <post
                        v-for="post in posts" 
                        :key="post.id_post"
                        :post="post">
                    </post>
                </div>

                <div class="card-carousel-wrapper">
                    
                    <div class="card-carousel--nav__left" 
                        @click="moveCarousel(-1)"
                        :disabled="atHeadOfList">
                    </div>
                    
                    <div class="card-carousel">
                        <div class="card-carousel--overflow-container">
                            <div class="card-carousel-cards"
                                :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
                                
                                <div class="card-carousel--card" v-for="post in posts">
                                    <post
                                        :key="post.id_post"
                                        :post="post">
                                    </post>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    
                    <div class="card-carousel--nav__right" 
                        @click="moveCarousel(1)"
                        :disabled="atEndOfList">
                    </div>
                
                </div>
            
            </section>
    `
};
