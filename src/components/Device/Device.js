
import { sendMessage } from '../../services/devices';
import React, {useState} from 'react';
import './Device.css';

function getStatus(lastPayload){
    switch(lastPayload){
        case 'on':
            return 'Encendido'
        case  'off':
            return 'Apagado'
        default:
            return 'Encendido'

    }
}


export default function Device(props){

    const[status,setStatus] = useState(props.device.lastPayload)
    const deviceId = props.device._id;

    function getAction(){
        switch(status){
            case 'off':
                return 'Encender'
            case 'on':
                return 'Apagar'
            default:
                    return 'Apagar'
        } 
    }

    async function changeDeviceStatus(){

        const payload = status === 'on' ? 'off' : 'on';

        let response = await sendMessage(deviceId,payload);
        console.log(response)
        if(response.messageSent){

            setStatus(response.payload);
            //props.updateDevices(response.devices);
        }
    
    }

 
    return(
        <div className="device">
            <h3>{props.device.name}</h3>
            <p>{getStatus(status)}</p>

            <button onClick={changeDeviceStatus}>{getAction()}</button>
            
        </div>
    )
}