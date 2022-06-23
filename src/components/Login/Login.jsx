import {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Button } from '../Button/Button';
import style from './style.css'
import { Error } from '../Error/Error';

const baseUrl = 'http://restapi.adequateshop.com/api/authaccount/login';
const cookies = new Cookies();

export function Login(){

  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    email:'',
    password: ''
  })

 const [error, setError] = useState(false);
 const [inputName, setInputName] = useState('');

 const onSubmitHandler =  (e) =>{
  e.preventDefault()
  // const config ={ headers: {"Access-Control-Allow-Origin": "*"}};
  const dataPost = {email:user.email, password:user.password}
  axios.post(baseUrl, dataPost )
  .then(response =>{
    const data = response.data;
    console.log(response);
    if(response.status == 200 && data.code == 0){
      // let respuesta = data[0];
      cookies.set('token', data.data.Token, {path:'/'})
      cookies.set('email', user.email, {path:'/'})

        navigate('/home');
    
    }else{
          
      setError(true);
      // alert('El usuario o la contraseña no son correctas')
    }
    // setError(false)
      })
      .catch(error =>{
        console.log(error)
        // if(error.message === "Request failed with status code 400"){
          //   console.log('introduce email y password')
          // }
    })
 };
 
 let emailError;
 if(error.message === "Request failed with status code 400"){
   emailError= <Error message='El usuario o la contraseña no son correctas' />
  }else{
   emailError = null;
  }
  const handlerUser = (e) =>{
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }

  // const handlerInputName = (e) =>{
  //     const name = e.target.value;
  //     setInputName(name);
  //     console.log(inputName);
  // }

  // const saveData = () => {
  //   localStorage.setItem('nombre', inputName);
  //   alert('Guardaste tu nombre')
  // }
  // let component;
  // if(error){
  //  component= <Error message='El usuario o la contraseña no son correctas' />
  // }else{
  //   component = null;
  // }


  //  let passError;
  // if(error && !user.password){
  //   passError= <Error message='Debes agregar contraseña' />
  //  }else{
  //   passError = null;
  //  }

  //  let passEmailError;
  //  if(error && !user.email && !user.password){
  //   passEmailError= <Error message='Debes introducir' />
  //   }else{
  //     passEmailError= null;
  //   }
  
// const dosfunciones =() => {
//   onSubmitHandler();
//   saveData()
// }
  return(
  <> 
  <div className="loginContainer">
    <div className='imageContainer'>
    <h3 className="titleLogin">BURGER <span className="titleLoginQueen">QUEEN</span></h3>
    <form className='loginForm'>
      <div className="mb-3">
        <input type="text" className="form-control" id="exampleInputName"  placeholder="Ingresar nombre de usuario" name="name" onInput={localStorage.setItem('usuario', 'exampleInputName')}/>
      <div className='userInvalid'>

      </div>
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" name="email" onInput={handlerUser}/>
      </div>
      <div className='emailInvalid'>
       
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresar contraseña" name="password" onInput={handlerUser}/>
      </div>
      <div className='passInvalid'>
         {emailError} 
      </div>
      <div className="loginButton">
      <Button onClick={onSubmitHandler} className="btn btn-warning btn-lg" type="submit" name="Iniciar Sesión"></Button>
      </div>
    </form>
    </div>
  </div>
  </>
)
};