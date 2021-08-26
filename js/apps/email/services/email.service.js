"use strict";

import { storageService } from "../../../services/storage.service";
import { utilService } from "../../../services/util.service.js";

export const EmailService = {
  getUser,
  emailsToShow
};

const loggedinUser = { email: "Kuki@appsus.com", fullname: "Kuki Appsus" };

const gEmails = [
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

function emailsToShow(user, criteria) {
  let emails = filterBy(user, criteria);
  return Promise.resolve(emails);
}

function filterBy(user, criteria) {
  let emails = gEmails.filter((email) => {
    switch (criteria.status) {
      case "sent":
        return email.from === user.email;
      case "trash":
        return email.isTrash;
      case "draft":
        return email.isDraft;
      default:
        return true;
    }
  });
  emails = emails.filter((email) => {
    return (criteria.isStared && email.isStared) || (!criteria.isStared && email);
  });

  return emails;
}
