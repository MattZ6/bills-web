import React, { useMemo } from 'react';
import { isSameYear, format, addMonths, subMonths } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { MdAddCircle, MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Button from '../Button';

import { Container } from './styles';

interface MonthHeaderProps {
  overline: string;
  date: Date;
  onNew?(): void;
  onNext(): void;
  onPrev(): void;
}

const MonthHeader: React.FC<MonthHeaderProps> = ({
  date,
  overline,
  onNew,
  onPrev,
  onNext,
}) => {
  const formatedMonth = useMemo(() => {
    const stringFormat = isSameYear(new Date(), date) ? 'MMMM' : 'MMMM yyyy';

    return format(date, stringFormat, { locale: ptBR });
  }, [date]);

  const nextMonthLabel = useMemo(() => {
    return format(addMonths(date, 1), 'MMMM', { locale: ptBR });
  }, [date]);

  const prevMonthLabel = useMemo(() => {
    return format(subMonths(date, 1), 'MMMM', { locale: ptBR });
  }, [date]);

  return (
    <Container>
      <div>
        <span>{overline}</span>
        <h1>{formatedMonth}</h1>
      </div>

      {onNew && (
        <Button
          outline
          leftIcon={MdAddCircle}
          style={{ marginRight: 8 }}
          onClick={onNew}
        >
          NOVO
        </Button>
      )}

      <nav>
        <button type="button" onClick={onPrev}>
          <MdChevronLeft size={24} />
          <strong>{prevMonthLabel}</strong>
        </button>

        <button type="button" onClick={onNext}>
          <strong>{nextMonthLabel}</strong>
          <MdChevronRight size={24} />
        </button>
      </nav>
    </Container>
  );
};

export default React.memo(MonthHeader);
