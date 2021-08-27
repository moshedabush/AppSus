'use strict';

import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";

export const NoteService = {
  query,
  deleteNote,
  getNotes,
  addNote,
  // duplicateNote
};



// _createNotes()
const KEY = 'noteDB';

var gNotes = [
  {
    id: 'n101',
    type: 'note-txt',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: 'n102',
    type: 'note-img',
    info: {
      url: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1200,h_1495/https://www.knetizen.com/wp-content/uploads/2020/11/BTS-V-on-the-official-Instagram-account-3.jpg',

      title: 'Bobi and Me',
    },
    style: {
      backgroundColor: '#1111',
    },
  },
  {
    id: 'n103',
    type: 'note-todos',
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

function addNote(noteType, noteContent) {

  if (noteType === 'note-txt') {
    const newNote = {
      id: utilService.makeId(),
      type: noteType,
      isPinned: false,
      info: { txt: noteContent },
    }
    gNotes.unshift(newNote)
    return Promise.resolve(newNote)
  }
  if (noteType === 'note-img') {
    const newNote = {
      id: utilService.makeId(),
      type: 'note-img',
      info: {
        url: noteContent,

        title: 'note image',
      },
      style: {
        backgroundColor: '#1911',
      }
    }
    gNotes.unshift(newNote)
    return Promise.resolve(newNote)
  }
}
function duplicateNote(noteId) {
  const idx = gNotes.findIndex(note => note.id === noteId)
  const note = gNotes[idx]
  gNotes.unshift({ ...note, id: utilService.makeId() })
  return Promise.resolve(notes)
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

function pinNote(note) {

}