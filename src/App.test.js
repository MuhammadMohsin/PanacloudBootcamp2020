import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render hello world', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('find world in the document', () => {
  const renderResponse = render(<App />);

  const worldElement = renderResponse.getByText(/world/i);
  expect(worldElement).toBeInTheDocument();
});

test('find input with placeholder', () => {
  const renderResponse = render(<App />);
  const worldElement = renderResponse.getByPlaceholderText(/name here/i);
  expect(worldElement).toBeInTheDocument();
});
