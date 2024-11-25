import React, { useState, useEffect } from 'react';
import EllryEmployeeList from './EllryEmployeeList';

const TimeTracker = ({ employees, setEmployees }) => {
  const handleClockToggle = (index) => {
    const newEmployees = [...employees];
    const currentEmployee = newEmployees[index];

    if (currentEmployee.status) {
      currentEmployee.status = false;
      currentEmployee.timestamp = new Date().toISOString();

      const clockInTime = new Date(currentEmployee.clockInTimestamp);
      const clockOutTime = new Date(currentEmployee.timestamp);
      const hoursWorked = (clockOutTime - clockInTime) / 1000 / 60 / 60;

      currentEmployee.totalHoursWorked += hoursWorked;
    } else {
      currentEmployee.status = true;
      currentEmployee.timestamp = new Date().toISOString();
      currentEmployee.clockInTimestamp = currentEmployee.timestamp;
    }

    setEmployees(newEmployees);
  };

  useEffect(() => {
    const logStatusChange = () => {
      employees.forEach((employee) => {
        if (employee.timestamp) {
          console.log(`${employee.name} - ${employee.status ? 'Clocked In' : 'Clocked Out'} at ${employee.timestamp}`);
        }
      });
    };

    logStatusChange();
  }, [employees]);

  const handleReset = () => {
    const resetEmployees = employees.map(employee => ({
      ...employee,
      status: false,
      timestamp: null,
      clockInTimestamp: null,
      totalHoursWorked: 0,
    }));
    setEmployees(resetEmployees);
  };

  return (
    <div>
      <EllryEmployeeList employees={employees} onClockToggle={handleClockToggle} />
      <button onClick={handleReset} className="mt-4 p-2 bg-red-500 text-white rounded-md">
        Reset All
      </button>
    </div>
  );
};

export default TimeTracker;
