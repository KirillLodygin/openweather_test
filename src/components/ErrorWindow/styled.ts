import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

export const ModalContent = styled.div`
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  box-sizing: border-box;
  border-radius: 5px;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`

export const CloseIcon = styled.span`
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: red;
  }
`

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`

export const ModalBody = styled.p`
  margin: 20px 0;
  font-size: 16px;
  line-height: 1.5;
`

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`

export const OkButton = styled(Button)`
  background-color: #008000;
  color: white;
`
