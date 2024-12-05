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
import fruit from './fruity.jpeg';
import girls from './gril.jpeg';
import hands from './hands.jpeg';
import hey from './hey.jpeg';
import meal from './meal.jpeg';
import piano from './piano.jpeg';
import sleepy from './sleepy.jpeg';
import stargaze from './stargazing.jpeg';
import study from './study.jpeg';
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
  { id: 7, src: wonderImage, title: 'wonder' },
  { id: 6, src: spaceImage, title: 'space' },
];

const doodleImages = [
  { id: 10, src: fruit, title: 'fruit' },
  { id: 11, src: girls, title: 'girls' },
  { id: 12, src: hands, title: 'hands' },
  { id: 13, src: hey, title: 'hey' },
  { id: 18, src: study, title: 'study'},
  { id: 14, src: meal, title: 'meal' },
  { id: 15, src: piano, title: 'piano' },
  { id: 17, src: stargaze, title: 'stargaze' },
  { id: 16, src: sleepy, title: 'sleepy' },
];

const Gallery: React.FC = () => {
  return (
    <div className="Gallery">
      <h1>Art Gallery</h1>
      <h2>"Art is not a mirror held up to reality, but a hammer with which to shape it." - Bertolt Brecht</h2>
      
      <div className="gallery-section">
        <div className="gallery-grid">
        <h2>Pixel Art</h2>
          {pixelArtImages.map(image => (
            <Link key={image.id} to={`/gallery/${image.id}`}>
              <img src={image.src} alt={image.title} />
            </Link>
          ))}
        </div>
      </div>

      <div className="gallery-section">
        <div className="gallery-grid">
        <h2>Wonder</h2>
          {wonderImages.map(image => (
            <Link key={image.id} to={`/gallery/${image.id}`}>
              <img src={image.src} alt={image.title} />
            </Link>
          ))}
        </div>
      </div>

      <div className="gallery-section">
        <div className="gallery-grid">
        <h2>Water Color</h2>
          {watercolorImages.map(image => (
            <Link key={image.id} to={`/gallery/${image.id}`}>
              <img src={image.src} alt={image.title} />
            </Link>
          ))}
        </div>
      </div>

      <div className="gallery-section">
        <div className="gallery-grid">
        <h2>Sketch Here, Doodle There</h2>
          {doodleImages.map(image => (
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