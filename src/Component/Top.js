import '../style/Top.css'
import { useState } from 'react';
// import '../App.css
import { Link } from "react-router-dom";

function Top() {
    const [click, setShowNav] = useState(false);
    return (
        <div>
            <div className="App hed">

                <div className='nbar'>
                    <i className="fa-solid fa-bars" onClick={() => setShowNav(!click)}></i>
                </div>
                <div className={click ? "hednav hednavmob" : "hednav"}>
                    <div>
                        <a target="_blank" href="https://drive.google.com/file/d/1lNrUB5VCygTJFq9JsNcocwv-Ie8YxrNx/view?usp=drivesdk">
                            <button className='btnn'>RESUME ✍</button>
                        </a>
                    </div>
                    <nav>
                        <ul className='ull'>
                            <li className="lin"> <Link to="/myportfolio">  HOME </Link></li>
                            <li className="lin"> <Link to="/About">ABOUT</Link></li>
                            <li className="lin"> <Link to="/Services">SERVICES</Link></li>
                            <li className="lin"> <Link htmlFor="Contact" to="/Contact">CONTACT</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="hedmid">
                    <div className='imgdiv'>
                        <img src={require('../Images/ssdf.jpg')} alt="salman" className='imgsal' />
                    </div>
                    <div className='salintro'>
                        <p>Hey There,</p>
                        <h1>I'M SALMAN </h1>
                        <p>I am a Web Developer and Open Source Enthusiast</p>
                    </div>
                </div>
                <div className="hedfoot">
                    <Link to="/About"><i className=" fa-solid fa-chevron-down"></i></Link>
                </div>
            </div>
        </div>
    )
}
export default Top;