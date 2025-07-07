import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  phone: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (phone: string, password: string) => void;
  signUp: (name: string, phone: string, password: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated on mount
  useEffect(() => {
    // In a real app, this would check for tokens in storage
    const checkAuth = async () => {
      try {
        // Simulate fetching from storage
        // If found, set user and authenticated state
        setIsAuthenticated(false);
        setUser(null);
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  const signIn = (phone: string, password: string) => {
    // In a real app, this would make an API call to authenticate
    // For demo, we'll just set a mock user
    const mockUser = {
      id: '123',
      name: '农机师傅',
      phone: phone,
    };

    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const signUp = (name: string, phone: string, password: string) => {
    // In a real app, this would register a new user via API
    // For demo, we'll just create and set a mock user
    const newUser = {
      id: Date.now().toString(),
      name,
      phone,
    };

    setUser(newUser);
    setIsAuthenticated(true);
  };

  const signOut = () => {
    // In a real app, this would clear tokens from storage
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};