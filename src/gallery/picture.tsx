import React from 'react';
import { useParams } from 'react-router-dom';
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
import './picture.css';

const images = [
  { id: 1, src: beaImage, title: 'B', description: 'Fav artist' },
  { id: 2, src: aptImage, title: 'Apartment', description: 'Apartment living' },
  { id: 3, src: womanImage, title: 'Happy', description: 'A happy woman' },
  { id: 4, src: fisImage, title: 'Fish', description: 'A swimming fish' },
  { id: 8, src: trainImage, title: 'Train', description: 'A moving train' },
  { id: 9, src: windowImage, title: 'Window', description: 'A beautiful window' },
  { id: 10, src: fruit, title: 'Fruit', description: 'A bowl of fruit' },
  { id: 11, src: girls, title: 'Girls', description: 'Group of girls' },
  { id: 12, src: hands, title: 'Hands', description: 'Hands in the air' },
  { id: 13, src: hey, title: 'Hey', description: 'Saying hey' },
  { id: 14, src: meal, title: 'Meal', description: 'A delicious meal' },
  { id: 15, src: piano, title: 'Piano', description: 'Playing piano' },
  { id: 18, src: study, title: 'Study', description: 'Studying hard' },
  { id: 19, src: collage, title: 'Collage', description: 'Art collage' },
  { id: 20, src: ramen, title: 'Ramen', description: 'Bowl of ramen' },
  { id: 21, src: smiski, title: 'Smiski', description: "Smiski (noun): Small glow-in-the-dark figurines in quirky poses, designed to bring charm and surprise by glowing in hidden or unexpected spots." },
  { id: 22, src: sleep, title: 'Sleep', description: "Animals get sleepy too" },
  { id: 23, src: turbo, title: 'Turbo', description: "Dan da dan art" },
  { id: 24, src: toast, title: 'Toast', description: "Bunnys enjoying some breakfast" },
  { id: 25, src: hand, title: 'Hand', description: "Hand practice" },
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
      <p>{image.description}</p>
      <img src={image.src} alt={image.title} />
    </div>
  );
};

export default ImageDetail;