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
  logIn: (name: string) => void
}

export const AuthContext = createContext<iAuthContextProps>(
  {} as iAuthContextProps
);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [user, setUser] = useState<string>("");
  const navigate = useNavigate();

  const refresh = () => {
    const username = localStorage.getItem("@USERNAME");
    console.log("arroto");
    

    if (!username) {
      navigate("/unitalk");
      toast.info("Sessão expirada, faça o login novamente.");
    } else {
      setUser(username);
      navigate("/unitalk/dashboard");
      toast.success("Logado com sucesso.");
    }
  };

  const logIn = (name: string) => {
    localStorage.setItem("@USERNAME", name);
    setUser(name);
    navigate("/unitalk/dashboard");
    toast.success("Sessão iniciada.");
  }

  const logOut = () => {
    localStorage.removeItem("@USERNAME");
    setUser("");
    navigate("/unitalk");
    toast.success("Sessão encerrada.");
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={{ refresh, user, setUser, logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};