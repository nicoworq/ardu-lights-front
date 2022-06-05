import React , {useEffect, useState }from 'react';
import './Dashboard.css'
import { getDevices } from '../../services/devices';
import Device from '../Device/Device';

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
            <div>
                {devices.map(device => <Device key={device._id} device={device} updateDevices={setDevices}/>)}
            </div>
        }
        {!devices.length && 
        <p>No encontramos dispositivos</p>}
        </div>
         
    )
}