import './style.css';
import Slider from './modules/slider.js';
import Books from './modules/books.js';
import { updateCartCount } from './modules/cart.js';

document.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider(".slides", ".dot");
    const apiKey = 'AIzaSyDCtBCcZhy9dRhgG4_lSgmflPuuzmXT25s';
    const books = new Books(apiKey, '#books-container', '#load-more', 'https://via.placeholder.com/212x300?text=No+Cover');
    updateCartCount();

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.currentSlide(index);
        });
    });
});