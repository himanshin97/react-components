import image from './green-tick.png';

export const options = [
    { value: 'gs kumar', label: <div>11-11-11   111111111   Savings Account    GS Kumar <img src={image} height="30px" width="30px"/></div> },
    { value: 'pk shrivastava', label: <div>22-22-22   222222222   Current Account   PK Shrivastava <img src={image} height="30px" width="30px"/> </div> },
    { value: 'divya nigam', label: <div>33-33-33   333333333   Current Account   Divya Nigam <img src={image} height="30px" width="30px"/></div> },
    { value: 'yash bhagtnagar', label: <div>44-44-44   444444444   Savings Account   Yash Bhagtnagar <img src={image} height="30px" width="30px"/></div> },
    { value: 'purva jain', label: <div>55-55-55   555555555   Savings Account   Purva Jain <img src={image} height="30px" width="30px"/></div> }
  ];

export const customerData = [
    {
        sortCode: "11-11-11",
        accountNumber: "111111111",
        accountType: "Savings Account",
        accountName: "GS Kumar",
    },
    {
        sortCode: "22-22-22",
        accountNumber: "222222222",
        accountType: "Current Account",
        accountName: "Yash Bhatnagar",
    },
    {
        sortCode: "33-33-33",
        accountNumber: "333333333",
        accountType: "Current Account",
        accountName: "Divya Nigam",
    },
    {
        sortCode: "44-44-44",
        accountNumber: "444444444",
        accountType: "Savings Account",
        accountName: "PK Shrivastava",
    },
    {
        sortCode: "55-55-55",
        accountNumber: "555555555",
        accountType: "Savings Account",
        accountName: "Purva Jain",
    },
];