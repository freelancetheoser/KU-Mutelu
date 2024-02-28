import React from 'react';
import Stardard from './Paper';
import Locked from './Locked';
import Gorikuya from './Gorikuya';

export default function WishPreview ({template, background, text, decorate}) {
    let content;
    switch (template) {
        case 'Standard':
            content = <Stardard background={background}/>;
            break;
        case 'Locked':
            content = <Locked background={background}/>;
            break;
        case 'Gorikuya':
            content = <Gorikuya background={background}/>;
            break;
        default:
            content = <Stardard background={background}/>;
    }

    return (
        <div>
            {content}
        </div>
    );
};

