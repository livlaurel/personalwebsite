import React from 'react';
import { Link } from 'react-router-dom';
import aptImage from './apt.jpeg';
import beaImage from './bea.jpeg';
import fisImage from './fis.jpeg';
import womanImage from './woman.jpeg';
import appleImage from './apple.jpg';
import spaceImage from './space.jpg';
import wonderImage from './wonder.jpg';
import trainImage from './train.gif'; 
import windowImage from './window.jpeg';
import './gallery.css';

const watercolorImages = [
  { id: 1, src: beaImage, title: 'Bea' },
  { id: 2, src: aptImage, title: 'Apartment' },
  { id: 3, src: womanImage, title: 'Happy' },
  { id: 4, src: fisImage, title: 'Fish' },
  { id: 9, src: windowImage, title: 'Window' },

];

const pixelArtImages = [
  { id: 8, src: trainImage, title: 'Train' }, 
];

const wonderImages = [
  { id: 5, src: appleImage, title: 'apple' },
  { id: 6, src: spaceImage, title: 'space' },
  { id: 7, src: wonderImage, title: 'wonder' },
];

const Gallery: React.FC = () => {
  return (
    <div className="Gallery">
      <h1>Art Gallery</h1>
      <h2>"Art is not a mirror held up to reality, but a hammer with which to shape it." - Bertolt Brecht</h2>
      
      <div className="gallery-section">
        <h2>Pixel Art</h2>
        <div className="gallery-grid">
          {pixelArtImages.map(image => (
            <Link key={image.id} to={`/gallery/${image.id}`}>
              <img src={image.src} alt={image.title} />
            </Link>
          ))}
        </div>
      </div>

      <div className="gallery-section">
        <h2>Water Color</h2>
        <div className="gallery-grid">
          {watercolorImages.map(image => (
            <Link key={image.id} to={`/gallery/${image.id}`}>
              <img src={image.src} alt={image.title} />
            </Link>
          ))}
        </div>
      </div>
      
      <div className="gallery-section">
        <h2>Wonder</h2>
        <div className="gallery-grid">
          {wonderImages.map(image => (
            <Link key={image.id} to={`/gallery/${image.id}`}>
              <img src={image.src} alt={image.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;