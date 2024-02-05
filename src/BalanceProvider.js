// // // BalanceProvider.js
// import React, { createContext, useContext, } from 'react';

// const BalanceContext = createContext();

// export const BalanceProvider = ({ children }) => {
//   const balance =  useBalance();

//   return (      
//     <BalanceContext.Provider value={balance}>
//       {children}
//     </BalanceContext.Provider>
//   );
// };

// export const useBalance = () => {
//   const balance = useContext(BalanceContext);
//   if (balance === undefined) {
//     throw new Error('useBalance must be used within a BalanceProvider');
//   }
//   return balance;
// };
