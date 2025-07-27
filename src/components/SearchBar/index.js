import React from 'react';
import { useState, useEffect , useRef } from 'react';
import PropTypes from 'prop-types';

//image
import searchIcon from '../../images/search-icon.svg'

//styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
    const [state,setState] = useState('');
    const initial = useRef(true);
    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500 )

        // One important point for timer = clear timers , cuz here we hava a lot of re-renders
        // if we return this function -> everytime it re renders, it will call return
        return () => clearTimeout(timer)
    },[setSearchTerm, state])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                    type='text'
                    placeholder='Search Moive' 
                    onChange={event => setState(event.currentTarget.value)}
                    value = {state}
                />
            </Content>
        </Wrapper>
    );
};

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}

export default SearchBar;