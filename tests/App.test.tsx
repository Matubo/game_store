import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from 'src/App';
import setupStore from 'src/redux/store';

describe('App test', () => {
  test('snapshot test', () => {
    const { asFragment } = render(
      <Provider store={setupStore()}>
        {/* надо перенести в отдельный хелпер */}
        <App></App>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
