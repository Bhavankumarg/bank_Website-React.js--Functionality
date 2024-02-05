import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import NoPage from './NoPage';
import Transaction from './Transaction';
import BalanceDisplay from './BalanceDisplay';
// import BalanceContext from './BalanceContext';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


export default function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Transaction" element={<Transaction />} />
          <Route path="BalanceDisplay" element={<BalanceDisplay />} />
          {/* <Route path="/Videos" element={<BalanceContext />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
<Apps />
  </React.StrictMode>
);