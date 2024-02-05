import { Link } from "react-router-dom";
import bank from './no.jpg';
import './home.css';

const NoPage = () => {
  return (
    <div  style={{backgroundImage: `url(${bank})`, backgroundSize: 'cover',height:'700px'}} className='text-center  bg-light py-2'>
      <div>
      <h1 style={{fontFamily:'sanserif'}} className="mt-5">Sorry, we're trying to find you😊🌍 </h1>
      <h2  style={{marginTop:'450px',fontFamily:'sanserif'}} >Please return to the home page 🚀</h2>
     <h1 style={{fontFamily:'sanserif'}}><Link className='text-decoration-none btn  btn-lg w-25 btn-outline-primary rounded-pill' to='/'>Home</Link></h1>
     </div>   
    </div>
  );
};

export default NoPage;
