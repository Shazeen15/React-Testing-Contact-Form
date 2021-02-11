import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("render with no errors", () => {
  render(<ContactForm />);
});

test("fill out form and check for output of the form", () => {
  //i am renderding the compoenet i want to test
  render(<ContactForm />);
  //i need to grab what I want to test
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const email = screen.getByLabelText(/email/i);
  const message = screen.getByLabelText(/message/i);

  //what i want to test to be typed into the inputs
});
