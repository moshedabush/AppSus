"use strict";

import { storageService } from "../../keep/services/storage.service";
import { utilService } from "../../../services/util.service.js";

export const mailService = {
  getUser,
  mailsToShow,
};

const loggedinUser = { email: "Kuki@appsus.com", fullname: "Kuki Appsus" };

const gMails = [
  {
    id: utilService.makeId(),
    subject: "Miss you!",
    body: "Would love to catch up sometimes",
    isRead: false,
    sentAt: Date.now(),
    to: "Kuki@appsus.com",
    isTrash: false,
    isDraft: false,
    isSent: false,
  },
  {
    id: utilService.makeId(),
    subject: "Miss you!",
    body: utilService.makeLorem(20),
    isRead: false,
    sentAt: Date.now(),
    to: "Kuki@appsus.com",
    isTrash: false,
    isDraft: false,
    isSent: false,
  },
];

// const criteria = {
//   // optinal status: 'inbox/sent/trash/draft',
//   status: 'draft',
//   txt: 'puki',
//   isRead: true,
//   isStared: true,
//   lables: ['important', 'romantic'],
// }

function getUser() {
  return Promise.resolve(loggedinUser);
}

function mailsToShow(user, criteria) {
  let mails = filterBy(user, criteria);
  return Promise.resolve(mails);
}

function filterBy(user, criteria) {
  let mails = gMails.filter((mail) => {
    switch (criteria.status) {
      case "sent":
        return mail.from === user.email;
      case "trash":
        return mail.isTrash;
      case "draft":
        return mail.isDraft;
      default:
        return true;
    }
  });
  mails = mails.filter((mail) => {
    return (criteria.isStared && mail.isStared) || (!criteria.isStared && mail);
  });

  return mails;
}
