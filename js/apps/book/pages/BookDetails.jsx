const { Link } = ReactRouterDOM;
import { LongTxt } from "../cmps/LongTxt.jsx";
import { ReviewList } from "../cmps/ReviewList.jsx";
import { BookService } from "../services/book.service.js";
import { Loader } from "../../../cmps/loader.jsx";

export class BookDetails extends React.Component {
  state = {
    book: null,
  };

  componentDidMount() {
    this.loadBook();
  }

  loadBook = () => {
    const id = this.props.match.params.bookId;
    BookService.getBookById(id).then((book) => {
      // if (!book) this.props.history.push("/");
      this.setState({ book });
    });
  };

  getPublishedDateTxt = () => {
    let diffYears = new Date().getFullYear() - this.state.book.publishedDate;
    if (diffYears > 10) {
      return "Veteran Book";
    } else {
      return "New";
    }
  };

  getPageCountTxt = () => {
    const { pageCount } = this.state.book;
    if (pageCount > 500) {
      return "Long reading";
    } else if (pageCount > 100) {
      return "Decent Reading";
    } else {
      return "Light Reading";
    }
  };

  onBack = () => {
    this.props.history.push("/book");
  };

  onRemoveReview = (reviewId) => {
    BookService.deleteReview(this.state.book.id, reviewId).then(this.loadBook);
  };

  render() {
    const { book } = this.state;
    if (!book) return <Loader />;
    return (
      <div className="book-details">
        <div
          className={`titel-currBook ${
            book.listPrice.amount > 150 ? "red" : "green"
          }`}
        >
          {book.title}
        </div>
        <div className="details">
          <span>{this.getPageCountTxt()}</span>
          <span>{this.getPublishedDateTxt()}</span>
          <span className={book.listPrice.amount > 150 ? "red" : "green"}>
            {book.listPrice.amount}{BookService.getPriceCurr(book.listPrice.currencyCode)}
          </span>
        </div>
        <div>
          <LongTxt text={book.description} />
        </div>{" "}
        <img src={book.thumbnail} />
        <Link to={`/book/add/${book.id}`}>
          <button className="write-review-btn">Write a Review</button>
        </Link>
        <ReviewList book={book} onRemoveReview={this.onRemoveReview} />
        <button className="back" onClick={this.onBack}>
          Go Back
        </button>
      </div>
    );
  }
}
