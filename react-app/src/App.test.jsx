import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the BookingForm heading', ()=>{
  render(<BookingForm />);
  const handleSubmit = screen.getByText("Little Lemon Restaurant Reservation");
  expect(handleSubmit).toBeInTheDocument();

})


test('guests input field has a minimum value of 1',() =>{
  render(<BookingForm />);
  const guestsInput =  screen.getByLabelText(/guests/i);
  fireEvent.change(guestsInput, {target : {value : "3"}});

  expect(guestsInput).toHaveAttribute('min','1');
});


test('name input field is required', () => {
  render(<booking />);
  const nameInput = screen.getByAltText(/name/i);
  expect(nameInput).toBeRequired();
});