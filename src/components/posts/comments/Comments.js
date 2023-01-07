import React from 'react';
import { useState, useEffect } from 'react';

import './Comments.css';

import { getPostComments } from '../../Redux/Reddit';
import { dateCalculator } from '../postFooter/PostFooter';

export const Comments = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPostComments(props.permalink)
            .then(jsonComments => setComments(
                jsonComments.map(comment => (

                    <div className="comment" key={comment.id}>
                        <div className="commentHeader">
                            <p className="commentAuthor">{comment.author}</p>
                            <p className="commentDate">{dateCalculator(comment.created_utc)}</p>
                        </div>
                        <p>{comment.body}</p>
                    </div>

                ))));

    }, [props.permalink]);

    return (
        <div id={props.id} className={props.visible === true ? "isShown" : "isNotShown"}>
            {comments}
        </div>
    );
};

