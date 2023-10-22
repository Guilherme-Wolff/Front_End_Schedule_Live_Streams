
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom'
import { fireEvent, render, waitFor, getByLabelText, getByText } from "@testing-library/react"
export const InsertInputByPlaceholder =
  (
    Placeholder: string,
    text: string
  ) => {
    userEvent.type(screen.
      getByPlaceholderText
      (Placeholder),
      text);
  }

export const clickByText = (text: string) => {
  const button = screen.getByText(text)
  fireEvent.click(button)
}

