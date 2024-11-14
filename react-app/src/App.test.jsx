import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the BookingForm heading', ()=>{
  render(<BookingForm />);
  const headingElement = screen.getByText("Little Lemon Restaurant Reservation");
  expect(headingElement).toBeInTheDocument();

})


test('guests input field has a minimum value of 1',() =>{
  render(<BookingForm />);
  const guestsInput =  screen.getByLabelText(/guests/);
  fireEvent.change(guestsInput, {target : {value : "3"}});

  expect(guestsInput).toHaveAttribute('min','1');
})


test('')