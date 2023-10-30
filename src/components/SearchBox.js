import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    // we are using destructuring here,({...}), allow us to grab later
    return (
        <div className='pa2 tc'>
            <input 
            className='pa3 ba b--blue bg-lightest-blue tc'
            type ='search' 
            placeholder='search robots'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox