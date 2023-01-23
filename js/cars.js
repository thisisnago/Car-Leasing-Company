(async function() {

    const response = await fetch('api/cars.json');
    const carsList = await response.json();

    function elementCode(slideIdx){
        return `<div class="cars__vehicles__element">
            <div class="cars__vehicles__img">
            <img src=${carsList[slideIdx].img} alt=${carsList[slideIdx].model}>
            </div>

            <p class="cars__vehicles__make">${carsList[slideIdx].make}</p>
            <p class="cars__vehicles__price">$${carsList[slideIdx].price} / MONTH</p>
            <p class="cars__vehicles__model">
                ${carsList[slideIdx].model} <br>
                ${carsList[slideIdx].engine}
            </p>
            <div class="cars__vehicles__learn-more-button">
                <a href="#">LEARN MORE</a>
            </div>
        </div>`;
    }

    let currentSlideIdx = 0;

    function renderCarousel(){
        const carElement = document.querySelector('.cars__vehicles__container');
        carElement.innerHTML = elementCode(currentSlideIdx);

        if (window.innerWidth >= 767) {
            const secondSlideIdx = currentSlideIdx + 1 >= carsList.length ? 0 : currentSlideIdx + 1;
            carElement.innerHTML += elementCode(secondSlideIdx);


            if (window.innerWidth >= 991) {
                const thirdSlideIdx = secondSlideIdx + 1 >= carsList.length ? 0 : secondSlideIdx + 1;
                carElement.innerHTML += elementCode(thirdSlideIdx);
            }
        }
    }

    function next(){
        currentSlideIdx = currentSlideIdx + 1 >= carsList.length ? 0 : currentSlideIdx+1;
        renderCarousel();
    }

    renderCarousel();

    setInterval(next, 3000);

    window.addEventListener('resize', renderCarousel);

})()


