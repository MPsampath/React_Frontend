import React, { Component } from 'react';
import Register from './Register';
import Search from './Search';
import '../css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class Header extends Component{
    render(){
        return(

            
            <Router>
                  
            <div>
            
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className='nav-link' to="/">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/search">Search</Link>
                                </li>
                            
                            </ul>
                    </div>
                </nav>    
            </div>
           
                     <Route exact path ="/">
                         <Register/>
                         </Route>   
                    <Route exact path ="/search">
                        <Search/>
                        </Route> 
        </Router>  
    
        );
    }
    };


export default Header;