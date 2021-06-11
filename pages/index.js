import { useState } from "react"
import styled from "styled-components"
import AboutSection from "../components/index/about"
import Header from "../components/index/header"
import MainCard from "../components/index/main-card"
import StatisticCard from "../components/index/statistic-card"
import ThanksModal from "../components/index/thanks-modal"
import OffersModal from "../components/index/offers-modal"

export default function IndexPage() {
  const [showThanksModal, setShowThanksModal] = useState(false)
  const [showOffers, setShowOffers] = useState(false)

  const hideOffers = () => setShowOffers(false)

  return (
    <PageHolder>

      <IndexPageHolder>
        <Header />
        <Body>
          <MainCard setShowThanksModal={setShowThanksModal} />
          <StatisticCard />
          <AboutSection />
        </Body>
      </IndexPageHolder>

      <ThanksModal showOffers={() => setShowOffers(true)} showThanksModal={showThanksModal} />
      <OffersModal showModal={showOffers} hideOffers={hideOffers}  />
    </PageHolder>
  )
}

const IndexPageHolder = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PageHolder = styled.div`
  background-color: #fafafa;
  height: 2870px;

  @media only screen and (min-width: 700px) {
    height: 2200px;
  }
`

const Body = styled.div`
  position: absolute;
  top: 60vh;
`