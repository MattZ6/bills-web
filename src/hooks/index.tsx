import React from 'react';

import { AuthProvider } from './auth';
import { SnackbarProvider } from './snackbar';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <SnackbarProvider>{children}</SnackbarProvider>
  </AuthProvider>
);

export default AppProvider;
