import {useNavigate } from 'react-router-dom'



export function Onboarding(){
  // function Navigate(){
  //   useNavigate('/login')
  // } 
  // const history = useHistory()
  // function RouterLogin(){
  //   history.push('/login')
  // };
  const navigate = useNavigate()
  return (
    <div className="App">
        <h3 className="title-login">Burger Queen</h3>
        <img src="./src/image/Burger.png" className="img-fluid img" alt="Burger Queen"></img>
        <button onClick={() => navigate('/login')} type="submit" className="btn btn-primary">Ingresar</button>

    </div>
  )
}