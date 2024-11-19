import React from 'react';
import { Link } from 'react-router-dom';
import aptImage from './apt.jpeg';
import beaImage from './bea.jpeg';
import fisImage from './fis.jpeg';
import womanImage from './woman.jpeg';
import './gallery.css';


const images = [
  { id: 1, src: aptImage, title: 'Apartment' },
  { id: 2, src: beaImage, title: 'Bea' },
  { id: 3, src: fisImage, title: 'Fish' },
  { id: 4, src: womanImage, title: 'Happy' },
];

const Gallery: React.FC = () => {
  return (
    <div className="Gallery">
      <h1>Art Gallery</h1>
      <div className="gallery-grid">
        {images.map(image => (
          <Link key={image.id} to={`/gallery/${image.id}`}>
            <img src={image.src} alt={image.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;