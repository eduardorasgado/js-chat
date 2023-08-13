import React from 'react';

function ViewTitle(props) {
  
  return (
    <div className="chat-name-container">
      <span className="name">{props.title}</span>
    </div>
  );
}

export default ViewTitle;