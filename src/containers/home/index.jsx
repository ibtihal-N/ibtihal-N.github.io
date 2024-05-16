import React from "react";
import { Animate } from "react-simple-animate";
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles.scss';
import myPhoto from '../../images/IMG2.jpg'
const Home = () => {

    const navigate = useNavigate();
    console.log(navigate);
    const handleNavigateToContactMePage = () => {
        navigate("/contact");
    }

    return (
        <div>
            <section id="home" className="home">
                <div className="home1">
                <img src={myPhoto} alt="" className="my-photo" />
                    <div className="home-text">
                    <small className="home2">Engineering Student</small>
                    <h2 className="home4">Naime Ibtihal</h2>
                    <div className="home-content">
                        <h5 className="home3">Welcome to my hyperdoc, an interactive and dynamic document that goes beyond the traditional paper resume.</h5>
                        <Animate
                            play
                            duration={0.9}
                            delay={0.5}
                            start={{
                                transform: 'translateY(550px)'
                            }}

                            end={{
                                transform: 'translatex(0px)'
                            }}
                        >
                            <div className="contactme">
                                <button onClick={handleNavigateToContactMePage}>Talk to Me</button>
                                <div className="social-icons">
                                    <a href="https://github.com/ibtihal-N" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={30} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/ibtihal-naime-21941a265/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={30} />
                                    </a>
                                </div>
                            </div>
                        </Animate>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}
export default Home;