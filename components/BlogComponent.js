const blog = {
    template: `
    <section class="blog">
    <h3 class="blog-heading">Our Blog Posts</h3>
    <p class="blog-p">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
    <div class="blog_posts">
        <article class="blog_post">
            <figure>
                <img src="img/blog_posts/01.jpg" alt="">
            </figure>
            <figcaption class="blog_post-text" >
                <time  class="blog_post-time" datetime="2022-09-12 19:00">September 12 2022</time>
                <h6 class="blog_post-heading">Cactus & Succulent Care Tips</h6>
                <p class="blog_post-p">Cacti are succulents are easy care plants for any home or patio.</p>
                <a class="blog_post-link" href="">Read more
                    <svg width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666672 4.81714C0.666672 4.56401 0.854774 4.35481 1.09882 4.3217L1.16667 4.31714L11.1667 4.31714C11.4428 4.31714 11.6667 4.541 11.6667 4.81714C11.6667 5.07027 11.4786 5.27947 11.2345 5.31257L11.1667 5.31714L1.16667 5.31714C0.890529 5.31714 0.666672 5.09328 0.666672 4.81714Z"/>
                        <path d="M6.78068 1.15514C6.585 0.960301 6.58431 0.64372 6.77915 0.448038C6.95628 0.270145 7.23402 0.253409 7.43008 0.398224L7.48626 0.446515L11.5196 4.46252C11.698 4.64017 11.7142 4.91891 11.5683 5.11496L11.5196 5.17111L7.48629 9.18778C7.29062 9.38264 6.97404 9.38198 6.77918 9.18632C6.60204 9.00844 6.58648 8.73063 6.73212 8.53519L6.78065 8.47921L10.458 4.81663L6.78068 1.15514Z"/>
                    </svg>    
                </a>
            </figcaption>
        </article>
        <article class="blog_post">
            <figure>
                <img src="img/blog_posts/02.jpg" alt="">
            </figure>
            <figcaption class="blog_post-text" >
                <time  class="blog_post-time" datetime="2022-09-13 19:00">September 13 2022</time>
                <h6 class="blog_post-heading">Top 10 Succulents for Your Home</h6>
                <p class="blog_post-p">Best in hanging baskets. Prefers medium to high light.</p>
                <a class="blog_post-link" href="">Read more
                    <svg width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666672 4.81714C0.666672 4.56401 0.854774 4.35481 1.09882 4.3217L1.16667 4.31714L11.1667 4.31714C11.4428 4.31714 11.6667 4.541 11.6667 4.81714C11.6667 5.07027 11.4786 5.27947 11.2345 5.31257L11.1667 5.31714L1.16667 5.31714C0.890529 5.31714 0.666672 5.09328 0.666672 4.81714Z"/>
                        <path d="M6.78068 1.15514C6.585 0.960301 6.58431 0.64372 6.77915 0.448038C6.95628 0.270145 7.23402 0.253409 7.43008 0.398224L7.48626 0.446515L11.5196 4.46252C11.698 4.64017 11.7142 4.91891 11.5683 5.11496L11.5196 5.17111L7.48629 9.18778C7.29062 9.38264 6.97404 9.38198 6.77918 9.18632C6.60204 9.00844 6.58648 8.73063 6.73212 8.53519L6.78065 8.47921L10.458 4.81663L6.78068 1.15514Z"/>
                    </svg>    
                </a>
            </figcaption>
        </article>
        <article class="blog_post">
            <figure>
                <img src="img/blog_posts/03.jpg" alt="">
            </figure>
            <figcaption class="blog_post-text" >
                <time  class="blog_post-time" datetime="2022-09-15 13:00">September 15 2022</time>
                <h6 class="blog_post-heading">Cacti & Succulent Care Tips</h6>
                <p class="blog_post-p">Cacti and succulents thrive in containers and because most are..</p>
                <a class="blog_post-link" href="">Read more
                    <svg width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666672 4.81714C0.666672 4.56401 0.854774 4.35481 1.09882 4.3217L1.16667 4.31714L11.1667 4.31714C11.4428 4.31714 11.6667 4.541 11.6667 4.81714C11.6667 5.07027 11.4786 5.27947 11.2345 5.31257L11.1667 5.31714L1.16667 5.31714C0.890529 5.31714 0.666672 5.09328 0.666672 4.81714Z"/>
                        <path d="M6.78068 1.15514C6.585 0.960301 6.58431 0.64372 6.77915 0.448038C6.95628 0.270145 7.23402 0.253409 7.43008 0.398224L7.48626 0.446515L11.5196 4.46252C11.698 4.64017 11.7142 4.91891 11.5683 5.11496L11.5196 5.17111L7.48629 9.18778C7.29062 9.38264 6.97404 9.38198 6.77918 9.18632C6.60204 9.00844 6.58648 8.73063 6.73212 8.53519L6.78065 8.47921L10.458 4.81663L6.78068 1.15514Z"/>
                    </svg>    
                </a>
            </figcaption>
        </article>
        <article class="blog_post">
            <figure>
                <img src="img/blog_posts/04.jpg" alt="">
            </figure>
            <figcaption class="blog_post-text" >
                <time  class="blog_post-time" datetime="2022-09-15 19:00">September 15 2022</time>
                <h6 class="blog_post-heading">Best Houseplants Room by Room</h6>
                <p class="blog_post-p">The benefits of houseplants are endless. In addition to.. </p>
                <a class="blog_post-link" href="">Read more
                    <svg width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666672 4.81714C0.666672 4.56401 0.854774 4.35481 1.09882 4.3217L1.16667 4.31714L11.1667 4.31714C11.4428 4.31714 11.6667 4.541 11.6667 4.81714C11.6667 5.07027 11.4786 5.27947 11.2345 5.31257L11.1667 5.31714L1.16667 5.31714C0.890529 5.31714 0.666672 5.09328 0.666672 4.81714Z"/>
                        <path d="M6.78068 1.15514C6.585 0.960301 6.58431 0.64372 6.77915 0.448038C6.95628 0.270145 7.23402 0.253409 7.43008 0.398224L7.48626 0.446515L11.5196 4.46252C11.698 4.64017 11.7142 4.91891 11.5683 5.11496L11.5196 5.17111L7.48629 9.18778C7.29062 9.38264 6.97404 9.38198 6.77918 9.18632C6.60204 9.00844 6.58648 8.73063 6.73212 8.53519L6.78065 8.47921L10.458 4.81663L6.78068 1.15514Z"/>
                    </svg>    
                </a>
            </figcaption>
        </article>
    </div>
</section>
    `
};
