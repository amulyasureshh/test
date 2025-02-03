import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: '2xl', 
    padding: '10px',
    color:'White'
     
  };

  return (
    <div style={headerStyle}>
      ePMS
    </div>

    
  );
}

export default Header;
