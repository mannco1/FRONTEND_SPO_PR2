import React, { useState } from 'react';
import VacAdd from './VacAdd'

const VacShow = () => {
    const [vacancies, setVacancies] = useState([]);

  const handleAddVacancy = (newVacancy) => {
    setVacancies(prevVacancies => [...prevVacancies, newVacancy]);
  };

  return (
    <div>
      <h1>Vacancies</h1>
      {/* <VacAdd onAddVacancy={handleAddVacancy} /> */}
      {/* Отображение существующих вакансий */}
      <ul>
        {vacancies.map(vacancy => (
          <li key={vacancy.id}>
            {vacancy.name} - {vacancy.country} - {vacancy.work}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default VacShow;