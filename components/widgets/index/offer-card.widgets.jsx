import styled from "styled-components"

export const OfferCardWrapper = styled.div`
    border: 1px solid #888;
    border-radius: 8px;
`

export const OfferCardTop = styled.div`
    display: flex;
    padding: 20px 10px 0 20px;
`

export const OfferCardToggler = styled.div`
    width: 10%;
    margin-top: 2px;

    & > input {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`

export const OfferCardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px 20px 20px;
`

export const OfferBodyHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
export const OfferHeaderLeft = styled.div`
    display: flex;
`

export const OfferHeaderTitle = styled.h2`
    font-family: CommissionerBold;
    font-size: 16px;
    cursor: pointer;

   

    &:hover {
        color: #6ab8af;
    }
`

export const OfferHeaderDesc = styled.p`
    font-family: CommissionerRegular;
    font-size: 14px;
    margin-left: 20px;
    color: #6ab8af;

    display: none;

    @media only screen and (min-width: 700px) {
        display: inline-block;
    }
`
export const OfferHeaderRight = styled.div`
    & > span {
        color: #888;
    }

    & > b {
        margin-right: 10px;
        font-size: CommissionerBold;
    }

    display: none;
    
    @media only screen and (min-width: 700px) {
        display: inline-block;
    }
`
export const OfferPriceMobile = styled.div`
    & > span {
        color: #888;
    }

    & > b {
        margin-right: 10px;
        font-size: CommissionerBold;
    }

    display: inline-block;
    
    @media only screen and (min-width: 700px) {
        display: none;
    }
`
export const OfferBodyText = styled.p`
    padding: 10px 0;
    line-height: 1.5;
    color: #888;
`

export const OfferCardBottom = styled.div`
    width: 100%;
    padding: 20px 10px 10px 20px;
`

export const OfferCardDivider = styled.div`
    height: 1px;
    width: 100%;
    background-color: #c0bebe;    
`
export const OfferCardBottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
        color: #888;
    }
`

export const OfferCardBtnGroup = styled.div`
    display: flex;
    align-items: center;
`

export const OfferCardBtn = styled.button`
    background-color: #3cb4ab;
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    border-radius: 20px;
    color: white;
    font-family: CommissionerBold;

    &:hover {
        background-color: #157a74;
    }
`

export const OfferCardPriceBtn = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
    padding: 10px 25px;
    border-radius: 20px;
    border: 0.8px solid #3cb4ab;
`

export const PriceBarSec = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    & > b {
        font-family: CommissionerBold;
        margin-left: 5px;
    }

    & > span {
        display: inline-block;
        margin-left: 5px;
        width: 0.8px;
        height: 15px;
        background-color: #888;
    }
`