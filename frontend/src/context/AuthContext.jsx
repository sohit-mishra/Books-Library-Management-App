import { createContext, useState, useEffect } from 'react';
import api from '@/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await api.get('/api/auth/me');
      setUser(res.data);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


  const logout = async () => {
    await api.get('/api/auth/logout');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
