import React from 'react';
//import logo from './logo.svg';
//import image from './green-tick.png';
import { useState } from 'react';
import Select from 'react-select';
import { Checkmark } from 'react-checkmark'
import './App.css';
import { customerData } from './data';
import { options } from './data';
import { Box } from 'rebass';



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
     <h1 font-size="12px" align="left">Welcome to the Bank</h1>
     <Box width={500} >
      <Select
      onChange={(selectedOption)=> setSelectedOption({selectedOption})} 
      options={options}
      styles={styles}
      placeholder="Select Customer" 
      isSearchable 
       />
       
       </Box>
      
       
                
      
                </div>
    </>
  );

  }
export default App;
