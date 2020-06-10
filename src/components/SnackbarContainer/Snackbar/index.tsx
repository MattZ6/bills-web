import React, { useEffect } from 'react';

import { SnackbarMessage, useSnackbar } from '../../../hooks/snackbar';

import { Container } from './styles';

interface SnackbarProps {
  data: SnackbarMessage;
  style: object;
}

const Snackbar: React.FC<SnackbarProps> = ({ data, style }) => {
  const { dismissSnackbar } = useSnackbar();

  useEffect(() => {
    const timer = setTimeout(() => {
      dismissSnackbar(data.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [data.id, dismissSnackbar]);

  return (
    <Container
      type={data.type}
      dissmissable={Number(!!data.showDissmissButton)}
      style={style}
    >
      <div>
        <p>{data.text}</p>
      </div>

      {data.showDissmissButton && (
        <button type="button" onClick={() => dismissSnackbar(data.id)}>
          OK
        </button>
      )}
    </Container>
  );
};

export default Snackbar;
