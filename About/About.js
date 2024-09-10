import RotateCardOne from "../RotatingCards/RotateCardOne";
import RotateCardTwo from "../RotatingCards/RotateCardTwo";
import RotateCardThree from "../RotatingCards/RotateCardThree";
import RotateCardFour from "../RotatingCards/RotateCardFour";

export default function About () { 
    return <div className="about-background-image"> 
        <header className="about-header"> 
            <h1>About Us</h1>
        </header>

        <div className="App">
            <div className="card-row">
                <RotateCardOne />
                <RotateCardTwo />
                <RotateCardThree />
                <RotateCardFour />
            </div>
        </div>
    </div>
}