'use strict';

import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";

export const NoteService = {
  query,
  deleteNote,
  getNotes,
  addNote,
  changeColor,
  duplicateNote,
  pinNote,
};



// _createNotes()
const KEY = 'noteDB';


const pinnedNotes = [];
var gNotes = [
  {
    id: 'n101',
    type: 'note-txt',
    isPinned: true,
    style: {
      backgroundColor: '#99ffcc',
    },
    info: {
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: 'n102',
    type: 'note-img',
    isPinned: false,
    style: {
      backgroundColor: '#ffcc99',
    },
    info: {
      url: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1200,h_1495/https://www.knetizen.com/wp-content/uploads/2020/11/BTS-V-on-the-official-Instagram-account-3.jpg',

      title: 'Bobi and Me',
    },


  },
  {
    id: 'n103',
    isPinned: false,
    type: 'note-todos',
    style: {
      backgroundColor: '#1111',
    },
    info: {
      label: 'Get my stuff together',
      todos: [
        { txt: 'Driving liscence', doneAt: 1242211 },
        { txt: 'Coding power', doneAt: 187111111 },
      ],
    },
  },
];

function query() {
  return Promise.resolve(gNotes);
}

function getNotes() {
  return gNotes
}

function deleteNote(noteId) {
  const noteIdx = gNotes.findIndex(note => note.id === noteId)
  gNotes.splice(noteIdx, 1);
  return Promise.resolve();
}

function addNote(noteType, noteContent, noteTitle, todosList) {


  if (noteType === 'note-txt') {
    const newNote = {
      id: utilService.makeId(),
      type: noteType,
      isPinned: false,
      style: {
        backgroundColor: '#1911',
      },
      info: { txt: noteContent },

    }
    gNotes.unshift(newNote)
    return Promise.resolve(newNote)
  }
  if (noteType === 'note-img') {
    const newNote = {
      id: utilService.makeId(),
      type: 'note-img',
      isPinned: false,

      info: {
        url: noteContent,

        title: noteTitle,
      },
      style: {
        backgroundColor: '#1911',
      }
    }
    gNotes.unshift(newNote)
    return Promise.resolve()
  }
  if (noteType === 'note-todos') {
    const newNote = {
      id: utilService.makeId(),
      isPinned: false,
      type: 'note-todos',
      style: {
        backgroundColor: '#7777',
      },
      info: {
        label: noteTitle,
        todos: todosList

      }
    }
    gNotes.unshift(newNote)
    return Promise.resolve()

  }
}


function duplicateNote(noteId) {
  const idx = gNotes.findIndex(note => note.id === noteId)
  const note = gNotes[idx]
  gNotes.unshift({ ...note, id: utilService.makeId() })
  return Promise.resolve(gNotes)
}

function pinNote(note) {
  if (note.isPinned) {
    const idx = pinnedNotes.findIndex(pNote => pNote.id === note.id)
    const selectetNote = pinnedNotes[idx]
    selectetNote.isPinned = false
    pinnedNotes.splice(idx, 1)
    gNotes.unshift(selectetNote)
  } else {
    const idx = gNotes.findIndex(pNote => pNote.id === note.id)
    const selectetNote = gNotes[idx]
    selectetNote.isPinned = true
    gNotes.splice(idx, 1)
    pinnedNotes.unshift(selectetNote)
    gNotes.unshift(selectetNote)
  }
  return Promise.resolve()

}


function changeColor(noteIdx, color) {
  const note = gNotes.find(note => note.id === noteIdx)
  note.style.backgroundColor = color
  return Promise.resolve(gNotes)
}


// function _createNotes() {
//   let loadedNotes = storageService.loadFromStorage(KEY)
//   if (!loadedNotes || !loadedNotes.length) {
//     loadedNotes = notes
//     storageService.saveToStorage(KEY, notes)
//   }
//   gNotes = loadedNotes
//   return
// }