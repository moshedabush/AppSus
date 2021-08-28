"use strict";

import { emails } from "../services/data.service.js";
import { utilService } from "../../../services/util.service.js";

export const EmailService = {
  getUser,
  emailsToShow,
  addEmail,
};

const loggedinUser = { email: "user@appsus.com", fullname: "israel horse" };

const gEmails = emails;

function getUser() {
  return Promise.resolve(loggedinUser);
}

function emailsToShow(criteria) {
  let emails = filterBy(criteria);
  return Promise.resolve(emails);
}

function createEmail(subject, body, to) {
  return {
    id: utilService.makeId(),
    from: loggedinUser.fullname,
    subject,
    body,
    isRead: true,
    sentAt: Date.now(),
    isStarred: false,
    to,
    isSent:true,
  };
}

function addEmail(emailData,criteria) {
  const email = createEmail(emailData.subject, emailData.body, emailData.to);
  gEmails.unshift(email);
  let emails = emailsToShow(criteria);
  return Promise.resolve(emails);
}

function filterBy(criteria) {
  const { txt } = criteria;
  let emails = gEmails.filter((email) => {
    switch (criteria.status) {
      case null:
        return !email.isSent&&!email.isTrash&&!email.isDraft && filterByText(email, txt);
      case "sent":
        return email.isSent && filterByText(email, txt);
      case "trash":
        return email.isTrash && filterByText(email, txt);
      case "draft":
        return email.isDraft && filterByText(email, txt);
      case "all":
        return email && filterByText(email, txt);
      default:
        return true;
    }
  });
  emails = emails.filter((email) => {
    return (
      (criteria.isStared && email.isStared) || (!criteria.isStared && email)
    );
  });
  return emails;
}

function filterByText(email, txt) {
  if (!txt) return email;
  return (
    email.body.toLowerCase().includes(txt.toLowerCase()) ||
    email.subject.toLowerCase().includes(txt.toLowerCase())
  );
}
