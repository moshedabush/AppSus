
export const ActionBar = ({
  handleColorChange,
  note,
  onDuplicateNote,
  onPinning,
}) => {
    const colors = ['#e8eaed', '#e6c9a8', '#fdcfe8', '#ffffff', '#d7aefb', '#aecbfa'
    , '#cbf0f8', '#a7ffeb', '#ccff90', '#fff475', '#fbbc04', '#f28b82']

  return (
    <div className="toolbar">
      <ul>
        <li>
          <a
            onClick={function (event) {
              console.log('duplicate click event', event);
              event.preventDefault();
              event.stopPropagation();
              return onDuplicateNote(note.id, event);
            }}
            href="#"
          >
            duplicate
          </a>
        </li>
        <li>
          <a
            onClick={function (event) {
              console.log('pinning event', event);
              event.preventDefault();
              event.stopPropagation();
              return onPinning(note);
            }}
            href="#"
          >
            pin
          </a>
        </li>
        <li>
        <div className="palette-container">

          <a
            key={note.id}
            onClick={function (event) {
              event.preventDefault();
              event.stopPropagation();
              handleColorChange('#2222');
              
            }}
            style={{ backgroundColor: '#5555' }}
            href="#"
          >
            color
          </a>
          <div>

          {/* <SketchPicker/> */}
          </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
