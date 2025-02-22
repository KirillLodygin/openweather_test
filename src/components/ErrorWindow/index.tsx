import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import cityStore from '../../stores/CityStore';
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  CloseIcon,
  ModalBody,
  ButtonsGroup,
  OkButton,
  Title,
} from './styled';

const ErrorWindow: FC = () => {
  const { errorMassage } = cityStore;
  const handleClose = () => {
    cityStore.onShowError(false);
    cityStore.getErrorMessage('');
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <Title>{'There\'s a problem!'}</Title>
          <CloseIcon onClick={handleClose}>&times;</CloseIcon>
        </ModalHeader>
        <ModalBody>{errorMassage}</ModalBody>
        <ButtonsGroup>
          <OkButton onClick={handleClose}>Ok</OkButton>
        </ButtonsGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default observer(ErrorWindow);
