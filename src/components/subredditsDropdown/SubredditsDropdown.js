import React from 'react';

import './SubredditsDropdown.css';

import { useSelector, useDispatch } from 'react-redux';
import {  changeActiveSubreddit } from '../Redux/subredditsSlice';

export const SubredditsDropdown = (props) => {
    const dispatch = useDispatch();

    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const subReddits = useSelector(state => state.subreddits.subReddits);

    const onOptionSelected = (e) => {
        dispatch(changeActiveSubreddit(e.target.value));
    }


    const dropdown = (subs) => {
        return (
            <select
                className="subSelector"
                value={activeSub}
                onChange={onOptionSelected}>
                {subs.map(sub => (
                    <option key={sub.id} value={sub.url}>{sub.name}</option>
                ))}
            </select>
        );
    };


    return (
        <section className="subreddits">
            {dropdown(subReddits)}
        </section>
    );
}