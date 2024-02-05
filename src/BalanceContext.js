import React, { createContext, useReducer, useContext } from 'react';

const BalanceContext = createContext();

const balanceReducer = (balance, action) => {
  switch (action.type) {
    case 'WITHDRAW':
      return balance - action.value;
    case 'DEPOSIT':
      return balance + action.value;
    default:
      return balance;
  }
};

const BalanceProvider = ({ children }) => {
  const [balance, dispatch] = useReducer(balanceReducer, 1000);

  return (
    <BalanceContext.Provider value={{ balance, dispatch }}>
      {children}
    </BalanceContext.Provider>
  );
};

const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error('useBalance must be used within a BalanceProvider');
  }
  return context;
};

export{ BalanceProvider, useBalance };
