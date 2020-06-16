import React, { useMemo } from 'react';
import { isSameYear, format, addMonths, subMonths } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';

interface MonthHeaderProps {
  overline: string;
  date: Date;
  onNext(): void;
  onPrev(): void;
}

const MonthHeader: React.FC<MonthHeaderProps> = ({
  date,
  overline,
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
