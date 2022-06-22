import {useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import style from './style.css'

export function Onboarding(){
  
  const navigate = useNavigate()
  return (
    <div className="onboardingContainer">
      <div className="welcomeContainer">
        <h3 className="titleOnboarding">BURGER QUEEN</h3>
        <div className='btnContainer'>
        <Button type="submit" onClick={() => navigate('/login')} className="btn btn-warning btn-lg" name="Ingresar" ></Button>
        </div>
      </div>

    </div>
  )
}