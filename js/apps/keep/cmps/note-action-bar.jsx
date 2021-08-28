import { ChangColor } from './note-colorComp.jsx';

export const ActionBar = ({
  handleColorChange,
  note,
  onDuplicateNote,
  onPinning,
  onRemoveNote,
}) => {
  const colors = [
    '#e8eaed',
    '#e6c9a8',
    '#fdcfe8',
    '#ffffff',
    '#d7aefb',
    '#aecbfa',
    '#cbf0f8',
    '#a7ffeb',
    '#ccff90',
    '#fff475',
    '#fbbc04',
    '#f28b82',
  ];

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
            <img src="../../assets/css/img/duplicate.png"></img>
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
            <img src="../../assets/css/img/pin.png"></img>
          </a>
        </li>
        <li>
          <div className="palette-container">
            <div>
              <a>
                <ChangColor note={note} handleColorChange={handleColorChange} />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div>
            <a
              key={note.id}
              onClick={function (event) {
                event.preventDefault();
                event.stopPropagation();
                handleColorChange('#2222');
              }}
              href="#"
            >
              <img src="../../assets/css/img/edit.png"></img>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              key={note.id}
              onClick={function (event) {
                event.preventDefault();
                event.stopPropagation();
                onRemoveNote(note.id);
              }}
              href="#"
            >
              <img src="../../assets/css/img/trash.png"></img>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
