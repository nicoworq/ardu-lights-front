
const apiBaseUrl = process.env.REACT_APP_API_URL;
const token = sessionStorage.getItem('token');

export function getStatus(){
    
    return fetch(apiBaseUrl+'/api/mqtt-server-status',{
        headers:{
            'auth-token':token
        }
    }).then(data => data.json())
}
 