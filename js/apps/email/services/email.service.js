"use strict";

// import { utilService } from "../../../services/util.service.js";
import { emails } from "../services/data.service.js";

export const EmailService = {
  getUser,
  emailsToShow
};

const loggedinUser = { email: "Kuki@appsus.com", fullname: "Kuki Appsus" };

const gEmails = emails;

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
