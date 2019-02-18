import React from 'react';
import Aux from './../hoc/aux'

const Nav = () => {
     return(
       <Aux>
       <nav>
       <div className="container">
         <span className="logo"></span>
         <div className="links">
           <span className="link">HOW TO ORDER</span>
           <span className="link">PROMOTIONS</span>
           <span className="link">ABOUT US</span>
           <span className="link">REGISTER</span>
           <span className="link btn">
             <span id="cartIcon"></span>
             <span>YOUR CART</span>
           </span>
         </div>
       </div>
     </nav>
     <div className="navSpacer"></div>
       </Aux>
     );
   };

export default Nav;