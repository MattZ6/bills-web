import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import { Container, Content } from './styles';

const CreateBill: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <header>
            <Link to="/"> Voltar</Link>
          </header>

          <form>
            <h1>Nova conta</h1>

            <input type="text" placeholder="Título da compra" />

            <div>
              <input type="text" placeholder="Categoria" />
              <input type="text" placeholder="Valor" />
            </div>

            <input type="text" placeholder="Data" />

            <Button>Salvar</Button>
          </form>
        </div>
      </Content>
    </Container>
  );
};

export default CreateBill;
