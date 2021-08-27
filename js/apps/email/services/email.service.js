"use strict";

import { emails } from "../services/data.service.js";

export const EmailService = {
  getUser,
  emailsToShow,
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

function filterBy(criteria) {
  const { txt } = criteria;
  let emails = gEmails.filter((email) => {
    switch (criteria.status) {
      case "inbox":
        return email && filterByText(email, txt);
      case "sent":
        return email.isSent && filterByText(email, txt);
      case "trash":
        return email.isTrash && filterByText(email, txt);
      case "draft":
        return email.isDraft && filterByText(email, txt);
      default:
        return true;
    }
  });
  console.log(emails);
  emails = emails.filter((email) => {
    return (
      (criteria.isStared && email.isStared) || (!criteria.isStared && email)
    );
  });

  return emails;
}

function filterByText(email, txt) {
  if(!txt) return email;
  return (
    email.body.toLowerCase().includes(txt.toLowerCase()) ||
    email.subject.toLowerCase().includes(txt.toLowerCase())
  );
}
