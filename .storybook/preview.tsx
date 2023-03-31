import { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { initialize, mswDecorator, getWorker } from 'msw-storybook-addon';
import { buildStore } from '@store';
import { useEffect, useState } from 'react';
import * as handlers from '@mocks/handlers';

initialize({ onUnhandledRequest: 'bypass' });

const RefreshProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [store] = useState(buildStore());
  useEffect(() => () => getWorker().resetHandlers(), []);

  return <Provider store={store}>{children}</Provider>;
};

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
      <RefreshProvider>
        <Story />
      </RefreshProvider>
    ),
  ],
};

export default preview;
