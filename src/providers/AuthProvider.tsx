import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface iAuthProviderProps {
  children: React.ReactNode;
}
interface iAuthContextProps {
  refresh: () => void;
  logOut: () => void;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  logIn: (name: string) => void;
  editUser: (data: string) => void;
  deleteUser: () => void;
}

export const AuthContext = createContext<iAuthContextProps>(
  {} as iAuthContextProps
);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [user, setUser] = useState<string>("");
  const navigate = useNavigate();

  const refresh = () => {
    const username = localStorage.getItem("@USERNAME");

    if (!username) {
      navigate("/");
    } else {
      setUser(username);
      toast.success("Logado com sucesso.");
    }
  };

  const logIn = (name: string) => {
    localStorage.setItem("@USERNAME", name);
    setUser(name);
    navigate("/dashboard");
    toast.success("Sessão iniciada.");
  };

  const logOut = () => {
    localStorage.removeItem("@USERNAME");
    setUser("");
    navigate("/");
    toast.success("Sessão encerrada.");
  };

  const editUser = (data: string) => {
    localStorage.setItem("@USERNAME", data);
    setUser(data);
    toast.success("Usuário alterado.")
  };

  const deleteUser = () => {
    localStorage.removeItem("@USERNAME");
    setUser("");
    navigate("/");
    toast.success("Usuário deletado.");
  };

  useEffect(() => refresh(), []);

  return (
    <AuthContext.Provider
      value={{ refresh, editUser, deleteUser, user, setUser, logOut, logIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
