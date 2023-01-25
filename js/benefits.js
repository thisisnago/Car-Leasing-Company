(async function () {

    const response = await fetch('api/benefits.json');
    const benefits = await response.json();

    let currentSlideIdx = 0;


    function slideCode(element) {
        return `<div class="benefits__element">
            <div class="benefits__element__icon">
                <img src="${element.img}" alt="card">
            </div>
            <p class="benefits__element__title">${element.title}</p>
            <div class="benefits__element__line"></div>
            <p class="benefits__element__description">
                ${element.description}
            </p>
        </div>`;
    }

    // const carouselElement = document.querySelector(".benefits-carousel__element");
    // carouselElement.innerHTML = `
    //                 <div class="benefits-carousel__element__icon">
    //                     <img src="${element.img}" alt="card">
    //                 </div>
    //                 <p class="benefits-carousel__element__title">${element.title}</p>
    //                 <div class="benefits-carousel__element__line"></div>
    //                 <p class="benefits-carousel__element__description">
    //                     ${element.description}
    //                 </p>
    // `;


    function renderCarousel(slideIdx) {
        const card = benefits[slideIdx];
        const carouselElement = document.querySelector(".benefits__elements__container");
        carouselElement.innerHTML = slideCode(card);

        if (window.innerWidth >= 767) {
            const secondSlideIdx = slideIdx + 1 >= benefits.length ? 0 : slideIdx + 1;
            const secondCard = benefits[secondSlideIdx];
            carouselElement.innerHTML += slideCode(secondCard);

            if (window.innerWidth >= 991) {
                const thirdSlideIdx = secondSlideIdx + 1 >= benefits.length ? 0 : secondSlideIdx + 1;
                const thirdCard = benefits[thirdSlideIdx];
                carouselElement.innerHTML += slideCode(thirdCard);
            }
        }
    };

    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? 4 : currentSlideIdx - 1;
        renderCarousel(currentSlideIdx);
    }

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= benefits.length ? 0 : currentSlideIdx + 1;
        renderCarousel(currentSlideIdx);
        console.log(currentSlideIdx);
    }

    const prevButton = document.querySelector(".benefits__prev-button");
    prevButton.addEventListener('click', prev);

    const nextButton = document.querySelector(".benefits__next-button");
    nextButton.addEventListener('click', next);

    renderCarousel(currentSlideIdx);


    window.addEventListener('resize', () => {renderCarousel(currentSlideIdx)});
    // setInterval(next, 1000);

})()