import React from 'react';

function Card(props) {
    return(
        <>
    <div className="cards">
        <div classNamecard>
            <img src={props.imgsrc} alt="myPic" className="card__img"/>
            <div className="card__info">
                <span className="card__category"> {props.title} </span>
                <h3 className="card__title">{props.sname}</h3>
                <a href={props.link} target="_blank"> 
                <button className="btn">Watch Now</button></a>
            </div>
        </div>
    </div>

    </>
    )
}

export default Card;