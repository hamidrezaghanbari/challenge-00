import styled from "styled-components"

export const ThanksModalHolder = styled.div`
  display: ${({ show }) => show ? 'block' : 'none'};
`

export const ThanksModalContent = styled.div`
  width: 90vw;

  @media only screen and (min-width: 700px) {
    width: 500px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`

export const ModalImg = styled.div`
  margin: 40px 0 20px 0;
`

export const ModalTitle = styled.h2`
  font-family: CommissionerBold;
`

export const ModalDesc = styled.p`
  padding: 20px;
  line-height: 1.5;
  color: #888;
`

export const ModalButton = styled.button`
  margin-bottom: 40px;
  height: 35px;
  width: 100px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: #3cb3ab;
  color: white;
  font-family: CommissionerRegular;
  font-size: 17px;
`