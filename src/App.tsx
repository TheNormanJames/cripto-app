import { useEffect, useMemo } from 'react';
import CriptoSearchForm from './components/CriptoSearchForm';
import { useCryptoStore } from './store';
import CryptoPriceDisplay from './components/CryptoPriceDisplay';
import Spinner from './components/Spinner';

function App() {
  const { fetchCryptos, cryptocurrencies, result, loading } = useCryptoStore();
  useEffect(() => {
    fetchCryptos();
  }, []);

  // console.log(cryptocurrencies);
  const hasResult = useMemo(
    () => !Object.values(result).includes(''),
    [result]
  );

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
        </div>
        {/* <div className="content">
          {loading ? <Spinner /> : hasResult && <CryptoPriceDisplay />}
        </div> */}
        {hasResult && (
          <div className="content">
            {loading ? <Spinner /> : <CryptoPriceDisplay />}
          </div>
        )}
      </div>
      <div className="todosCryptos_Area">
        <div className="todosCryptos">
          {cryptocurrencies.map((crypto) => (
            <p key={crypto.CoinInfo.Name}>
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
