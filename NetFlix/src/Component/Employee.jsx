import React from 'react'
import EmployeeList from './EmployeeList';

const Employee = () => {

const employees = [
  {
    id: 1,
    name: "Rohit Sharma",
    age: 28,
    email: "rohit@gmail.com",
    phone: "9876543210",
    department: "IT",
    designation: "Web Developer",
    salary: 35000,
    city: "Ahmedabad"
  },
  {
    id: 2,
    name: "Priya Patel",
    age: 26,
    email: "priya@gmail.com",
    phone: "9123456780",
    department: "HR",
    designation: "HR Executive",
    salary: 30000,
    city: "Surat"
  },
  {
    id: 3,
    name: "Amit Shah",
    age: 30,
    email: "amit@gmail.com",
    phone: "9988776655",
    department: "Finance",
    designation: "Accountant",
    salary: 40000,
    city: "Vadodara"
  },
  {
    id: 4,
    name: "Neha Joshi",
    age: 27,
    email: "neha@gmail.com",
    phone: "9090909090",
    department: "Marketing",
    designation: "Marketing Manager",
    salary: 38000,
    city: "Rajkot"
  },
  {
    id: 5,
    name: "Karan Mehta",
    age: 29,
    email: "karan@gmail.com",
    phone: "9012345678",
    department: "IT",
    designation: "Backend Developer",
    salary: 42000,
    city: "Ahmedabad"
  }
];


  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">Employee List</h3>

      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <EmployeeList
              key={emp.id}
              id={emp.id}
              name={emp.name}
              age={emp.age}
              email={emp.email}
              phone={emp.phone}
              dept={emp.department}
              desing={emp.designation}
              salary={emp.salary}
              city={emp.city}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Employee
