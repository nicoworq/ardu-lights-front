
const apiBaseUrl = process.env.REACT_APP_API_URL;
const token = sessionStorage.getItem('token');

export function getDevices(){
    
    return fetch(apiBaseUrl+'/api/devices',{
        headers:{
            'auth-token':token
        }
    }).then(data => data.json())
}