import './Login.css';
import {useState} from 'react';
import logo from './newDir/IconBurger.svg';

// COMPONENTE PARA FORMULARIO

const LoginForm = () => {

    const [datos, setDatos] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(`enviando datos nuevos: ${datos.email}, ${datos.password}`)
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
 
// ....

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