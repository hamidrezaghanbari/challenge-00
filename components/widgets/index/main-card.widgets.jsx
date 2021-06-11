import styled from "styled-components"

export const MainCardBody = styled.div`
    height: 45vh;
    align-items: center;

    @media only screen and (min-width: 700px) {
        height: 40vh;
    }
`

export const MainCardTitle = styled.div`
    background-image: url('/images/logo-mastercraft.svg');
    background-size: cover;
    width: 60px;
    height: 60px;
    margin-top: -30px;
`

export const MainCardInner = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 700px) {
        width: 90%;
    }
`

export const InnerTopText = styled.h1`
    text-align: center;
    font-family: CommissionerBold;
`

export const InnerDesc = styled.p`
    color: #898989;
    margin-top: 25px;
    text-align: center;
    padding: 0 25px;
    line-height: 1.8;
`

export const ButtonSection = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0 25px;

    @media only screen and (min-width: 700px) {
        padding: 20px 0 0 0;
        justify-content: space-between;
    }
`

export const BookButton = styled.button`
    height: 50px;
    color: white;
    background-color: #3cb3ab;
    border-radius: 30px;
    width: 70%;
    max-width: 200px;
    font-family: CommissionerBold;
    font-size: 16px;
    letter-spacing: 0.8px;
    cursor: pointer;

    &:hover {
        background-color: #157a74;
    }
`

export const BookMarkButton = styled.div`
    width: 50px;
    height:  50px;
    background-image: ${({ isBookmarked }) => isBookmarked ? "url('/images/icon-check.svg')" : "url('/images/icon-bookmark.svg')"};
    background-size: cover;
    cursor: pointer;

    @media only screen and (min-width: 700px) {
        display: none;
    }
`

export const DeskBookMarkButtonImg = styled.div`
    display: none;

    @media only screen and (min-width: 700px) {
        display: block;
        width: 50px;
        height:  50px;
        background-image: ${({ isBookmarked }) => isBookmarked ? "url('/images/icon-check.svg')" : "url('/images/icon-bookmark.svg')"};
        background-size: cover;
        cursor: pointer;
    }
`

export const DeskBookMarkButton = styled.div`
    display: none;
    cursor: pointer;


    @media only screen and (min-width: 700px) {
        display: flex;
        width: 200px;
        height: 50px;
        background-color: #f4f4f4;
        border-radius: 25px;

        display: flex;
        align-items: center;
        
        & > span {
            text-align: center;
            margin-left: 25px;
            color: ${({ isBookmarked }) => isBookmarked ? '#157a74' : '#353535'};
        }
    }
`