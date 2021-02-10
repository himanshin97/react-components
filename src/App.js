import React from 'react';
//import logo from './logo.svg';
//import image from './green-tick.png';
import { useState } from 'react';
import Select from 'react-select';
import { Checkmark } from 'react-checkmark'
import './App.css';
import { customerData } from './data';
import { options } from './data';
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Flex
} from 'rebass';




function App() {

  const [selectedOption,setSelectedOption] = useState(null);
  console.log(selectedOption);

  const styles = {
    fontSize: 14,
    color: 'blue',
    borderRadius: 4,
    
  }

  return (
    <>
    <div className="App">
      <Flex>
    <Box   p={3}
  fontSize={3}
  width={[ 1, 1, 1/2 ]}
  color='Green'
  bg='secondary'
  >
     <h1 font-size="12px" align="left">Welcome to the Bank</h1>
    
      <Select border-color="green"
      onChange={(selectedOption)=> setSelectedOption({selectedOption})} 
      options={options}
      styles={styles}
      placeholder="Select Customer" 
      isSearchable 
       />
       
       </Box>
       </Flex>
       
                
      
                </div>
    </>
  );

  }
export default App;
