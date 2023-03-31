import { renderHook, RenderHookResult } from '@testing-library/react';
import { useProductApiClient } from '@apiClients';
import { data } from '@mocks/data';

describe('useProductApiClient', () => {
  let hook: RenderHookResult<ReturnType<typeof useProductApiClient>, null>;
  const firstRecord = data.products[0];
  const testData = {
    brand: 'Nike',
    currency: 'EUR',
    name: 'Skirt',
    price: 19.99,
  };

  beforeEach(() => {
    hook = renderHook(() => useProductApiClient());
  });

  it('LIST', async () => {
    const response = await hook.result.current.list();
    expect(response.data[0]).toMatchObject(firstRecord);
  });

  it('CREATE', async () => {
    const data = await hook.result.current.create(testData);
    expect(data).toMatchObject(testData);
  });

  it('UPDATE', async () => {
    const data = await hook.result.current.update(firstRecord.id, testData);
    expect(data).toMatchObject(testData);
  });

  it('REMOVE', async () => {
    const data = await hook.result.current.remove(firstRecord.id);
    expect(data).toMatchObject(firstRecord);
  });

  it('READ', async () => {
    const data = await hook.result.current.read(firstRecord.id);
    expect(data).toMatchObject(firstRecord);
  });
});
