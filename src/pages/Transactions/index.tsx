import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import { addMonths, subMonths } from 'date-fns';
import {
  MdArrowUpward,
  MdArrowDownward,
  MdAttachMoney,
  MdMoneyOff,
  MdErrorOutline,
} from 'react-icons/md';

import {
  getMonthBalance,
  IBalanceDTO,
  ITransactionDTO,
} from '../../services/transactions';

import ModalAddTransation from '../../components/ModalAddTransation';
import MonthHeader from '../../components/MonthHeader';
import HeaderCard from '../../components/HeaderCard';
import TransactionList from '../../components/TransactionList';
import OnboardHint from '../../components/OnboardHint';

import { Container, Balances } from './styles';

const Transactions: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [modalOpen, setModalUpen] = useState(true);

  const [withScrollTop, setWithScrollTop] = useState(false);

  const [currenteDate, setCurrentDate] = useState(new Date());

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [balance, setBalance] = useState<IBalanceDTO>();
  const [transactions, setTransactions] = useState<ITransactionDTO[]>([]);

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

  const handleNewClicked = useCallback(() => {
    setModalUpen((state) => !state);
  }, []);

  const isEmpty = useMemo(() => {
    return !loading && !error && transactions.length === 0;
  }, [loading, error, transactions.length]);

  const showTransactions = useMemo(() => {
    return !loading && !error && transactions.length > 0;
  }, [loading, error, transactions.length]);

  const getTransactions = useCallback(async () => {
    setLoading(() => true);
    setError(() => false);

    try {
      const data = await getMonthBalance({
        year: currenteDate.getFullYear(),
        month: currenteDate.getMonth() + 1,
      });

      setBalance(data.balance);

      setTransactions(data.transactions);
    } catch (err) {
      setError(() => true);
    } finally {
      setTimeout(() => {
        setLoading((state) => (state ? false : state));
      }, 500);
    }
  }, [currenteDate]);

  useEffect(() => {
    // getTransactions();
  }, [getTransactions]);

  return (
    <Container ref={contentRef} onScroll={handleScroll}>
      <MonthHeader
        overline="Contas de"
        date={currenteDate}
        onNew={handleNewClicked}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
      />

      <Balances showBorder={withScrollTop}>
        <HeaderCard
          overline="Total de compras no mês"
          title={balance?.formatedOutcome}
          icon={MdArrowUpward}
        />

        <HeaderCard
          overline="Total já pago no mês"
          title={balance?.formatedIncome}
          icon={MdArrowDownward}
        />

        <HeaderCard
          overline="Balanço do mês"
          title={balance?.formatedTotal}
          icon={MdAttachMoney}
        />
      </Balances>

      <ModalAddTransation isOpen={modalOpen} setIsOpen={handleNewClicked} />

      {showTransactions && <TransactionList transactions={transactions} />}

      {isEmpty && (
        <OnboardHint
          icon={MdMoneyOff}
          title="Você não possui contas neste mês"
          description="Quando você as tiver elas aparecerão aqui."
        />
      )}

      {error && (
        <OnboardHint
          icon={MdErrorOutline}
          title="Ops, algo deu errado"
          description="Não foi possível carregar suas contas. Por favor, tente novamente."
          buttonText="TENTAR NOVAMENTE"
          onClick={getTransactions}
        />
      )}
    </Container>
  );
};

export default Transactions;
