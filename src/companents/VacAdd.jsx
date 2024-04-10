import React, { useState } from 'react';

const VacancyForm = ({ onAddVacancy }) => {
  const [newVacancy, setNewVacancy] = useState({
    name: '',
    country: '',
    work: '',
    age14: '',
    time: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVacancy(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Передаем новую вакансию в родительский компонент
    onAddVacancy(newVacancy);
    // Очищаем форму после отправки
    setNewVacancy({
      name: '',
      country: '',
      work: '',
      age14: '',
      time: '',
      amount: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newVacancy.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={newVacancy.country}
        onChange={handleChange}
      />
      <input
        type="text"
        name="work"
        placeholder="Work"
        value={newVacancy.work}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age14"
        placeholder="Age 14"
        value={newVacancy.age14}
        onChange={handleChange}
      />
      <input
        type="text"
        name="time"
        placeholder="Time"
        value={newVacancy.time}
        onChange={handleChange}
      />
      <input
        type="text"
        name="amount"
        placeholder="Amount"
        value={newVacancy.amount}
        onChange={handleChange}
      />
      <button type="submit">Add Vacancy</button>
    </form>
  );
};

export default VacancyForm;
