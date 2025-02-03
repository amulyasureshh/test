import React from 'react';

const ListDisplay = () => {
  const items = [
    { id: 1, name: 'Amulya', stream: 'civil' },
    { id: 2, name: 'Darshini', stream: 'electrical' },
    { id: 3, name: 'Hamsa', stream: 'mechanical' }
  ];

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>List of Items:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Stream: {item.stream}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListDisplay;
