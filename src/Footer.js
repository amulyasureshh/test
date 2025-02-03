import React, { useState } from 'react';

function Footer() {
  const [rowCount, setRowCount] = useState(1);

  const tableStyle = {
    width: '98%',
    margin: '0 auto',
  };

  const tableRowStyle = {
    borderBottom: '1px solid black',
    backgroundColor: 'blue',
  };

  const tableDataStyle = {
    padding: '5px',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
  };

  const goalSettingStyle = {
    color: 'white',
    padding: '5px',
  };

  const developmentGoalsStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '5px',
    textAlign: 'center',
  };

  const inputStyle = {
    flex: '1',
    padding: '5px',
    fontSize: '12px',
    height: '50px',
    overflow: 'auto',
  };

  const buttonBoxStyle = {
    display: 'flex',
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: '5px',
  };

  const addRow = () => {
    if (rowCount < 6) {
      setRowCount(rowCount + 1);
    }
  };

  const removeRow = () => {
    if (rowCount > 1) {
      setRowCount(rowCount - 1);
    }
  };

  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    rows.push(
      <tr key={i} style={tableRowStyle}>
        <td style={tableDataStyle}>
          <textarea style={inputStyle} placeholder="Enter Goal/Objective" />
          <textarea style={inputStyle} placeholder="Enter Target" />
          <textarea style={inputStyle} placeholder="Enter Weightage" />
          <textarea style={inputStyle} placeholder="Enter Remarks" />
          <textarea style={inputStyle} placeholder="Enter Self Assessment" />
          <textarea style={inputStyle} placeholder="Enter Manager Assessment" />
          <textarea style={inputStyle} placeholder="Enter Manager Comments" />

          <div style={buttonBoxStyle}>
            <button onClick={addRow}>+</button>
            <button onClick={removeRow}>-</button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <div>
      <table style={tableStyle}>
        <tbody>
          <tr style={tableRowStyle}>
            <td style={tableDataStyle}>
              <strong style={goalSettingStyle}>Goal Setting</strong>
            </td>
          </tr>
        </tbody>

        <div className='bg-slate-400 mt-4'>
          <h>Goal/Objective</h>
          <h className='ml-24'>Target</h>
          <h className='ml-32'>Weightage</h>
          <h className='ml-32'>Remarks</h>
          <h className='ml-32'>Self Assessment</h>
          <h className='ml-24'>Manager Assessment</h>
          <h className='ml-10'>Manager Comments</h>
        </div>
        <tbody>
          {rows}
        </tbody>
      </table>
      <tbody>
        
      </tbody>
    </div>
  );
}

export default Footer;
