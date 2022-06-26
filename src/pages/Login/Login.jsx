import './style.css'
import {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { Button } from '../../components/Button/Button';
import { Error } from '../../components/Error/Error';
import {login} from '../../services/login';


const cookies = new Cookies();

export function Login(){

  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    email:'',
    password: ''
  })

 const [error, setError] = useState(false);

 const onSubmitHandler =  (e) =>{
  e.preventDefault()

  login(user.email, user.password)
  .then(response =>{
    const data = response.data;
    console.log(response);
    if(response.status == 200){

      cookies.set('token', data.accessToken, {path:'/'})
      cookies.set('email', user.email, {path:'/'})

        navigate('/home');
    
    }else{
          
      setError(true);
    }
      })
      .catch(error =>{
        console.log(error)
    })
 };
 
  const handlerUser = (e) =>{
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }

  return(
  <> 
  <div className="loginContainer">
    <div className='imageContainer'>
    <h3 className="titleLogin">BURGER <span className="titleLoginQueen">QUEEN</span></h3>
    <form className='loginForm'>
      
      <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" name="email" onInput={handlerUser}/>
      </div>
      <div className='emailInvalid'>
       
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresar contraseña" name="password" onInput={handlerUser}/>
      </div>
      <div className='passInvalid'>
         {/* {emailError}  */}
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