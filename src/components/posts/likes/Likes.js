import React from 'react';

import './Likes.css';
import { upArrow, downArrow } from '../../Redux/utils';

export const Likes = (props) => {
    
    return (
        <div className="likes">
            <div className="upVotesButton">{upArrow}</div>
            <p>{props.postUps >= 1000 ? (Math.round(props.postUps / 1000 * 10) / 10 + "k") : props.postUps}</p>
            <div className="upVotesButton">{downArrow}</div>
        </div>
    );
}