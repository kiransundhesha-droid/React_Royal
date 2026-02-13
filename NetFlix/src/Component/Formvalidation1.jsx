import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Formvalidation1 = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [isSet, setIsSet] = useState(false)
  const [userData, setUserData] = useState({})

  const validationSchema = {
    name: {
      required: "Enter your name *"
    },
    email: {
      required: "Please enter email *"
    },
    age: {
      required: "Please enter Age *",
      min: {
        value: 18,
        message: "Age must be at least 18"
      },
      max: {
        value: 60,
        message: "Age should not be above 60"
      }
    }
  }

  const submitHandler = (data) => {
    setUserData(data)
    setIsSet(true)
  }

  const errorStyle = {
    color: "red"
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Form Validation Component</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        Name:
        <input
          type="text"
          placeholder="Enter your name"
          {...register('name', validationSchema.name)}
        />
        <p style={errorStyle}>{errors.name?.message}</p>

        Email:
        <input
          type="email"
          placeholder="Enter your email"
          {...register('email', validationSchema.email)}
        />
        <p style={errorStyle}>{errors.email?.message}</p>

        Age:
        <input
          type="number"
          {...register('age', validationSchema.age)}
        />
        <p style={errorStyle}>{errors.age?.message}</p>

        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {isSet && (
        <div>
          <h3>{userData.name}</h3>
          <h3>{userData.email}</h3>
          <h3>{userData.age}</h3>
        </div>
      )}
    </div>
  )
}

export default Formvalidation1
