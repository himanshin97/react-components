import { components } from 'react-select';
export const SingleValue = ({ children, ...props }) => (
    <div>
    <components.SingleValue {...props}>
      <span> &nbsp;&nbsp;&nbsp;&nbsp; {props.getValue()[0].value1} </span>
      <br/>
      <span>{props.getValue()[0].value2}</span>

    </components.SingleValue>
    </div>

  );

 export const indicatorSeparatorStyle = {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    marginBottom: 8,
    marginTop: 8,
    width: 1,
  };

  export const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };