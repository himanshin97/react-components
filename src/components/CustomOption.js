import { components } from 'react-select';
import { Image } from 'rebass';
import image from '../images/green-tick.png';


export const CustomOption = (props) => {
    return props.isSelected ? (
      <div >
        
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