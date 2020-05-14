import React from 'react';
import SwipeableView from '../../components/swipeable/swipeable-component';
import {swipeable_images} from '../../assets';
const data = [
  {
    title: 'Stay Updated',
    text1: 'With our app, you will be updated with ',
    text2: 'the latest site report of the pandemic',
    text3: 'situation',
    image: swipeable_images.stay_updated,
  },
  {
    title: 'Read Authentic NEWS',
    text1: 'With our app, you will be updated with ',
    text2: 'the latest site report of the pandemic',
    text3: 'situation',
    image: swipeable_images.read_news,
  },
  {
    title: 'Stay Alert',
    text1: 'With our app, you will be updated with ',
    text2: 'the latest site report of the pandemic',
    text3: 'situation',
    image: swipeable_images.stay_alert,
  },
  {
    title: 'Few More Details',
    text1: 'With our app, you will be updated with ',
    text2: 'the latest site report of the pandemic',
    text3: 'situation',
    image: swipeable_images.details,
  },
];

const Swipeable = () => {
  return <SwipeableView data={data} />;
};

export default Swipeable;
