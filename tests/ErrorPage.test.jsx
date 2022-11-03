import { render, screen } from '@testing-library/react';
import ErrorPage from 'src/pages/ErrorPage/ErrorPage';

describe('ErrorPage', () => {
  const { asFragment } = render(<ErrorPage></ErrorPage>);
  test('snapTest', async () => {
    const errorMessage = screen.getByText("404 This is not the page you're looking for");
    expect(errorMessage).toBeInTheDocument();
  });
  test('have error img', async () => {
    render(<ErrorPage></ErrorPage>);
    const errorImg = screen.getByAltText('404');
    expect(errorImg).toBeInTheDocument();
  });
  test('snap test', async () => {
    const fragment = asFragment();
    expect(fragment).toMatchSnapshot();
  });
});
