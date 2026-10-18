import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const mockUsers = [
  { id: "1", name: "Lab Staff", email: "staff@lab.com", password: "staff123", role: "staff" },
  { id: "2", name: "Lab Admin", email: "admin@lab.com", password: "admin123", role: "admin" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // here load user from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("maabara_user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  function login(email, password) {
    const found = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) throw new Error("Invalid email or password");

    setUser(found);
    localStorage.setItem("maabara_user", JSON.stringify(found));
    return found;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("maabara_user");
  }

  const value = { user, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}