import React, { useState, useEffect } from 'react';

import Drawer from '@mui/material/Drawer';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const CitySearch = () => {
  // Состояния для хранения данных о городах и выбранных фильтрах
  const [cities, setCities] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Загрузка данных о городах из API или другого источника данных
  useEffect(() => {
    // Здесь вы можете использовать fetch или другой метод для загрузки данных о городах
    // и установки их в состояние cities
    // Например:
    // fetchCities().then(data => setCities(data));
    // Здесь cities должны быть массивом объектов с информацией о городах
    const mockCities = [
      { id: 1, name: 'City 1', country: 'Country A', region: 'Region 1' },
      { id: 2, name: 'City 2', country: 'Country B', region: 'Region 2' },
      { id: 3, name: 'City 3', country: 'Country A', region: 'Region 1' },
      // Другие города...
    ];
    setCities(mockCities);
    setFilteredCities(mockCities); // Изначально отображаем все города
  }, []);

  // Функция для фильтрации городов на основе выбранных фильтров
  useEffect(() => {
    let filtered = cities;
    if (countryFilter !== '') {
      filtered = filtered.filter(city => city.country === countryFilter);
    }
    if (regionFilter !== '') {
      filtered = filtered.filter(city => city.region === regionFilter);
    }
    if (selectedFilters.length > 0) {
      filtered = filtered.filter(city => selectedFilters.includes(city.country));
    }
    setFilteredCities(filtered);
  }, [countryFilter, regionFilter, cities, selectedFilters]);

  // Обработчик изменения выбранных фильтров
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
      
      <button onClick={() => setDrawerOpen(true)}>Open Filter Drawer</button>
      <Drawer
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
      </Drawer>
      {/* Форма с фильтрами */}
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
            value={regionFilter}
            onChange={e => setRegionFilter(e.target.value)}
          />
        </label>
      </form>
      {/* Список отфильтрованных городов */}
      <ul>
        {filteredCities.map(city => (
          <li key={city.id}>{city.name} - {city.country}, {city.region}</li>
        ))}
      </ul>
    </div>
  );
};

export default CitySearch;
