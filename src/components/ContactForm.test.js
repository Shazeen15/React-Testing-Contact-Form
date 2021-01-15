import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContactForm from "./ContactForm";

test("testing form", () => {
  // arrange
  render(<ContactForm />);

  // act
  // getting the fields in the form
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const email = screen.getByLabelText(/email/i);
  const message = screen.getByLabelText(/message/i);

  // type in values into the inputs
  userEvent.type(firstName, "Shazeen");
  userEvent.type(lastName, "Fabius");
  userEvent.type(email, "shazeen@gmail.com");
  userEvent.type(message, "woot woot");

  // click the submit button
  //   const button = screen.getByRole("button", {name: 'example'});
  const button = screen.getByRole("button");
  //   console.log(button);
  userEvent.click(button);

  //assert
  const firstNameInput = screen.findByText("shazeen");
  firstNameInput.then((input) => {
    expect(input).toBeInTheDocument();
  });

  const lastNameInput = screen.findByText("fabius");
  lastNameInput.then((input) => {
    expect(input).toBeInTheDocument();
  });

  const emailInput = screen.findByText("shazeen@gmail.com");
  emailInput.then((input) => {
    expect(input).toBeInTheDocument();
  });

  const messageInput = screen.findByText("woot woot");
  messageInput.then((input) => {
    expect(input).toBeInTheDocument();
  });
});
