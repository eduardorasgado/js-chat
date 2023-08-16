import React from 'react';
import './Loader.scss'

// from tobias' spinkit: https://tobiasahlin.com/spinkit/
function Loader() {
  return ( 
    <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
   );
}

export default Loader;