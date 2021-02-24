import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { CustomOption } from './CustomOption'
import { customStyles } from './CustomStyles'
import { options } from './Options'
import { SingleValue, IndicatorSeparator, indicatorSeparatorStyle} from './IndicatorSeperator'
import { Box, Flex } from 'rebass';


function CommonComponent() {

  const [selectedOption,setSelectedOption] = useState(null);
  console.log(selectedOption);

  const handleChange = (selectedOption) => {
    setSelectedOption({selectedOption});
    }

  return (
    <>
      <Flex >
      <Box  p={3}
            width={[ 1/3]}
            color='black'
            bg='primary'>

     <h1 >Select Bank Customer</h1>

     <Select     
        onChange={handleChange}
        placeholder='Select Customer'
        isSearchable={false}
        styles={customStyles}
        options={options}
        components={{Option: CustomOption, SingleValue, IndicatorSeparator}}
       > </Select>
       </Box>
       </Flex>           
      
    </>
  );
  }

export default CommonComponent;