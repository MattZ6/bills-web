import React, {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
} from 'react';

import api from '../services/api';
import storage from '../services/localStorage';

const ACCESS_TOKEN = '@BillsToken:access_token';

interface AuthState {
  access_token: string;
}

export interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>(() => {
    const access_token = storage.get<string>(ACCESS_TOKEN);

    if (access_token) {
      api.defaults.headers.authorization = `Bearer ${access_token}`;

      return { access_token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async (proxy: SignInCredentials) => {
    const response = await api.post<AuthState>('/v1/sessions', proxy);

    const { access_token } = response.data;

    storage.set(ACCESS_TOKEN, access_token);

    api.defaults.headers.authorization = `Bearer ${access_token}`;

    setAuth({ access_token });
  }, []);

  const signOut = useCallback(() => {
    storage.remove(ACCESS_TOKEN);

    setAuth({} as AuthState);
  }, []);

  const isAuthenticated = useMemo(() => {
    return !!auth.access_token;
  }, [auth]);

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whitin an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
