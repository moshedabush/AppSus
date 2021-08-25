import { BookService } from '../services/book.service.js';
import { BookList } from '../cmps/BookList.jsx';
import { Loader } from '../../../cmps/loader.jsx';
import { BookFilter } from '../cmps/BookFilter.jsx';

export class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: '',
        selectedBook: null,
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        BookService.query(this.state.filterBy)
            .then(books => this.setState({ books }))
    };

    onSelectBook = (selectedBook) => {
        this.setState({ selectedBook });
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks);
    };

    render() {
        const { books, selectedBook } = this.state;
        if(!books) return <Loader/>;
        return (
            <section>
                <BookFilter onSetFilter={this.onSetFilter} />
                <BookList books={books} onSelectBook={this.onSelectBook}/>
            </section>
        )
    }

}