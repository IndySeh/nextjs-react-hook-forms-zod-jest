import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignUp from "@/app/components/SignUp";
import '@testing-library/jest-dom'

/**
 * The Case Suite below make sure:
 * - Signup Form Renders Correctly
 * - Updates Input Values Correctly
 * - SUbmits form with input values
 */


const mockSubmit = jest.fn((username, email, password) => {
  return Promise.resolve({username, email, password})
});


describe('SignUp Form Component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);
    const userNameInput = getByPlaceholderText("Username") as HTMLInputElement
    const emailInput    = getByPlaceholderText("Email") as HTMLInputElement 
    const passwordInput = getByPlaceholderText("Password") as HTMLInputElement
    const submitButton  = getByText("Sign Up")

    expect(userNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
   });


  it('updates input values correctly', () => {
    const {getByPlaceholderText} = render(<SignUp/>)
    const userNameInput = getByPlaceholderText('Username') as HTMLInputElement
    const emailInput = getByPlaceholderText('Email') as HTMLInputElement 
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement

    fireEvent.change(userNameInput, {target: {value: 'John'}})
    fireEvent.change(emailInput, {target: {value: 'John@example.com'}})
    fireEvent.change(passwordInput, {target: {value: 'Password!@#$'}})

    expect(userNameInput.value).toBe('John')
    expect(emailInput.value).toBe('John@example.com')
    expect(passwordInput.value).toBe('Password!@#$')
    expect(passwordInput.value.length).toBeGreaterThan(8)
   })
  

   it('submits form with input values', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);
    const userNameInput = getByPlaceholderText('Username') as HTMLInputElement;
    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
    const submitButton = getByText("Sign Up");
  
    fireEvent.change(userNameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Password!@#$' } });
    fireEvent.submit(submitButton); 
  
    // Wait for the submission process to complete
    await waitFor(() => {
      expect(mockSubmit)
    });
  });
});


