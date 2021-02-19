import React from 'react';
//import logo from './logo.svg';
import image from './green-tick.png';
import { useState } from 'react';
import Select from 'react-select';
import Option from 'react-select';
import { Checkmark } from 'react-checkmark'
import './App.css';
//import { customerData } from './data';
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

  const [selectedOption,setSelectedOption] = useState(options[0].value);
  const [images,setImages] = useState(null)
  console.log(selectedOption);

  {/*const handleChange = (event) => {
    console.log(event)
    if (event.value === options) {
      setSelectedOption({ selectedOption},<div><img src = {image} /></div>)
    } else {
      setSelectedOption(null)
    }
    console.log(selectedOption)
  } */}

  const handleChange = (selectedOption,images) => {
    setSelectedOption({selectedOption,images});
    
  }

 
  

  const customStyles={
    option: (provided,state)=>({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red': 'blue',
      padding: 20
    }

    )
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
     <h1 fontSize="12px" align="left">Welcome to the Bank</h1>
     <Select border-color="green"
        options={options}
        defaultValue={{label: <div>11-11-11   111111111   <br/>Savings Account - GS Kumar &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={image} height="45px" width="45px"/> </div>}}
        onChange={handleChange}
        classNamePrefix="lp-copy-sel" 
        isSearchable 
        isClearable
        styles={customStyles}
       />
      
       
       
       </Box>
       </Flex>
       
                
      
    </div>
    </>
  );

  }
export default App;
