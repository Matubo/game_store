import { render } from '@testing-library/react';
import ErrorPage from 'src/pages/ErrorPage/ErrorPage';

it('test', async () => {
  expect(1).toEqual(1);
});
test('snapTest', async () => {
  const { container, getByText } = render(<ErrorPage></ErrorPage>);
});
