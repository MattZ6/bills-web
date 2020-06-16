import React from 'react';

import { AuthProvider } from './auth';
import { SnackbarProvider } from './snackbar';
import { ProfileProvider } from './profile';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <SnackbarProvider>
      <ProfileProvider>{children}</ProfileProvider>
    </SnackbarProvider>
  </AuthProvider>
);

export default AppProvider;
