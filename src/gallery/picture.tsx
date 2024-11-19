import React from 'react';
import { useParams } from 'react-router-dom';
import aptImage from './apt.jpeg';
import beaImage from './bea.jpeg';
import fisImage from './fis.jpeg';
import womanImage from './woman.jpeg';
import './picture.css';


const images = [
  { id: 1, src: aptImage, title: 'Apartments', description: 'A illustration of an apartment' },
  { id: 2, src: beaImage, title: 'Bea', description: 'Bea.' },
  { id: 3, src: fisImage, title: 'Fish', description: 'A happy colorful fish!' },
  { id: 4, src: womanImage, title: 'Happy', description: 'Happiness inspired by my mother' },
];

const ImageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Image not found</div>;
  }

  const image = images.find(img => img.id === parseInt(id));

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div className="ImageDetail">
      <h1>{image.title}</h1>
      <img src={image.src} alt={image.title} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetail;