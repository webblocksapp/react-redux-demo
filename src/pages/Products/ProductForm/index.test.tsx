import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@store';
import * as models from '@models';
import * as stories from './index.stories';
import { sleep } from '@utils';

jest.mock('@apiClients', () => ({
  ...jest.requireActual('@apiClients'),
  useProductApiClient: () => ({
    read: () => Promise.resolve(undefined),
    update: jest.fn,
  }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 1,
  }),
}));

const { ValidFillForm } = composeStories(stories);

describe('ProductForm Test', () => {
  test('renders button with custom children', async () => {
    await sleep(100);

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <ValidFillForm />
        </Router>
      </Provider>
    );
    getByText('Submit').click();
    expect(models.useProductModel().update).toHaveBeenCalledWith(1);
  });
});
