// BalanceDisplay.js
import React, { useContext } from 'react';
import { bhavan } from './Transaction';


const BalanceDisplay = () => {
  // const { balance } = useContext(bhavan);

  return (
    <div className="text-center fs-2 mt-5 mb-5">
      Dear Customer, Your Account Balance: ₹
    </div>
  );
};

export default BalanceDisplay;
