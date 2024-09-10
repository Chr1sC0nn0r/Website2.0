import React from "react";
import "./Rotate.css";

export default function RotateCardOne() { 
    return (
        <div className="card-container"> 
            <div className="card">
                <div className="card-face card-front">
                    <h1>Location!</h1>
                    <p>Hover to see info</p>
                </div>
                <div className="card-face card-back">
                    <ul>
                        <li>Island Paradise North Topsail
                            Beach - North Topsail Beach, NC
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};