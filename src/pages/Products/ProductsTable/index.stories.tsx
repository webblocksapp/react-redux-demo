import { Meta, StoryObj } from '@storybook/react';
import { ProductsTable } from '@pages';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof ProductsTable> = {
  title: 'Tables/ProductsTable',
  component: ProductsTable,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof ProductsTable>;

export default meta;

export const Overview: Story = {};
