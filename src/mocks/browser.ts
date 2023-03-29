import { setupWorker } from 'msw';
import * as handlers from './handlers';

export const worker = setupWorker(...Object.values(handlers).flat());
