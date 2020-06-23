import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import {
  MdClose,
  MdLocalOffer,
  MdTurnedInNot,
  MdToday,
  MdAttachMoney,
  MdPayment,
} from 'react-icons/md';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Header, Form, Footer, Row } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  // handleAddFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
}

interface ICreateTransactionDTO {
  title: string;
  description: string;
}

const ModalAddTransation: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const formRef = useRef<FormHandles>(null);

  const [submiting, setSubmiting] = useState(false);

  const handleSubmit = useCallback(async (data: ICreateTransactionDTO) => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string()
          .trim()
          .min(6, 'No mínimo 6 caracteres')
          .required('Campo obrigatório'),
        description: Yup.string()
          .trim()
          .min(6, 'No mínimo 6 caracteres')
          .required('Campo obrigatório'),
        date: Yup.string().trim().required('Campo obrigatório'),
        value: Yup.string().trim().required('Campo obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current?.setErrors({});

      setSubmiting(true);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(error));
      }

      setSubmiting(false);
    }
  }, []);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} disableClose={submiting}>
      <Header>
        <strong>Nova conta</strong>
        <span>Preencha todas as informações para prosseguir</span>

        <button type="button" onClick={setIsOpen}>
          <MdClose />
        </button>
      </Header>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <main>
          <Row>
            <Input
              name="title"
              placeholder="Nome original"
              disabled={submiting}
              icon={MdLocalOffer}
            />

            <button type="button">
              <img
                src="https://avatars3.githubusercontent.com/u/30813457?s=460&u=2912ba66b982395e91ea3d8b14cfa4f52e1cb986&v=4"
                alt="avatar"
              />

              <strong>Matheus Felipe Zanin</strong>
            </button>
          </Row>

          <Input
            name="description"
            placeholder="Uma breve descrição sobre a conta"
            disabled={submiting}
            icon={MdTurnedInNot}
          />

          <Row>
            <Input
              name="date"
              placeholder="Data da compra"
              disabled={submiting}
              icon={MdToday}
            />

            <Input
              name="value"
              placeholder="Valor da compra"
              disabled={submiting}
              icon={MdAttachMoney}
            />
          </Row>

          <Input
            name="bank"
            placeholder="Em qual cartão"
            disabled={submiting}
            icon={MdPayment}
          />
        </main>

        <Footer>
          <Button clear disabled={submiting} onClick={setIsOpen}>
            CANCELAR
          </Button>
          <Button clear type="submit" disabled={submiting}>
            SALVAR
          </Button>
        </Footer>
      </Form>
    </Modal>
  );
};

export default ModalAddTransation;
