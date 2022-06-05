import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials){

    const apiBaseUrl = process.env.REACT_APP_API_URL;
    return fetch(apiBaseUrl+'/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

export default function Login({setToken}) {
   
 
    const[error,setError] = useState(false)
    const[errorMsg,setErrorMsg] = useState('')
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
         
        const loginResponse = await loginUser({username,password});
        
        if(loginResponse.logged){
            setToken(loginResponse.jwt);
        }else{
            setError(true)
            setErrorMsg(loginResponse.message);
            
        }
        
        
    }

  return(

    <div className="login-wrapper">
      <h1>Por favor Inicie sesión</h1>
     { error  && 
        <p className='error'>{errorMsg}</p>
     }
    <form onSubmit={handleSubmit}>
      <label>
        <p>Usuario</p>
        <input type="text" onChange={e => setUsername(e.target.value)}/>
      </label>
      <label>
        <p>Contraseña</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Ingresar</button>
      </div>
    </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }