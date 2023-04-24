import { useEffect, useState } from 'react';
import images from '../../constants/images';
import './ads.css';

const Ads = () => {
  const adDisplay = () => {
    const ads = Object.keys(images).filter((i) => i.includes('advertisement'));
    const random = Math.floor(Math.random() * ads.length);
    return ads[random];
  };

  const [advert, setAdvert] = useState(adDisplay());

  useEffect(() => setInterval(() => { setAdvert(adDisplay()); }, 15000), []);

  return (
    <div className="flex-center rightSidebar__ad-container ">
      <img src={images[advert]} alt="ad" className="rightSidebar__ad-img" />
    </div>
  );
};

export default Ads;
