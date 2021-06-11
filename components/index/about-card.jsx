import { AboutBottom, AboutButton, AboutCardWrapper, AboutDesc, AboutPrice, AboutPriceSec, AboutText, AboutTitle, AboutTop } from "../widgets/index/about-card.widgets"

const AboutCard = ({ title, desc, children, price, display }) => {
    return (
        <AboutCardWrapper display={display}>
            <AboutTop>
                <AboutTitle>{title}</AboutTitle>
                <AboutDesc>{desc}</AboutDesc>
            </AboutTop>

            <AboutText>{children}</AboutText>

            <AboutBottom>
                <AboutPriceSec>
                    <AboutPrice>{price}</AboutPrice>
                    <span>left</span>
                </AboutPriceSec>
                <AboutButton>
                    {
                        display === 'none' ? 'Out of Stock' : 'Select Reward'
                    }
                </AboutButton>
            </AboutBottom>
        </AboutCardWrapper>
    )
}

export default AboutCard
