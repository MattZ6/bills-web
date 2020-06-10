import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import SnackbarContainer from '../components/SnackbarContainer';

export interface SnackbarMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  text: string;
  showDissmissButton?: boolean;
}

interface SnackbarContextData {
  showSnackbar(message: Omit<SnackbarMessage, 'id'>): void;
  dismissSnackbar(id: string): void;
}

const SnackbarContext = createContext<SnackbarContextData>(
  {} as SnackbarContextData,
);

const SnackbarProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<SnackbarMessage[]>([]);

  const showSnackbar = useCallback(
    ({ type, text, showDissmissButton }: Omit<SnackbarMessage, 'id'>) => {
      const id = uuid();

      const toast: SnackbarMessage = {
        id,
        type,
        text,
        showDissmissButton,
      };

      setMessages((toasts) => [toast, ...toasts]);
    },
    [],
  );

  const dismissSnackbar = useCallback((id: string) => {
    setMessages((toasts) => toasts.filter((x) => x.id !== id));
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar, dismissSnackbar }}>
      {children}
      <SnackbarContainer messages={messages} />
    </SnackbarContext.Provider>
  );
};

function useSnackbar(): SnackbarContextData {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error('useSnackbar must be used within an ToastProvider');
  }

  return context;
}

export { useSnackbar, SnackbarProvider };
