import { useState, useEffect } from 'react';
import user from '../../Images/user.png';
import style from './Profile.module.css'
const Profile = () => {
    const uid = localStorage.getItem('userId');
    const token = localStorage.getItem('accessToken');
    
    const [profile, setProfile] = useState();
    

    const getProfileUser = () => fetch(`http://localhost:8080/users/${uid}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`,
                // "id": {uid}
            }
            })
        .then(response => response.json()) 
        .then(json => {
            console.log(json)
            return setProfile(json)})
        .catch(err => console.log(err));

        // const {email, password, id, rol} = profile;
        // console.log('aquiii', email)

    useEffect(()=>{
        getProfileUser();
        
    }, [])

    return(
        <div className={style.Profile}>
            <div className={style.ProfileWaiter}>
                <img src={user} alt='user'></img>
                <h1>correp@gmail.com</h1>
                <p>Waiter</p>
                <p>id: 01</p>
            </div>
        </div>
    )
}

export default Profile;