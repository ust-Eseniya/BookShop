import { updateCartCount } from './cart.js';

class Books {
    constructor(apiKey, booksContainerSelector, loadMoreButtonSelector, placeholderImage) {
        this.apiKey = apiKey;
        this.booksContainer = document.querySelector(booksContainerSelector);
        this.loadMoreButton = document.querySelector(loadMoreButtonSelector);
        this.placeholderImage = placeholderImage;
        this.currentCategory = 'Architecture';
        this.startIndex = 0;
        this.maxResults = 6;
        this.init();
    }

    init() {
        this.loadBooks(this.currentCategory, this.startIndex);
        this.loadMoreButton.addEventListener('click', () => {
            this.startIndex += this.maxResults;
            this.loadBooks(this.currentCategory, this.startIndex);
        });

        document.querySelectorAll('.main__categories-item').forEach(item => {
            item.addEventListener('click', () => {
                this.setActiveCategory(item);
            });
        });
    }

    truncateText(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }

    loadBooks(category, startIndex) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(category)}&key=${this.apiKey}&printType=books&startIndex=${startIndex}&maxResults=${this.maxResults}&langRestrict=en`)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                data.items.forEach(book => this.renderBook(book));
                this.loadMoreButton.style.display = 'block';
            } else {
                this.loadMoreButton.style.display = 'none';
            }
            this.updateButtonStates();
        });
    }

    renderBook(book) {
        const bookInfo = book.volumeInfo;
        const bookElement = document.createElement('div');
        bookElement.className = 'book-item';

        const thumbnail = bookInfo.imageLinks?.thumbnail || this.placeholderImage;
        const authors = bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown Author';
        const title = bookInfo.title || 'No Title';
        const description = this.truncateText(bookInfo.description || 'No description available', 100);
        const rating = bookInfo.averageRating;
        const ratingsCount = bookInfo.ratingsCount;
        const price = book.saleInfo.listPrice ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : null;
        const bookId = book.id;

        bookElement.innerHTML = `
            <div class="book-cover">
                <img src="${thumbnail}" alt="${title}">
            </div>
            <div class="book-details">
                <p class="book-authors">${authors}</p>
                <h3 class="book-title">${title}</h3>
                ${rating ? `<p class="book-rating">${this.renderRating(rating)} ${ratingsCount} review</p>` : ''}
                <p class="book-description">${description}</p>
                ${price ? `<p class="book-price">${price}</p>` : ''}
                <button class="book-button" data-book-id="${bookId}">Buy now</button>
            </div>
        `;

        this.booksContainer.appendChild(bookElement);
    }

    renderRating(rating) {
        return `${'<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#F2C94C"/></svg>'.repeat(Math.round(rating))}${'<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/></svg>'.repeat(5 - Math.round(rating))}`;
    }

    setActiveCategory(categoryElement) {
        document.querySelectorAll('.main__categories-item').forEach(item => {
            item.classList.remove('active-category');
        });
        categoryElement.classList.add('active-category');
        this.currentCategory = categoryElement.textContent;
        this.booksContainer.innerHTML = '';
        this.startIndex = 0;
        this.loadBooks(this.currentCategory, this.startIndex);
    }

    updateButtonStates() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        document.querySelectorAll('.book-button').forEach(button => {
            const bookId = button.getAttribute('data-book-id');

            if (cart.includes(bookId)) {
                button.textContent = 'In the cart';
                button.classList.add('in-cart');
            } else {
                button.textContent = 'Buy now';
                button.classList.remove('in-cart');
            }

            button.addEventListener('click', () => {
                this.toggleCartItem(button, bookId, cart);
            });
        });
    }

    toggleCartItem(button, bookId, cart) {
        if (cart.includes(bookId)) {
            const index = cart.indexOf(bookId);
            if (index > -1) {
                cart.splice(index, 1);
            }
            button.textContent = 'Buy now';
            button.classList.remove('in-cart');
        } else {
            cart.push(bookId);
            button.textContent = 'In the cart';
            button.classList.add('in-cart');
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

export default Books;