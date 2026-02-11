import React, { useState } from 'react'

const ReactForm = () => {
    const [formData, setFormData] = useState({
            name: "",
            email: "",
            age: "",
            password: "",
            city: "",
          });
        
          const [submittedData, setSubmittedData] = useState(null);
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            setSubmittedData(formData);
          };
          return (
            <div style={{display:'flex', alignItems:"center"}}>
              <div style={{display:'flex', alignItems:"center"}} >
                <h1 >React Form</h1>
        
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                   <br/>
        
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                   <br/>
        
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                    
                  />
                   <br/>
        
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                  <br/>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                   <br/>
        
                  <button
                    type="submit"
                
                  >
                     <br/>
                    Submit
                  </button>
                </form>
        
                {submittedData && (
                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <h2 className="font-semibold mb-2">Output</h2>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Age:</strong> {submittedData.age}</p>
                    <p><strong>Password:</strong> {submittedData.password}</p>
                    <p><strong>City:</strong> {submittedData.city}</p>
                  </div>
                )}
              </div>
            </div>
    );
}

export default ReactForm
