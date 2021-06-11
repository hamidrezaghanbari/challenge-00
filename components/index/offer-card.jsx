import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { OfferBodyHeader, OfferBodyText, OfferCardBody, OfferCardBottom, OfferCardBottomRow, OfferCardBtn, OfferCardBtnGroup, OfferCardDivider, OfferCardPriceBtn, OfferCardToggler, OfferCardTop, OfferCardWrapper, OfferHeaderDesc, OfferHeaderLeft, OfferHeaderRight, OfferHeaderTitle, OfferPriceMobile, PriceBarSec } from "../widgets/index/offer-card.widgets"

const OfferCard = () => {
    const [showDetail, setShowDetail] = useState(false)


    return (
        <OfferCardWrapper>
            <OfferCardTop>
                <OfferCardToggler>
                    <input onClick={() => setShowDetail(!showDetail)} type="radio" checked={showDetail ? 1 : 0} />
                </OfferCardToggler>
                <OfferCardBody>
                    <OfferBodyHeader>
                        <OfferHeaderLeft>
                            <OfferHeaderTitle onClick={() => setShowDetail(!showDetail)}>
                                Pledge with no reward
                            </OfferHeaderTitle>
                            <OfferHeaderDesc>
                                Pledge $25 or more
                            </OfferHeaderDesc>
                        </OfferHeaderLeft>
                        <OfferHeaderRight>
                            <b>101</b>
                            <span>left</span>
                        </OfferHeaderRight>

                    </OfferBodyHeader>
                    <OfferBodyText>
                        You get an ergonomic stand made of natural bamboo. You helped us launch our promotional campaign, and you will be added to a special Backer member list.
                    </OfferBodyText>
                    <OfferPriceMobile>
                        <b>101</b>
                        <span>left</span>
                    </OfferPriceMobile>
                </OfferCardBody>
            </OfferCardTop>
            {
                showDetail && (
                    <>
                        <OfferCardDivider />
                        <OfferCardBottom>
                            <OfferCardBottomRow>
                                <span>Enter your pledge</span>
                                <OfferCardBtnGroup>

                                    <OfferCardPriceBtn>
                                        <FontAwesomeIcon icon={faDollarSign} style={{ color: '#888' }} />
                                        <PriceBarSec>
                                            <b>25</b>
                                            <span></span>
                                        </PriceBarSec>
                                    </OfferCardPriceBtn>
                                    <OfferCardBtn>Confirm</OfferCardBtn>
                                </OfferCardBtnGroup>
                            </OfferCardBottomRow>
                        </OfferCardBottom>
                    </>
                )
            }
        </OfferCardWrapper>
    )
}



export default OfferCard
