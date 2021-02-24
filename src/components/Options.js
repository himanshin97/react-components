
import { customerData } from '../mockData/data';

export const options = customerData.map((customer) => {
    return {
      value: customer,
      value1: <span>{`${customer.sortCode}`} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{`${customer.accountNumber}`}</span>,
      value2: <div> {`${customer.accountType}`} - {`${customer.accountName}`} </div>,
      label: `${customer.sortCode} ${customer.accountNumber} ${customer.accountType} ${customer.accountName}`
    };
  }

  );
 