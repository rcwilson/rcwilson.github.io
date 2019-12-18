class Slideshow {
    constructor(slideshowContainer, imageContainer, imageNodes) {
        this.slideshowContainer = slideshowContainer;
        this.imageContainer = imageContainer;
        this.images = imageNodes;
        this.currentIndex = 0;
        this.maxIndex = imageNodes.length - 1;
    }

    onClickClose() {
        this.slideshowContainer.style.display = "none";
        this.imageContainer.style.display = "none";
    }
    
    onClickRight() {
        this.images[this.currentIndex].style.display = "none";
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex ++;
            this.images[this.currentIndex].style.display = "block";
        } else {
            this.currentIndex = 0
            this.images[0].style.display = "block"
        }
    }
    onClickLeft() {
        this.images[this.currentIndex].style.display = "none";
        if (this.currentIndex == 0) {
            this.currentIndex = this.maxIndex;
            this.images[this.currentIndex].style.display = "block";
        } else {
            this.currentIndex -= 1;
            this.images[this.currentIndex].style.display = "block";
        }
    }
    onOpenSlideshow(startingSlide) {
        this.setCurrentSlide(startingSlide);
        this.imageContainer.style.display = "block";
        this.slideshowContainer.style.display = "flex";
    }

    setCurrentSlide(newCurrentSlide) {
        this.images[this.currentIndex].style.display = "none";
        this.currentIndex = newCurrentSlide;
        this.images[this.currentIndex].style.display = "block";
    }
}
module.exports = Slideshow