import { useState, useEffect } from "react";
import { Heading } from '@chakra-ui/react';
import logo from './assets/logo-spacex.png'
import * as API from "./services/launches";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <> 
      <img src={logo} width={300} />
        <Heading as="h1" size="1g">
        <h1>SpaceX Launche</h1>
        </Heading>
      <ul>
        {launches?.map((launch) => (
          <li key={launch.flight_number}>
            {launch.mission_name} ({launch.launch_year})
          </li>  
         ))}
      </ul>
    </>
  );  
}

