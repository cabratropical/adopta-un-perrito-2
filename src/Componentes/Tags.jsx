// src/components/Tags.jsx
import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = ({ text, color }) => {
  const onlyBreedName = text.split(' ')[1];

  return (
    <Badge bg={color} className={`my-badge bg-${color}`}>
      {onlyBreedName}
    </Badge>
  );
};

export default Tags;
