import { useEffect } from 'react';
import CriptoSearchForm from './components/CriptoSearchForm';
import { useCryptoStore } from './store';
import CryptoPriceDisplay from './components/CryptoPriceDisplay';

function App() {
  const { fetchCryptos, cryptocurrencies } = useCryptoStore();
  useEffect(() => {
    fetchCryptos();
  }, []);

  console.log(cryptocurrencies);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
        </div>
        <div className="content">
          <CryptoPriceDisplay />
        </div>
      </div>
      <div className="todosCryptos_Area">
        <div className="todosCryptos">
          {cryptocurrencies.map((crypto) => (
            <p>
              {crypto.CoinInfo.Name}: {''}
              <span>{crypto.DISPLAY.USD.PRICE}</span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
