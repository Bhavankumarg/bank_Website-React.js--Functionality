  import React, { useState, useReducer, useEffect, createContext, useContext } from 'react';
  import './App.css';
  import bank from './bannk.jpg';
  // import BalanceDisplay from './BalanceDisplay';
  


  export const bhavan = createContext();


  function Transaction1() {
    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const [insufficientBalance, setInsufficientBalance] = useState(false);
    const [depositSuccess, setDepositSuccess] = useState(false);


    

    const submit1 = (event) => {
      event.preventDefault();
      if (withdraw(Number(name))) {
        setInsufficientBalance(true);
      } else {
        setInsufficientBalance(false);
      }
    }

    const submit2 = (event) => {
      event.preventDefault();
      deposit(Number(name1));
    }

    const reducer = (balance, action) => {
      switch (action.type) {
        case "WITHDRAW":
          return balance - action.value;
        case "DEPOSIT":
          return balance + action.value;
        default:
          return balance;
      }
    };

    const withdraw = (amount) => {
      if (amount > balance) {
        // Insufficient balance
        window.alert("Insufficient Balance 🤧");
        return true;
      }else{
        window.alert("Amount has been debited successfully🤑")
      }
      dispatch({ type: "WITHDRAW", value: amount });
      return false;
    };

    const deposit = (amount) => {
      window.alert("Amount has been credited successsfully..!🥳");
      dispatch({ type: "DEPOSIT", value: amount });
      setDepositSuccess(true);
    };

    useEffect(() => {
      // Clear deposit success message after a delay
      if (depositSuccess) {
        const timeout = setTimeout(() => {
          setDepositSuccess(false);
        }, 2000);

        return () => clearTimeout(timeout);
      }
    }, [depositSuccess]);

    const [ balance , dispatch] = useReducer(reducer, 1000);

    return (
      <>
      <bhavan.Provider value={{balance}}>

      
        <div style={{backgroundImage: `url(${bank})`, backgroundSize: 'cover',}} className=' container-fluid text-white'>
          <div className='margin' >
            <button style={{fontFamily:'sans-serif'}} type="button" className="btn w-25 btn-light m-5 btn-outline-danger text-center" data-bs-toggle="collapse" data-bs-target="#demo">WITHDRAW</button>
            <form id="demo" className="collapse " onSubmit={submit1}>
              <label className='ms-5'>Enter Amount:<br></br>
                <div className='p-2'>
                  <input
                    type="number"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </label>
              <br></br>
              <button className='btn btn-danger m-5' type="submit">Withdraw</button>
            </form>
          </div>

          <div className=''>
            <button style={{fontFamily:'sans-serif'}} type="button" className="w-25 btn btn-light m-5 btn-outline-success " data-bs-toggle="collapse" data-bs-target="#demo1">DEPOSIT</button>
            <form className='collapse' id='demo1' onSubmit={submit2}>
              <label className='ms-5'>Enter Amount  :<br></br>
                <div className='p-2'>
                  <input
                    type="number"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                  />
                </div>
              </label>
              <br></br>
              <button  className='btn btn-success m-5 ' type="submit">Deposit</button>
            </form>
          
          </div>
      
          <div>
            <button  type="button" className="btn  btn-light btn-outline-primary m-5 w-25 " data-bs-toggle="collapse" data-bs-target="#demo3">CHECK BALANCE</button>
            {/* {insufficientBalance && <p className="text-danger ms-5">Insufficient Balance</p>} */}
            <h3  className='collapse ms-5 pb-5 text-center text-white' id='demo3'>TOTAL BALANCE: {balance}</h3>
          </div>  
        </div>
        <BalanceDisplay />
        </bhavan.Provider>
      </>
      
    );
  };

  function BalanceDisplay(){
    const {balance} = useContext(bhavan);
    return(
      <h1 className="text-center">Balance : ₹{balance}</h1>
    );
  };

  export default Transaction1;
