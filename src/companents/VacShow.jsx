import React, { useState } from 'react';
import VacAdd from './VacAdd';
import 'bootstrap/dist/css/bootstrap.min.css';

const VacShow = () => {
    const [vacancies, setVacancies] = useState([]);

    const handleAddVacancy = (newVacancy) => {
        setVacancies(prevVacancies => [...prevVacancies, newVacancy]);
    };

    return (
        <div className="container mt-5">
            
            {/* <VacAdd onAddVacancy={handleAddVacancy} /> */}
            {/* Отображение существующих вакансий */}
            <ul className="list-group">
                {vacancies.map(vacancy => (
                    <li key={vacancy.id} className="list-group-item">
                        <div className="d-flex justify-content-between">
                            <span>{vacancy.name}</span>
                            <span>{vacancy.country}</span>
                            <span>{vacancy.work}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VacShow;
