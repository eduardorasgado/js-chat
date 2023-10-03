import React from 'react';

function ViewTitle({title, children}) {
  
  return (
    <div className="chat-name-container">
      <span className="name">{title}</span>
      <div>{children}</div>
    </div>
  );
}

export default ViewTitle;