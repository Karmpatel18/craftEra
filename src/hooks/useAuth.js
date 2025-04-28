import { useState, useEffect } from "react";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("token");
            const user = localStorage.getItem("user");
            setIsAuthenticated(!!(token && user));
        };

        checkAuth();
        // Add event listener for storage changes
        window.addEventListener('storage', checkAuth);
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    return isAuthenticated;
};

export default useAuth;