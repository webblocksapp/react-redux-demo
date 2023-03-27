import { handleError } from '@utils';
import { AxiosError } from 'axios';

describe('handleError', () => {
  it('Instance of Error is handled as expected', () => {
    const message = handleError(new Error('An error ocurred'));
    expect(message).toBe('An error ocurred');
  });

  it('Instance of AxiosError is handled as expected', () => {
    const message = handleError(new AxiosError('An error ocurred'));
    expect(message).toBe('An error ocurred');
  });

  it('Unknown error is handled as expected', () => {
    const message = handleError({} as unknown);
    expect(message).toBe('An unknown error ocurred.');
  });
});
