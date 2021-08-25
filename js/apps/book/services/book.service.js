import {books} from "../services/data.service.js";

export const BookService = {
    query,
    getBookById,
    addReview,
    deleteReview,
    getPriceCurr
}

const gBooks = books;


// function query(filterBy) {

//     if (filterBy) {
//         let { price, name } = filterBy
//         if (price || +price === 0) {
//             price = price
//         }
//         else price = 150
//         name = name ? name : ''
//         const bookToShow = gBooks.filter(book => book.title.includes(name) && book.listPrice.amount >= price)
//         return Promise.resolve(bookToShow)
//     }
//     return Promise.resolve(gBooks)
// }
function query(filterBy) {
    if (filterBy) {
        let { title, minPrice, maxPrice } = filterBy
        maxPrice = maxPrice ? maxPrice : Infinity
        minPrice = minPrice ? minPrice : 0
        const booksToShow = gBooks.filter(book => book.title.includes(title) &&
            book.listPrice.amount >= minPrice && book.listPrice.amount <= maxPrice)
        return Promise.resolve(booksToShow)
    }
    return Promise.resolve(gBooks);
}

function getBookById(id) {
    let book = gBooks.find(book => book.id === id)
    return Promise.resolve(book);
}


function addReview(bookToEdit, review) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookToEdit.id;
    })
    gBooks[bookIdx].reviews.unshift({ id: review.id, name: review.name, rate: review.rate, txt: review.txt, date: review.date })
    return Promise.resolve()
}


function deleteReview(bookId, reviewId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    const reviewIdx = gBooks[bookIdx].reviews.findIndex(review => review.id === reviewId);
    gBooks[bookIdx].reviews.splice(reviewIdx, 1);
    return Promise.resolve();
}

function getPriceCurr(currency) {
    switch (currency) {
        case 'EUR':
            return '₤'
        case 'USD':
            return '$'
        case 'ILS':
            return '₪'
    }
}
