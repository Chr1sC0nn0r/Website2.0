import React from "react";
import "./Rotate.css";

export default function RotateCardThree() { 
    return (
        <div className="card-container"> 
            <div className="card">
                <div className="card-face card-front">
                    <h1>Amenities!</h1>
                    <p>Hover to see info</p>
                </div>
                <div className="card-face card-back">
                    <p>
                        <ul>
                            <li>Private Hot tub</li> 
                            <li>Internet</li> 
                            <li>Private Pool</li>
                            <li>Ocean view</li>
                            <li>Oceanfront</li>
                            <li>Washer/Dryer</li>
                            <li>Cable </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};