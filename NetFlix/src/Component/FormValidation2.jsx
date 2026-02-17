import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormValidation2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "all" });

  const password = watch("password");
  const [passwordrules, setPasswordrules] = useState(false);
  const [isset, setIsset] = useState(false);
  const [userdata, setUserData] = useState({});

  const validationSchema = {
    Namevalidate: {
      required: {
        value: true,
        message: "Enter your name*",
      },
    },

    Emailvalidate: {
      required: {
        value: true,
        message: "Please enter email*",
      },
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email format",
      },
    },

    passwordvalidate: {
      required: {
        value: true,
        message: "Enter password*",
      },
      pattern: {
        value:
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/,
        message:
          "Password must contain uppercase, lowercase, number & special character (min 8)",
      },
    },

    confpasswordvalidate: {
      required: {
        value: true,
        message: "Enter confirm password*",
      },
      validate: (value) =>
        value === password || "Confirm password does not match",
    },

    Agevalidate: {
      required: {
        value: true,
        message: "Please enter Age*",
      },
      min: {
        value: 18,
        message: "Age must be at least 18",
      },
      max: {
        value: 60,
        message: "Age should not be above 60",
      },
    },

    contactvalidate: {
      required: {
        value: true,
        message: "Contact required*",
      },
      pattern: {
        value: /^[7-9][0-9]{9}$/,
        message: "Invalid contact (10 digits starting with 7-9)",
      },
      maxLength: {
        value: 10,
        message: "Must be exactly 10 digits",
      },
    },
  };

  const passwordRules = [
    { label: "At least one uppercase", test: /[A-Z]/.test(password || "") },
    { label: "At least one lowercase", test: /[a-z]/.test(password || "") },
    { label: "At least one number", test: /[0-9]/.test(password || "") },
    {
      label: "At least one special character",
      test: /[^A-Za-z0-9]/.test(password || ""),
    },
    { label: "Minimum 8 characters", test: password?.length >= 8 },
  ];

  const submitHandler = (data) => {
    setUserData(data);
    setIsset(true);
    setPasswordrules(true)
  };

  const error = {
    color: "red",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Form Validation Component</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        {/* Name */}
        Name:
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", validationSchema.Namevalidate)}
        />
        <p style={error}>{errors.name?.message}</p>
        <br />

        {/* Email */}
        Email:
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", validationSchema.Emailvalidate)}
        />
        <p style={error}>{errors.email?.message}</p>
        <br />

        {/* Password */}
        Password:
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", validationSchema.passwordvalidate)} onFocus={()=>setPasswordrules(true)} onBlur={()=>setPasswordrules(false)}
        />
        <p style={error}>{errors.password?.message}</p>
        
        { passwordrules && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {passwordRules.map((rule, index) => (
            <li key={index} style={{ color: rule.test ? "green" : "black" }}>
              {rule.label}
            </li>
          ))}
        </ul>
        )}
        {/* Confirm Password */}
        Confirm Password:
        <input
          type="password"
          placeholder="Enter confirm password"
          {...register("confpassword", validationSchema.confpasswordvalidate)}
        />
        <p style={error}>{errors.confpassword?.message}</p>
        <br />

        {/* Age */}
        Age:
        <input
          type="number"
          {...register("age", validationSchema.Agevalidate)}
        />
        <p style={error}>{errors.age?.message}</p>
        <br />

        {/* Contact */}
        Contact:
        <input
          type="text"
          {...register("contact", validationSchema.contactvalidate)}
        />
        <p style={error}>{errors.contact?.message}</p>
        <br />

        <button type="submit">Submit</button>
      </form>

      {isset && (
        <div>
          <h3>{userdata.name}</h3>
          <h3>{userdata.email}</h3>
          <h3>{userdata.age}</h3>
          <h3>{userdata.contact}</h3>
        </div>
      )}
    </div>
  );
};

export default FormValidation2;
