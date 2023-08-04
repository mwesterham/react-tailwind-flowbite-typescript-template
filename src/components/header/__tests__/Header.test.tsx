import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Ensures footer text is present', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Header/i);
  expect(linkElement).toBeInTheDocument();
});
