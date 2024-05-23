import '../App.css';
import React from "react";
import Box from '@mui/material/Box';
import ResponsiveAppBar from "../components/AppBar/AppBar";
import Carrusel from "../components/Carrusel/Carousel";
import VerAlerta from "../pages/VerAlerta";
import axios from 'axios'
import { useEffect, useState } from 'react';

function Home() {
  
  const [user, setUser] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  const fetchData = () =>{
    return axios.get(url).then((response) => {

      setUser(response.data);
      console.log(response.data);
    }).catch((error) => {});
   }

   useEffect(()=>{
    fetchData();
   }, [])
    return (

      
      <div className="App">

        <Box>
          <Carrusel/>
        </Box>
          
      </div>
    );
  }
  
  export default Home;