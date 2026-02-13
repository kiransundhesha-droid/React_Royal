import React from 'react'
import { useForm } from 'react-hook-form';

const FullValidationForm = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully ✅");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>React Hook Form - 7 Validations</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* 1️⃣ Name - Required + MinLength + MaxLength */}
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters required"
              },
              maxLength: {
                value: 15,
                message: "Maximum 15 characters allowed"
              }
            })}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        {/* 2️⃣ Email - Required + Pattern */}
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email format"
              }
            })}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        {/* 3️⃣ Password - Required + Pattern */}
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/,
                message:
                  "Password must contain 1 uppercase, 1 number and min 6 chars"
              }
            })}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        {/* 4️⃣ Confirm Password - Custom Validation */}
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match"
            })}
          />
          <p style={{ color: "red" }}>
            {errors.confirmPassword?.message}
          </p>
        </div>

        {/* 5️⃣ Age - Required + Min + Max */}
        <div>
          <input
            type="number"
            placeholder="Enter Age"
            {...register("age", {
              required: "Age is required",
              min: {
                value: 18,
                message: "Minimum age is 18"
              },
              max: {
                value: 60,
                message: "Maximum age is 60"
              }
            })}
          />
          <p style={{ color: "red" }}>{errors.age?.message}</p>
        </div>

        {/* 6️⃣ Phone - Required + Pattern */}
        <div>
          <input
            type="text"
            placeholder="Enter Phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone must be 10 digits"
              }
            })}
          />
          <p style={{ color: "red" }}>{errors.phone?.message}</p>
        </div>

        {/* 7️⃣ Terms Checkbox - Required */}
        <div>
          <input
            type="checkbox"
            {...register("terms", {
              required: "You must accept terms"
            })}
          />
          Accept Terms & Conditions
          <p style={{ color: "red" }}>{errors.terms?.message}</p>
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default FullValidationForm