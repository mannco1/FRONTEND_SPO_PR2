import React, { useState, useEffect } from 'react';
import citiesData from '../data.json';
import { RadioGroup, FormControlLabel, Radio, Container, Typography, TextField, Box, Button, FormControl } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const CitySearch = () => {
  const [cities, setCities] = useState([]);
  const [cityFilter, setCityFilter] = useState('');
  const [workTime, setWorkTime] = useState('');
  const [workTypeFilter, setWorkTypeFilter] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [jobType, setJobType] = useState(null);
  const [employmentType, setEmploymentType] = useState(null);

  useEffect(() => {
    setCities(citiesData);
    setFilteredCities(citiesData);
  }, []);

  useEffect(() => {
    let filtered = cities;
    if (cityFilter !== '') {
      filtered = filtered.filter(city => city.name === cityFilter);
    }
    if (workTime !== '') {
      filtered = filtered.filter(city => city.time === workTime);
    }
    if (workTypeFilter !== '') {
      filtered = filtered.filter(city => city.work === workTypeFilter);
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
  }, [workTime, workTypeFilter, minAmount, maxAmount, cities, selectedFilters, cityFilter]);

  const handleJobTypeClick = (type) => {
    setJobType(type === jobType ? null : type);
    setWorkTypeFilter(type === jobType ? '' : type);
  };

  const handleEmploymentTypeClick = (type) => {
    setEmploymentType(type === employmentType ? null : type);
    setWorkTime(type === employmentType ? '' : type);
  };

  return (
    <Container className="mt-5">
      <Typography variant="h4" component="h2" gutterBottom>Выберете параметры:</Typography>
      
      <FormControl component="fieldset" className="mb-3">
        <Typography variant="h6" component="legend">Тип работы:</Typography>
        <RadioGroup value={jobType} onChange={(e) => handleJobTypeClick(e.target.value)} row>
          <FormControlLabel value="courier" control={<Radio />} label="Courier" />
          <FormControlLabel value="seller" control={<Radio />} label="Seller" />
          <FormControlLabel value="warehouse" control={<Radio />} label="Warehouse" />
        </RadioGroup>
      </FormControl>
      
      <FormControl component="fieldset" className="mb-3">
        <Typography variant="h6" component="legend">Тип занятости:</Typography>
        <RadioGroup value={employmentType} onChange={(e) => handleEmploymentTypeClick(e.target.value)} row>
          <FormControlLabel value="full-time" control={<Radio />} label="Full-time" />
          <FormControlLabel value="part-time" control={<Radio />} label="Part-time" />
          <FormControlLabel value="volunteer" control={<Radio />} label="Volunteer" />
        </RadioGroup>
      </FormControl>

      <form>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <TextField
            label="От"
            type="number"
            value={minAmount}
            onChange={e => setMinAmount(e.target.value)}
            variant="outlined"
            className="me-2"
          />
          <TextField
            label="До"
            type="number"
            value={maxAmount}
            onChange={e => setMaxAmount(e.target.value)}
            variant="outlined"
            className="ms-2"
          />
        </Box>
        <Box mb={3}>
          <TextField
            label="Город"
            type="text"
            value={cityFilter}
            onChange={e => setCityFilter(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Box>
      </form>
      <h1 className="mb-4">Vacancies</h1>
      <ul className="list-group">
        {filteredCities.map(city => (
          <li key={city.id} className="list-group-item">
            {city.name} - {city.work}, {city.time}, {city.age14} Amount: {city.amount}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CitySearch;
