import { Meta, StoryObj } from '@storybook/react';
import { ProductForm } from '@pages';
import { fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { sleep } from '@utils';

const meta: Meta<typeof ProductForm> = {
  title: 'ProductForm',
  component: ProductForm,
};

type Story = StoryObj<typeof ProductForm>;

export default meta;

export const ValidFillForm: Story = {
  name: 'Form is filled with valid data',
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
