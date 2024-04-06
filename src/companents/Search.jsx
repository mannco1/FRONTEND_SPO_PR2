import React, { useState, useEffect } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import citiesData  from'../data.json'

const CitySearch = () => {
  const [cities, setCities] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [workFilter, setRegionFilter] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    setCities(citiesData);
    setFilteredCities(citiesData); 
  }, []);

  useEffect(() => {
    let filtered = cities;
    if (countryFilter !== '') {
      filtered = filtered.filter(city => city.country === countryFilter);
    }
    if (workFilter !== '') {
      filtered = filtered.filter(city => city.region === workFilter);
    }
    if (selectedFilters.length > 0) {
      filtered = filtered.filter(city => selectedFilters.includes(city.country));
    }
    if (minAmount !== '' && maxAmount !== '') {
      filtered = filtered.filter(city => {
        const cityAmount = parseInt(city.amount);
        return cityAmount >= parseInt(minAmount) && cityAmount <= parseInt(maxAmount);
      });
    }
    setFilteredCities(filtered);
  }, [countryFilter, workFilter, minAmount, maxAmount, cities, selectedFilters]);

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedFilters(prev => [...prev, name]);
    } else {
      setSelectedFilters(prev => prev.filter(filter => filter !== name));
    }
  };

  return (
    <div>
      <div
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FormGroup>
          {cities.map(city => (
            <FormControlLabel
              key={city.country}
              control={<Checkbox checked={selectedFilters.includes(city.country)} onChange={handleFilterChange} name={city.country} />}
              label={city.country}
            />
          ))}
        </FormGroup>
      </div>
      <form>
        <label>
          Country:
          <input
            type="text"
            value={countryFilter}
            onChange={e => setCountryFilter(e.target.value)}
          />
        </label>
        <label>
          Region:
          <input
            type="text"
            value={workFilter}
            onChange={e => setRegionFilter(e.target.value)}
          />
        </label>
        <label>
          Min Amount:
          <input
            type="number"
            value={minAmount}
            onChange={e => setMinAmount(e.target.value)}
          />
        </label>
        <label>
          Max Amount:
          <input
            type="number"
            value={maxAmount}
            onChange={e => setMaxAmount(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {filteredCities.map(city => (
          <li key={city.id}>{city.name} - {city.country}, {city.region}, Amount: {city.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default CitySearch;
