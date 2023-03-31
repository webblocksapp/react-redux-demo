import { Meta, StoryObj } from '@storybook/react';
import { ProductForm } from '@pages';
import { fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { sleep } from '@utils';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const meta: Meta<typeof ProductForm> = {
  title: 'Forms/ProductForm',
  component: ProductForm,
};

type Story = StoryObj<typeof ProductForm>;

export default meta;

export const FillProductForm: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/products/create']}>
        <Routes>
          <Route path="/products/create" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
  name: 'Form data is valid with user input',
  play: async ({ canvasElement }) => {
    await sleep(100);

    const nameInput = canvasElement.querySelector('[name="name"]');
    const brandInput = canvasElement.querySelector('[name="brand"]');
    const priceInput = canvasElement.querySelector('[name="price"]');
    const submitBtn = canvasElement.querySelector<HTMLButtonElement>('button[type="submit"]');

    fireEvent.input(nameInput, { target: { value: 'Shoes' } });
    fireEvent.input(brandInput, { target: { value: 'Nike' } });
    fireEvent.input(priceInput, { target: { value: '2000' } });

    await sleep(100);

    expect(submitBtn.disabled).toBe(false);
  },
};

export const FetchProductFormData: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/products/update/2']}>
        <Routes>
          <Route path="/products/update/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
  name: 'Fetched form data is valid by using the product id',
  play: async ({ canvasElement }) => {
    await sleep(100);
    const submitBtn = canvasElement.querySelector<HTMLButtonElement>('button[type="submit"]');
    expect(submitBtn.disabled).toBe(false);
  },
};
