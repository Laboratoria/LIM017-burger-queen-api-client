import './Login.css';
import {useState} from 'react';
import logo from '../newDir/IconBurger.svg';
import { useNavigate } from "react-router-dom"

// COMPONENTE PARA FORMULARIO

const LoginForm = () => {
  let navigate = useNavigate()

    const [datos, setDatos] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(`enviando datos nuevos: ${datos.email}, ${datos.password}`);
        // 
        const url = 'http://localhost:3001/auth';
        const {email, password} = datos;
        console.log({email, password})

        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify({email, password}),
          headers: {
            'Content-Type': 'application/json' 
          }
        }).then(res => res.json())
        .then(response => {
          if(response.token !== undefined){
            console.log('tenemos token', response)

            return navigate('/Waiter')
            
          } return console.log('no hay token , es 400');
        })
        .catch(error => console.error('Error:', error));
        // 
    }

    return (
            <form className="loginForm" onSubmit={enviarDatos}>
                <div className="col-md-3">
                  <label className='label-form'>
                    Email:
                    <div className='div__Icon-Input'>
                    <i className="fa-solid fa-envelope Icon"></i>
                    <input type="email" placeholder="example@example.com" className="input-form-control" onChange={handleInputChange} name="email"></input>
                    </div>
                  </label>
                </div>
                <div className="col-md-3">
                  <label className='label-form'>
                    Password:
                    <div className='div__Icon-Input'>
                    <i className="fa-solid fa-lock Icon"></i>
                    <input type="password" placeholder="******" className="input-form-control" onChange={handleInputChange} name="password"></input>
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