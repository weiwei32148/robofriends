import React from 'react';



// scroll is not a self closing component, it has a closing tag. Carlist is a children of scroll
const Scroll =(props)=> {
    return (
    <div style ={{overflowY: 'scroll', border:'1px solid blue', height:'600px' }}>
        {props.children}
    </div>
    )
};



export default Scroll