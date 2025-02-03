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
          <select style={inputStyle}>
            <option value="Select">Select</option>
            <option value="Deep Technical">Development Goals and Plans</option>
            <option value="Functional">Self Assessment</option>
            <option value="NA">Manager Assessment</option>
            <option value="NA">Product Testing</option>
            <option value="Soft Skills">Soft Skills</option>
          </select>
          <textarea style={inputStyle} placeholder="" />
          <textarea style={inputStyle} placeholder="Not Started" />
          <textarea style={inputStyle} placeholder="Not Started" />
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
              <strong style={goalSettingStyle}>Development Goals</strong>
            </td>
          </tr>
        </tbody>

        <div className='bg-slate-400 mt-4'>
          <h className='ml-24'>Trainings</h>
          <h className='ml-44'>Development Goals and Plans</h>
          <h className='ml-44'>Self Assessment</h>
          <h className='ml-44'>Manager Assessment</h>
        </div>

        <tbody>{rows}</tbody>
      </table>
      <tbody></tbody>
    </div>
  );
}

export default Footer;
