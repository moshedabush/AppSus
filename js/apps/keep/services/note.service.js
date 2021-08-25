'use strict';

export const NoteService = {
  query,
  getTodos
}


const KEY = 'noteDB';

let gNotes = [
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
        { txt: 'Driving liscence', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 },
      ],
    },
  },
];

function query() {
  return Promise.resolve(gNotes);
}

function getTodos(note) {
  var todos = ''
  note.info.todos.map(todo => todos += `<li>${todo.txt}</li>`)
  return todos;
}