import { useState } from "react"
import { BookButton, BookMarkButton, ButtonSection, DeskBookMarkButton, DeskBookMarkButtonImg, InnerDesc, InnerTopText, MainCardBody, MainCardInner, MainCardTitle } from "../widgets/index/main-card.widgets"

const MainCard = ({ setShowThanksModal }) => {
    const [isBookmarked, setIsBookmarked] = useState(false)

    return (
        <MainCardBody className="card">
            <MainCardTitle />

            <MainCardInner>
                <InnerTopText>
                    MasterCraft Bamboo Monitor Riser
                </InnerTopText>
                <InnerDesc>
                    A beautifully handcrafted monitor stand to reduce neck and eye strain
                </InnerDesc>
                <ButtonSection>
                    <BookButton onClick={() => setShowThanksModal(true)}>Back this project</BookButton>
                    
                    <BookMarkButton isBookmarked={isBookmarked} onClick={() => setIsBookmarked(!isBookmarked)} />
                    <DeskBookMarkButton onClick={() => setIsBookmarked(!isBookmarked)}>
                        <DeskBookMarkButtonImg isBookmarked={isBookmarked} />
                        <span>
                            {
                                isBookmarked ? 'BookMarked' : 'Bookmark'
                            }
                        </span>
                    </DeskBookMarkButton>
                </ButtonSection>
            </MainCardInner>
        </MainCardBody>
    )
}



export default MainCard
