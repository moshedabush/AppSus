export class LongTxt extends React.Component {

  state = {
      isLongTxtShown: false,

  }

  getTextToShow = (text) => {
      const { isLongTxtShown } = this.state
      if (isLongTxtShown) return text;
      return text.substring(0, 100);
  }

  onToggleText = () => {
      this.setState((prevState) => ({ isLongTxtShown: !prevState.isLongTxtShown }));
  }

  render() {
      const { isLongTxtShown } = this.state
      const { text } = this.props

      return <p className="book-desc">
          Desc : {this.getTextToShow(text)}
          {text.length > 100 && <span onClick={() => this.onToggleText()}>
              {isLongTxtShown ? 'Less...' : 'More...'}</span>}
      </p>
  }

}
