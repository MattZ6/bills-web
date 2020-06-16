import React, { HTMLAttributes } from 'react';

import { ITransactionDTO } from '../../services/transactions';

import Transaction from './Transaction';

import { Container } from './styles';

interface TransactionListProps extends HTMLAttributes<HTMLDivElement> {
  transactions: ITransactionDTO[];
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
