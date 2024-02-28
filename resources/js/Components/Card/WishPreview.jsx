import React from 'react';
import Stardard from './Paper';
import Locked from './Locked';
import Gorikuya from './Gorikuya';

export default function WishPreview ({template, background, text, decorate, content}) {
    console.log(background);
    let contentTemplate;
    switch (template) {
        case 'Standard':
            contentTemplate = <Stardard background={background}  text={text} content={content}/>;
            break;
        case 'Locked':
            contentTemplate = <Locked background={background}/>;
            break;
        case 'Gorikuya':
            contentTemplate = <Gorikuya background={background}/>;
            break;
        default:
            contentTemplate = <Stardard background={background}/>;
    }

    return (
        <div>
            {contentTemplate}
        </div>
    );
};

