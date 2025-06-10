// context/AuthContext.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type User = {
  username: string;
  email: string;
  phone?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  refresh: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refresh: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/me');
      const data = await res.json();
      setUser(data.user || null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refresh: fetchUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
