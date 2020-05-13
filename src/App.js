import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './API';
import styles from './App.module.css';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => setData(await fetchData()))();
  }, [setData]);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
