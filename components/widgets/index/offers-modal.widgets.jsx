import styled from "styled-components"

export const OffersModalWrapper = styled.div`
    display: ${({ show }) => show ? 'block' : 'none'};
`
export const OfferModalContent = styled.div`
    padding: 25px;
    width: 90vw;

    @media only screen and (min-width: 700px) {
        width: 700px !important;
    }
`

export const OfferModalTitle = styled.b`
    font-family: CommissionerBold;
    font-size: 18px;
`
export const OfferModalDesc = styled.p`
    padding: 20px 0;
    color: #888;
    line-height: 1.5;
`
export const CloseBtn = styled.span`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`