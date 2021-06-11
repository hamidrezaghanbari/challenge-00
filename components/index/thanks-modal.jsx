import Image from 'next/image'
import { ModalButton, ModalDesc, ModalImg, ModalTitle, ThanksModalContent, ThanksModalHolder } from '../widgets/index/thanks-modal.widgets'

const ThanksModal = ({ showThanksModal, showOffers }) => {
  return (
    <ThanksModalHolder className="modal-back" show={showThanksModal}>
      <ThanksModalContent className="modal">
        <ModalImg>
          <Image src="/images/icon-check.svg" alt="check svg" height={60} width={60} />

        </ModalImg>
        <ModalTitle>
          Thanks for your support!
          </ModalTitle>
        <ModalDesc>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. you will get an email once our compaign completed.
          </ModalDesc>
        <ModalButton onClick={() => showOffers()}>
          Got it!
          </ModalButton>
      </ThanksModalContent>
    </ThanksModalHolder>
  )
}



export default ThanksModal
