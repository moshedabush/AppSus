const { Link } = ReactRouterDOM
import { BookService } from "../services/book.service.js"

export function BookPreview({ book, onSelectBook }) {



    return <div className="book-preview" onClick={() => { onSelectBook(book) }}>
        <div className="book-info">
       <Link to={`/book/${book.id}`}><h2>{book.title}</h2></Link> 
        <h4>{book.subtitle}</h4>
        <h4>Price : {book.listPrice.amount} {BookService.getPriceCurr(book.listPrice.currencyCode)}</h4>
        <h5>Published : {book.publishedDate}</h5>
        </div>
        <div className="book-img">
             {book.listPrice.isOnSale && <div className="sale-img"><Link to={`/book/${book.id}`}><img src="assets/css/apps/book/img/sale.png" /></Link></div>}
            <Link to={`/book/${book.id}`}> <img src={book.thumbnail} /></Link>
        </div>
    </div>
}

