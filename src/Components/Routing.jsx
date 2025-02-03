import React from 'react';
import { useParams } from 'react-router-dom';

export default function Routing() {
 
  const { productId} = useParams();

  return (
    <div>
      <h1>Details for product Id {productId}</h1>
    </div>
  );
}