import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";


const jobSummary = 'As an engineering student, I am driven by a continuous pursuit of knowledge across diverse fields. I am deeply passionate about delving into the latest technological advancements and exploring their potential applications in addressing real-world challenges. Areas such as AI, machine learning, and robotics captivate my interest, and I make it a priority to stay informed about the latest research and breakthroughs in these fields. Throughout my academic journey, I aim to blend my technical skills with a profound understanding of user requirements and market dynamics to conceptualize innovative and impactful solutions. My goal is to leverage my education to contribute meaningfully to the field and make a positive difference in the world.';
const personalDetails = [
    {
        label: "Full Name :",
        Value: "Naime Ibtihal",
    },
    {
        label: "Email :",
        Value: "naimeibtihal@gmail.com",
    },
    {
        label: "Phone :",
        Value: "+212 651-845074",
    },
    {
        label: "DOB :",
        Value: "19th February 2002",
    },
    {
        label: "Nationality :",
        Value: "Moroccan"
    }
]
const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{
                            transform: 'translateX(-900px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3>Big Data And Cloud Computing</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{
                            transform: 'translateX(-900px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.Value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{
                            transform: 'translateX(600px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                    <div className="about__content__servicesWrapper__innerContent">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiApple size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                    </Animate>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-left">
                    <h2>Naime Ibtihal</h2>
                    <p >&copy; 2024</p>
                </div>
                <div className="footer-right">
                    <p>CONTACT ME</p>
                    <p>Phone: +212 651 845074</p>
                    <p>Email: naimeibtihal@gmail.com</p>
                </div>
            </footer>
        </section>
    )
}
export default About;