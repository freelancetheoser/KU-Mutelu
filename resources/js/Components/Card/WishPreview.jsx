import React from 'react';
import Stardard from './Paper';
import PaperShow from '../PaperShow';

export default function WishPreview ({ backgroundColor, textColor, styleClass }) {
  return (
    <div className={` ${styleClass} ${backgroundColor} ${textColor}`}>
        <Stardard/>
    </div>
  );
};

