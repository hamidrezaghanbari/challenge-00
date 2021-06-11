import styled from "styled-components"

export const AboutCardWrapper = styled.div`
    border-radius: 15px;
    border: 1.2px solid #d8d8d8;
    margin: 20px 0;
    padding: 20px 25px;

    & > * {
        opacity: ${({ display }) => display === 'none' ? '0.5' : ''};
    }
`

export const AboutTop = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 700px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
`

export const AboutBottom = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 700px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
`


export const AboutTitle = styled.h2`
    font-family: CommissionerBold;
    font-size: 17px;

    
`
export const AboutDesc = styled.span`
    color: #6ab8af;
    display: inline-block;
    margin-top: 10px;

    @media only screen and (min-width: 700px) {
        margin-top: 0;
    }
`
export const AboutText = styled.p`
    color: #7e7e7e;
    padding: 25px 0;
    line-height: 1.5;
`

export const AboutPriceSec = styled.div`
    display: flex;
    align-items: center;
    & > span {
        color: #7e7e7e;
        display: inline-block;
        margin-left: 10px;
    }
`
export const AboutPrice = styled.b`
    font-family: CommissionerBold;
    font-size: 26px;
`
export const AboutButton = styled.button`
    background-color: #3cb4ab;
    color: white;
    font-family: CommissionerBold;
    font-size: 17px;
    border-radius: 30px;
    height: 50px;
    width: 170px;
    margin: 20px 0;
    cursor: pointer;

    &:hover {
        background-color: #157a74;
    }
`
