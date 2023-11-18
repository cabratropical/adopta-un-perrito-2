// src/components/MyCard.jsx
import React from 'react';
import Tags from './Tags';

const MyCard = ({ imageUrl, name, description, breed, tags }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} style={{ width: '200px', height: '200px' }}/>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{breed}</p>
       <Tags text={tags.text} color={tags.color} />
    </div>
  );
};

export default MyCard;
