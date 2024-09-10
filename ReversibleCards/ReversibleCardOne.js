import React from "react";
import "./ReversibleCard.css";

export default function ReversibleCardOne() {
    return ( 
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <h1>Location!</h1>
                    <p>Hover to see info</p>
                </div>
                <div className="card-back">
                    <h1>Island Paradise</h1>
                </div>
            </div>
        </div>
    );
};