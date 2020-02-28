import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";

const Registration = () => {
  const { register, handleSubmit } = useForm();

  const createUser = data => {
    axiosWithAuth()
      .post("/api/auth/register", data)
      .then(response => {
        console.log("Registration was successful.");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(createUser)}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          ref={register}
          placeholder='username'
          id='username'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          ref={register}
          placeholder='password'
          id='password'
        />

        <button className='create__button' type='submit'>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Registration;
