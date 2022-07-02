import './Login.css';
// import { useState } from 'react';
import logo from '../Images/IconBurger.svg';
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
  .then(response => {
    console.log(response);
    resolve(response)

  })
  .catch(error => reject(error))
})

// COMPONENTE PARA FORMULARIO

const LoginForm = () => {
  let navigate = useNavigate();

  const { register, setError, formState: {errors}, handleSubmit} = useForm();

  const onSubmit = (data, event) => {
        const url = 'http://localhost:8080/login';
        const {email, password} = data;
        console.log({email, password});
        
        request({email, password}, url)
        .then((res) => {
          console.log('aqui esta consoleando el res', res) // obtencion del TOKEN
          // const resString = res.stringify();
          console.log("si estoy entrando...");
          localStorage.setItem('accessToken', (res.accessToken));
          console.log(res.accessToken);
          console.log(res.user)
          console.log(res.user.roles);

          if (res.accessToken !== undefined){       // Accede si captura el TOKEN y riderecciona a sus respectivas pág.

            if(res.user.roles.admin === true){
              navigate('/Admin')
            } else if(res.user.roles.waiter === true){
              navigate('/Waiter')
            } else{
              console.log("soy chef")
            }
            // return navigate('/Waiter')

            } else if(res === 'Cannot find user'){    // ERRORES
              setError('email', {
              type: "server",
              message: res,
              })
             } else{
              setError('password', {
                type: "server",
                message: res,
                })
             }
        })
        .catch((error) => {
          console.log('catch', error.message); 
        })
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
                              message: '⚠️ Email is required'
                              } 
                      })}
                      />
                    </div>
                      <span className='spanLogin'>
                        {errors?.email?.message}
                      </span>
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
                              message: '⚠️ Password is required'
                              }, 
                          maxLength: {
                              value: 200, 
                              message: '⚠️ No more than 30 characteres!'
                              },
                          minLength: {
                              value: 6, 
                              message: '⚠️ At least 6 characteres!'
                              }
                      })}
                      />
                    </div>
                      <span className='spanLogin'>
                        {errors?.password?.message}
                      </span>
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