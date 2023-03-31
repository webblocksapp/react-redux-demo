import { Meta, StoryObj } from '@storybook/react';
import { Watermark } from '@components';
import { ProductForm, Products, ProductsTable } from '@pages';
import { fireEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { sleep } from '@utils';
import { Product } from '@interfaces';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const testData: Product = {
  id: 1,
  name: 'Shoes',
  brand: 'Nike',
  currency: 'USD',
  price: 22.22,
};

const meta: Meta<typeof Products> = {
  title: 'Screens/Products',
  component: Products,
  decorators: [
    (Story) => (
      <>
        <Watermark text="Test" />
        <MemoryRouter initialEntries={['/products']}>
          <Routes>
            <Route path="products" element={<Story />}>
              <Route index element={<ProductsTable />} />
              <Route path="create" element={<ProductForm />} />
              <Route path="update/:id" element={<ProductForm />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </>
    ),
  ],
};

type Story = StoryObj<typeof Products>;

export default meta;

const fillForm = (canvasElement: HTMLElement, data: Product = testData) => {
  const nameInput = canvasElement.querySelector('[name="name"]');
  const brandInput = canvasElement.querySelector('[name="brand"]');
  const priceInput = canvasElement.querySelector('[name="price"]');

  fireEvent.input(nameInput, { target: { value: data.name } });
  fireEvent.input(brandInput, { target: { value: data.brand } });
  fireEvent.input(priceInput, { target: { value: data.price } });
};

export const CreateProduct: Story = {
  name: 'Create record',
  play: async ({ canvasElement }) => {
    await sleep(200);
    const canvas = within(canvasElement);
    const createBtn = canvas.getByText('Create');

    fireEvent.click(createBtn);
    await sleep(200);

    const submitBtn = canvasElement.querySelector<HTMLButtonElement>('button[type="submit"]');
    fillForm(canvasElement, testData);
    await sleep(200);
    fireEvent.click(submitBtn);
    await sleep(200);

    const firstRow = canvasElement.querySelector('tbody > tr.MuiTableRow-root');
    const firstRowData = Array.from(firstRow.querySelectorAll('td')).map((td) => td.innerText);
    expect(firstRowData).toEqual(expect.arrayContaining(['Shoes', '22.22', 'USD']));
  },
};

export const UpdateProduct: Story = {
  name: 'Update record',
  play: async ({ canvasElement }) => {
    await sleep(200);
    let firstRow = canvasElement.querySelector('tbody > tr.MuiTableRow-root');
    const actionBtns = Array.from(firstRow.querySelectorAll('button'));
    const [editBtn] = actionBtns;

    fireEvent.click(editBtn);
    await sleep(200);

    const submitBtn = canvasElement.querySelector<HTMLButtonElement>('button[type="submit"]');
    fillForm(canvasElement, { ...testData, name: 'Shirt' });
    fireEvent.click(submitBtn);
    await sleep(200);

    firstRow = canvasElement.querySelector('tbody > tr.MuiTableRow-root');
    const firstRowData = Array.from(firstRow.querySelectorAll('td')).map((td) => td.innerText);
    expect(firstRowData).toEqual(expect.arrayContaining(['Shirt', '22.22', 'USD']));
  },
};

export const RemoveProduct: Story = {
  name: 'Remove record',
  play: async ({ canvasElement }) => {
    await sleep(200);
    let firstRow = canvasElement.querySelector('tbody > tr.MuiTableRow-root');
    const [initialFirstRowId] = Array.from(firstRow.querySelectorAll('td')).map(
      (td) => td.innerText
    );
    const actionBtns = Array.from(firstRow.querySelectorAll('button'));
    const [_, removeBtn] = actionBtns;

    fireEvent.click(removeBtn);
    await sleep(200);

    firstRow = canvasElement.querySelector('tbody > tr.MuiTableRow-root');
    const [currentFirstRowId] = Array.from(firstRow.querySelectorAll('td')).map(
      (td) => td.innerText
    );
    expect(initialFirstRowId).not.toBe(currentFirstRowId);
  },
};
