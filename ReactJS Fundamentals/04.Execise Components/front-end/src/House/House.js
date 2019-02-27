import React from 'react';
import '../House/House.css'

const House = function (props) {
    return (
    <div className= "House" onMouseEnter={() => props.hoverCurrentHouse(props.id)}>
        <img src = {props.imageUrl}  alt="house"/>
    </div>
    )
}
    


export default House;