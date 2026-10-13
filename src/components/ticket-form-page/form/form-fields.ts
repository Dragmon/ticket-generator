import type { InputProps } from './text-input';

interface Dictionary {
  fields: {
    name: InputProps;
    email: InputProps;
    github: InputProps;
  };
  actions: {
    submit: string;
  };
};

export const dictionaryForm = {
  fields: {
    name: {
      label: "Full Name",
      placeholder: "Jonathan Kristof",
      name: "full_name"
    },
    email: {
      label: "Email Address",
      placeholder: "jonathan091@gmail.com",
      type: "email",
      name: "email_address"
    },
    github: {
      label: "Github Username",
      placeholder: "@jonathan091",
      name: "github_user"
    },
  },
  actions: {
    submit: "Generate My Ticket",
  }
} as const satisfies Dictionary;