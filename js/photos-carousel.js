(function() {

    const carsPhotosSources = [
        'img/photos-carousel/volvo_xc-60.png',
        'img/photos-carousel/tesla_model-3_inside.png',
        `img/photos-carousel/jeep_grand-cherokee.png`,
        `img/photos-carousel/bmw_inside.png`,
        `img/photos-carousel/audi_q7_with-people.png`,
        `img/photos-carousel/audi_a4-avant.png`
    ];

    let currentPhotoIdx = 0;

    function photoCarouselElement(photoIdx) {
        return `<div class="photos-carousel__image">
            <img src="${carsPhotosSources[photoIdx]}" alt="Cars">
        </div>`;
    } 

    function renderCarousel() {
        const imageContainer = document.querySelector(".photos-carousel__images__container");
        imageContainer.innerHTML = photoCarouselElement(currentPhotoIdx);

        if (window.innerWidth >= 479) {
            const secondPhotoIdx = currentPhotoIdx + 1 >= carsPhotosSources.length ? 0 : currentPhotoIdx + 1;
            imageContainer.innerHTML += photoCarouselElement(secondPhotoIdx);
            
            if (window.innerWidth >= 767) {
                const thirdPhotoIdx = secondPhotoIdx + 1 >= carsPhotosSources.length ? 0 : secondPhotoIdx + 1;
                imageContainer.innerHTML += photoCarouselElement(thirdPhotoIdx);
                
                if (window.innerWidth >= 991) {
                    const fourthPhotoIdx = thirdPhotoIdx + 1 >= carsPhotosSources.length ? 0 : thirdPhotoIdx + 1;
                    imageContainer.innerHTML += photoCarouselElement(fourthPhotoIdx);
                    
                    const fifthPhotoIdx = fourthPhotoIdx + 1 >= carsPhotosSources.length ? 0 : fourthPhotoIdx + 1;
                    imageContainer.innerHTML += photoCarouselElement(fifthPhotoIdx);
                }
            }

            
        }
     }

    function next() {
        currentPhotoIdx = currentPhotoIdx + 1 >= carsPhotosSources.length ? 0 : currentPhotoIdx + 1;
        renderCarousel();
    }

    renderCarousel();

    window.addEventListener('resize', renderCarousel);
    
    setInterval(next, 3000);
})();