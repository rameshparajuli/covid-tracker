import React from 'react';
import SwipeableView from '../../components/swipeable/swipeable-component';
import {swipeable_images} from '../../assets';
const data = [
  {
    title: 'Stay Updated',
    text:
      'With our app, you will be updated with the latest site report of the pandemic situation',
    image: swipeable_images.stay_updated,
  },
  {
    title: 'Read Authentic NEWS',
    text:
      'With our app, you will be updated with the latest site report of the pandemic situation',
    image: swipeable_images.read_news,
  },
  {
    title: 'Stay Alert',
    text:
      'With our app, you will be updated with the latest site report of the pandemic situation',
    image: swipeable_images.stay_alert,
  },
  {
    title: 'For More Details',
    text:
      'With our app, you will be updated with the latest site report of the pandemic situation',
    image: swipeable_images.details,
  },
];

const Swipeable = () => {
  return <SwipeableView data={data} />;
};

export default Swipeable;
