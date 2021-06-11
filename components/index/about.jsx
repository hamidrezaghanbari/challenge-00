import styled from "styled-components"
import AboutCard from "./about-card"

const AboutSection = () => {
    return (
        <AboutSectionHolder className="card">
            <AboutTitle>
                About this project
            </AboutTitle>

            <AboutDesc>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand
            </AboutDesc>
            <AboutDesc>
                Featuring artisan craftmanship, the simplicity of design creates extra desk space below your computer to allow notepads,pens, and USB sticks to be stored under the stand.
            </AboutDesc>

            <AboutCard title="Bamboo Stand" desc="Pledge $25 or more" price="101">
                You get an ergonomic stand made of natural bamboo. You have helped us launch our promotional campaign,and you will be added to a special Backer member list.
            </AboutCard>
            <AboutCard title="Black Edition Stand" desc="Pledge $75 or more" price="64">
                You get a Black Special Edition computer stand and a personal thank you.You will be added to our Backer member list.Shipping is included
            </AboutCard>
            <AboutCard title="Mahogany Special Edition" desc="Pledge $200 or more" price="0" display="none">
                You get two Special Edition Mahogany stands, a Backer T-shirt, and a personal thank you. you will be added to our backer member list.Shipping is included.
            </AboutCard>
        </AboutSectionHolder>
    )
}

const AboutSectionHolder = styled.div`
    padding: 30px 5%;
`

const AboutTitle = styled.h2`
    font-family: CommissionerBold;
    font-size: 18px;
`

const AboutDesc = styled.p`
    color: #8c8c8c;
    padding-top: 30px;
    line-height: 1.5;
`

export default AboutSection
