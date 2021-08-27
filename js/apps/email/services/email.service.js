"use strict";

// import { utilService } from "../../../services/util.service.js";
import { emails } from "../services/data.service.js";

export const EmailService = {
  getUser,
  emailsToShow
};

const loggedinUser = { email: "user@appsus.com", fullname: "israel horse" };

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



function emailsToShow(criteria) {
  let emails = filterBy(criteria);
  return Promise.resolve(emails);
}

function filterBy(criteria) {
  let emails = gEmails.filter((email) => {
    switch (criteria.status) {
      case "inbox":
        return email;
      case "sent":
        return email.isSent;
      case "trash":
        return email.isTrash;
      case "draft":
        return email.isDraft;
      default:
        return true;
    }
  });
  console.log(emails);
  emails = emails.filter((email) => {
    return (criteria.isStared && email.isStared) || (!criteria.isStared && email);
  });

  return emails;
}
