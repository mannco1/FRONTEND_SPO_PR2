import React, { useState, useEffect } from 'react';
import citiesData from '../data.json';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

const CitySearch = () => {
  const [cities, setCities] = useState([]);
  const [cityFilter, setCityFilter] = useState('');
  const [workTime, setWorkTime] = useState('');
  const [workTypeFilter, setWorkTypeFilter] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Состояния для первого набора кнопок
  const [jobType, setJobType] = useState(null); // Выбранная работа

  // Состояния для второго набора кнопок
  const [employmentType, setEmploymentType] = useState(null); // Выбранный тип занятости

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
  }, [workTime, workTypeFilter, minAmount, maxAmount, cities, selectedFilters,cityFilter]);

  // Функции обработки клика для первого набора кнопок
  const handleJobTypeClick = (type) => {
    setJobType(type === jobType ? null : type); // Снимаем выбор, если уже выбран
    setWorkTypeFilter(type === jobType ? '' : type); // Применяем фильтр работы
  };

  // Функции обработки клика для второго набора кнопок
  const handleEmploymentTypeClick = (type) => {
    setEmploymentType(type === employmentType ? null : type); 
    setWorkTime(type === employmentType ? '' : type); 
  };

  return (
    <div>
      <h2>Выберете параметры:</h2>
      {/* Первый набор Radio Group кнопок */}
      <RadioGroup value={jobType} onChange={(e) => handleJobTypeClick(e.target.value)}>
          <FormControlLabel value="courier" control={<Radio />} label="Courier" />
          <FormControlLabel value="seller" control={<Radio />} label="Seller" />
          <FormControlLabel value="warehouse" control={<Radio />} label="Warehouse" />
        </RadioGroup>

       

      <form>
      
        {/* <label>
          Тип вакансии:
          <input
            type="text"
            value={workTypeFilter}
            onChange={e => setWorkTypeFilter(e.target.value)}
          />
        </label>
        <label>
          Тип занятости:
          <input
            type="text"
            value={workTime}
            onChange={e => setWorkTime(e.target.value)}
          />
        </label> */}
      <div>
          <label>
            От:
            <input
              type="number"
              value={minAmount}
              onChange={e => setMinAmount(e.target.value)}
            />
          </label>
          <label>
            До:
            <input
              type="number"
              value={maxAmount}
              onChange={e => setMaxAmount(e.target.value)}
            />
          </label>
      </div>
 {/* Второй набор Radio Group кнопок */}
 <RadioGroup value={employmentType} onChange={(e) => handleEmploymentTypeClick(e.target.value)}>
          <FormControlLabel value="full-time" control={<Radio />} label="Full-time" />
          <FormControlLabel value="part-time" control={<Radio />} label="Part-time" />
          <FormControlLabel value="volunteer" control={<Radio />} label="Volunteer" />
        </RadioGroup>
      <label>
          Город:
          <input
            type="text"
            value={cityFilter}
            onChange={e => setCityFilter(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {filteredCities.map(city => (
          <li key={city.id}>{city.name} - {city.work}, {city.time},{city.age14} Amount: {city.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default CitySearch;
