import { z } from 'zod';
import {
  CurrencySchema,
  CryptoCurrenciesResponseSchema,
} from '../schema/crypto-schema';

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrency = z.infer<typeof CryptoCurrenciesResponseSchema>;
