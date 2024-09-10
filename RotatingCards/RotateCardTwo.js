import React from "react";
import "./Rotate.css";

export default function RotateCardTwo() { 
    return (
        <div className="card-container"> 
            <div className="card">
                <div className="card-face card-front">
                    <h1>Size!</h1>
                    <p>Hover to see info</p>
                </div>
                <div className="card-face card-back">
                    <ul>
                        <li>Max 22 guests</li>
                        <li>8 bedrooms</li>
                        <li>9.5 baths</li>
                        <li>No pets</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};