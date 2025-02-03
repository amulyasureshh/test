import React from 'react';

function Side() {
    const headerStyle = {
      backgroundColor: 'Black',
      fontWeight: 'bold',
      fontSize: '2xl', 
      padding: '10px',
      color:'White'
       
    };
  
    return (
      <div style={headerStyle}>
        Good Afternoon
        <div className='col-span-1 pl-0'></div>
      </div>
      
  );
}

export default Side;