import React, { createContext, useContext, useState, useEffect } from "react";

const LocalStorageContext = createContext();

export const useLocalStorage = () => useContext(LocalStorageContext);

export const LocalStorageProvider = ({ children }) => {
    const [storedData, setStoredData] = useState(() => {
        const storedData = localStorage.getItem("myData");
        return storedData ? JSON.parse(storedData) : null;
    });

    const updateLocalStorage = (data) => {
        localStorage.setItem("myData", JSON.stringify(data));
    };

    useEffect(() => {
        if (storedData !== null) {
            updateLocalStorage(storedData);
        }
    }, [storedData]);

    return (
        <LocalStorageContext.Provider value={{ storedData, setStoredData }}>
            {children}
        </LocalStorageContext.Provider>
    );
};
