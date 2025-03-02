import React from 'react';
import { Link } from 'react-router-dom';
import aptImage from './apt.jpeg';
import beaImage from './bea.jpeg';
import fisImage from './fis.jpeg';
import womanImage from './woman.jpeg';
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
import collage from './collage.jpeg';
import ramen from './ramen.jpeg';
import smiski from './smiski.jpeg';
import sleep from './sleep.jpeg';
import turbo from './turbo.jpeg';
import toast from './toast.jpeg';
import hand from './hand.jpeg';
import orange from './orange.jpeg'
import matcha from './matcha.jpeg'
import heels from './heels.jpeg'
import bento from './bento.jpeg'
import './gallery.css';

const watercolorImages = [
  { id: 1, src: beaImage, title: 'Bea' },
  { id: 2, src: aptImage, title: 'Apartment' },
  { id: 3, src: womanImage, title: 'Happy' },
  { id: 4, src: fisImage, title: 'Fish' },
  { id: 28, src: heels, title: 'heels' },
  { id: 9, src: windowImage, title: 'Window' },

];

const pixelArtImages = [
  { id: 8, src: trainImage, title: 'Train' }, 
];

const foodies = [
  { id: 27, src: matcha, title: 'matcha' },
  { id: 29, src: bento, title: 'bento' },
  { id: 20, src: ramen, title: 'ramen' },
  { id: 24, src: toast, title: 'toast' },
  { id: 26, src: orange, title: 'orange' },
];

const cartoonish = [
  { id: 23, src: turbo, title: 'turbo' },
  { id: 19, src: collage, title: 'collage' },
  { id: 21, src: smiski, title: 'smiski' },
  { id: 22, src: sleep, title: 'sleep' },
];

const doodleImages = [
  { id: 10, src: fruit, title: 'fruit' },
  { id: 11, src: girls, title: 'girls' },
  { id: 12, src: hands, title: 'hands' },
  { id: 13, src: hey, title: 'hey' },
  { id: 18, src: study, title: 'study'},
  { id: 25, src: hand, title: 'hand' },
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
        <h2>Foodies</h2>
          {foodies.map(image => (
            <Link key={image.id} to={`/gallery/${image.id}`}>
              <img src={image.src} alt={image.title} />
            </Link>
          ))}
        </div>
      </div>

      <div className="gallery-section">
        <div className="gallery-grid">
        <h2>Cartoonish</h2>
          {cartoonish.map(image => (
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