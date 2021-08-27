import {NoteTodos} from '../cmps/note-todos.jsx'


export const NoteDynamic = ({ note , onRemoveNote}) => {

        switch (note.type) {
          case 'note-txt':
            return (
              <div >
                <img
                  onClick={() => {
                    onRemoveNote(note.id);
                  }}
                  className="close-btn"
                  src="assets/css/apps/book/img/close.png"
                />
                <h2>{note.info.txt}</h2>
              </div>
            );
          case 'note-img':
            return (
              <div  
              >
                <img
                  onClick={() => {
                    onRemoveNote(note.id);
                  }}
                  className="close-btn"
                  src="assets/css/apps/book/img/close.png"
                />
                <h2>{note.info.title}</h2>
                <div className="note-img">
                  <img src={note.info.url} />
                </div>
              </div>
            );
          case 'note-todos':
            return (
              <div >
                <img
                  onClick={() => {
                    onRemoveNote(note.id);
                  }}
                  className="close-btn"
                  src="assets/css/apps/book/img/close.png"
                />
                <h2>{note.info.label}</h2>
                <NoteTodos note={note}/>
              </div>
            );
          default:
            return <h1>default</h1>;
        }
      }
      
    

