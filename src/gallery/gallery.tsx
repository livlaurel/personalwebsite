import React from 'react';
import { Link } from 'react-router-dom';
import './gallery.css';

const images = [
  { id: 1, src: '/gallery/apt.jpg', title: 'Image 1' },
  { id: 2, src: '/gallery/bea.jpg', title: 'Image 2' },
  { id: 2, src: '/gallery/fis.jpg', title: 'Image 3' },
  { id: 2, src: '/gallery/woman.jpg', title: 'Image 4' },
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