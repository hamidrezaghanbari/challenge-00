import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CloseBtn, OfferModalContent, OfferModalDesc, OfferModalTitle, OffersModalWrapper } from "../widgets/index/offers-modal.widgets"
import OfferCard from "./offer-card"

const OffersModal = ({ showModal, hideOffers }) => {
    return (
        <OffersModalWrapper show={showModal} className="modal-back">
            <OfferModalContent className="modal">
                <OfferModalTitle>
                    Back this project
            </OfferModalTitle>
                <OfferModalDesc>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world!
            </OfferModalDesc>
                <CloseBtn onClick={() => hideOffers()}>
                    <FontAwesomeIcon icon={faTimes} />
                </CloseBtn>


                {/* section for offers  */}
                <OfferCard />
            </OfferModalContent>
        </OffersModalWrapper>
    )
}



export default OffersModal
