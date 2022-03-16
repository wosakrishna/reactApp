import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
import { FaUserTie} from 'react-icons/fa';
  

const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
      }, [location]);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><h2><b>PTE PORTAL</b></h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            {/* <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">DashBoard</Link> */}
                        </li>
                        
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">Practice </Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/connact"? "active": ""}`} to="/connact">ConnactUs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/Recoder"? "active": ""}`} to="/Recoder">Recoder</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/Countdown"? "active": ""}`} to="/Countdown">Countdown</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/Sound"? "active": ""}`} to="/Sound">Sound</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/Test"? "active": ""}`} to="/Test">Test</Link>
                        </li>
                       <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/Abc"? "active": ""}`} to="/Ss2">Spoken Test</Link>
                        </li> */}
                         {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/Aca"? "active": ""}`} to="/Aca">Aca</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/Acb"? "active": ""}`} to="/Acb">Acb</Link>
                        </li> */}
           

                    </ul>
                    <span class="navbar-text text-white  ">
                  <u> Welcome, Krishna  </u>
      </span>
                    <span class="navbar-text mx-3 ">
                    <Link className={`text-info nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">DashBoard</Link>
      </span><span className="navbar-text mx-3 boader boader-info"><button className='rounded-circle'><FaUserTie/></button></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
