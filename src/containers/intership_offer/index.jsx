import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import intershipOffer from '../../images/stage.PNG'
import './styles.scss';

const Intership = () => {

    const handleDownloadCV = () => {
        // Logique pour le téléchargement du CV
        const link = document.createElement('a');
        link.href = '/CV_2024-05-16_Ibtihal_Naime.pdf';
        link.download = 'CV_2024-05-16_Ibtihal_Naime.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadCoverLettre = () => {
        // Logique pour le téléchargement du CV
        const link = document.createElement('a');
        link.href = '/cover_lettre.pdf';
        link.download = 'cover_lettre.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section  >
            <PageHeaderContent
                headerText="Internship offer"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div id="stage" className="stage">
                <img src={intershipOffer} alt="" className="stage" />
            </div>

            <div className="contactme">
                <button onClick={handleDownloadCV}>Download CV</button>
            </div>
            <div className="contactme">
                <button onClick={handleDownloadCoverLettre}>Download Cover Lettre</button>
            </div>
            <br/>
            <br/>

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
export default Intership;