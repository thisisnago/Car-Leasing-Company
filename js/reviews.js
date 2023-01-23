(function () {

    const reviews = [
        {
            id: 1,
            name: "Daniella Malton",
            job: "Marketing Director at Dowson & Co",
            response: `“The company has supported us every step of the way. Also, the Volkswagen I was driving was
                        amazing. If I were to lease a car again, FutureLease is the most obvious choice. The process
                        of leasing and signing all the documents was simple and understandable, and the pricing was
                        clear, without any hidden payments.”`,
            img: "img/reviews/daniella_malton.png",
            date: "October 15, 2022"
        },

        {
            id: 2,
            name: "Jessica Cooper",
            job: "Sales Representative at Goodson and Sons",
            response: `“Excellent service from start to finish. I was thrilled with my vehicle, the Discovery
                        Sport. Driving was a real pleasure! A huge plus is that when leasing a car, you don't need
                        to think about its technical condition, repairs, etc. You just use it for a while and pay an
                        affordable price for that. I will definitely use the services of FutureLease again!”`,
            img: "img/reviews/jessica_cooper.png",
            date: "December 08, 2022"
        },

        {
            id: 3,
            name: "Victor Manner",
            job: "Private Entrepreneur",
            response: `“A shout-out to Daniel, the manager who was leasing a car for me. He is a lovely person who
                        loves his work. The company also left a nice impression. I rented a Ford Focus for my daily
                        rides to work, cinema, etc. I was completely satisfied with the car's condition and the
                        services provided by FutureLease.”`,
            img: "img/reviews/victor_manner.png",
            date: "October 25, 2022"
        },
    ];

    let currentSlideIdx = 0;

    function reviewSlide(slideIdx) {
        return `<div class="reviews__main__element">
        <div class="reviews__main__element__image">
            <img src="${reviews[slideIdx].img}" alt="${reviews[slideIdx].name}">
        </div>

        <div class="reviews__main__element__text__container">
            <p class="reviews__main__element__name">
                ${reviews[slideIdx].name}
            </p>
    
            <p class="reviews__main__element__job">
                ${reviews[slideIdx].job}
            </p>
    
            <p class="reviews__main__element__response">
                ${reviews[slideIdx].response}
            </p>
    
            <p class="reviews__main__element__date">
                ${reviews[slideIdx].date}
            </p>
        </div>
    </div>`;
    }


    function renderCarousel() {
        const reviewsContainer = document.querySelector(".reviews__main__elements__container");
        reviewsContainer.innerHTML = reviewSlide(currentSlideIdx);
    }

    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? reviews.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }
    const prevButton = document.querySelector(".reviews__main__prev-button");
    prevButton.addEventListener('click', prev);

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= reviews.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }
    const nextButton = document.querySelector(".reviews__main__next-button");
    nextButton.addEventListener('click', next);


    renderCarousel();

    // setInterval(next, 1000);

})();