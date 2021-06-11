import styled from "styled-components"

export const HeaderSection = styled.header`
    height: 70vh;
    width: 100%;
    background-image: url('/images/image-hero-mobile.jpg');
    background-size: 100% 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media only screen and (min-width: 700px) {
        background-image: url('/images/image-hero-desktop.jpg');
    }
`

export const TopHeader = styled.div`
    width: 90vw;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 700px) {
        width: 70vw;
    }
`

export const HamburgerMenu = styled.div`
    cursor: pointer;

    @media only screen and (min-width: 700px) {
        display: none;
    }
`

export const LogoTitle = styled.div`
    color: white;
    font-family: CommissionerBold;
    font-size: 22px;
    cursor: pointer;
`

export const DesktopMenu = styled.div`
    display: none;
    
    @media only screen and (min-width: 700px) {
        display: flex;
    }
`

export const DesktopMenuItem = styled.span`
    color: white;
    padding-left: 4vw;
`