import { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  role: 'employee' | 'hr';
  name: string;
  phone?: string;
  address?: string;
  hasCompletedFirstLogin: boolean;
}

export interface FirstLoginData {
  name: string;
  phone: string;
  address: string;
  idProof: File | null;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string, role: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  completeFirstLogin: (userData: FirstLoginData) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users database
const MOCK_USERS = [
  {
    id: '1',
    email: 'employee@company.com',
    password: 'password123',
    role: 'employee' as const,
    name: 'John Doe',
    phone: '+1234567890',
    address: '123 Main St, City, State',
    hasCompletedFirstLogin: true
  },
  {
    id: '2',
    email: 'hr@company.com',
    password: 'password123',
    role: 'hr' as const,
    name: 'Jane Smith',
    phone: '+1987654321',
    address: '456 Admin Ave, City, State',
    hasCompletedFirstLogin: true
  },
  {
    id: '3',
    email: 'newuser@company.com',
    password: 'password123',
    role: 'employee' as const,
    name: 'New Employee',
    hasCompletedFirstLogin: false
  },
  {
    id: '4',
    email: 'test@example.com',
    password: 'password123',
    role: 'employee' as const,
    name: 'Test User',
    phone: '+1122334455',
    address: '789 Test Ave, Test City',
    hasCompletedFirstLogin: true
  }
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: string): Promise<boolean> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const foundUser = MOCK_USERS.find(
      u => u.email === email && 
           u.password === password && 
           u.role === role
    );

    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        email: foundUser.email,
        role: foundUser.role,
        name: foundUser.name,
        phone: foundUser.phone,
        address: foundUser.address,
        hasCompletedFirstLogin: foundUser.hasCompletedFirstLogin,
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const completeFirstLogin = async (userData: FirstLoginData): Promise<boolean> => {
    if (user) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));

      const updatedUser = {
        ...user,
        name: userData.name,
        phone: userData.phone,
        address: userData.address,
        hasCompletedFirstLogin: true,
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      login, 
      logout, 
      updateUser, 
      completeFirstLogin 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}