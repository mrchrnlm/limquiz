import React from 'react';

const EllryEmployeeList = ({ employees, onClockToggle }) => {
  return (
    <div className="employee-list">
      {employees.map((employee, index) => (
        <div key={index} className="employee-card-box">
          <div className="employee-card p-6 bg-teal-100 rounded-lg border border-teal-400 shadow-xl">
            <div className="text-teal-700 font-bold text-xl">{employee.name}</div>
            <div className="text-teal-600">
              {employee.status ? 'Clocked In' : 'Clocked Out'}
            </div>
            <div className="text-sm text-gray-500">
              {employee.timestamp && new Date(employee.timestamp).toLocaleString()}
            </div>
            <div className="text-sm text-gray-700">
              Total Hours Worked: {employee.totalHoursWorked.toFixed(2)} hours
            </div>
            <button
              onClick={() => onClockToggle(index)}
              className="clock-button mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              {employee.status ? 'Clock Out' : 'Clock In'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EllryEmployeeList;
