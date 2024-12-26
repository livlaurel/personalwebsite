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
  { id: 1, src: beaImage, title: 'B', description: 'Fav artsist' },
  { id: 2, src: aptImage, title: 'Apartment', description: 'Apartment living' },
  { id: 3, src: womanImage, title: 'Happy', description: 'A happy day' },
  { id: 4, src: fisImage, title: 'Swim', description: "No place like home" },
  { id: 8, src: trainImage, title: 'train', description: "Life on the train" },
  { id: 9, src: windowImage, title: 'window', description: "A window" },
  { id: 10, src: fruit, title: 'fruit', description: "Fruit" },
  { id: 11, src: girls, title: 'girls', description: "two cute girls!" },
  { id: 12, src: hands, title: 'hands', description: "love" },
  { id: 13, src: hey, title: 'hey', description: "hey!" },
  { id: 14, src: meal, title: 'meal', description: "a good meal" },
  { id: 15, src: piano, title: 'piano', description: "favorite song" },
  { id: 16, src: sleepy, title: 'sleepy', description: "doodles" },
  { id: 17, src: stargaze, title: 'stargaze', description: "stargazing" },
  { id: 18, src: study, title: 'study', description: "locked in"},
  { id: 19, src: collage, title: 'collage', description: "a collage of images, it feels chaotic but it's intentional" },
  { id: 20, src: ramen, title: 'ramen', description: "bunnys exploring ramen" },
  { id: 21, src: smiski, title: 'smiski', description: "Smiski (noun): Small glow-in-the-dark figurines in quirky poses, designed to bring charm and surprise by glowing in hidden or unexpected spots." },
  { id: 22, src: sleep, title: 'sleep', description: "animals get sleepy too" },
  { id: 23, src: turbo, title: 'turbo', description: "dan da dan art" },
  { id: 24, src: toast, title: 'toast', description: "bunnys enjoying some breakfast" },
  { id: 25, src: hand, title: 'hand', description: "hand" },
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