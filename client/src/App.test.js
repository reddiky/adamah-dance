import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Adamah Dance', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Adamah Dance/i);
  expect(headingElement).toBeInTheDocument();
});
