import './Login.css';
// import { useState } from 'react';
import logo from '../newDir/IconBurger.svg';
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'

// Petición HTTP
const request = ({email, password}, url) => new Promise ((resolve, reject) =>{
  return  fetch(url, {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {
      'Content-Type': 'application/json' 
    }
  })
  .then(res => res.json())
  .then(response => resolve(response.token))
  .catch(error => reject(error))
})

// COMPONENTE PARA FORMULARIO

const LoginForm = () => {
  let navigate = useNavigate();

  const {register, formState: { errors }, handleSubmit} = useForm();

  const onSubmit = (data, event) => {
        const url = 'http://localhost:3001/auth';
        const {email, password} = data;
        console.log({email, password});
        request({email, password}, url)
        .then((res) => {
          if (res !== undefined){
            return navigate('/Waiter')
          } else{
            return console.log("Error 400", res)
          }

        })
        .catch((error) => console.log(error.message))      

        event.target.reset();
  }
    return (
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-3">
                  <label className='label-form'>
                    Email:
                    <div className='div__Icon-Input'>
                      <i className="fa-solid fa-envelope Icon"></i>
                      <input 
                        type="email" 
                        placeholder="example@example.com" 
                        className="input-form-control" 
                        name="email"
                        {...register('email',{
                          required: {
                              value: true, 
                              message: 'Email is required'
                              } 
                      })}
                      />
                      <span className="text-danger text-small d-block mb-2">
                        {errors?.email?.message}
                      </span>
                    </div>
                  </label>
                </div>
                <div className="col-md-3">
                  <label className='label-form'>
                    Password:
                    <div className='div__Icon-Input'>
                      <i className="fa-solid fa-lock Icon"></i>
                      <input 
                        type="password" 
                        placeholder="******" 
                        className="input-form-control" 
                        name="password"
                        {...register('password',{
                          required: {
                              value: true, 
                              message: 'Password is required'
                              }, 
                          maxLength: {
                              value: 30, 
                              message: 'No more than 30 characteres!'
                              },
                          minLength: {
                              value: 6, 
                              message: 'At least 6 characteres!'
                              }
                      })}
                      />
                      <span className="text-danger text-small d-block mb-2">
                        {errors?.password?.message}
                      </span>
                    </div>
                  </label>
                </div>
                <button type="submit" className="btn-primary">Login</button>
            </form>
    );
}
 
// .... vista login

function Login() {
  return (
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <section className='sectionLoginForm'>
          {LoginForm()}
        </section>
      </main>
  );
}

export default Login