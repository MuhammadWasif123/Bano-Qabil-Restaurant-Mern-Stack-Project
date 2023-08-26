import { useState, useContext, createContext } from "react";
import * as service from '../Services/services';
import { toast } from 'react-toastify';

// Use a different name for the context variable, like AuthContext
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(service.getUser());

    const login = async (email, password) => {
        try {
            const user = await service.login(email, password);
            setUser(user);
            toast.success('Login Successful');
        } catch (err) {
            toast.error(err.response.data);
        }
    };

    const logout = () => {
        service.logout();
        setUser(null);
        toast.success('Logout Successful');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext); // Use AuthContext here
