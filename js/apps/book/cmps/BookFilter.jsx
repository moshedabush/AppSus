export class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            minPrice: '',
            maxPrice: '',
        },
    };

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    };

    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy)
    };

    render() {
        const { title, minPrice, maxPrice } = this.state.filterBy;
        return (
            <form className='book-filter' onSubmit={this.onFilter}>
                        <input className='text-filter' name='title' id='by-title' type='search'
                            placeholder='Search Book Title' value={title} onChange={this.handleChange}
                        />
                <div className='filter'>
                    <label htmlFor='min-price'>
                        <div className='search-filter'>
                        </div>
                        Min Price
                 </label>
                 <input name='minPrice' id='min-price' type="range" min="19" max="176.00" step="0.50" value={minPrice} onChange={this.handleChange} />
                </div>
                <div className='filter'>
                    <label htmlFor='max-price'>
                        <div className='search-filter'>
                        </div>
                        Max Price
                 </label>
                 <input name='maxPrice' id='max-price' type="range" min="19" max="176.00" step="0.50" value={maxPrice} onChange={this.handleChange} />
                </div>
            </form>
        );
    }
}
