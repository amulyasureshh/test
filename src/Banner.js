import React, { useState } from 'react';

function Banner() {
  const [selectedYear, setSelectedYear] = useState(''); 

  const yearStyle = {
    backgroundColor: 'blue',
    padding: '1px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    padding: '10px', 
    backgroundColor: 'Grey', 
    color: 'blue',
    border: 'none',
    borderRadius: '10px', 
    cursor: 'pointer',
    marginRight: '1px', 
    marginTop: '10px',
    borderBottom: '2px solid black', 
    
  };

  

  const tableStyle = {
    border: '1px solid black',
    width: '98%',
    margin: '0 auto', 
  };

  const tableCellStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const tableRowStyle = {
    display: 'flex',
    borderBottom: '1px solid black',
  };

  const tableDataStyle = {
    padding: '5px',
    flex: '1',
  };

  const lastFiveRowsStyle = {
    borderRight: '1px solid black',
  };

  const years = ['2022-23', '2021-22', '2020-21', '2019-20']; 
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <table style={tableStyle}>
        <tbody style={tableCellStyle}>
          <tr style={{ ...tableRowStyle, ...yearStyle }}>
            <td style={tableDataStyle}>
              <strong>Year:</strong> {selectedYear}
            </td>
            <td style={tableDataStyle}>
              <select value={selectedYear} onChange={handleYearChange}>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr style={tableRowStyle}>
            <td style={tableDataStyle}>
              <strong>Employee Name:</strong> Amulya B S
            </td>
            <td style={tableDataStyle}>
              <strong>Employee Designation:</strong> Trainee Developer
            </td>
          </tr>
          <tr style={tableRowStyle}>
            <td style={tableDataStyle}>
              <strong>Manager Name:</strong> Mathimaran P
            </td>
            <td style={tableDataStyle}>
              <strong>Employee Code:</strong> 9085492
            </td>
          </tr>
          <tr style={tableRowStyle}>
            <td style={tableDataStyle}>
              <strong>R2 Manager Name:</strong> Anil Menon
            </td>
            <td style={tableDataStyle}>
              <strong>R3 Manager Name:</strong> Arathi Groover
            </td>
          </tr>
          <tr style={tableRowStyle}>
            <td style={tableDataStyle}>
              <strong>Department:</strong> Software Solutions And Delivery
            </td>
            <td style={tableDataStyle}>
              <strong>BU Head Name:</strong> Mathimaran P
            </td>
          </tr>
          <tr style={{ ...tableRowStyle, ...lastFiveRowsStyle }}>
            <td style={tableDataStyle}>
              <strong>Quarter</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>Weightage</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>Self Assessment</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>Manager Assessment</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>Status</strong>
            </td>
          </tr>
          <tr style={{ ...tableRowStyle, ...lastFiveRowsStyle }}>
            <td style={tableDataStyle}>
              <strong>Quarter1</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0%</strong>
            </td>
          </tr>
          <tr style={{ ...tableRowStyle, ...lastFiveRowsStyle }}>
            <td style={tableDataStyle} >
              <strong>Quarter2</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0%</strong>
            </td>
          </tr>
          <tr style={{ ...tableRowStyle, ...lastFiveRowsStyle }}>
            <td style={tableDataStyle}>
              <strong>Quarter3</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0%</strong>
            </td>
          </tr>
          <tr style={{ ...tableRowStyle, ...lastFiveRowsStyle }}>
            <td style={tableDataStyle}>
              <strong>Quarter4</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0</strong>
            </td>
            <td style={tableDataStyle}>
              <strong>0%</strong>
            </td>
          </tr>
        </tbody>
      </table>
 
      <div className="button-container">
        <button style={buttonStyle}>Quarter 1</button>
        <button style={buttonStyle}>Quarter 2</button>
        <button style={buttonStyle}>Quarter 3</button>
        <button style={buttonStyle}>Quarter 4</button>
        <button style={buttonStyle}>Annual Review</button>
      </div> 
      
    </div>
  
  );
}

export default Banner;
