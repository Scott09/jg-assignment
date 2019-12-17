import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders title properly in app', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Let us help you on your job search!/);
  expect(title).toBeInTheDocument();
});

test('check for input with label Near what city?', () => {
  const { getByLabelText } = render(<App />);
  const input = getByLabelText(/Near what city?/);
  expect(input).toBeInTheDocument();
});

test('check for input field with label Job description or keyword', () => {
  const { getByLabelText } = render(<App />);
  const input = getByLabelText(/Job description or keyword/);
  expect(input).toBeInTheDocument();
});






