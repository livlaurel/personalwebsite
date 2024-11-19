import React from 'react';
import { useParams } from 'react-router-dom';
import './picture.css';

const images = [
  { id: 1, src: '/gallery/image1.jpg', title: 'Image 1', description: 'Description of Image 1' },
  { id: 2, src: '/gallery/image2.jpg', title: 'Image 2', description: 'Description of Image 2' },
  { id: 3, src: '/gallery/image3.jpg', title: 'Image 3', description: 'Description of Image 3' },
  { id: 4, src: '/gallery/image4.jpg', title: 'Image 4', description: 'Description of Image 4' },
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