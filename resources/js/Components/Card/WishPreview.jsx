import React from 'react';
import Paper from './Paper';

export default function WishPreview ({ backgroundColor, textColor, styleClass }) {
  return (
    <div className={` ${styleClass} ${backgroundColor} ${textColor}`}>
        <Paper/>
    </div>
  );
};

