import React, { useEffect, useState, useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { MdPersonOutline, MdAssignmentInd, MdCameraAlt } from 'react-icons/md';
import * as Yup from 'yup';

import { getUsers, IUserDTO } from '../../services/users';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useSnackbar } from '../../hooks/snackbar';

import { Container, Content, AvatarInput, Footer } from './styles';

const Users: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [users, setUsers] = useState<IUserDTO[]>([]);

  const { showSnackbar } = useSnackbar();

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .trim()
          .min(3, 'No mínimo 3 caracteres')
          .required('O nome é obrigatório'),
        username: Yup.string()
          .trim()
          .min(6, 'No mínimo 6 caracteres')
          .required('O usuário é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current?.setErrors({});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(error));
      }
    }
  }, []);

  useEffect(() => {
    async function loadData(): Promise<void> {
      try {
        const data = await getUsers();

        setUsers(data);
      } catch (error) {
        showSnackbar({
          text: 'Não foi possível buscar os usuários',
          type: 'error',
          showDissmissButton: true,
        });
      }
    }

    loadData();
  }, [showSnackbar]);

  return (
    <Container>
      <Content>
        <header>
          <h1>Usuários</h1>

          <div>asd</div>
        </header>

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img
                src="https://avatars3.githubusercontent.com/u/30813457?s=460&u=2912ba66b982395e91ea3d8b14cfa4f52e1cb986&v=4"
                alt="avatar"
              />

              <div>
                <strong>{user.name}</strong>
                <span>{user.username}</span>
              </div>
            </li>
          ))}
        </ul>
      </Content>

      <aside>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <AvatarInput>
              <img
                src="https://avatars3.githubusercontent.com/u/30813457?s=460&u=2912ba66b982395e91ea3d8b14cfa4f52e1cb986&v=4"
                alt="avatar"
              />

              <label htmlFor="avatar">
                <MdCameraAlt />

                <input type="file" accept="image/*" id="avatar" tabIndex={-1} />
              </label>
            </AvatarInput>

            <Input
              name="name"
              autoCapitalize="false"
              icon={MdPersonOutline}
              placeholder="Nome de usuário"
            />

            <Input
              name="username"
              autoCapitalize="false"
              icon={MdAssignmentInd}
              placeholder="Nome de usuário"
            />
          </div>

          <Footer>
            <Button type="submit" clear>
              SALVAR
            </Button>
          </Footer>
        </Form>
      </aside>
    </Container>
  );
};

export default Users;
