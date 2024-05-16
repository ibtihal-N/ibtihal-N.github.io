import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.scss';

const CustomIcon = (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="40"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z"></path>
    </svg>
);

const skillsData = [
    {
        label: "FRONT END",
        data: [
            {
                skillName: "HTML",
                percentage: "90",
            },
            {
                skillName: "CSS",
                percentage: "80",
            },
            {
                skillName: "JAVASCRIPT",
                percentage: "70",
            },
            {
                skillName: "ANGULAR",
                percentage: "70",
            },
        ],
    },
    {
        label: "BACK END",
        data: [
            {
                skillName: "JAVA",
                percentage: "80",
            },
            {
                skillName: "JEE",
                percentage: "80",
            },
            {
                skillName: "PYTHON",
                percentage: "80",
            },
            {
                skillName: "C++",
                percentage: "90",
            },
            {
                skillName: "C",
                percentage: "70",
            },
        ],
    },
    {
        label: "DATABASES",
        data: [
            {
                skillName: "SQL",
                percentage: "80",
            },
            {
                skillName: "MONGO DB",
                percentage: "80",
            },
            {
                skillName: "REDIS",
                percentage: "60",
            },
        ],
    }
];

const Skills = () => {
    const handleDownloadCV = () => {
        // Logique pour le téléchargement du CV
        const link = document.createElement('a');
        link.href = '/CV_2024-05-16_Ibtihal_Naime.pdf';
        link.download = 'CV_2024-05-16_Ibtihal_Naime.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills"
                icon={CustomIcon}
            />
            <div className="skills__content-wrapper">
                {skillsData.map((item, i) => (
                    <div key={i} className="skills__content-wrapper__inner-content">
                        <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{
                                transform: 'translateX(-200px)'
                            }}
                            else={{
                                transform: 'translateX(0px)'
                            }}
                        >
                            <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                            <div>
                                {item.data.map((skillItem, j) => (
                                    <AnimateKeyframes
                                        key={`${item.label}-${j}`}
                                        play
                                        duration={1}
                                        keyframes={["opacity : 1", "opacity : 0"]}
                                        iterationCount={1}
                                    >
                                        <div className="progressbar-wrapper" key={j}>
                                            <p>{skillItem.skillName}</p>
                                            <Line
                                                percent={skillItem.percentage}
                                                strokeWidth="3"
                                                strokeColor="var(--yellow-theme-main-color)"
                                                trailWidth={"3"}
                                                strokeLinecap="square"
                                            />
                                        </div>
                                    </AnimateKeyframes>
                                ))}
                            </div>
                        </Animate>
                    </div>
                ))}
            </div>
            <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                    transform: 'translateX(-200px)'
                }}
                else={{
                    transform: 'translateX(0px)'
                }}>
                <div className="contactme">
                    <button onClick={handleDownloadCV}>Download CV</button>
                </div>
            </Animate>
            <br />
            <br />
            <br />
            <br />
            <br />
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
    );
};

export default Skills;
