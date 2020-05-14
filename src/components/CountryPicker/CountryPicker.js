import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../API';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => setCountries(await fetchCountries()))();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
        {/* <option value="global">Global</option> */}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
