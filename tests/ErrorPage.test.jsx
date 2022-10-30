import { render, screen } from '@testing-library/react';
import ErrorPage from 'src/pages/ErrorPage/ErrorPage';

test('snapTest', async () => {
  render(<ErrorPage></ErrorPage>);
  screen.debug();
  const errorMessage = screen.getByText("404 This is not the page you're looking for");
  expect(errorMessage).toBeInTheDocument();
});
