import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MdPersonOutline, MdLockOutline } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { SignInCredentials, useAuth } from '../../hooks/auth';
import { useSnackbar } from '../../hooks/snackbar';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const { showSnackbar } = useSnackbar();

  const handleSubmit = useCallback(
    async (data: SignInCredentials) => {
      try {
        const schema = Yup.object().shape({
          username: Yup.string()
            .required('O usuário é obrigatório')
            .min(6, 'No mínimo 6 caracteres'),
          password: Yup.string().required('A senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        formRef.current?.setErrors({});

        setLoading(true);

        await signIn(data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
        } else if (error.response) {
          if (error.response.status === 404) {
            formRef.current?.setErrors({
              username: error.response.data.message,
            });
          } else if (error.response.status === 422) {
            formRef.current?.setErrors({
              password: error.response.data.message,
            });
          } else {
            showSnackbar({
              type: 'error',
              text:
                'Falha ao tentar efetuar o login. Por favor, tente novamente',
              showDissmissButton: true,
            });
          }
        } else {
          showSnackbar({
            type: 'error',
            text: 'Falha ao tentar efetuar o login. Por favor, tente novamente',
            showDissmissButton: true,
          });
        }

        setLoading(false);
      }
    },
    [signIn, showSnackbar],
  );

  useEffect(() => {
    const input = formRef.current?.getFieldRef('username') as HTMLInputElement;

    input.focus();
  }, []);

  return (
    <Container>
      <div>
        <h1>
          Suas contas
          <br />
          descomplicadas.
        </h1>
      </div>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Login</h2>

          <Input
            name="username"
            autoCapitalize="false"
            icon={MdPersonOutline}
            placeholder="Nome de usuário"
            disabled={loading}
            disabledKeys={[' ', ',', '.', '-']}
          />

          <Input
            name="password"
            type="password"
            icon={MdLockOutline}
            placeholder="Senha"
            disabled={loading}
          />

          <Button type="submit" disabled={loading}>
            ENTRAR
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
