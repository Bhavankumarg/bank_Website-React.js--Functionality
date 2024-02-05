// App.js
import React from 'react';
import { BalanceProvider } from './BalanceProvider';
import BalanceDisplay from './BalanceDisplay';

const App = () => {
  return (
    <BalanceProvider>
      {/* Other components can go here */}
      <BalanceDisplay />
    </BalanceProvider>
  );
};

export default App;
