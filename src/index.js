import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './component/Footer';


import Header from './component/Header'; 
const App =() =>{
    return (
            <div>
                <Header/>
                <Footer/>
            </div>
   
    );
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
