import React, {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
  useEffect,
} from 'react';

import api from '../services/api';

interface Profile {
  id: string;
  name: string;
  username: string;
  first_name: string;
  is_admin: boolean;
}

interface ProfileContextData {
  profile: Profile | undefined;
}

const ProfileContext = createContext<ProfileContextData>(
  {} as ProfileContextData,
);

const ProfileProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Profile>();

  const getProfile = useCallback(async () => {
    const response = await api.get<Profile>('/v1/profile');

    const [first_name] = response.data.name.split(' ');

    setData({ ...response.data, first_name });
  }, []);

  const profile = useMemo(() => {
    return data;
  }, [data]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

function useProfile(): ProfileContextData {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error('useProfile must be used whitin an ProfileProvider');
  }

  return context;
}

export { ProfileProvider, useProfile };
