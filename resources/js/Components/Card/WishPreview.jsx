import React from 'react';
import Stardard from './Paper';
import Locked from './Locked';
import Gorikuya from './Gorikuya';

export default function WishPreview ({ backgroundColor, textColor, styleClass, template }) {
    let content;
    switch (template) {
        case 'Standard':
            content = <Stardard />;
            break;
        case 'Locked':
            content = <Locked />;
            break;
        case 'Gorikuya':
            content = <Gorikuya />;
            break;
        default:
            content = <Stardard />;
    }

    return (
        <div className={`${styleClass} ${backgroundColor} ${textColor}`}>
            {content}
        </div>
    );
};

