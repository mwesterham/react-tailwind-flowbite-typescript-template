import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('Ensures footer text is present', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Footer/i);
  expect(linkElement).toBeInTheDocument();
});
