import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import './styles.scss';

const progress = () => {
    return (
        <section>
            <PageHeaderContent
                headerText="My Progress in Semester 4"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="section-content">
                <p>
                    This semester has been a time of growth and challenges for me personally. I got the chance to pick up new abilities that are essential to my career advancement. I shall assess the most important things I have discovered in the last few months in this essay.
                </p>
                <br />
        
                <p>
                    I started by learning how to write cover letters and reports well. I now have a clearer idea of the anticipated format and content. I gained knowledge on how to make sense arguments, convey my views concisely, and modify my writing to fit the situation. For instance, I was aware of the need of being clear and succinct in a report and the necessity of tailoring a cover letter's language and tone to the intended audience. My future internships and jobs, where I'll frequently need to produce such documents, will greatly benefit from my writing talents.
                </p>
               
                <p>When writing a report, information must be clearly organized with headings and subheadings to help the reader navigate the different sections. I discovered the importance of having a concise introduction, an in-depth body with arguments backed up by facts or instances, and a concise conclusion that highlights the main ideas. I've learned how crucial it is to tailor each cover letter to the organization and the position, emphasizing the qualifications that are most pertinent.</p>
                <br />
                
                <p>I then used the estudyme.com website to take examinations that helped me get better at English. I was able to practice in an environment akin to the actual exam with these mini-tests. I improved my English expression, listening comprehension, and reading comprehension. With every test, my scores became better, giving me confidence that I'm headed in the right direction and would eventually reach my target level. Being fluent in English will be very helpful for my future work in this more international society. </p>
               
                <p>Reading and listening comprehension are covered in detail in the TOEIC mini-tests, which helped me hone particular abilities including comprehension of lengthy texts, dialogue nuances, and written expression. During these examinations, I also improved my time management, which is an essential ability for passing the official exam. I was able to pinpoint my areas of weakness—such as specific vocabulary or grammar issues—and concentrate my efforts on strengthening them thanks to these consistent activities.</p>
                <br />
               
                <p>In addition to honing my technical talents, this semester helped me cultivate some crucial interpersonal skills. I improved my time management and task prioritization skills. Additionally, I became more resilient in the face of difficulties. Every challenge I faced—whether it was composing an intricate report or receiving a low mark on a mini-test—inspired me to put in more effort and advance.</p>
              
                <p>This semester has also improved my capacity for autonomous work. I made the initiative to look for more materials to help me get better at English and set aside more time to write. I will be able to use these independence and self-control to my advantage in my future profession, which rewards initiative and self-improvement.</p>
                <br />
              
                <p>In conclusion, this semester has been incredibly enriching. In order to excel in my education, I had to develop my English language abilities and write proficiently. I am inspired to keep going because of these accomplishments and feel proud of myself. My struggles gave me more maturity and independence. I have faith in my capacity to meet the obstacles I face moving forward. The strides I've made in the last few months offer a strong base upon which I can keep growing, and I'm looking forward to the chances these new talents will present in the future.</p>
           <br />
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
export default progress;