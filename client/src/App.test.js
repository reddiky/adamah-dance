import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('@apollo/client');
const useApolloClient =  require('@apollo/client')

test('renders Adamah Dance', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Adamah Dance/i);
  expect(headingElement).toBeInTheDocument();
});
