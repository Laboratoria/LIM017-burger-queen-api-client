import {useState} from 'react'

export function Login(){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 const onSubmitHandler = (e) =>{
  e.preventDefault()
  console.log('Hola mundo', e);
 }
  const onInputHandler = (e) =>{

    const userEmail = e.target.value;
    setEmail(userEmail)
    console.log(email)
  }

  return(
  <> 
  <div className="App">
    <h3 className="title-login">Burger Queen</h3>
    <form>
      <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" name="username" onInput={onInputHandler}/>
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresar contraseña" name="password"/>
      </div>
      <button  onClick={onSubmitHandler} type="submit" className="btn btn-primary">Ingresar</button>
    </form>
  </div>
  </>
)
};