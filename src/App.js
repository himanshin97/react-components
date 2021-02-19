import React from 'react';
import image from './green-tick.png';
import { useState } from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';
import './App.css';
import { customerData } from './data';
import {
  Box,
  Image,
  Heading,
  Text,
  Flex
} from 'rebass';


function App() {

  const [selectedOption,setSelectedOption] = useState(customerData[0].value);
  console.log(selectedOption);

  const options = customerData.map((customer) => {
    return {
      value: customer,
      label: `${customer.sortCode} ${customer.accountNumber} \n ${customer.accountType} ${customer.accountName}`,
    };
  }

  );

  const handleChange = (selectedOption) => {
    setSelectedOption({selectedOption});
    
  }


  const customStyles={
    option: (provided,state)=>({
      ...provided,
      borderBottom: '1px solid pink',
      color: state.isSelected ? 'red': 'blue',
    
    }
    ),
    control: (provided) => ({
      ...provided,
      marginTop: "5%",
    })
  }

  const CustomOption = (props) => {
    return props.isSelected ? (
      <div>
        
        <label>{props.label}</label>
        <Image
          src={image}
          sx={
            {width: ["3%"],
          }
          }
          ></Image>
      </div>
    ):(
       < components.Option{...props}/> 
    );
  }


  return (
    <>
    <div className="App">
      <Flex>
      <Box   p={3}
            width={[ 1/2 ]}
            color='Green'
            bg='primary'   
  >
     <h1 fontSize="12px" align="left">Welcome to the Bank</h1>
     <Select border-color="green"
        components={{Option: CustomOption}}
        options={options}
        onChange={handleChange}
        classNamePrefix="lp-copy-sel" 
        placeholder='Select Customer'
        isClearable
        styles={customStyles}
       ></Select>
      
       
       
       </Box>
       </Flex>
       
                
      
    </div>
    </>
  );

  }
export default App;
