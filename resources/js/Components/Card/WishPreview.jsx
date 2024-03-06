import React from 'react';
import Stardard from './Paper';
import Locked from './Locked';
import Gorikuya from './Gorikuya';

export default function WishPreview ({template, background, text, decorate, content, postIamge}) {
    console.log(background);
    let contentTemplate;
    switch (template) {
        case 'Standard':
            contentTemplate = <Stardard background={background}  text={text} content={content} postIamge={postIamge}/>;
            break;
        case 'Locked':
            contentTemplate = <Locked background={background} text={text} content={content} postIamge={postIamge}/>;
            break;
        case 'Gorikuya':
            contentTemplate = <Gorikuya background={background} text={text} content={content} postIamge={postIamge}/>;
            break;
        default:
            contentTemplate = <Stardard background={background} text={text} content={content} postIamge={postIamge}/>;
    }

    return (
        <div>
            {contentTemplate}
        </div>
    );
};

