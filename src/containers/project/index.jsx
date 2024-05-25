import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import PageHeaderContent from "../../components/PageHeaderContent";
import ImageOne from '../../images/image1.PNG'
import ImageTwo from '../../images/image2.PNG'
import ImageThree from '../../images/image3.PNG'
import "./styles.scss"

const portfolioData = [
    {
        id: 3,
        name: "Water_Quality",
        image: ImageTwo,
        title: "Water Quality Project",
        description: "This water quality monitoring and prediction project offers a computational solution to assess water potability in different regions. By utilizing data on parameters such as pH, nitrate concentration, etc., it provides accurate predictions regarding water quality. By raising awareness about the importance of water resource preservation, this project aims to ensure a safe water supply for future generations."
    },
    {
        id: 2,
        name: "N7Carrer",
        image: ImageOne,
        title: "N7Carrer Project",
        description: "The N7Career project is an innovative initiative aimed at creating an interactive platform to assist individuals in exploring and navigating the vast landscape of career opportunities. Developed using Java and JavaFX technology, this platform offers an intuitive user interface allowing users to register, provide information about their technical and non-technical skills, and receive job recommendations tailored to their profiles. By combining advanced technologies such as Python, Pandas, Scikit-learn, and Flask, the project ensures optimal customization of career recommendations based on each user's unique skills. With agile design and a deep understanding of user needs, N7Career represents a significant advancement in the development of interactive tools dedicated to career exploration, offering considerable potential for future improvements."
    },

    {
        id: 4,
        name: "DashBoard",
        image: ImageThree,
        title: "Dashboard Project",
        description: "This interactive dashboard offers a comprehensive overview of traffic trends across African countries, facilitating in-depth analysis of incoming and outgoing traffic patterns. Through visually engaging charts and maps, users can explore traffic evolution over time, compare traffic volumes between countries, and gain valuable insights for decision-making and strategic planning. Powered by Power BI, the dashboard provides a user-friendly interface, ensuring easy navigation and access to actionable insights. Overall, this dashboard represents a powerful tool for visualizing and analyzing traffic data, empowering users to make informed decisions and optimize operations effectively."
    }
]
const MAX_WORDS = 20;

const Project = () => {
    const [showFullDescription, setShowFullDescription] = useState({
        WaterQuality: false,
        N7Career: false,
        Dashboard: false
    });

    const toggleDescription = (projectName) => {
        setShowFullDescription(prevState => ({
            ...prevState,
            [projectName]: !prevState[projectName]
        }));
    };

    const truncateDescription = (description) => {
        const words = description.split(" ");
        if (words.length > MAX_WORDS) {
            return words.slice(0, MAX_WORDS).join(" ") + "...";
        }
        return description;
    };

    return (
        <motion.section // Utilisez motion.section au lieu de section
            id="project"
            className="peoject"
            initial={{ opacity: 0 }} // Animation d'apparition initiale
            animate={{ opacity: 1 }} // Animation lorsque le composant est monté
            exit={{ opacity: 0 }} // Animation de sortie
        >
            <PageHeaderContent
                headerText="My Project"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">

                <div className="portfolio__content__cards">
                    {portfolioData.map((item) => (
                        <motion.div // Utilisez motion.div pour chaque élément que vous souhaitez animer
                            className="portfolio__content__cards__item"
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }} // Animation d'apparition initiale
                            animate={{ opacity: 1, y: 0 }} // Animation lorsque le composant est monté
                            transition={{ duration: 0.5 }}
                        >
                            <div className="portfolio__content__cards__item__img-wrapper">
                                <img alt="dummy data" src={item.image} />
                                <div className="image-details">
                                    <h3>{item.title}</h3>
                                    {showFullDescription[item.name] ? (
                                        <p>{item.description}</p>
                                    ) : (
                                        <>
                                            <p>{truncateDescription(item.description)}</p>
                                            <p>...</p>
                                        </>
                                    )}
                                    <div style={{ textAlign: "center" }}>
                                        <button onClick={() => toggleDescription(item.name)}>
                                            {showFullDescription[item.name] ? "See less" : "See all"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="portfolio__content__see-more-button">
                    <Link to="https://github.com/ibtihal-N" target="_blank">
                        <button>See More</button>
                    </Link>
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
        </motion.section>
    )
}
export default Project;
