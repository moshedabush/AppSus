import {theme} from '../cmps/note-colors.jsx'


export const ActionBar = ({
  handleColorChange,
  note,
  onDuplicateNote,
  onPinning,
}) => {
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
          <a
            key={note.id}
            onClick={function (event) {
              event.preventDefault();
              event.stopPropagation();
              handleColorChange('#5555');
            }}
            style={{ backgroundColor: '#5555' }}
            href="#"
          >
            color
          </a>
        </li>
      </ul>
    </div>
  );
};
