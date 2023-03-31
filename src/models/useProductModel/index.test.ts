import { renderHook, RenderHookResult, globals } from '@jest-utils';
import { useProductModel } from '@models';
import { data } from '@mocks/data';

describe('useProductModel', () => {
  let hook: RenderHookResult<ReturnType<typeof useProductModel>, null>;
  const firstRecord = data.products[0];
  const testData = {
    brand: 'Nike',
    currency: 'EUR',
    name: 'Skirt',
    price: 19.99,
  };

  beforeEach(() => {
    hook = renderHook(() => useProductModel());
  });

  it('LIST', async () => {
    await hook.result.current.list();
    const state = hook.result.current.selectProductState(globals.store.getState());
    expect(state.products[0]).toMatchObject(firstRecord);
  });

  it('CREATE', async () => {
    await hook.result.current.save(testData);
    const state = hook.result.current.selectProductState(globals.store.getState());
    expect(state.products[0]).toMatchObject(testData);
  });

  it('UPDATE', async () => {
    await hook.result.current.list();
    await hook.result.current.save({ id: firstRecord.id, ...testData });
    const state = hook.result.current.selectProductState(globals.store.getState());
    expect(state.products[0]).toMatchObject(testData);
  });

  it('REMOVE', async () => {
    await hook.result.current.list();
    await hook.result.current.remove(firstRecord.id);
    const state = hook.result.current.selectProductState(globals.store.getState());
    expect(state.products[0].id).not.toBe(firstRecord.id);
  });

  it('READ', async () => {
    await hook.result.current.read(firstRecord.id);
    const state = hook.result.current.selectProductState(globals.store.getState());
    expect(state.products[0]).toMatchObject(firstRecord);
  });
});
