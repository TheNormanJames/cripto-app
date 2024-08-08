import { useState } from 'react';
import { currencies } from '../data/index';
import { useCryptoStore } from '../store';
import { Pair } from '../types';

export default function CriptoSearchForm() {
  const { cryptocurrencies } = useCryptoStore();
  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptocurrency: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda</label>
        <select name="currency" id="currency" onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option value={currency.code} key={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda</label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          {cryptocurrencies.map((crypto) => (
            <option value={crypto.CoinInfo.Name} key={crypto.CoinInfo.FullName}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Cotizar" />
    </form>
  );
}
