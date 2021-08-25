import { BookService } from '../services/book.service.js';
import { BookList } from '../cmps/BookList.jsx';
import { Loader } from '../../../cmps/loader.jsx';


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
        BookService.query().then((books) => {
            this.setState({ books });
        });
    };

    onSelectBook = (selectedBook) => {
        this.setState({ selectedBook });
    }

    render() {
        const { books, selectedBook } = this.state;
        if(!books) return <Loader/>;
        return (
            <section>
                <BookList books={books} onSelectBook={this.onSelectBook}/>
            </section>
        )
    }

}