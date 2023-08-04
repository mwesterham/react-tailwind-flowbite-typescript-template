import { render, screen } from '@testing-library/react';
import App from '../App';

test('Ensures click me text is present', () => {
  render(<App />);
  const linkElement = screen.getByText(/Click me/i);
  expect(linkElement).toBeInTheDocument();
});
