import React, { HTMLAttributes } from 'react';
import { MdShoppingBasket, MdLocalOffer } from 'react-icons/md';

import { TransactionDTO } from '../..';

import { Container, Content, User, Price } from './styles';

interface TransactionProps extends HTMLAttributes<HTMLDivElement> {
  first?: boolean;
  last?: boolean;
  transaction: TransactionDTO;
}

const Transaction: React.FC<TransactionProps> = ({
  transaction,
  first,
  last,
}) => {
  return (
    <Container
      isIncome={transaction.type === 'income'}
      isFirst={!!first}
      isLast={!!last}
    >
      <aside>
        {transaction.type === 'income' ? (
          <MdLocalOffer size={24} />
        ) : (
          <MdShoppingBasket size={24} />
        )}
      </aside>

      <Content>
        <small>Itáu</small>
        <strong>{transaction.description}</strong>
        <div>
          {transaction.title && (
            <span>
              {transaction.title} <b>•</b>
            </span>
          )}
          <time>{transaction.formatedDate}</time>
        </div>

        {transaction.user && (
          <User>
            <img
              src="https://avatars3.githubusercontent.com/u/30813457?s=460&u=2912ba66b982395e91ea3d8b14cfa4f52e1cb986&v=4"
              alt={transaction.user.name}
            />
            <strong>{transaction.user.name}</strong>
          </User>
        )}
      </Content>

      <span>1/4</span>

      <Price isIncome={transaction.type === 'income'}>
        {transaction.type === 'income' ? '- ' : ''}
        {transaction.formatedValue}
      </Price>
    </Container>
  );
};

export default React.memo(Transaction);
