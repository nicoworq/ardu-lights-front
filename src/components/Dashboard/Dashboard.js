import React , {useEffect, useState }from 'react';
import './Dashboard.css'
import { getDevices } from '../../services/devices';

export default function Dashboard(){

    const[devices, setDevices] = useState([]);

 
    useEffect(() => {
        let mounted = true;
        getDevices()
          .then(async devices =>  {
             
            if(mounted) {
                setDevices(devices)
            }
          })
        return () => mounted = false;
      }, [])

    return(
        <div>
            
        <h2>Dashboard</h2>
        
        {devices.length > 0 && 
        <ul>
        {devices.map(device => <li key={device._id}>{device.name}</li>)}
        </ul>
        }
        {!devices.length && 
        <p>No encontramos dispositivos</p>}
        </div>
         
    )
}