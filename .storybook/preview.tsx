import { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { store } from '@store';
import * as handlers from '@mocks/handlers';

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: {
      handlers,
    },
  },
  decorators: [
    mswDecorator,
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default preview;
