import React from 'react';

const EmployeeList = ({ id, name, age, email, phone, dept, desing, salary, city }) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{name || 'Not Found'}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{dept}</td>
      <td>{desing}</td>
      <td>{salary}</td>
      
      <td>{city}</td>
    </tr>
  );
};

export default EmployeeList;