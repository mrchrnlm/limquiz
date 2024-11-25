import React, { useState } from 'react';
import TimeTracker from './TimeTracker';
import './App.css';





const App = () => {
  const initialEmployees = [
    { name: 'Chaa', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Alyssa', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Cathy', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Jade', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Lea', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Ron', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Noah', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Joe', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Amir', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Andy', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Nelly', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Dame', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Rick', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Jude', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'Maddy', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    { name: 'John', status: false, timestamp: null, clockInTimestamp: null, totalHoursWorked: 0 },
    
    




  

  ];

  const [employees, setEmployees] = useState(initialEmployees);

  return (
    <div>
      <h1> Ellry Cafe Employee Time Tracking</h1>
      <TimeTracker employees={employees} setEmployees={setEmployees} />
    </div>
  );
};

export default App;
