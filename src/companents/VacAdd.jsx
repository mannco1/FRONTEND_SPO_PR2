import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Name"
          value={newVacancy.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="country" className="form-label">Country</label>
        <input
          type="text"
          className="form-control"
          id="country"
          name="country"
          placeholder="Country"
          value={newVacancy.country}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="work" className="form-label">Work</label>
        <input
          type="text"
          className="form-control"
          id="work"
          name="work"
          placeholder="Work"
          value={newVacancy.work}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age14" className="form-label">Age 14</label>
        <input
          type="text"
          className="form-control"
          id="age14"
          name="age14"
          placeholder="Age 14"
          value={newVacancy.age14}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="time" className="form-label">Time</label>
        <input
          type="text"
          className="form-control"
          id="time"
          name="time"
          placeholder="Time"
          value={newVacancy.time}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          type="text"
          className="form-control"
          id="amount"
          name="amount"
          placeholder="Amount"
          value={newVacancy.amount}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Vacancy</button>
    </form>
  );
};

export default VacancyForm;
