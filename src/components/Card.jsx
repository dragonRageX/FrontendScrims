import React from "react";

const Card = (props) => {
    console.log(props);
    return (
        <main className="card-container">
            <img src = {`${props.item.img}`} className="attraction-image" />
            <section className="card-info-container">
                <div className="location-maps">
                    <i className="gg-pin"></i>
                    <p>{props.item.location}</p>
                    <a href = {`${props.item.googleMaps}`}>View on Google Maps</a>
                </div>
                <h1>{props.item.attraction}</h1>
                <h5>{props.item.time.startDate} - {props.item.time.endDate}</h5>
                <p>{props.item.description}</p>
            </section>
        </main>
    );
};

export default Card;