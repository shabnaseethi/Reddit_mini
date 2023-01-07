import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeActiveSubreddit } from '../Redux/subredditsSlice';

import { SearchBar } from './searchBar/SearchBar';

export const Header = () => {
    const dispatch = useDispatch();

    const onTitleClicked = () => {
        dispatch(changeActiveSubreddit("/r/Home/"));
    }

    return (
        <header className={'mainHeader'}>
            <Link to="/">
                <h1 onClick={onTitleClicked}>Reddit<span>Mini</span></h1>
            </Link>
            <SearchBar className='searchBar' />
        </header>
    );
}