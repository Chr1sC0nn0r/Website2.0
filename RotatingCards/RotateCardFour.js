import React from "react";
import "./Rotate.css";

export default function RotateCardFour() { 
    return (
        <div className="card-container"> 
            <div className="card">
                <div className="card-face card-front">
                    <h1>front</h1>
                    <p>This is the front side of the card</p>
                </div>
                <div className="card-face card-back">
                    <h2>Back</h2>
                    <p>This is the back of the card</p>
                </div>
            </div>
        </div>
    );
};