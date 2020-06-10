import React, { useState, useEffect, useCallback, useRef } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  MdArrowUpward,
  MdArrowDownward,
  MdAttachMoney,
  MdMoneyOff,
} from 'react-icons/md';

import api from '../../services/api';

import SideMenu from '../../components/SideMenu';
import OnboardHint from '../../components/OnboardHint';

import TransactionList from './components/TransactionList';
import Header from './components/Header';

import { Container, Content, Balances, Card } from './styles';
import formatValue from '../../utils/formatValue';

interface Balance {
  income: number;
  outcome: number;
  total: number;

  formatedIncome: string;
  formatedOutcome: string;
  formatedTotal: string;
}

interface TransactionOwnerDTO {
  id: string;
  name: string;
}

export interface TransactionDTO {
  id: string;
  title: string;
  description: string;
  date: Date;
  value: number;
  type: 'income' | 'outcome';
  user?: TransactionOwnerDTO;

  formatedValue: string;
  formatedDate: string;
}

interface GetBalanceResponse {
  balance: Balance;
  transactions: TransactionDTO[];
}

const Dashboard: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [withScrollTop, setWithScrollTop] = useState(false);

  const [currenteDate, setCurrentDate] = useState(new Date());

  const [balance, setBalance] = useState<Balance>();
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);

  const handleScroll = useCallback(() => {
    if (contentRef.current) {
      const scrolled = contentRef.current.scrollTop >= 126;

      setWithScrollTop(() => scrolled);
    }
  }, []);

  const handlePrevMonth = useCallback(() => {
    setCurrentDate((state) => subMonths(state, 1));
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentDate((state) => addMonths(state, 1));
  }, []);

  useEffect(() => {
    async function getData(): Promise<void> {
      try {
        const res = await api.get<GetBalanceResponse>('/v1/transactions', {
          params: {
            year: currenteDate.getFullYear(),
            month: currenteDate.getMonth() + 1,
          },
        });

        setBalance({
          ...res.data.balance,
          formatedIncome: formatValue(res.data.balance.income),
          formatedOutcome: formatValue(res.data.balance.outcome),
          formatedTotal: formatValue(res.data.balance.total),
        });

        setTransactions(
          res.data.transactions.map((x) => ({
            ...x,
            formatedValue: formatValue(x.value),
            formatedDate: format(new Date(x.date), "dd 'de' MMMM", {
              locale: ptBR,
            }),
          })),
        );
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [currenteDate]);

  return (
    <Container>
      <SideMenu />

      <Content ref={contentRef} onScroll={handleScroll}>
        <Header
          date={currenteDate}
          onPrev={handlePrevMonth}
          onNext={handleNextMonth}
        />

        <Balances showBorder={withScrollTop}>
          <Card>
            <span>Gastos do mês</span>
            <strong>{balance?.formatedOutcome}</strong>
            <MdArrowUpward size={24} />
          </Card>

          <Card>
            <span>Entradas do mês</span>
            <strong>{balance?.formatedIncome}</strong>
            <MdArrowDownward size={24} />
          </Card>

          <Card>
            <span>Balanço do mês</span>
            <strong>{balance?.formatedTotal}</strong>
            <MdAttachMoney size={24} />
          </Card>
        </Balances>

        {transactions.length > 0 && (
          <TransactionList transactions={transactions} />
        )}

        {transactions.length === 0 && (
          <OnboardHint
            icon={MdMoneyOff}
            title="Você não possui contas neste mês"
            description="Quando você as tiver elas aparecerão aqui."
          />
        )}
      </Content>
    </Container>
  );
};

export default Dashboard;
