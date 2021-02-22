import React from 'react';
import image from './green-tick.png';
import { useState } from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';
import { customerData } from './data';
import {
  Box,
  Image,
  Heading,
  Text,
  Flex
} from 'rebass';


function App() {

  const [selectedOption,setSelectedOption] = useState(null);
  console.log(selectedOption);

  const options = customerData.map((customer) => {
    return {
      value: customer,
      value1: `${customer.sortCode} ${customer.accountNumber}`,
      value2: `${customer.accountType} ${customer.accountName}`,
      label: `${customer.sortCode} ${customer.accountNumber} ${customer.accountType} ${customer.accountName}`
    };
  }

  );

  const handleChange = (selectedOption) => {
    setSelectedOption({selectedOption});
    
  

  }


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      
      minHeight: '50px',
      height: '50px',
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: '50px',
      padding: '0 6px'
    }),

    input: (provided, state) => ({
      ...provided,
      margin: '10px',
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '50',
    }),
  };

  

  const CustomOption = (props) => {
    return props.isSelected ? (
      <div >
        
        {/*<components.SingleValue {...props}>{`${props.data.label}`}</components.SingleValue>*/}
        <label>
          &nbsp;&nbsp;
          {`${props.data.label}`} 
        </label>
        <span> 
          &nbsp;
        <Image
          src={image}
          sx={
            {width: ["3.4%"],
          }
          }
          ></Image>
          </span>
      </div>
    ):(
       < components.Option{...props}/> 
    );

  }

  const SingleValue = ({ children, ...props }) => (
    <div>
    <components.SingleValue {...props}>
      <span>{props.getValue()[0].value1} </span>
      <br/>
      <span>{props.getValue()[0].value2}</span>

    </components.SingleValue>
    </div>

  );


  return (
    <>
      <Flex >
      <Box  
            p={3}
            width={[ 1/3]}
            color='black'
            bg='primary'>

     <h1 >Select Bank Customer</h1>

     <Select     
        onChange={handleChange}
        placeholder='Select Customer'
        isClearable
        isSearchable={false}
        styles={customStyles}
        options={options}
        //components={{SingleValue}}
        components={{Option: CustomOption, SingleValue}}
        
       ></Select>
      
       
       
       </Box>
       </Flex>
       
                
      
    </>
  );

  }
export default App;