import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import geiw_days from '../../images/geiw.jpg'
import './styles.scss';

const geiw = () => {
    return (
        <section>
            <PageHeaderContent
                headerText="GEIW Days"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div id="geiw" className="geiw">
                <img src={geiw_days} alt="" className="geiw" />
                <br />
                <br />
            </div>
            <div className="section-content">
                <p>GEIW Days, which provide a range of educational events and activities, are always a highlight of the school year. Even though I didn't actively participate in these activities this year, I nevertheless went to the winners' announcement and helped my classmates in a big way</p>
                <br />
                <p>Firstly, I choose to uplift and inspire my peers instead of competing or participating in the presentations. Moral support, in my opinion, is crucial during these situations because it can actually affect the participants' attitudes and performance. I made sure to be there to give advice, talk about tactics, and even lend a hand with preparations when I could. My objective was to foster a cooperative, upbeat environment where everyone is respected and felt supported.</p>
                <br />
                <p>Secondly, being there when the winners were announced was an especially fulfilling experience. We were able to observe the efforts and abilities of our colleagues at this time of celebration and acknowledgment. Seeing my classmates stand up to accept their price made me feel quite proud. They proved that perseverance and hard work paid off, and their success encouraged me to put more effort and commitment into my own upcoming endeavors.</p>
                <br />
                <p>In conclusion, even though I was not actively involved in any of the GEIW Days events, I still felt that my attendance and moral support during the winners' announcement was very important. Through these experiences, I was able to deepen my relationships with my classmates and understand how crucial teamwork is to both individual and group achievement. I'm happy to have been a part of these occasions and look forward to contributing more in the future.</p>
                <br />
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
export default geiw;