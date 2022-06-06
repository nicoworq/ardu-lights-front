
import React, {useState,useEffect} from "react"
import { getStatus } from '../../services/mqttServer';
import './MqttServer.css'

export default function MqttServer(){

    const[clientsConnected, setClientsConnected] = useState(0)
    const[mqttPort, setMqttPort] = useState(0)


    useEffect(() => {
        let mounted = true;
        getStatus()
          .then(async status =>  {
             
            if(mounted) {
                setClientsConnected(status.clients)
                setMqttPort(status.port)
            }
          })
        return () => mounted = false;
      }, [])


    return (
        <div id="server-status">
            <span>Arduino conectado: {clientsConnected > 0 ? 'Sí' : 'No'}</span> | 
            <span>Mqtt broker en puerto: {mqttPort}</span>
        </div>
    )
}