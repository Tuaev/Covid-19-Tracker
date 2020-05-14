import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './API';
import styles from './App.module.css';

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  useEffect(() => {
    (async () => setData(await fetchData()))();
  }, []);

  const handleCountryChange = async (selectedCountry) => {
    setData(await fetchData(selectedCountry));
    setCountry(selectedCountry);
  };
  return (
    <div className={styles.container}>
      <h1>COVID-19 TRACKER</h1>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
