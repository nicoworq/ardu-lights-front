
const apiBaseUrl = process.env.REACT_APP_API_URL;
const token = sessionStorage.getItem('token');

export function getDevices(){
    
    return fetch(apiBaseUrl+'/api/devices',{
        headers:{
            'auth-token':token
        }
    }).then(data => data.json())
}

export function sendMessage(deviceId,payload){
    
    return fetch(apiBaseUrl+'/api/device/send-message',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'auth-token':token
        },
        body: JSON.stringify({
            deviceId:deviceId,
            payload:payload
        })
    }).then(data => data.json())
}