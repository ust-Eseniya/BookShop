class Slider {
    constructor(slidesSelector, dotsSelector, interval = 5000) {
        this.slideIndex = 0;
        this.slides = document.querySelectorAll(slidesSelector);
        this.dots = document.querySelectorAll(dotsSelector);
        this.interval = interval;
        this.timer = null;
        this.init();
    }

    init() {
        this.showSlide(this.slideIndex);
        this.timer = setInterval(() => this.nextSlide(), this.interval);
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.remove("active");
            this.dots[i].classList.remove("active");
        });
        this.slides[index].classList.add("active");
        this.dots[index].classList.add("active");
        this.slideIndex = index;
    }

    currentSlide(index) {
        clearInterval(this.timer);
        this.showSlide(index);
        this.timer = setInterval(() => this.nextSlide(), this.interval);
    }

    nextSlide() {
        this.slideIndex = (this.slideIndex + 1) % this.slides.length;
        this.showSlide(this.slideIndex);
    }
}

export default Slider;