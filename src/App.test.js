import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is Prudhvi, Node Testing App/i);
  expect(linkElement).toBeInTheDocument();
});
