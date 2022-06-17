import {useState} from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = 'https://62aa82123b31438554481442.mockapi.io/user';
const cookies = new Cookies();


export function Login(){
  
  const [user, setUser] = useState({
    email:'',
    password: ''
  })
 const onSubmitHandler = async (e) =>{
  e.preventDefault()
  await axios.get(baseUrl, {params:{email:user.email, password:user.password}})
    .then(response =>{
      return response.data
    })
    .then(response =>{
      if(response.length>0){
        let respuesta = response[0];
        cookies.set('id', respuesta.id, {path:'/'})
        cookies.set('email', respuesta.email, {path:'/'})
        alert(`Bienvenido ${respuesta.email}`)
      }else{
        alert('El usuario o la contraseña no son correctas')
      }
    })
    .catch(error =>{
      console.log(error)
    })
 }
  const handlerUser = (e) =>{
    e.preventDefault()
    setUser({
      [e.target.name]:[e.target.value]
    })
    //  console.log(user)
  }
  
  return(
  <> 
  <div className="App">
    <h3 className="title-login">Burger Queen</h3>
    <form>
      <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" name="email" onInput={handlerUser}/>
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresar contraseña" name="password" onInput={handlerUser}/>
      </div>
      <button  onClick={onSubmitHandler} type="submit" className="btn btn-primary">Ingresar</button>
    </form>
  </div>
  </>
)
};