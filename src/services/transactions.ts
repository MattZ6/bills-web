import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from './api';

import formatValue from '../utils/formatValue';

interface IGetMonthBalanceRequestDTO {
  year: number;
  month: number;
}

interface IGetUsersMonthBalanceRequestDTO {
  user_id: string;
  year: number;
  month: number;
}

export interface IBalanceDTO {
  income: number;
  outcome: number;
  total: number;

  formatedIncome: string;
  formatedOutcome: string;
  formatedTotal: string;
}

export interface IOwnerDTO {
  id: string;
  name: string;
}

export interface ITransactionDTO {
  id: string;
  title: string;
  description: string;
  date: Date;
  value: number;
  type: 'income' | 'outcome';
  user?: IOwnerDTO;

  formatedValue: string;
  formatedDate: string;
}

interface IBalanceResponseDTO {
  balance: IBalanceDTO;
  transactions: ITransactionDTO[];
}

function getTransformedData(data: IBalanceResponseDTO): IBalanceResponseDTO {
  return {
    balance: {
      ...data.balance,
      formatedIncome: formatValue(data.balance.income),
      formatedOutcome: formatValue(data.balance.outcome),
      formatedTotal: formatValue(data.balance.total),
    },
    transactions: data.transactions.map((x) => ({
      ...x,
      formatedValue: formatValue(x.value),
      formatedDate: format(new Date(x.date), "dd 'de' MMMM", { locale: ptBR }),
    })),
  };
}

export function getMonthBalance({
  year,
  month,
}: IGetMonthBalanceRequestDTO): Promise<IBalanceResponseDTO> {
  return new Promise((resolve, reject) => {
    api
      .get<IBalanceResponseDTO>('/v1/transactions', {
        params: {
          year,
          month,
        },
      })
      .then((res) => {
        resolve(getTransformedData(res.data));
      })
      .catch(reject);
  });
}

export function getUsersMonthBalance({
  user_id,
  year,
  month,
}: IGetUsersMonthBalanceRequestDTO): Promise<IBalanceResponseDTO> {
  return new Promise((resolve, reject) => {
    api
      .get<IBalanceResponseDTO>(`/v1/users/${user_id}/transactions`, {
        params: {
          year,
          month,
        },
      })
      .then((res) => {
        resolve(getTransformedData(res.data));
      })
      .catch(reject);
  });
}
