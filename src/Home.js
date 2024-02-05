import React from 'react';
import './home.css';
import register from './register.png';
import faq from './faq.png';
import lock from './lock.png';
import user from './user.png';
import yono from './yono.png';
import text from './text.gif';
import arrow from './arrow.png';


function Home() {
  return (
    <>
      <img className="container-fluid    justify-content-center border" src={text} alt="Text" />
      <div className="container-fluid row mt-2">
       
        <div className="col-12 col-md-6 col-sm-12 ">
          <a className="text-decoration-none  text-dark" href="#">
          <div className="mx-1" style={{ backgroundColor: '#f7f0f0' }}>
            <h1 className="text-center text-primary">
              <i id="user" className="fa fa-user" aria-hidden="true"></i>
            </h1>
            <h5 className="text-center">PERSONAL <span>BANKING</span></h5>
            <a className="btn btn-outline-primary" href="#" style={{ marginLeft: '270px' }}>
              Login&nbsp;<img src={arrow} alt="Arrow" />
            </a>
            <span className="row">
              <h6 className="mt-4 mx-5 col">
                <img src={register} alt="Register" /> New User Registration
              </h6>
              <h6 className="mx-5">
                <img src={faq} alt="FAQ" /> How Do I
              </h6>
              <h6 className="mx-5">
                <img src={user} alt="User" /> Customer Care
              </h6>
              <h6 className="mx-5">
                <img src={lock} alt="Lock" /> Lock/Unlock User
              </h6>
              <p className="mx-2">
                SBI's internet banking portal provides personal banking services that give you complete control over all your
                banking demands online.
              </p>
            </span>
          </div>
          </a>
        </div>

       
        <div id="yono" className="col-12 col-md-6 col-sm-12 border " style={{ backgroundColor: '#f7f0f0' }}>
        <a  className="text-decoration-none text-dark" href="#">
          <div className="mx-1">
            <img style={{ marginLeft: '210px' }} className="my-2" src={yono} alt="Yono" />
            <h5 className="text-center">CORPORATE BANKING</h5>
            <select className="form-select shadow" style={{ width: '200px', marginLeft: '170px' }} id="sel1" name="sellist1">
              <option>Yono Business</option>
              <option>Corporate</option>
              <option>Supply Chain Finance</option>
            </select>
            <p>
              <i>
                Have you tried our new simplified and intuitive business banking platform? Log in to yonobusiness.sbi to avail
                business banking services.
              </i>
            </p>
            <h6 className="mt-4 mx-5 col">
              <img src={register} alt="Register" /> Corporate Registration
            </h6>
            <h6 className="mx-5">
              <img src={faq} alt="FAQ" /> How Do I
            </h6>
            <h6 className="mx-5">
              <img src={user}  alt="User" /> Customer Care
            </h6>
            <p>Corporate Banking application to administer and manage non-personal accounts online.</p>
          </div>
          </a>
        </div>
   
      </div>

      <marquee className="mt-2 text-danger" style={{ backgroundColor: '#b0f3f5' }}>
        <b>
          Mandatory Profile password change after 365 days introduced for added security. | Customers who have installed “SBI
          Secure OTP App” on their mobile and completed the registration process will now receive Login OTP for OnlineSBI.com on
          the app instead of SMS OTP | Call us toll-free on 1800 1234 and 1800 2100 and get a wide range of services through SBI
          Contact Centre | For added security, new functionality to maintain per day and per transaction limit for general
          merchant payment transactions has been implemented. Please visit Define Limit under the profile section. | SBI never asks
          for your Card/PIN/OTP/CVV details on the phone, message, or email. Please do not click on links received on your email
          or mobile asking for your Bank/Card details.
        </b>
      </marquee>

      <div className="row">
        <div id="demo" className="col-md-4 col-4">
          <ul>
            <li>
              <a className="text-decoration-none text-success" href="#">
                RBI Retail Direct portal
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-success" href="#">
                Doorstep Banking
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-success" href="#">
                Customer Request and Complaint
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-success" href="#">
                Banking Forms
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 col-4">
          <ul>
            <li>
              <a className="text-decoration-none text-success" href="#">
                Block ATM Card
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-success" href="#">
                SBI General Insurance
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-success" href="#">
                Fair lending Practice code
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-success" href="#">
                SBI Life Insurance
              </a>
            </li>
          </ul>
        </div>

        <ul className="col-4">
          <li>
            <a className="text-decoration-none text-success" href="#">
              Customer Request and Complaint
            </a>
          </li>
          <li>
            <a className="text-decoration-none text-success" href="#">
              SBI Fas Tag
            </a>
          </li>
          <li>
            <a className="text-decoration-none text-success" href="#">
              SBI Securities
            </a>
          </li>
          <li>
            <a className="text-decoration-none text-success" href="#">
              SBI Card
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
