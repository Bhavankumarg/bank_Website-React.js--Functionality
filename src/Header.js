
import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './home.css';
import logo from './logo.png';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';
import banner4 from './banner4.jpg';
import banner5 from './banner5.jpg';
import banner6 from './banner6.jpg';
import banner7 from './banner7.jpg';
import banner8 from './banner11.jpg';
import banner9 from './banner22.jpg';
import banner10 from './banner24.jpg';
import banner11 from './banner25.jpg';
import banner12 from './banner29.jpg';
import banner13 from './banner33.jpg';
import banner14 from './banner35.jpg';
import banner15 from './banner36.jpg';
import banner16 from './banner38.jpg';
import banner17 from './banner39.jpg';
import banner18 from './banner40.jpg';

function Header() {
  return (
    <>
      <div className="container-fluid shadow">
        <img className="my-4 mx-2" src={logo} alt="Logo" />
        <img className="float-end  my-4 mx-2" src={logo} alt="Logo" />
        {/* <h3 style={{marginTop:'0px'}} className="float-end mx-4 text-primary">O N L I N E</h3> */}
       
         {/* <Link style={{fontFamily:'sanserif'}} className="float-end mt-3 fs-3 text-decoration-none  btn btn-outline-primary" to="/Transaction">Transactions</Link> */}
        

        <small>
          <nav id="bhavan" className="navbar navbar-expand-sm navbar-dark my-1">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/Transaction">
                      Transaction
                    </Link>
                  </li>
                 <li className="nav-item">
				          <Link className="nav-link active" to="/BalanceDisplay">
                    Balance
                    </Link>
				        </li>
				        <li className="nav-item">
				          <a className="nav-link active" href="#">Corporate Website</a>
				        </li>
				        <li className="nav-item">
				          <a className="nav-link active" href="#">Donations</a>
				        </li>
				        <li className="nav-item">
				          <a className="nav-link active" href="#">SB collect</a>
				        </li>
				        <li className="nav-item">
				          <a className="nav-link active" href="#">Electoral Bond</a>
				        </li>
				        <li className="nav-item">
				          <a className="nav-link active" href="#">Videos</a>
				        </li>
				        <li className="nav-item">
				          <a className="nav-link active" href="#">mcash</a>
				        </li>
				        <li className="nav-item">
				          <a className="nav-link active" href="#">Apply for SB/ Current Account</a>
				        </li>
				        <li className="nav-item">
				          <a className="nav-link active" href="#">NPS</a>
				        </li>
				        <li className="nav-item">
				          <a className="nav-link active" href="#">SBI Unipay</a>
				        </li>
				        <li className="nav-item">
				          <a className="nav-link active" href="#">SBI Loans</a>
				        </li> 
                  <li className="nav-item mx-3 bg-success">
                    <a className="nav-link active hindi-text" href="#">
                      हिंदी
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </small>
      </div>


      <Outlet />

      <section>
        <div id="demo" className="carousel slide  carousel-slide " data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
          </div>

          <div className="carousel-inner container-fluid mt-0">
            <div className="carousel-item active">
              <img src={banner1} alt="sbi" className="d-block" width="100%" />
            </div>
            <div className="carousel-item">
              <img src={banner2} alt="sbi" className="d-block" width="100%" />
            </div>
            {/* ... Repeat similar lines for other carousel items ... */}
            <div className="carousel-item">
					<img src={banner3} alt="sbi" className="d-block" width="100%" />
					
				</div>
				<div className="carousel-item">
					<img src={banner4} alt="sbi" className="d-block" width="100%" />
				</div>	
				<div className="carousel-item">
					<img src={banner5} alt="sbi" className="d-block" width="100%" />
					
				</div>
				<div className="carousel-item">
					<img src={banner6} alt="sbi" className="d-block" width="100%" />
					
				</div>
				<div className="carousel-item">
					<img src={banner7} alt="sbi" className="d-block" width="100%" />					
				</div>
				<div className="carousel-item">
					<img src={banner8} alt="sbi" className="d-block" width="100%" />					
				</div>
				<div className="carousel-item">
					<img src={banner9} alt="sbi" className="d-block" width="100%" />					
				</div>
				<div classNameName="carousel-item">
					<img src={banner10} alt="sbi" className="d-block" width="100%" />					
				</div>
				<div className="carousel-item">
					<img src={banner11} alt="sbi" className="d-block" width="100%" />					
				</div>
				<div className="carousel-item">
					<img src={banner12} alt="sbi" className="d-block" width="100%" />					
				</div>
				<div className="carousel-item">
					<img src={banner13} alt="sbi" className="d-block" width="100%" />					
				</div>
				<div className="carousel-item">
					<img src={banner14} alt="sbi" className="d-block" width="100%" />					
				</div>
				<div className="carousel-item">
					<img src={banner15} alt="sbi" className="d-block" width="100%" />					
				</div>
				<div className="carousel-item">
					<img src={banner16} alt="sbi" className="d-block" width="100%" />					
				</div>
				<div className="carousel-item">
					<img src={banner17} alt="sbi" className="d-block" width="100%" />					
				</div>
            <div className="carousel-item">
              <img src={banner18} alt="sbi" className="d-block" width="100%" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon "></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon "></span>
          </button>
        </div>
      </section>

      <footer>
        <div style={{ backgroundColor: 'rgb(12, 55, 106)' }} className="container-fluid">
          <small>
            <p className="text-white float-end">
              Site best viewed at 1024 x 768 resolution in Microsoft Edge 79+, Mozilla 96+, Google Chrome 97+
            </p>
          </small>
          <small>
            <p className="text-white"> &copy;State Bank of India (APM Id:Serv_Tran_564)</p>
          </small>
        </div>
      </footer>
    </>
  );
}

export default Header;
