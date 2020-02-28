import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axiosWithAuth()
      .post("/api/auth/login", data)
      .then(response => {
        console.log("Login was successful.", response);
        localStorage.setItem("token", response.data.token);
        axiosWithAuth()
          .get("/api/jokes")
          .then(response => {
            console.log(response.data);
            props.setJokes(response.data);
            setTimeout(() => {
                props.history.push('/jokes')
            },3000)
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='username'>
          Username
          <input type='text' name='username' id='username' ref={register} />
        </label>
        <label htmlFor='password'>
          password
          <input type='password' name='password' id='password' ref={register} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
