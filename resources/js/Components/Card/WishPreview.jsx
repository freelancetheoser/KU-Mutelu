import React from 'react';

export default function WishPreview ({ backgroundColor, textColor, styleClass }) {
  return (
    <div className={` ${styleClass} ${backgroundColor} ${textColor}`}>
      <h2 className="font-bold text-lg">Card Title</h2>
      <p>This is a customizable card. You can change its appearance as you like.</p>
      <div>
      </div>
    </div>
  );
};

