import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../API';

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    (async () => setDailyData(await fetchDailyData()))();
  }, [setDailyData]);
  return <h1>Chart</h1>;
};

export default Chart;
