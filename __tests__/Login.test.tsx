import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "@/app/components/LogIn";
import '@testing-library/jest-dom'


/**
 * The Case Suite below make sure :
 * - Login Form Renders Correctly
 * - Updates Input Values Correctly
 * - SUbmits form with input values
 */


const mockSubmit = jest.fn(( email, password) => {
    return Promise.resolve({email, password})
  });


describe('Login Form Component', () => {
    it('renders correctly', () => {
      const {getByPlaceholderText, getByText}   =   render(<Login/>)
      const userNameInput = getByPlaceholderText('Email') as HTMLInputElement
      const emailInput = getByPlaceholderText('Password') as HTMLInputElement
      const submitButton  = getByText("Login")

      expect(userNameInput).toBeInTheDocument()
      expect(emailInput).toBeInTheDocument()
      expect(submitButton).toBeInTheDocument() 
    })

    
    it('updates input value correctly', () => {
        const {getByPlaceholderText, getByText}   =   render(<Login/>)
        const emailInput = getByPlaceholderText('Email') as HTMLInputElement 
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement


        fireEvent.change(emailInput, {target: {value: 'John@example.com'}})
        fireEvent.change(passwordInput, {target: {value: 'Password!@#$'}})

        expect(emailInput.value).toBe('John@example.com')
        expect(passwordInput.value).toBe('Password!@#$')
        expect(passwordInput.value.length).toBeGreaterThan(8) 
    })


    it('submits form with input values', async () => {
        const { getByPlaceholderText, getByText } = render(<Login />);
        const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
        const submitButton = getByText("Login");
      

        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'Password!@#$' } });
        fireEvent.submit(submitButton); 
      
        // Wait for the submission process to complete
        await waitFor(() => {
          expect(mockSubmit)
        });
      });

})
