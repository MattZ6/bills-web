import React, { HTMLAttributes } from 'react';

import Transaction from '../Transaction';
import { TransactionDTO } from '../..';

import { Container } from './styles';

interface TransactionListProps extends HTMLAttributes<HTMLDivElement> {
  transactions: TransactionDTO[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <Container>
      {transactions.map((bill, index) => (
        <Transaction
          key={bill.id}
          first={index === 0}
          last={index === transactions.length - 1}
          transaction={bill}
        />
      ))}
    </Container>
  );
};

export default React.memo(TransactionList);
