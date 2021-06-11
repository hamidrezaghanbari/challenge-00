import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DesktopMenu, DesktopMenuItem, HamburgerMenu, HeaderSection, LogoTitle, TopHeader } from "../widgets/index/header.widgets"

const Header = () => {
    return (
        <HeaderSection>
            <TopHeader>
                <LogoTitle>
                    crowdfound
                </LogoTitle>
                <HamburgerMenu>
                    <FontAwesomeIcon icon={faBars} style={{fontSize: '25px', color: 'white'}} />
                </HamburgerMenu>

                <DesktopMenu>
                    <DesktopMenuItem>
                        About
                    </DesktopMenuItem>
                    <DesktopMenuItem>
                        Discover
                    </DesktopMenuItem>
                    <DesktopMenuItem>
                        Get Started
                    </DesktopMenuItem>
                </DesktopMenu>
            </TopHeader>
        </HeaderSection>
    )
}



export default Header
