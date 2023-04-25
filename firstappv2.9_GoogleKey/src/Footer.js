import React from "react";
import './App.css';


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer1">
                    
                    <p className="foottext"> About US </p>
                    <p> Copy right @ISO13325 </p>
                    
                </div>
                <section>
                    <div className="flex_css">
                        <div><button> Like</button></div>
                        <div><button> Share</button></div>
                        <div><button> Love</button></div>
                    </div>
                </section>
            </div>
       </> 
    );
};

export default Footer;