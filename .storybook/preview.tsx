import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../src/store';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
};

export default preview;
