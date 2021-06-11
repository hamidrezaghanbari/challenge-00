import styled from "styled-components"

export const StatisticCardHolder = styled.div`
  align-items: center;
`

export const StaticsSection = styled.div`
    @media only screen and (min-width: 700px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`

export const StaticBlock = styled.div`
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 700px) {
        height: 20vh;
        width: 33%;
        align-items: start;
        margin-left: 5%;
    }
`

export const StaticCount = styled.h3`
    font-family: CommissionerBold;
    font-size: 25px;
`

export const StaticDesc = styled.span`
    font-size: 20px;
    color: #8b8b8b;
    margin-top: 12px;
`

export const Divider = styled.div`
    height: 3px;
    width: 25vw;
    background-color: #e4e4e4;
    margin: 0  auto;

    @media only screen and (min-width: 700px) {
        width: 3px;
        height: 12vh;

        display: ${({display}) => display === 'none' ? 'none' : ''};
        margin: auto 0;
    }
`



export const ProgressSection = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StaticProgress = styled.div`
    width: 90%;
    height: 13px;
    border-radius: 15px;
    background-color: #f4f4f4;
    margin-top: 20px;
    position: relative;
`

export const ProgressComplete = styled.div`
    width: 90%;
    height: 13px;
    border-radius: 15px;
    background-color: #3cb4ab;
    position: absolute;
    top: 0;
    left: 0;

    &:hover {
        background-color: #157a74;
    }
`